import React from 'react'
import data from "../data"
import { SlArrowRight } from "react-icons/sl";



export const ProductDescrip = () => {

    const product = data.productDetails.content;

  return (
    <div className='w-full flex flex-col items-center gap-12 py-10'>
        <div className='w-11/12 xl:w-4/12 flex flex-row justify-between'>
            <button className='text-neutral-500 text-sm xl:text-xl font-bold'>Description</button>
            <button className='text-neutral-500 text-sm xl:text-xl font-bold'>Additional Information</button>
            <button className='text-neutral-500 text-sm xl:text-xl font-bold'>Reviews <span className='text-emerald-700'>({data.productDetails.reviews.length})</span></button>
        </div>
        <hr className='w-11/12'/>
        <div className='w-11/12 flex flex-col xl:flex-row gap-12'>
            <div className='flex flex-1 justify-center'>
                <img src={product.descriptions.picture} alt='' className='object-contain'/>
            </div>
            <div className='flex-1 flex flex-col gap-6'>
                <h3 className='text-slate-800 text-2xl xl:text-4xl text-left font-bold'>{product.descriptions.section1.heading}</h3>
                {product.descriptions.section1.descriptions.map((des)=>(
                    <p className='text-neutral-500 text-sm xl:text-xl font-normal text-left'>{des}</p>
                ))}
            </div>
            <div className='flex flex-1 flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-slate-800 text-2xl xl:text-4xl font-bold text-left'>{product.descriptions.section2.heading}</h3>
                    {product.descriptions.section2.descriptions.map((des)=>(
                        <p className='flex items-center text-neutral-500 text-sm xl:text-xl font-bold gap-3'><SlArrowRight />{des}</p>
                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-slate-800 text-2xl xl:text-4xl font-bold text-left'>{product.descriptions.section3.heading}</h3>
                    {product.descriptions.section3.descriptions.map((des)=>(
                        <p className='flex items-center text-neutral-500 text-sm xl:text-xl font-bold gap-3'><SlArrowRight />{des}</p>
                    ))} 
                </div>
            </div>
        </div>
    </div>
  )
}
