import React from 'react'

type Props = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    store_id: number;
    category_id: number;
    rating: number;
    sell_count: number;
    images: {
      url: string;
      index: number;
    }[];
  }
}

export const ShopCard = ({product}: Props) => {
  return (
    <div>
        <img src={product.images[0].url} alt='' className='w-full object-cover'/>
        <div className='flex flex-col items-center gap-6 py-10 shadow-md'>
            <h3 className='font-bold text-base xl:text-xl text-slate-800'>{product.name}</h3>
            <p className='font-bold text-sm xl:text-lg text-neutral-500'>{product.description}</p>
            <div className='flex flex-row gap-2'>
                <p className='font-bold text-base xl:text-xl text-neutral-300'>${product.price}</p>
                <p className='font-bold text-base xl:text-xl text-emerald-700'>${(product.price * (1 - product.stock/1000)).toFixed(2)}</p>
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
