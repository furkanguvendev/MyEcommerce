import {useState} from 'react'
import data from "../data";
import { ShopCard } from '../components/ShopCard';
import { IoGrid } from "react-icons/io5";
import { BsListCheck } from "react-icons/bs";
import { FaLongArrowAltDown, FaLongArrowAltUp} from "react-icons/fa";
import { Clients } from './Clients';

export const ShopProduct = () => {

    const [navSelected, setNavSelected] = useState<'first' | 'next' | null>(null);
    const [pageSelected, setPageSelected] = useState<number | null>(null);

    const pageClass = (num: number) =>
        `border-2 border-neutral-300 font-bold text-sm xl:text-lg w-14 h-24 ${
        pageSelected === num
            ? 'bg-sky-500 text-white'
            : 'bg-white text-sky-500'
    }`;

  return (
    <div className='w-full flex flex-col items-center'>
        <div className='w-11/12 flex flex-col max-xl:gap-5 xl:flex-row xl:h-32 items-center justify-between mt-6'>
            <p className='font-bold text-sm xl:text-xl text-neutral-500'>Showing all 12 result</p>
            <div className='flex flex-row items-center gap-5'>
                <p className='font-bold text-sm xl:text-xl text-neutral-500'>Vievs:</p>
                <button className='w-16 h-16 border-2 border-neutral-200 flex justify-center items-center'><IoGrid /></button>
                <button className='w-16 h-16 border-2 border-neutral-200 flex justify-center items-center'><BsListCheck /></button>
            </div>
            <div className='flex flex-row gap-3'>
                <select className='border border-neutral-300 bg-neutral-200 rounded-lg w-48 h-16'>
                    <option value="popular">Popularity</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-asc">Price: Low to High <FaLongArrowAltUp /></option>
                    <option value="price-desc">Price: High to Low <FaLongArrowAltDown /></option>
                    <option value="discount">Highest Discount</option>
                    <option value="rating">Top Rated</option>
                </select>
                <button className='bg-sky-500 font-bold text-sm xl:text-xl w-32 h-16 text-white rounded-md'>Filter</button>
            </div>
        </div>
        <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16 my-16'>
            {data.productCard.map((img, i)=>(
                <ShopCard key={i} img={img}/>
            ))}
        </div>
        <div className="flex">
            <button
                onClick={() => setNavSelected('first')}
                className={`border border-neutral-500 font-bold text-sm xl:text-lg w-28 h-24 rounded-l-[12px] 
                ${navSelected === 'first' ? 'bg-neutral-100 text-neutral-300' : 'bg-white text-sky-500'}`}
            >
                First
            </button>
            {[1, 2, 3].map((num) => (
                <button
                key={num}
                className={pageClass(num)}
                onClick={() => setPageSelected(num)}
                >
                {num}
                </button>
            ))}
            <button
                onClick={() => setNavSelected('next')}
                className={`border border-neutral-500 font-bold text-sm xl:text-lg w-28 h-24 rounded-r-[12px] 
                ${navSelected === 'next' ? 'bg-neutral-100 text-neutral-300' : 'bg-white text-sky-500'}`}
            >
                Next
            </button>
        </div>
        <Clients />
    </div>
  )
}
