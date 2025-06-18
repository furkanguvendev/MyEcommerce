import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass, faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons';
import { IoIosArrowDown } from "react-icons/io";

export const NavBar = () => {
  return (
    <>
        <div className='flex flex-row h-[10.9vh] px-12 justify-between items-center'>
            <h1 className='text-3xl font-bold'>BANDAGE</h1>
            <nav className='flex flex-row text-lg text-neutral-500 gap-5'>
                <a href="#">Home</a>
                <a className='flex flex-row items-center gap-1' href="#">Shop<IoIosArrowDown /></a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Pages</a>
            </nav>
            <nav className='text-sky-500 text-lg flex flex-row gap-10'>
                <a href="#"><FontAwesomeIcon icon={faUser} /> <span className='font-bold'>Login / Register</span></a>
                <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                <a href="#"><FontAwesomeIcon icon={faCartShopping} /> {'1'}</a>
                <a href="#"><FontAwesomeIcon icon={faHeart} /> {'1'}</a>
            </nav>
        </div>
    </>
  )
}
