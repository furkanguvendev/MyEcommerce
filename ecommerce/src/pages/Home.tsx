import { HeroSection } from '../layouts/HeroSection'
import { ProductSection } from '../layouts/ProductSection'
import { ShopCards } from '../layouts/ShopCards'

export const Home = () => {

  return (
    <div className='h-full font-montserrat'>
        <HeroSection />
        <ShopCards />
        <ProductSection />
    </div>
  )
}
