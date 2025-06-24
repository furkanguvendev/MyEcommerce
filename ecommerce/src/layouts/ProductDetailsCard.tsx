import DetailsCarousel from "../components/DetailsCarousel";
import { RiArrowRightSLine } from "react-icons/ri";
import data from "../data";
import RaitingStars from "../components/RaitingStars";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";

export const ProductDetailsCard = () => {
    const product = data.productDetails;

  return (
    <div className="w-11/12 ">
        <div className="flex flex-row h-24 xl:h-32 max-xl:justify-center items-center">
            <p className="text-slate-800 font-bold xl:text-xl">Home</p>
            <p className="text-neutral-500 font-bold xl:text-xl"><RiArrowRightSLine /></p>
            <p className="text-neutral-500 font-bold xl:text-xl">Shop</p>
        </div>
        <div className="w-full flex flex-col xl:flex-row xl:gap-16">
            <DetailsCarousel pictures={product.pictures} miniPictures={product.miniPictures}/>
            <div className="flex flex-col items-start gap-10 p-5">
                <h3 className="text-slate-800 text-3xl font-normal">{product.heading}</h3>
                <div className="flex flex-row">
                    <RaitingStars raitings={product.ratings}/>
                    <p className="text-sm xl:text-xl text-neutral-500 font-bold">{product.ratings.length} Reviews</p>
                </div>
                <h3 className="text-2xl xl:text-4xl text-slate-800 font-bold">${product.price}</h3>
                <p className="text-sm xl:text-xl text-neutral-500 font-bold">Availability : <span className="text-sky-500">{product.avalibility}</span></p>
                <p className="text-sm xl:text-xl text-neutral-500 font-normal text-left">{product.description}</p>
                <hr className="w-full"/>
                <div className="flex flex-row gap-3">
                    <p className="w-8 xl:w-10 aspect-square rounded-full bg-sky-500"></p>
                    <p className="w-8 xl:w-10 aspect-square rounded-full bg-emerald-500"></p>
                    <p className="w-8 xl:w-10 aspect-square rounded-full bg-orange-500"></p>
                    <p className="w-8 xl:w-10 aspect-square rounded-full bg-slate-800"></p>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <button className="w-36 xl:w-52 h-11 xl:h-16 bg-sky-500 text-white text-sm xl:text-xl font-bold rounded-md">Select Options</button>
                    <button className="border w-10 h-10 xl:w-14 xl:h-14 flex justify-center items-center border-neutral-500 rounded-full"><CiHeart size={28}/></button>
                    <button className="border w-10 h-10 xl:w-14 xl:h-14 flex justify-center items-center border-neutral-500 rounded-full"><IoCartOutline size={28}/></button>
                    <button className="border w-10 h-10 xl:w-14 xl:h-14 flex justify-center items-center border-neutral-500 rounded-full"><IoMdEye size={28}/></button>
                </div>
            </div>      
        </div>
    </div>
  )
}
