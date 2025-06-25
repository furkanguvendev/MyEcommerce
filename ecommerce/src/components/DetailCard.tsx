
type Product = {
    picture: string;
    heading: string;
    text: string;
    price: string;
    discount: string;
}

type Props = {
    product: Product;
}

export const DetailCard = ({product}: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 shadow-md">
        <img className="w-full object-cover" src={product.picture}/>
        <div className="w-full flex flex-col p-10 items-start gap-4">
            <h3 className="text-slate-800 text-base xl:text-2xl font-bold">{product.heading}</h3>
            <p className="text-neutral-500 text-sm xl:text-xl font-bold">{product.text}</p>
            <div className="flex flex-row gap-10">
                <p className="text-sm xl:text-xl text-neutral-300 font-bold">${product.price}</p>
                <p className="text-sm xl:text-xl text-emerald-700 font-bold">${product.discount}</p>
            </div>
        </div>
    </div>
  )
}
