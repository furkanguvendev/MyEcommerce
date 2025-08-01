import { useSelector } from "react-redux"
import { NavBar } from "../components/NavBar"
import { FooterSection } from "../layouts/FooterSection"
import type { RootState } from "../store/store"
import { CartCard } from "../components/CartCard"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"

export const Cart = () => {

    const navigate = useNavigate();
    const cartItems = useSelector((state: RootState) => state.cart.cart);

    const totalPrice = useMemo(()=> {
        return cartItems.reduce((total, item) => {
            return total + item.product.price * item.count;
        }, 0)
    }, [cartItems]);

    const sellCount = useMemo(()=> {
        return cartItems.reduce((total, item) => {
            return total + item.product.sell_count;
        }, 0)
    }, [cartItems]);

  return (
    <div className="w-full flex flex-col items-center">
        <NavBar />
        <div className="w-11/12 flex flex-col xl:flex-row gap-8">

            <div className="w-full xl:w-2/3 flex flex-col gap-4">
                <h3 className="w-full text-left text-2xl font-semibold">Sepetim</h3>
                {cartItems.length === 0 ? (
                <p className="text-gray-600">Sepet boş</p>
                ) : (
                <div className="w-full flex flex-col gap-4">
                    {cartItems.map((item) => (
                    <CartCard key={item.product.id} cartProduct={item} />
                    ))}
                </div>
                )}
            </div>

            <div className="w-full xl:w-1/3 max-h-fit flex flex-col gap-4 border p-8 rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold border-b pb-2">Sipariş Özeti</h3>

                <div className="flex justify-between text-sm">
                <p>Ürünün Toplamı</p>
                <p>{totalPrice.toFixed(2)} ₺</p>
                </div>

                <div className="flex justify-between text-sm">
                <p>Kargo Toplam</p>
                <p>{(totalPrice * 0.1).toFixed(2)} ₺</p>
                </div>

                <div className="flex justify-between text-sm">
                <p className="text-left">
                    300₺ ve Üzeri Kargo <br /> Bedava (Satıcı
                    Karşılar)
                </p>
                <p>
                    {totalPrice > 300
                    ? `-${(totalPrice * 0.1).toFixed(2)}`
                    : (totalPrice * 0.1).toFixed(2)}{" "}
                    ₺
                </p>
                </div>

                <hr />

                <div className="flex justify-between items-center text-base font-semibold">
                <h4>Toplam</h4>
                <p>
                    {totalPrice > 300
                    ? (totalPrice).toFixed(2)
                    : (totalPrice + totalPrice * 0.1).toFixed(2)}{" "}
                    ₺
                </p>
                </div>

                <p className="text-xs text-gray-500">
                Sepetteki ürünler son 3 günde{" "}
                <span className="font-bold">{sellCount}</span> adet satıldı!
                </p>

                <button 
                    onClick={() => navigate("/order")} 
                    disabled={cartItems.length === 0}
                    className={`w-full py-2 rounded transition-colors
                        ${cartItems.length === 0 
                        ? "bg-gray-400 text-gray-700 cursor-not-allowed" 
                        : "bg-black text-white hover:bg-gray-800"}
                    `}
                >
                    Siparişi Onayla
                </button>
            </div>
        </div>
        <FooterSection />
    </div>
  )
}
