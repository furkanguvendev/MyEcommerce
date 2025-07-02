import background from "../assets/aboutUsBg.png";

export const AboutUs = () => {
  return (
    <div className="w-full xl:h-screen bg-cover font-montserrat text-white max-xl:bg-center max-xl:py-28" style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${background})`
    }}>
        <div className='w-full xl:h-screen flex max-xl:flex-col items-center justify-center relative gap-16'>
            <div className='flex flex-1 justify-center'>
                <div className="xl:w-3/5 flex flex-col items-center xl:items-start gap-10">
                    <h1 className="text-[40px] xl:text-[53px] font-bold xl:text-left">Subscribe For <br className="xl:hidden"/>Latest <br className="xl:hidden"/>Newsletter</h1>
                    <p className="text-sm xl:text-xl font-normal xl:text-left">Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: <br/>Newtonian mechanics</p>
                    <button className='w-44 xl:w-60 h-14 xl:h-16 bg-sky-500 rounded-md text-sm xl:text-xl font-bold'>LEARN MORE!</button>
                </div>
            </div>
            <div className="flex flex-1 flex-col xl:flex-row max-xl:gap-32">
                <div className="flex flex-col flex-1 gap-12">
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[40px] xl:text-[53px] font-bold">1M+</h3>
                        <p className="text-base xl:text-xl font-bold text-left">Things on a very <br/>small that you <br/>have any direct</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[40px] xl:text-[53px] font-bold">98%</h3>
                        <p className="text-base xl:text-xl font-bold text-left">Things on a very <br/>small that you <br/>have any direct</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[40px] xl:text-[53px] font-bold">4.9</h3>
                        <p className="text-base xl:text-xl font-bold text-left">Things on a very <br/>small that you <br/>have any direct</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-12">
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[40px] xl:text-[53px] font-bold">1M+</h3>
                        <p className="text-base xl:text-xl font-bold text-left">Things on a very <br/>small that you <br/>have any direct</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[40px] xl:text-[53px] font-bold">98%</h3>
                        <p className="text-base xl:text-xl font-bold text-left">Things on a very <br/>small that you <br/>have any direct</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-[40px] xl:text-[53px] font-bold">4.9</h3>
                        <p className="text-base xl:text-xl font-bold text-left">Things on a very <br/>small that you <br/>have any direct</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
