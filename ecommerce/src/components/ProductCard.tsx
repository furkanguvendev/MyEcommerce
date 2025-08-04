import { useSelector } from "react-redux";
import type { Category, Product } from "../types&enums/types";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";

type Props = {
    product: Product;
}

export const ProductCard = ({product}: Props) => {

    const category = useSelector((state: RootState) => 
    (state.product.categories as Category[]).find((item) => item.id === product.category_id)
    );

    const navigate = useNavigate();

    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + " ...";
    };

    function toSlug(str: string): string {
    return str
        .toLowerCase()
        .replace(/ç/g, "c")
        .replace(/ğ/g, "g")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ş/g, "s")
        .replace(/ü/g, "u")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-") 
        .replace(/-+/g, "-") 
        .replace(/^-+|-+$/g, "");
    }

  return (
    <button className='flex flex-col items-center shadow-lg pb-5' onClick={() => navigate(`/shop/${category?.gender}/${category?.code.replace(/^k:/, "")}/${category?.id}/${toSlug(product.name)}/${product.id}`)}>
        <img className='mb-8' src={product.images[0].url}/>
        <h3 className='text-slate-800 font-bold text-xl mb-3'>{product.name}</h3>
        <p className='text-neutral-500 text-lg font-bold mb-5'>{truncateText(product.description,3)}</p>
        <div className='flex flex-row gap-2 mb-5'>
            <p className='text-neutral-300 text-xl font-bold'>₺{product.price}</p>
            <p className='text-emerald-700 text-xl font-bold'>₺{(product.price * (1 - product.stock/1000)).toFixed(2)}</p>
        </div>
        <div className='flex flex-row gap-2'>
            <p className='w-5 h-5 bg-sky-500 rounded-full'></p>
            <p className='w-5 h-5 bg-emerald-700 rounded-full'></p>
            <p className='w-5 h-5 bg-orange-500 rounded-full'></p>
            <p className='w-5 h-5 bg-slate-800 rounded-full'></p>
        </div>
    </button>
  )
}
