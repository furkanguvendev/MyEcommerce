import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IoIosArrowDown } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/reducers/rootReducers';
import { logoutUser } from '../store/actions/userActions';
import { addCount, removeItem, takeCount } from '../store/actions/cartActions';
import { BsTrash3 } from "react-icons/bs";

type Category ={
  id: number;
  code: string;
  title: string;
  img: string;
  rating: number;
  gender: string;
}

export const NavBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);  
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.product.categories) as Category[];
  const cart = useSelector((state: RootState) => state.cart.cart);
  const favorite = useSelector((state: RootState) => state.cart.favorite);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <h1 className='hidden xl:flex text-3xl font-bold'>WEARIVA</h1>
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
                <div className="absolute top-full left-0 mt-7 text-xl w-[520px] bg-white p-6 flex gap-8 z-50 transition-all duration-300 ease-out opacity-0 scale-95 animate-fade-in">
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
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/teams">Teams</Link>
          </nav>
        </div>

        {/* Desktop Right Nav */}
        <nav className='text-sky-500 text-xl hidden xl:flex flex-row gap-10'>
          {user.name ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="font-bold">{user.name}</span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-[-51.195px] mt-3 w-60 bg-white rounded-lg shadow-lg p-4 z-50">
                  <div className="flex flex-col items-center gap-3 border-b pb-3 mb-3">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=656277d6cfe6889ff622f5af314b49874d525672-16463591-images-thumbs&n=13"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigate("/cart");
                    }}
                    className="w-full text-center pb-3 text-red-600 border-b hover:font-bold"
                  >
                    Sepetim
                  </button>
                  <button
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                    className="w-full text-center pt-3 text-red-600 hover:font-bold"
                  >
                    Çıkış Yap
                  </button>
                </div>
              )}
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
          <div className='relative'>
            <button onClick={() => setIsCartOpen(!isCartOpen)}><FontAwesomeIcon icon={faCartShopping} /> {cart.length}</button>
            {isCartOpen && (
              <div className="absolute right-0 mt-4 w-96 bg-white rounded-lg shadow-lg z-50 p-4">
                <h3 className="text-lg font-bold mb-4 text-slate-700">Sepetiniz</h3>

                {cart.length === 0 ? (
                  <p className="text-sm text-gray-500">Sepetinizde ürün yok.</p>
                ) : (
                  <div className="flex flex-col gap-4 max-h-80 overflow-y-auto">
                    {cart.map(({ count, product }) => (
                      <div
                        key={product.id}
                        className="flex gap-3 items-center border-b pb-4"
                      >
                        <img
                          src={product.images[0]?.url}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />

                        <div className="flex-1 flex flex-col">
                          <span className="font-semibold text-sm text-slate-800">{product.name}</span>
                          <span className="text-xs text-gray-500">Adet: {count}</span>
                          <span className="text-sm font-bold text-sky-600">{(product.price * count).toFixed(2)} ₺</span>
                        </div>

                        {/* Miktar butonları */}
                        <div className="flex items-center gap-2 border px-2 py-1 rounded-md">
                          <button
                            onClick={() => dispatch(takeCount(product.id))}
                            className="px-2 text-lg font-bold text-gray-600 hover:text-sky-600"
                          >
                            -
                          </button>
                          <span className="text-sm font-medium text-slate-700">{count}</span>
                          <button
                            onClick={() => dispatch(addCount(product.id))}
                            className="px-2 text-lg font-bold text-gray-600 hover:text-sky-600"
                          >
                            +
                          </button>
                        </div>

                        {/* Silme butonu */}
                        <button
                          onClick={() => dispatch(removeItem(product.id))}
                          className="ml-3 text-red-500 hover:text-red-600"
                          title="Sil"
                        >
                          <BsTrash3 className="text-lg" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {cart.length > 0 && (
                  <button
                    onClick={() => navigate("/cart")} // useNavigate hook’unu unutma!
                    className="mt-4 w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg text-sm font-semibold"
                  >
                    Sepete Git
                  </button>
                )}
              </div>
            )}
          </div>
          <Link to="#"><FontAwesomeIcon icon={faHeart} /> {favorite.length}</Link>
        </nav>

        {/* Mobile Right Nav */}
        <nav className='flex xl:hidden flex-row text-2xl gap-6 text-slate-800 relative'>
          {user.name ? (
            <button onClick={() => setIsMobileUserMenuOpen(prev => !prev)}>
              <FontAwesomeIcon icon={faUser} />
            </button>
          ) : (
            <Link to="/login"><FontAwesomeIcon icon={faUser} /></Link>
          )}
          <Link to="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
          <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} /></Link>
          <button onClick={toggleMobileMenu}>
            <TbMenuDeep />
          </button>

          {/* Mobile User Dropdown */}
          {isMobileUserMenuOpen && user.name && (
            <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-lg shadow-lg p-4 z-50 text-base">
              <div className="flex flex-col items-center gap-3 border-b pb-3 mb-3">
                <img
                  src="https://avatars.mds.yandex.net/i?id=656277d6cfe6889ff622f5af314b49874d525672-16463591-images-thumbs&n=13"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-center">
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/cart");
                  setIsMobileUserMenuOpen(false);
                }}
                className="w-full text-center py-2 text-red-600 border-b hover:font-bold"
              >
                Sepetim
              </button>
              <button
                onClick={() => {
                  dispatch(logoutUser());
                  setIsMobileUserMenuOpen(false);
                }}
                className="w-full text-center py-2 text-red-600 hover:font-bold"
              >
                Çıkış Yap
              </button>
            </div>
          )}
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
