import { NavBar } from "../components/NavBar"
import { FooterSection } from "../layouts/FooterSection"
import picture from "../assets/contactimg.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail,  } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { PiArrowBendLeftUp } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center font-montserrat">
        <NavBar />
            <div className="w-4/5 flex flex-col xl:flex-row items-center justify-between max-xl:gap-10">
                <div className="w-11/12 xl:w-1/2 flex flex-col items-start justify-center gap-12">
                    <h4 className="text-base xl:text-2xl text-slate-800 font-bold">CONTACT US</h4>
                    <h1 className="text-40 xl:text-7xl text-slate-800 font-bold xl:text-left">Get in touch today!</h1>
                    <p className="w-[clamp(274px,30vw,501.33px)] text-xl xl:text-[28px] text-neutral-500 font-normal xl:text-left">We know how large objects will act, but things on a small scale</p>
                    <div className="flex flex-col xl:items-start">
                        <p className="text-2xl xl:text-32 text-slate-800 font-bold">Phone ; +451 215 215 </p>
                        <p className="text-2xl xl:text-32 text-slate-800 font-bold">Fax : +451 215 215</p>
                    </div>
                    <nav className='flex flex-row gap-11'>
                        <FaSquareXTwitter className='size-6 xl:size-10 text-slate-800'/>
                        <FaFacebook className='size-6 xl:size-10 text-slate-800'/>
                        <FaInstagram className='size-6 xl:size-10 text-slate-800'/>
                        <a href="https://www.linkedin.com/in/devfurkang/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='size-6 xl:size-10 text-slate-800'/></a>
                    </nav>
                </div>
                <img src={picture} className="w-1/2"/>
            </div>
            <div className="w-full flex flex-col items-center gap-24 py-16 xl:py-36 bg-zinc-50">
                <div className="w-full flex flex-col items-center gap-6">
                    <p className="text-sm xl:text-lg text-slate-800 font-bold">VISIT OUR OFFICE</p>
                    <h1 className="text-40 max-xl:text-center xl:text-[53.3px] text-slate-800 font-bold">We help small businesses with big ideas</h1>
                </div>
                <div className="w-3/4 flex flex-col xl:flex-row items-center justify-center gap-5">
                    <div className="contact-card">
                        <FiPhone  className="size-[72px] xl:size-24 text-sky-500"/>
                        <div className="flex flex-col text-slate-800 items-center">
                            <p className="contact-p">furkan.guven@example.com</p>
                            <p className="contact-p">furkan.guven@ple.com</p>
                        </div>
                        <p className="contact-p text-slate-800">Get Support</p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=furkanguven.dev@gmail.com&su=Looking to Collaborate&body=Hello Furkan," target="_blank" rel="noopener noreferrer" className="contact-button">Submit Request</a>
                    </div>
                    <div className="bg-slate-800 contact-card">
                        <TfiLocationPin  className="size-[72px] xl:size-24 text-sky-500"/>
                        <div className="flex flex-col items-center">
                            <p className="contact-p text-white">furkan.guven@example.com</p>
                            <p className="contact-p text-white">furkan.guven@ple.com</p>
                        </div>
                        <p className="contact-p text-white">Get Support</p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=furkanguven.dev@gmail.com&su=Looking to Collaborate&body=Hello Furkan," target="_blank" rel="noopener noreferrer" className="contact-button">Submit Request</a>
                    </div>
                    <div className="contact-card">
                        <FiMail  className="size-[72px] xl:size-24 text-sky-500"/>
                        <div className="flex flex-col text-slate-800 items-center">
                            <p className="contact-p">furkan.guven@example.com</p>
                            <p className="contact-p">furkan.guven@ple.com</p>
                        </div>
                        <p className="contact-p text-slate-800">Get Support</p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=furkanguven.dev@gmail.com&su=Looking to Collaborate&body=Hello Furkan," target="_blank" rel="noopener noreferrer" className="contact-button">Submit Request</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 py-8">
                <PiArrowBendLeftUp className="text-sky-500 rotate-180 size-20 xl:size-24"/>
                <p className="text-base xl:text-2xl text-slate-800 font-bold">WE Can't WAIT TO MEET YOU</p>
                <h1 className="text-6xl xl:text-7xl text-slate-800 font-bold">Let's Talk</h1>
                <Link to={"/shop/k/ceket/3"} className="flex items-center justify-center w-[clamp(186px,15vw,252.67px)] h-[clamp(52px,5vw,69.33px)] text-white text-sm xl:text-lg font-bold bg-sky-500 rounded-md">Try it free now</Link>
            </div>
        <FooterSection />
    </div>
  )
}
