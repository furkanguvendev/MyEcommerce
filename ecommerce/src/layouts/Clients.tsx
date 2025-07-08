import { FaHooli, FaLyft, FaPiedPiperHat, FaStripe, FaAws, FaRedditAlien} from "react-icons/fa";

export const Clients = () => {
  return (
    <div className="w-full bg-zinc-50 py-28 flex justify-center">
        <div className="w-4/5 flex flex-col gap-12">
            <h3 className="text-40 xl:text-[53.3px] text-slate-800 font-bold">Big Companies Are Here</h3>
            <p className="text-sm xl:text-lg text-neutral-500 font-normal">Problems trying to resolve the conflict <br className="xl:hidden"/>between <br className="max-xl:hidden"/>the two major realms of Classical <br className="xl:hidden"/>physics: Newtonian mechanics</p>
            <div className='w-full flex flex-col xl:flex-row justify-between text-neutral-500 items-center'>
                <FaHooli className='w-36 xl:w-24 h-36 xl:h-24' />
                <FaLyft className='w-36 xl:w-24 h-36 xl:h-24' />
                <FaPiedPiperHat className='w-36 xl:w-24 h-36 xl:h-24' />
                <FaStripe className='w-36 xl:w-24 h-36 xl:h-24' />
                <FaAws className='w-36 xl:w-24 h-36 xl:h-24' />
                <FaRedditAlien className='w-36 xl:w-24 h-36 xl:h-24' />
            </div>
        </div>
    </div>
  )
}
