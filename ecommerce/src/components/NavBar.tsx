import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IoIosArrowDown } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/reducers/rootReducers'; // Doğru path'e göre ayarlandı

type Category ={
  id: number;
  code: string;
  title: string;
  img: string;
  rating: number;
  gender: string;
}

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);  
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.product.categories) as Category[];
  const cart = useSelector((state: RootState) => state.cart.cart);
  const favorite = useSelector((state: RootState) => state.cart.favorite);

  const toggleShopMenu = () => {
    setIsShopOpen((prev) => !prev);
    console.log(categories);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className='flex flex-row w-11/12 h-[10.9vh] justify-between items-center relative'>
        <div className='xl:flex xl:flex-row xl:gap-36 xl:items-center'>
          <h1 className='hidden xl:flex text-3xl font-bold'>BANDAGE</h1>
          <h1 className='xl:hidden text-2xl font-bold'>Bandage</h1>

          <nav className='hidden xl:flex flex-row text-xl text-neutral-500 gap-5 relative'>
            <Link to="/">Home</Link>

            <div className="relative">
              <button
                className='flex flex-row items-center gap-1 cursor-pointer focus:outline-none'
                onClick={toggleShopMenu}
              >
                Shop<IoIosArrowDown />
              </button>
              {isShopOpen && (
                <div className="absolute top-full left-0 mt-9 text-xl w-[520px] bg-white p-6 flex gap-8 z-50 transition-all duration-300 ease-out opacity-0 scale-95 animate-fade-in">
                  <div className="w-1/2 text-left flex flex-col gap-10">
                    <h4 className="font-bold text-slate-800 mb-2">Kadın</h4>
                    <ul className="space-y-1 font-bold text-neutral-500  flex flex-col gap-8">
                      {categories &&
                      categories
                        .filter((item: Category) => item.gender === "k")
                        .map((item: Category) => (
                          <li key={item.id}>
                            <Link
                              to={`/shop/${item.gender}/${item.code.replace(/^k:/, "")}/${item.id}`}
                              onClick={() => {
                                setIsShopOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="w-1/2 text-left flex flex-col gap-10">
                    <h4 className="font-bold text-slate-800 mb-2">Erkek</h4>
                    <ul className="space-y-1 font-bold text-neutral-500 flex flex-col gap-8">
                      {categories &&
                      categories
                        .filter((item: Category) => item.gender === "e")
                        .map((item: Category) => (
                          <li key={item.id}>
                            <Link
                              to={`/shop/${item.gender}/${item.code.replace(/^e:/, "")}/${item.id}`}
                              onClick={() => {
                                setIsShopOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link to="/aboutus">About</Link>
            <Link to="#">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/teams">Pages</Link>
          </nav>
        </div>

        {/* Desktop Right Nav */}
        <nav className='text-sky-500 text-xl hidden xl:flex flex-row gap-10'>
          {user.name ? (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              <span className="font-bold">{user.name}</span>
            </div>
          ) : (
            <>
              <Link to="/login" className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUser} />
                <span className="font-bold">Login</span>
              </Link>
              <Link to="/singup" className="font-bold">Register</Link>
            </>
          )}
          <Link to="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /> {cart.length}</Link>
          <Link to="#"><FontAwesomeIcon icon={faHeart} /> {favorite.length}</Link>
        </nav>

        {/* Mobile Right Nav */}
        <nav className='flex xl:hidden flex-row text-2xl gap-6 text-slate-800'>
          <Link to='#'><FontAwesomeIcon icon={faUser} /></Link>
          <Link to='#'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
          <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} /></Link>
          <button onClick={toggleMobileMenu}>
            <TbMenuDeep />
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden flex flex-col items-center gap-8 py-24 text-3xl font-normal text-neutral-500 transition-all duration-300 ease-out transform opacity-0 translate-y-[-20px] animate-slide-down">
          <Link to="/" className="hover:font-semibold">Home</Link>

          {/* Product dropdown toggle */}
          <div className="w-full flex flex-col items-center">
            <button
              className="hover:font-semibold"
              onClick={() => {
                setIsShopOpen((prev) => !prev);
                // Alt menüler kapalı başlasın
                setIsWomenOpen(false);
                setIsMenOpen(false);
              }}
            >
              Product
            </button>

            {isShopOpen && (
              <div className="w-full mt-6 flex flex-col items-center gap-6 text-2xl">
                {/* Kadın başlığı */}
                <button
                  className="font-bold text-slate-800 hover:text-sky-600"
                  onClick={() => {
                    setIsWomenOpen((prev) => !prev);
                    setIsMenOpen(false); // Erkek kapanır
                  }}
                >
                  Kadın
                </button>

                {/* Kadın kategorileri */}
                {isWomenOpen && (
                  <div className="flex flex-col items-center gap-2">
                    {categories
                      .filter((item) => item.gender === "k")
                      .map((item) => (
                        <Link
                          key={item.id}
                          to={`/shop/${item.gender}/${item.code.replace(/^k:/, "")}/${item.id}`}
                          className="text-neutral-500 hover:font-semibold"
                          onClick={() => {
                            setIsShopOpen(false);
                            setIsMobileMenuOpen(false);
                            setIsWomenOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                  </div>
                )}

                {/* Erkek başlığı */}
                <button
                  className="font-bold text-slate-800 hover:text-sky-600"
                  onClick={() => {
                    setIsMenOpen((prev) => !prev);
                    setIsWomenOpen(false); // Kadın kapanır
                  }}
                >
                  Erkek
                </button>

                {/* Erkek kategorileri */}
                {isMenOpen && (
                  <div className="flex flex-col items-center gap-2">
                    {categories
                      .filter((item) => item.gender === "e")
                      .map((item) => (
                        <Link
                          key={item.id}
                          to={`/shop/${item.gender}/${item.code.replace(/^e:/, "")}/${item.id}`}
                          className="text-neutral-500 hover:font-semibold"
                          onClick={() => {
                            setIsShopOpen(false);
                            setIsMobileMenuOpen(false);
                            setIsMenOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <Link to="/pricing" className="hover:font-semibold">Pricing</Link>
          <Link to="/contact" className="hover:font-semibold">Contact</Link>
        </div>
      )}
    </>
  );
};
