import React from 'react'

type Props = {
    img: string;
}

export const ShopCard = ({img}: Props) => {
  return (
    <div>
        <img src={img} alt='' className='w-full object-cover'/>
        <div className='flex flex-col items-center gap-6 py-10 shadow-md'>
            <h3 className='font-bold text-base xl:text-xl text-slate-800'>Graphic Desing</h3>
            <p className='font-bold text-sm xl:text-lg text-neutral-500'>English Department</p>
            <div className='flex flex-row gap-2'>
                <p className='font-bold text-base xl:text-xl text-neutral-300'>$16.48</p>
                <p className='font-bold text-base xl:text-xl text-emerald-700'>$6.48</p>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='w-4 xl:w-6 h-4 xl:h-6 rounded-full bg-sky-500'></p>
                <p className='w-4 xl:w-6 h-4 xl:h-6 rounded-full bg-emerald-700'></p>
                <p className='w-4 xl:w-6 h-4 xl:h-6 rounded-full bg-orange-500'></p>
                <p className='w-4 xl:w-6 h-4 xl:h-6 rounded-full bg-slate-800'></p>
            </div>
        </div>
    </div>
  )
}
