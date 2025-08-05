import team1 from "../assets/teampic1.jpg"
import team2 from "../assets/teampic2.jpg"
import team3 from "../assets/teampic3.jpg"
import team4 from "../assets/teampic4.jpg"
import team5 from "../assets/teampic5.jpg"
import team6 from "../assets/teampic6.jpg"
import team7 from "../assets/teampic7.jpg"
import team8 from "../assets/teampic8.jpg"
import team9 from "../assets/teampic9.jpg"
import hero1 from "../assets/teamhero1.png"
import hero2 from "../assets/teamhero2.png"
import hero3 from "../assets/teamhero3.png"
import hero4 from "../assets/teamhero4.png"
import hero5 from "../assets/teamhero5.png" 
import { TeamSection } from '../layouts/TeamSection'
import { NavBar } from '../components/NavBar'
import { FooterSection } from '../layouts/FooterSection'
import { RiArrowRightWideFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"

const images: string[] = [team1, team2, team3, team4, team5, team6, team7, team8, team9];

export const Team = () => {
  return (
    <div className='flex flex-col items-center font-montserrat'>
        <NavBar />
        <div className='w-full flex flex-col gap-6 py-12'>
            <div className='w-full flex flex-col items-center gap-6'>
                <p className='text-base xl:text-2xl text-neutral-500 font-bold'>WHAT WE DO</p>
                <h1 className='text-5xl xl:text-7xl text-slate-800 font-bold'>Innovation tailored for you</h1>
                <p className='flex flex-row items-center text-sm xl:text-lg font-bold'><span className='text-slate-800'>Home</span> <RiArrowRightWideFill className='text-neutral-300'/> <span className='text-neutral-500'>Team</span></p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="w-full h-full">
                    <img src={hero1} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-3">
                    <img src={hero2} alt="" className="w-full h-full object-cover" />
                    <img src={hero3} alt="" className="w-full h-full object-cover" />
                    <img src={hero4} alt="" className="w-full h-full object-cover" />
                    <img src={hero5} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
        <TeamSection images={images} />
        <div className='w-full flex flex-col items-center gap-14'>
            <h1 className='text-40 xl:text-[53.3px] text-slate-800 font-bold'>Start your <br className='xl:hidden'/>14 days free trial</h1>
            <p className='text-sm xl:text-lg text-neutral-500 font-normal'>Met minim Mollie non desert Alamo est sit <br className='xl:hidden'/>cliquey dolor <br className='max-xl:hidden'/>do met sent. RELIT official <br className='xl:hidden'/>consequent.</p>
            <Link to={"/shop/k/tisort/1"} className='flex items-center justify-center w-[clamp(186px,25vw,252.67px)] h-[clamp(52px,10vw,69.33px)] bg-sky-500 rounded-md text-white text-sm xl:text-lg'>Try it free now</Link>
            <div className='flex flex-row gap-11'>
                <FaSquareXTwitter className='size-6 xl:size-10 text-slate-800'/>
                <FaFacebook className='size-6 xl:size-10 text-blue-900'/>
                <FaInstagram className='size-6 xl:size-10 text-slate-800'/>
                <a href="https://www.linkedin.com/in/devfurkang/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='size-6 xl:size-10 text-sky-700'/></a>
            </div>
        </div>
        <FooterSection />
    </div>
  )
}
