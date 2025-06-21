import Picture from "../assets/fluidpic.png"

export const FluidSection = () => {
  return (
    <div className="flex flex-row xl:w-4/5 items-center">
        <img src={Picture} alt='' className='flex-grow basis-0 object-cover max-xl:hidden'/>
        <div className="flex flex-col flex-grow basis-0 gap-10 text-left items-center justify-center">
            <div className="flex flex-col justify-center gap-10">
                <p className="text-neutral-300 text-xl font-bold max-xl:text-center">SUMMER 2025</p>
                <h3 className="text-slate-800 text-5xl font-bold max-xl:text-center">Part of the Neural<br/>Iniverse</h3>
                <p className="text-neutral-500 text-2xl font-normal max-xl:text-center">We know how large <br className="xl:hidden"/>objects will act,<br className="max-xl:hidden"/>but <br className="xl:hidden"/>things on a small scale</p>
                <div className="flex flex-col w-full xl:flex-row gap-3 max-xl:items-center">
                    <button className="w-48 h-16 rounded-lg font-bold text-white bg-sky-500 xl:bg-green-500">BUY NOW</button>
                    <button className="w-52 h-16 rounded-lg font-bold text-sky-500 xl:text-green-500 border-2 border-sky-500 xl:border-green-500">READ MORE</button>
                </div>
            </div>
        <img src={Picture} alt='' className='flex-grow basis-0 object-cover w-4/5 xl:hidden'/>
        </div>
    </div>
  )
}
