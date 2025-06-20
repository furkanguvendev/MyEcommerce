import Picture1 from "../assets/fixed-height1.png"
import Picture2 from "../assets/fixed-height2.png"
import Picture3 from "../assets/fixed-height3.png"
import Picture4 from "../assets/fixed-height4.png"
import Picture5 from "../assets/fixed-height5.png"
import Picture6 from "../assets/fixed-height6.png"
import Picture7 from "../assets/fixed-height7.png"
import Picture8 from "../assets/fixed-height8.png"
import { Carousel } from "../components/Carousel"
import { ProductCard } from "../components/ProductCard"
import data from "../data"

const images = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8];

export const ProductSection = () => {
  return (
    <>
      <div className="py-20">
        <p className="text-neutral-500 text-2xl font-normal pb-4">Feature Products</p>
        <h3 className="text-slate-800 text-3xl font-bold pb-4">BESTSELLER PRODUCTS</h3>
        <p className="text-neutral-500 text-lg font-normal pb-12 sm:pb-28">Problems trying to resolve the conflict between</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-36 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          {images.map((image, index) => (
            <ProductCard key={index} picture={image} />
          ))}
        </div>
      </div>
      <Carousel key={3} {...data.productCarousel}/>
    </>
  )
}
