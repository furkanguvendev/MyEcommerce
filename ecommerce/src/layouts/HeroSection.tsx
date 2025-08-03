import { InfoBar } from '../components/InfoBar'
import { NavBar } from '../components/NavBar'
import { Carousel } from '../components/Carousel'
import data from "../data";

export const HeroSection = () => {
  return (
    <div className='w-full min-h-fit flex flex-col justify-center items-center'>
        <InfoBar/>
        <NavBar/>
        <Carousel key={3} {...data.heroCaroseul}/>
    </div>
  )
}
