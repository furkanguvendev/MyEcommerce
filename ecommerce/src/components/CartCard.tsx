import { useDispatch } from "react-redux";
import type { Product } from "../types&enums/types"
import { FaTrashAlt } from "react-icons/fa";
import { addCount, removeItem, takeCount } from "../store/actions/cartActions";

type Props = {
    cartProduct: {
        count: number;
        product: Product;
    }
}

export const CartCard = ({ cartProduct }: Props) => {
    const dispatch = useDispatch();

    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 border border-gray-200 rounded-2xl shadow-sm">

            <div className="flex flex-row gap-4 w-full md:w-2/3">
                <input type="checkbox" className="mt-2 md:mt-0 accent-pink-500" />

                <img
                    src={cartProduct.product.images[0].url}
                    alt={cartProduct.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex flex-col gap-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">{cartProduct.product.name}</h3>
                    <p className="text-sm text-gray-500">{cartProduct.product.sell_count} adet satıldı</p>
                    <p className="text-sm text-gray-500">Beden: Tek Beden</p>
                    <p className="text-sm text-gray-500">Tahmini teslim: 2 gün içinde</p>
                </div>
            </div>

            <div className="flex flex-row gap-4 items-center md:items-end w-full md:w-auto">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => dispatch(takeCount(cartProduct.product.id))}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-md text-xl font-bold"
                    >
                        -
                    </button>
                    <p className="text-base font-medium w-6 text-center">{cartProduct.count}</p>
                    <button
                        onClick={() => dispatch(addCount(cartProduct.product.id))}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-md text-xl font-bold"
                    >
                        +
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <p className="w-[clamp(100px,15vw,200px)] text-right text-lg font-semibold text-gray-800 whitespace-nowrap">
                        {cartProduct.product.price} ₺
                    </p>
                    <button
                        onClick={() => dispatch(removeItem(cartProduct.product.id))}
                        className="flex items-center gap-1 text-red-600 text-sm hover:underline"
                    >
                        <FaTrashAlt size={14} /> Sil
                    </button>
                </div>
            </div>
        </div>
    );
}
