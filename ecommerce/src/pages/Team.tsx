import Team1 from "../assets/teampic1.jpg";
import Team2 from "../assets/teampic2.jpg";
import Team3 from "../assets/teampic3.jpg";
import { TeamCard } from "../components/TeamCard";

const images: string[] = [Team1, Team2, Team3];

export const Team = () => {
  return (
    <div className="w-full xl:h-screen flex flex-col gap-5 xl:gap-24 items-center justify-center  font-montserrat bg-zinc-50">
        <div className="flex flex-col gap-4">    
            <h1 className="text-4xl xl:text-5xl text-slate-800 font-bold text-center">Meet Our <br className="xl:hidden"/>Team</h1>
            <p className="text-sm xl:text-xl text-neutral-500 font-normal">Problems trying to resolve <br className="xl:hidden"/>the conflict between <br className="max-xl:hidden"/>the two major <br className="xl:hidden"/>realms of Classical physics: <br className="xl:hidden"/>Newtonian mechanics</p>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 max-xl:mb-10">
            {images.map((pic)=>(
                <TeamCard picture={pic}/>
            ))}
        </div>
    </div>
  )
}
