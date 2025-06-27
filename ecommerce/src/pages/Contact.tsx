import React from 'react'
import background from "../assets/contact-bg.png"

export const Contact = () => {
  return (
    <div className="w-full xl:h-screen bg-cover font-montserrat" style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${background})`
      }}>        
        <div className='w-full xl:h-screen flex max-xl:flex-col items-center justify-center relative gap-16'>
            <div className='flex flex-[2] justify-center'>
                <div className='xl:w-3/5 flex flex-col items-center xl:items-start gap-10'>    
                    <h1 className='text-white text-[40px] xl:text-[53px] font-bold'>CONTACT US</h1>
                    <p className='text-sm xl:text-xl text-white font-normal xl:text-left'>Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: <br/>Newtonian mechanics </p>
                    <button className='w-44 xl:w-60 h-14 xl:h-16 bg-sky-500 rounded-md text-white text-sm xl:text-xl font-bold'>CONTACT US</button>
                </div>
            </div>
            <div className='flex flex-1 flex-col gap-12 xl:gap-16'>
                <div className='flex flex-col text-left gap-4 xl:gap-[22px]'>
                    <h2 className='text-white text-2xl xl:text-[32px] font-bold'>Paris</h2>
                    <h3 className='text-white text-xl xl:text-[28px] font-normal'>1901 Thorn ridge Cir.</h3>
                    <hr className='border-2 border-sky-500 w-16'/>
                    <p className='text-base xl:text-2xl text-white font-bold'>75000 Paris</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Phone : +451 215 215</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Fax : +451 215 215</p>
                </div>
                <div className='flex flex-col text-left gap-4 xl:gap-[22px]'>
                    <h2 className='text-white text-2xl xl:text-[32px] font-bold'>Berlin</h2>
                    <h3 className='text-white text-xl xl:text-[28px] font-normal'>4140 Parker Rd.</h3>
                    <hr className='border-2 border-sky-500 w-16'/>
                    <p className='text-base xl:text-2xl text-white font-bold'>75000 Paris</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Phone : +451 215 215</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Fax : +451 215 215</p>
                </div>
            </div>
            <div className='flex flex-1 flex-col gap-12 xl:gap-16'>
                <div className='flex flex-col text-left gap-4 xl:gap-[22px]'>
                    <h2 className='text-white text-2xl xl:text-[32px] font-bold'>New York</h2>
                    <h3 className='text-white text-xl xl:text-[28px] font-normal'>2715 Ash Dr. San Jose,</h3>
                    <hr className='border-2 border-sky-500 w-16'/>
                    <p className='text-base xl:text-2xl text-white font-bold'>75000 Paris</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Phone : +451 215 215</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Fax : +451 215 215</p>
                </div>
                <div className='flex flex-col text-left gap-4 xl:gap-[22px]'>
                    <h2 className='text-white text-2xl xl:text-[32px] font-bold'>London</h2>
                    <h3 className='text-white text-xl xl:text-[28px] font-normal'>3517 w. Gray St. Utica,</h3>
                    <hr className='border-2 border-sky-500 w-16'/>
                    <p className='text-base xl:text-2xl text-white font-bold'>75000 Paris</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Phone : +451 215 215</p>
                    <p className='text-base xl:text-2xl text-white font-bold'>Fax : +451 215 215</p>
                </div>
            </div>
        </div>
    </div>
  )
}
