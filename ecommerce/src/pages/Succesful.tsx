import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../store/store";
import { deleteOrder, setCart } from "../store/actions/cartActions";
import { FiCheckCircle } from "react-icons/fi";

export const Succesful = () => {
  const order = useSelector((state: RootState) => state.cart.order);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleGoHome = () => {
    dispatch(deleteOrder());
    dispatch(setCart([]));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-neutral-200 flex flex-col items-center justify-center px-4 py-10">
      <div className="flex items-center gap-3 mb-6 animate-fade-in">
        <FiCheckCircle size={40} className="text-emerald-400" />
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">Sipariş Başarılı</h1>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-6 w-full max-w-2xl space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-700 p-4 rounded-xl shadow text-sm">
            <p className="text-zinc-400">Sipariş Tarihi</p>
            <p className="text-white font-semibold">{order.order_date}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-xl shadow text-sm">
            <p className="text-zinc-400">Adres ID</p>
            <p className="text-white font-semibold">{order.address_id}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-xl shadow text-sm sm:col-span-2">
            <p className="text-zinc-400">Toplam Tutar</p>
            <p className="text-emerald-400 font-bold text-lg">₺{order.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg text-sky-400 font-semibold">Kart Bilgileri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p><span className="text-zinc-400">Kart Sahibi:</span> {order.card_name}</p>
            <p><span className="text-zinc-400">Kart No:</span> **** **** **** {String(order.card_no).slice(-4)}</p>
            <p><span className="text-zinc-400">Son Kullanma:</span> {order.card_expire_month}/{order.card_expire_year}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg text-sky-400 font-semibold">Sipariş Ürünleri</h2>
          <ul className="space-y-2">
            {order.products.map((product, index) => (
              <li
                key={index}
                className="bg-slate-700 p-3 rounded-lg text-sm hover:bg-slate-600 transition"
              >
                <span className="text-white font-medium">Ürün ID:</span> {product.product_id} — 
                <span className="ml-2">Adet: {product.count}</span> — 
                <span className="ml-2">Açıklama: {product.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={handleGoHome}
        className="mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-medium transition duration-200"
      >
        Ana Sayfaya Dön
      </button>
    </div>
  );
};
