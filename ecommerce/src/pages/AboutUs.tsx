import { NavBar } from "../components/NavBar"
import picture1 from "../assets/aboutUsPic.png"
import { FooterSection } from "../layouts/FooterSection"


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
                        <button className="w-[clamp(195px,25vw,259px)] h-[clamp(52px,7vw,70px)] text-sm xl:text-xl text-white bg-sky-500 rounded-md w">Get Quete Now</button>
                    </div>
                </div>
                <img src={picture1} alt="" className="flex-1"/>
            </div>
            <FooterSection />
        </div>
  )
}
