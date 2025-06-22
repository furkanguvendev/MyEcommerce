import { ShopFilterCard } from '../components/ShopFilterCard';
import { RiArrowRightSLine } from "react-icons/ri";
import data from "../data";


export const ShopFilter = () => {
  return (
    <div className='w-full flex flex-col items-center bg-zinc-50 pb-12'>
        <div className='w-11/12 flex flex-row justify-between items-center h-32'>
            <h1 className='font-bold text-slate-800 text-2xl xl:text-3xl'>SHOP</h1>
            <div className='flex flex-row items-center'>
                <p className='font-bold text-sm xl:text-lg text-slate-800'>Home</p>
                <p className='font-bold text-sm xl:text-lg text-neutral-400'><RiArrowRightSLine /></p>
                <p className='font-bold text-sm xl:text-lg text-neutral-500'>Shop</p>
            </div>
        </div>
        <div className='flex flex-col xl:flex-row gap-4'>
            {data.shopFilter.map((img, i)=>(
                <ShopFilterCard key={i} img={img}/>
            ))}
        </div>
    </div>
  )
}
