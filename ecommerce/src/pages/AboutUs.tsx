import { NavBar } from "../components/NavBar"
import picture1 from "../assets/aboutUsPic.png"
import videoCard from "../assets/videocard.png"
import { FooterSection } from "../layouts/FooterSection"
import { TeamSection } from "../layouts/TeamSection"
import { Clients } from "../layouts/Clients"
import { Testimonials } from "../layouts/Testimonials"
import Team1 from "../assets/teampic1.jpg";
import Team2 from "../assets/teampic2.jpg";
import Team3 from "../assets/teampic3.jpg";

const images: string[] = [Team1, Team2, Team3];

export const AboutUs = () => {
  return (
        <div className="w-full flex flex-col items-center font-montserrat">
            <NavBar />
            <div className="w-11/12 flex flex-col xl:flex-row items-center max-xl:gap-24 max-xl:pt-16">
                <div className="flex flex-1 items-center justify-center">
                    <div className="flex flex-col items-center xl:items-start gap-12">
                        <h3 className="text-slate-800 text-2xl font-bold max-xl:hidden">ABOUT COMPANY</h3>
                        <h1 className="text-slate-800 text-40 xl:text-7xl font-bold">ABOUT US</h1>
                        <p className="w-[clamp(288px,25vw,450px)] xl:text-left text-neutral-500 text-xl xl:text-2xl font-normal">We know how large objects will act, but things on a small scale</p>
                        <button onClick={() => window.open('https://www.linkedin.com/in/devfurkang/', '_blank')} className="w-[clamp(195px,25vw,259px)] h-[clamp(52px,7vw,70px)] text-sm xl:text-xl text-white bg-sky-500 rounded-md w">Get Quote Now</button>
                    </div>
                </div>
                <img src={picture1} alt="" className="flex-1"/>
            </div>
            <div className="w-4/5 xl:w-3/5 flex flex-col items-center gap-24 py-32">
                <div className="w-full flex flex-col xl:flex-row items-center gap-12">
                    <div className="w-full flex-1 flex flex-col items-center xl:items-start gap-4">
                        <h3 className="text-sm xl:text-lg text-red-500 font-normal">Problems Trying</h3>
                        <p className="w-[clamp(300px,25vw,900px)] xl:text-left text-2xl xl:text-3xl text-slate-800 font-bold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                    </div>
                    <p className="flex-1 xl:text-left text-sm xl:text-lg text-neutral-500 font-normal">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="w-full flex flex-col xl:flex-row justify-between gap-12">
                    <div>
                        <h3 className="text-5xl xl:text-7xl text-slate-800 font-bold">15K</h3>
                        <p className="text-base xl:text-2xl text-neutral-500 font-bold">Happy Customer</p>
                    </div>
                    <div>
                        <h3 className="text-5xl xl:text-7xl text-slate-800 font-bold">150K</h3>
                        <p className="text-base xl:text-2xl text-neutral-500 font-bold">Monthly Visiters</p>
                    </div>
                    <div>
                        <h3 className="text-5xl xl:text-7xl text-slate-800 font-bold">15</h3>
                        <p className="text-base xl:text-2xl text-neutral-500 font-bold">Countries Worldwide</p>
                    </div>
                    <div>
                        <h3 className="text-5xl xl:text-7xl text-slate-800 font-bold">100+</h3>
                        <p className="text-base xl:text-2xl text-neutral-500 font-bold">Top Partners</p>
                    </div>
                </div>
            </div>
            <img src={videoCard} className="w-[clamp(308px,68.65vw,1318px)] h-[clamp(301.6px,37.5vw,720px)] my-20 xl:my-36"/>
            <TeamSection images={images}/>
            <Clients />
            <Testimonials />
            <FooterSection />
        </div>
  )
}
