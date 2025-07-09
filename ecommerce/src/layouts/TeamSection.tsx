import { TeamCard } from "../components/TeamCard";

type Props = {
  images: string[];
}

export const TeamSection = ({images}: Props) => {
  return (
    <div className="w-full flex flex-col gap-5 xl:gap-24 items-center justify-center py-10 xl:py-32 font-montserrat">
        <div className="flex flex-col gap-4">    
            <h1 className="text-4xl xl:text-5xl text-slate-800 font-bold text-center">Meet Our <br className="xl:hidden"/>Team</h1>
            <p className="text-sm xl:text-xl text-neutral-500 font-normal">Problems trying to resolve <br className="xl:hidden"/>the conflict between <br className="max-xl:hidden"/>the two major <br className="xl:hidden"/>realms of Classical physics: <br className="xl:hidden"/>Newtonian mechanics</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-xl:mb-10">
          {images.map((pic, index) => (
            <TeamCard key={index} picture={pic} />
          ))}
        </div>
    </div>
  )
}
