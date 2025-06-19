import { InfoBar } from '../components/InfoBar'
import { NavBar } from '../components/NavBar'
import { Carousel } from '../components/Carousel'

export const HeroSection = () => {
  return (
    <div className='h-full'>
        <InfoBar/>
        <NavBar/>
        <Carousel/>
    </div>
  )
}
