import { DetailCard } from "../components/DetailCard";
import type { Product } from "../types&enums/types";

type Props = {
  items: Product[];
}

export const ProductDetailsBest = ({items}: Props) => {
  
  return (
    <div className="w-full flex justify-center  bg-zinc-50">
        <div className="w-11/12 flex flex-col items-center gap-8 pt-12">
            <h3 className="text-slate-800 text-2xl xl:text-4xl font-bold w-11/12 text-left">BESTSELLER PRODUCTS</h3>
            <hr className="w-11/12"/>
            <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {items.map((product)=>(
                    <DetailCard product={product} />
                ))}
            </div>
        </div>
    </div>
  )
}
