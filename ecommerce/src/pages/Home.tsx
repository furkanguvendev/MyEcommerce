import { BlogSection } from '../layouts/BlogSection'
import { FluidSection } from '../layouts/FluidSection'
import { FooterSection } from '../layouts/FooterSection'
import { HeroSection } from '../layouts/HeroSection'
import { ProductSection } from '../layouts/ProductSection'
import { ShopCards } from '../layouts/ShopCards'

export const Home = () => {

  return (
    <div className='h-full font-montserrat flex flex-col items-center'>
        <HeroSection />
        <ShopCards />
        <ProductSection />
        <FluidSection />
        <BlogSection />
        <FooterSection />
    </div>
  )
}
