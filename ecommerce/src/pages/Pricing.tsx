import { useState } from "react";
import { NavBar } from "../components/NavBar"
import { FooterSection } from "../layouts/FooterSection"
import { RiArrowRightWideFill} from "react-icons/ri";
import { PricingCard } from "../components/PricingCard";
import { FaHooli, FaLyft, FaPiedPiperHat, FaStripe, FaAws, FaRedditAlien} from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

type PriceTier = [
   {
    type : string;
    month : number,
    year : number,
  },
   {
    type : string;
    month : number,
    year : number,
  },
  {
    type : string;
    month : number,
    year : number,
  },
];

const prices: PriceTier = [
    {
    type : "FREE",
    month : 0,
    year : 0,
  },
  {
    type : "STANDARD",
    month : 9.99,
    year : 89.99,
  },
  {
    type : "PREMIUM",
    month : 19.99,
    year : 179.99,
  },
];

export const Pricing = () => {
  
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);
  
    return (
    <div className="w-full flex flex-col items-center font-montserrat">
        <NavBar />
        <div className="w-full flex flex-col items-center py-16 gap-10">
            <h4 className="text-base xl:text-2xl text-neutral-500 font-bold">PRICING</h4>
            <h1 className="text-40 xl:text-7xl text-slate-800 font-bold">Simple Pricing</h1>
            <p className="flex flex-row items-center text-sm xl:text-lg font-bold gap-2">
                <span className="text-slate-800">Home</span>
                <RiArrowRightWideFill className="size-4 xl:size-6 text-neutral-300"/>
                <span className="text-neutral-500">Pricing</span>
            </p>
        </div>
        <div className="w-full flex flex-col items-center gap-12 xl:gap-16 py-36 bg-zinc-50">
            <div>
                <h3 className="text-40 xl:text-[53.33px] text-slate-800 font-bold">Pricing</h3>
                <p className="text-base xl:text-2xl text-neutral-500 font-normal">Problems trying to resolve <br className="xl:hidden"/>the conflict between <br className="max-xl:hidden"/>the two major <br className="xl:hidden"/>realms of Classical physics: <br className="xl:hidden"/>Newtonian mechanics </p>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-5">
                <p className="text-base xl:text-2xl text-slate-800 font-bold">Monthly</p>
                <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full border-2 border-sky-500 p-1 cursor-pointer transition-colors duration-300`}
                >
                <div
                    className={`w-6 h-6 rounded-full transform transition-transform duration-300 ${
                    isOn ? "translate-x-5 bg-sky-500" : "translate-x-0 bg-zinc-200"
                    }`}
                ></div>
                </div>
                <p className="text-base xl:text-2xl text-slate-800 font-bold">Yearly</p>
                <p className="text-base xl:text-2xl text-sky-500 font-bold py-3 px-6 rounded-full bg-sky-200">Save 25%</p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2">
                {prices.map((data)=>(
                    <PricingCard IsOn={isOn} Data={data}/>
                ))}
            </div>
        </div>
        <div className="w-full flex flex-col gap-16 xl:h-[486px] items-center justify-center bg-zinc-50">
          <p className="text-xl xl:text-[28px] text-slate-800 font-normal">Trusted By Over 4000 <br className="xl:hidden"/>Big Companies</p>
          <div className='w-3/4 flex flex-col xl:flex-row justify-between text-neutral-500 items-center'>
            <FaHooli className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaLyft className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaPiedPiperHat className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaStripe className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaAws className='w-36 xl:w-24 h-36 xl:h-24' />
            <FaRedditAlien className='w-36 xl:w-24 h-36 xl:h-24' />
          </div>
        </div>
        <div className="flex flex-col gap-36 py-20 xl:py-40">
          <div>
            <h3 className="text-40 xl:text-[53.3px] text-slate-800 font-bold">Pricing FAQs</h3>
            <p className="text-xl xl:text-[28px] text-neutral-500 font-normal">Problems trying to resolve the conflict between <br className="max-xl:hidden"/>the two major realms <br className="xl:hidden"/>of Classical physics</p>
          </div>
          <div className="grid xl:grid-rows-3 xl:grid-cols-2 gap-[73px]">
            {[...Array(6)].map((_,i)=>(
              <div key={i} className="flex flex-row items-start gap-2">
                <RiArrowRightWideFill className="size-7 text-sky-500"/>
                <div className="text-base xl:text-2xl text-left">
                  <h5 className="text-slate-800 font-bold">the quick fox jumps over the lazy dog</h5>
                  <p className="text-neutral-500 font-normal">Met minim Mollie non desert <br className="xl:hidden"/>Alamo est sit cliquey <br className="max-xl:hidden"/>dolor do met sent. <br className="xl:hidden"/>RELIT <br className="xl:hidden"/>official consequent door ENIM <br className="max-xl:hidden"/>RELIT Mollie. Excitation venial consequent <br className="xl:hidden"/>sent <br className="max-xl:hidden"/>nostrum met.</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xl xl:text-[28px] text-neutral-500 font-normal">Haven’t got your answer? <br className="xl:hidden"/>Contact our support</p>
        </div>
        <div className='w-full flex flex-col items-center gap-14 py-28 xl:py-32'>
          <h1 className='text-40 xl:text-[53.3px] text-slate-800 font-bold'>Start your <br className='xl:hidden'/>14 days free trial</h1>
          <p className='text-sm xl:text-lg text-neutral-500 font-normal'>Met minim Mollie non desert Alamo est sit <br className='xl:hidden'/>cliquey dolor <br className='max-xl:hidden'/>do met sent. RELIT official <br className='xl:hidden'/>consequent.</p>
          <button className='w-[clamp(186px,25vw,252.67px)] h-[clamp(52px,10vw,69.33px)] bg-sky-500 rounded-md text-white text-sm xl:text-lg'>Try it free now</button>
          <div className='flex flex-row gap-11'>
            <FaSquareXTwitter className='size-6 xl:size-10 text-slate-800'/>
            <FaFacebook className='size-6 xl:size-10 text-blue-900'/>
            <FaInstagram className='size-6 xl:size-10 text-slate-800'/>
            <FaLinkedin className='size-6 xl:size-10 text-sky-700'/>
          </div>
        </div>
        <FooterSection />
    </div>
  )
}
