type Props = {
    picture: string;
}

export const ProductCard = ({picture}: Props) => {
  return (
    <div className='flex flex-col items-center'>
        <img className='mb-8' src={picture}/>
        <h3 className='text-slate-800 font-bold text-xl mb-3'>Graphic Desing</h3>
        <p className='text-neutral-500 text-lg font-bold mb-5'>English Department</p>
        <div className='flex flex-row gap-2 mb-5'>
            <p className='text-neutral-300 text-xl font-bold'>$16.48</p>
            <p className='text-emerald-700 text-xl font-bold'>$6.48</p>
        </div>
        <div className='flex flex-row gap-2'>
            <p className='w-5 h-5 bg-sky-500 rounded-full'></p>
            <p className='w-5 h-5 bg-emerald-700 rounded-full'></p>
            <p className='w-5 h-5 bg-orange-500 rounded-full'></p>
            <p className='w-5 h-5 bg-slate-800 rounded-full'></p>
        </div>
    </div>
  )
}
