import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IoIosArrowDown } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobil menü için state

  const toggleShopMenu = () => {
    setIsShopOpen((prev) => !prev);
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

            {/* SHOP + DROPDOWN */}
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
                      <li><Link to="/shop">Bags</Link></li>
                      <li><Link to="/shop">Belts</Link></li>
                      <li><Link to="/shop">Cosmetics</Link></li>
                      <li><Link to="/shop">Bags</Link></li>
                      <li><Link to="/shop">Hats</Link></li>
                    </ul>
                  </div>
                  <div className="w-1/2 text-left flex flex-col gap-10">
                    <h4 className="font-bold text-slate-800 mb-2">Erkek</h4>
                    <ul className="space-y-1 font-bold text-neutral-500 flex flex-col gap-8">
                      <li><Link to="/shop">Bags</Link></li>
                      <li><Link to="/shop">Belts</Link></li>
                      <li><Link to="/shop">Cosmetics</Link></li>
                      <li><Link to="/shop">Bags</Link></li>
                      <li><Link to="/shop">Hats</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link to="#">About</Link>
            <Link to="#">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="#">Pages</Link>
          </nav>
        </div>

        {/* Desktop Right Nav */}
        <nav className='text-sky-500 text-xl hidden xl:flex flex-row gap-10'>
          <Link to="#"><FontAwesomeIcon icon={faUser} /> <span className='font-bold'>Login / Register</span></Link>
          <Link to="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
          <Link to="#"><FontAwesomeIcon icon={faCartShopping} /> {'1'}</Link>
          <Link to="#"><FontAwesomeIcon icon={faHeart} /> {'1'}</Link>
        </nav>

        {/* Mobile Right Nav */}
        <nav className='flex xl:hidden flex-row text-2xl gap-6 text-slate-800'>
          <Link to='#'><FontAwesomeIcon icon={faUser} /></Link>
          <Link to='#'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
          <Link to='#'><FontAwesomeIcon icon={faCartShopping} /></Link>
          <button onClick={toggleMobileMenu}>
            <TbMenuDeep />
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden flex flex-col items-center gap-8 py-24 text-3xl font-normal text-neutral-500 transition-all duration-300 ease-out transform opacity-0 translate-y-[-20px] animate-slide-down">
          <Link to="/" className="hover:font-semibold">Home</Link>
          <Link to="/shop" className="hover:font-semibold">Product</Link>
          <Link to="#" className="hover:font-semibold">Pricing</Link>
          <Link to="/contact" className="hover:font-semibold">Contact</Link>
        </div>
      )}
    </>
  );
};
