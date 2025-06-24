import { InfoBar } from "../components/InfoBar"
import { NavBar } from "../components/NavBar"
import { FooterSection } from "../layouts/FooterSection"
import {FaHooli, FaLyft, FaPiedPiperHat, FaStripe, FaAws, FaRedditAlien} from "react-icons/fa";
import { ProductDetailsCard } from "../layouts/ProductDetailsCard";



export const ProductDetail = () => {
  return (
    <div className="w-full flex flex-col items-center font-montserrat">
        <InfoBar />
        <NavBar />
        <ProductDetailsCard />
        <div className='w-4/5 flex flex-col xl:flex-row justify-between text-neutral-500 items-center py-28'>
            <FaHooli className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaLyft className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaPiedPiperHat className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaStripe className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaAws className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaRedditAlien className='w-36 xl:w-24 h-36 xl:h-24' />
        </div>        
        <FooterSection />
    </div>
  )
}
