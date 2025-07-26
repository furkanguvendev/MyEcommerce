import DetailsCarousel from "../components/DetailsCarousel";
import { RiArrowRightSLine } from "react-icons/ri";
import RaitingStars from "../components/RaitingStars";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import type { Product } from "../types&enums/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addFav, addItem, removeFav, removeItem } from "../store/actions/cartActions";
import { useState } from "react";

type Props = {
    product: Product;
}

export const ProductDetailsCard = ({product}: Props) => {

    const dispatch = useDispatch();
    const raiting: number = product.rating;
    const cart = useSelector((state: RootState) => state.cart.cart);
    const favorite = useSelector((state: RootState) => state.cart.favorite);
    const [buttonColor, setButtonColor] = useState({
        button1: false,
        button2: false,
    })

    const onToggleCart = () => {
        const isInCart = cart.some(item => item.product.id === product.id);
        
        if(isInCart){
            dispatch(removeItem(product.id));
            setButtonColor(prev => ({
                ...prev,
                button1: !prev.button1
            }))
        } else {
            dispatch(addItem({count: 1, product}));
            setButtonColor(prev => ({
                ...prev,
                button1: !prev.button1
            }))
        }
    }

    const onToggleFav = () => {
        const isInFav = favorite.some(item => item.id === product.id);
        
        if(isInFav) {
            dispatch(removeFav(product.id));
            setButtonColor(prev => ({
                ...prev,
                button2: !prev.button2
            }))
        } else {
            dispatch(addFav(product));
            setButtonColor(prev => ({
                ...prev,
                button2: !prev.button2
            }))
        }
    }

  return (
    <div className="w-full flex justify-center bg-zinc-50 xl:pb-20">
        <div className="w-11/12">
        <div className="hidden xl:flex flex-row h-24 xl:h-32 max-xl:justify-center items-center">
            <p className="text-slate-800 font-bold xl:text-xl">Home</p>
            <p className="text-neutral-500 font-bold xl:text-xl"><RiArrowRightSLine /></p>
            <p className="text-neutral-500 font-bold xl:text-xl">Shop</p>
        </div> 
        <div className="w-full flex flex-col xl:flex-row xl:gap-16">
            <DetailsCarousel pictures={product.images.map((img)=> img.url)} miniPictures={product.images.map((img)=> img.url)}/>
            <div className="xl:w-1/2 flex flex-col items-start gap-10 p-5">
                <h3 className="text-slate-800 text-3xl font-normal">{product.name}</h3>
                <div className="flex flex-row gap-3">
                    <RaitingStars raiting={raiting}/>
                    <p className="text-sm xl:text-xl text-neutral-500 font-bold">{product.sell_count} Reviews</p>
                </div>
                <h3 className="text-2xl xl:text-4xl text-slate-800 font-bold">${product.price}</h3>
                <p className="text-sm xl:text-xl text-neutral-500 font-bold">Availability : <span className="text-sky-500">{product.stock}</span></p>
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
                    <button
                        onClick={onToggleFav}
                        className="border w-10 h-10 xl:w-14 xl:h-14 flex justify-center items-center border-neutral-500 rounded-full"
                        >
                        <IoMdHeart size={28} className={buttonColor.button2 ? "text-red-500" : "text-slate-800"} />
                    </button>

                    <button
                        onClick={onToggleCart}
                        className="border w-10 h-10 xl:w-14 xl:h-14 flex justify-center items-center border-neutral-500 rounded-full"
                        >
                        <IoCart size={28} className={buttonColor.button1 ? "text-sky-500" : "text-slate-800"} />
                    </button>
                    <button className="border w-10 h-10 xl:w-14 xl:h-14 flex justify-center items-center border-neutral-500 rounded-full"><IoMdEye size={28}/></button>
                </div>
            </div>      
        </div>
        <div className="flex xl:hidden flex-row h-24 justify-center items-center">
            <p className="text-slate-800 font-bold xl:text-xl">Home</p>
            <p className="text-neutral-500 font-bold xl:text-xl"><RiArrowRightSLine /></p>
            <p className="text-neutral-500 font-bold xl:text-xl">Shop</p>
        </div>
        </div> 
    </div>
  )
}
