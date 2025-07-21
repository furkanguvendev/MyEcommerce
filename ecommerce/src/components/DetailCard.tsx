import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { Category, Product } from "../types&enums/types";
import { useNavigate } from "react-router-dom";

type Props = {
    product: Product;
}

export const DetailCard = ({product}: Props) => {

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
    <button onClick={() => navigate(`/shop/${category?.gender}/${category?.code.replace(/^k:/, "")}/${category?.id}/${toSlug(product.name)}/${product.id}`)} className="flex flex-col items-center gap-5 shadow-md">
        <img className="w-full h-[clamp(400px,-10vw+480px,427px)] object-cover" src={product.images[0].url}/>
        <div className="w-full flex flex-col p-10 items-start gap-4">
            <h3 className="text-slate-800 text-base xl:text-2xl font-bold">{product.name}</h3>
            <p className="text-neutral-500 text-sm xl:text-xl font-bold">{truncateText(product.description, 2)}</p>
            <div className="flex flex-row gap-10">
                <p className="text-sm xl:text-xl text-neutral-300 font-bold">${product.price}</p>
                <p className="text-sm xl:text-xl text-emerald-700 font-bold">${(product.price * (1 - product.stock/1000)).toFixed(2)}</p>
            </div>
        </div>
    </button>
  )
}
