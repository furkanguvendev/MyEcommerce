import { InfoBar } from '../components/InfoBar'
import { NavBar } from '../components/NavBar'
import { Carousel } from '../components/Carousel'
import data from "../data";

export const HeroSection = () => {
  return (
    <div className='h-full'>
        <InfoBar/>
        <NavBar/>
        <Carousel key={3} {...data.heroCaroseul}/>
    </div>
  )
}
