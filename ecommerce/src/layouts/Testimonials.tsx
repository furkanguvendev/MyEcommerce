import picture from "../assets/testimonialspic.png"

export const Testimonials = () => {
  return (
    <div className='w-full flex flex-row'>
        <div className='w-full xl:basis-[60%] bg-sky-600 flex justify-center items-center'>
            <div className='flex flex-col text-white items-center xl:items-start gap-8 max-xl:py-24'>
                <h3 className='text-base xl:text-2xl font-bold'>WORK WITH US</h3>
                <h1 className='text-40 xl:text-[53.3px] font-bold'>Now Let's <br className="xl:hidden"/>grow Yours</h1>
                <p className='text-sm xl:text-lg font-normal xl:text-left'>The gradual accumulation of <br className="xl:hidden"/>information about atomic and <br/>small-scale behavior during the <br className="xl:hidden"/>first quarter of the 20th </p>
                <button className='w-[clamp(132px,9.17vw,176px)] h-[clamp(52px,3.65vw,70px)] border-2 border-white bg-sky-600'>Button</button>
            </div>
        </div>
    <img src={picture} className='max-xl:hidden xl:basis-[40%]'/>
    </div>
  )
}
