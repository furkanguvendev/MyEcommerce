import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { FooterSection } from "../layouts/FooterSection";
import { useEffect, useMemo, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, deleteAddress, setAddress, setPayment, updateAddress } from "../store/actions/cartActions";
import { MdOutlineUpload } from "react-icons/md";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import type { AppDispatch, RootState } from "../store/store";
import type { Address } from "../types&enums/types";
import { useForm } from "react-hook-form";
import { SiMastercard } from "react-icons/si";

export const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem("token");
  const cart = useSelector((state: RootState) => state.cart.cart);
  const kartlar = useSelector((state: RootState) => state.cart.payment);
  const addresses = useSelector((state: RootState) => state.cart.address);
  const [addAddressOpen, setAddAddressOpen] = useState(false);
  const [updateAddressOpen, setUpdateAddressOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const [editAddress, setEditAddress] = useState<Address | null>(null);
  const [agreemontStatus, setAgreemontStatus] = useState({
    addressInfo: false,
    paymentInfo: false,
  })

  const [step, setStep] = useState<1 | 2>(1);

  const { register: registerNew, handleSubmit: handleSubmitNew, reset: resetNew } = useForm<Address>();
  const { register: registerUpdate, handleSubmit: handleSubmitUpdate, reset: resetUpdate } = useForm<Address>();

    const totalPrice = useMemo(()=> {
        return cart.reduce((total, item) => {
            return total + item.product.price * item.count;
        }, 0)
    }, [cart]);

    const generate16DigitNumber = () =>{
        const digits = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
        return digits.match(/.{1,4}/g)?.join(' ') ?? '';
    }

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    if (addresses.length > 0) {
      setSelectedAddressId(addresses[0].id);
    } else {
      setSelectedAddressId(null);
    }
  }, [token, navigate, addresses]);

  useEffect(() => {
    dispatch(setPayment());
    axiosInstance
      .get("/user/address", {
        headers: {
          Authoization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setAddress(res.data));
        console.log(res.data);
      })
      .catch(() => {
        console.log("Adres bilgileri alınamadı.");
      });
  }, [token, dispatch]);

  const onSubmit = (data: Address) => {
    axiosInstance
      .post("/user/address", data, {
        headers: {
          Authoization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(addAddress(res.data["0"]));
        setAddAddressOpen(false);
        resetNew();
      })
      .catch((error) => {
        console.error("Adres eklenirken hata:", error);
      });
  };

  const handleEditClick = (data: Address) => {
    axiosInstance
      .put("/user/address", data, {
        headers: {
          Authoization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(updateAddress(res.data[0]));
        resetUpdate();
        setUpdateAddressOpen(false);
        setEditAddress(null);
      })
      .catch((error) => {
        console.error("Adres değiştirilirken hata:", error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-50 font-montserrat">
      <NavBar />
      <div className="w-full px-4 py-8 max-w-7xl mx-auto">
        <div className="flex text-base md:text-lg font-medium mb-8"> 
            <div
            className={`w-1/2 flex items-center justify-center gap-3 py-4 border-b-4 transition-colors duration-300 ${
                step === 1
                ? "border-sky-500 text-slate-800"
                : "border-neutral-300 text-neutral-500"
            }`}            >
            <span
                className={`rounded-full w-7 h-7 flex justify-center items-center text-xs md:text-sm font-bold ${
                step === 1 ? "bg-sky-500 text-white" : "bg-neutral-300 text-neutral-700"
                }`}            >
                1
            </span>
            <span className="tracking-wide">Adres Bilgileri</span>
            </div>
            <div
            className={`w-1/2 flex items-center justify-center gap-3 py-4 border-b-4 transition-colors duration-300 ${
                step === 2
                ? "border-sky-500 text-slate-800"
                : "border-neutral-300 text-neutral-500"
            }`}            >
            <span
                className={`rounded-full w-7 h-7 flex justify-center items-center text-xs md:text-sm font-bold ${
                step === 2 ? "bg-sky-500 text-white" : "bg-neutral-300 text-neutral-700"
                }`}            >
                2
            </span>
            <span className="tracking-wide">Ödeme Seçenekleri</span>
            </div>
        </div>

        {step === 1 && (
            <section className="flex flex-col lg:flex-row gap-8"> 
                <div className="flex-1"> 
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-semibold text-gray-800">Teslimat Adresi</h4>
                        <button
                        onClick={() => setAddAddressOpen(true)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm md:text-base"
                        >
                        <FaPlus /> Yeni Adres Ekle
                        </button>
                    </div>

                    {addAddressOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
                        <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl">
                            <button
                            onClick={() => setAddAddressOpen(false)}
                            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                            aria-label="Kapat"
                            >
                            ×
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Yeni Adres Ekle</h2>
                            <form onSubmit={handleSubmitNew(onSubmit)} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Adres Başlığı"
                                {...registerNew("title", { required: "Adres başlığı zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Ad"
                                {...registerNew("name", { required: "Ad zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Soyad"
                                {...registerNew("surname", { required: "Soyad zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                            />
                            <input
                                type="tel"
                                placeholder="Telefon"
                                {...registerNew("phone", { required: "Telefon zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Şehir"
                                {...registerNew("city", { required: "Şehir zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="İlçe"
                                {...registerNew("district", { required: "İlçe zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                            />
                            <textarea
                                placeholder="Adres Detayları (Mahalle, Cadde, Sokak, Bina No, Daire No)"
                                {...registerNew("neighborhood", { required: "Adres detayları zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded resize-none focus:outline-blue-500"
                                rows={3}
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Kaydet
                            </button>
                            </form>
                        </div>
                        </div>
                    )}

                    {addresses && addresses.length > 0 ? (
                        addresses.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg shadow-md p-4 my-3 flex flex-col xl:flex-row xl:items-center justify-between bg-white hover:shadow-lg transition-shadow duration-300"
                        >
                            <label className="flex items-start gap-3 cursor-pointer flex-1">
                            <input
                                type="radio"
                                name="selectedAddress"
                                value={item.id}
                                checked={selectedAddressId === item.id}
                                onChange={() => setSelectedAddressId(item.id)}
                                className="mt-2 transform scale-125"
                            />
                            <div className="flex flex-col text-left">
                                <p className="font-semibold text-lg">{item.title}</p>
                                <div className="text-gray-700 text-sm">
                                {item.name} {item.surname} - {item.phone}
                                </div>
                                <p className="text-gray-600 text-sm">
                                {item.city}, {item.district}
                                </p>
                                <p className="text-gray-600 italic text-sm">{item.neighborhood}</p>
                            </div>
                            </label>
                            <div className="flex gap-3 max-xl:ml-6 mt-3 xl:mt-0">
                                <button
                                    onClick={() => dispatch(deleteAddress(item.id))}
                                    className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                                    aria-label="Adres sil"
                                >
                                    <FaTrashAlt />
                                    <span >Sil</span>
                                </button>
                                <button
                                    onClick={() => {
                                    setUpdateAddressOpen(true);
                                    setEditAddress(item);
                                    }}
                                    className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors text-sm" 
                                    aria-label="Adres düzenle"
                                >
                                    <MdOutlineUpload />
                                    <span>Düzenle</span>
                                </button>
                            </div>

                            {/* Güncelleme modal */}
                            {updateAddressOpen && editAddress && (
                            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
                                <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl">
                                <button
                                    onClick={() => {
                                    setUpdateAddressOpen(false);
                                    resetUpdate();
                                    setEditAddress(null);
                                    }}
                                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                    aria-label="Kapat"
                                >
                                    ×
                                </button>
                                <h2 className="text-xl font-semibold mb-4">Adresi Güncelle</h2>
                                <form onSubmit={handleSubmitUpdate(handleEditClick)} className="space-y-4">
                                    <input type="hidden" defaultValue={editAddress.id} {...registerUpdate("id")} />
                                    <input
                                    type="text"
                                    defaultValue={editAddress.title}
                                    {...registerUpdate("title")}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                                    />
                                    <input
                                    type="text"
                                    defaultValue={editAddress.name}
                                    {...registerUpdate("name")}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                                    />
                                    <input
                                    type="text"
                                    defaultValue={editAddress.surname}
                                    {...registerUpdate("surname")}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                                    />
                                    <input
                                    type="tel"
                                    defaultValue={editAddress.phone}
                                    {...registerUpdate("phone")}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                                    />
                                    <input
                                    type="text"
                                    defaultValue={editAddress.city}
                                    {...registerUpdate("city")}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                                    />
                                    <input
                                    type="text"
                                    defaultValue={editAddress.district}
                                    {...registerUpdate("district")}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
                                    />
                                    <textarea
                                    defaultValue={editAddress.neighborhood}
                                    {...registerUpdate("neighborhood")}
                                    className="w-full border border-gray-300 p-2 rounded resize-none focus:outline-blue-500"
                                    rows={3}
                                    />
                                    <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
                                    >
                                    Güncelle
                                    </button>
                                </form>
                                </div>
                            </div>
                            )}
                        </div>
                        ))
                    ) : (
                        <p className="text-gray-500 mt-4">Kayıtlı adresiniz bulunmamaktadır. Lütfen yeni bir adres ekleyin.</p>
                    )}
                </div>
                <div className="w-full lg:w-80 p-6 bg-white rounded-lg shadow-md mt-8 lg:mt-0">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Sipariş Özeti</h3>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-700">Ürün Toplamı</p>
                        <p className="font-semibold text-gray-800">{totalPrice.toFixed(2)}₺</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-700">Kargo Ücreti</p>
                        <p className="font-semibold text-gray-800">{(totalPrice * 0.1).toFixed(2)}₺</p>
                    </div>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-sm text-left items-center text-gray-500">300₺ ve Üzeri Kargo <br/>Bedava (Satıcı Karşılar)</p>
                        <p className="font-semibold text-green-600">
                            {totalPrice > 300 ? `- ${(totalPrice * 0.1).toFixed(2)}₺` : `+ ${(totalPrice * 0.1).toFixed(2)}₺`}
                        </p>
                    </div>
                    <hr className="my-4 border-gray-300" />
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-lg font-bold text-gray-800">Toplam</p>
                        <p className="text-xl font-bold text-blue-600">
                            {totalPrice > 300 ? `${totalPrice.toFixed(2)}₺` : `${(totalPrice + totalPrice * 0.1).toFixed(2)}₺`}
                        </p>
                    </div>
                    <label className="flex items-start gap-2 mb-4 text-sm cursor-pointer">
                        <input type="checkbox" checked={agreemontStatus.addressInfo} className="mt-1" onChange={()=> {
                            setAgreemontStatus({
                                ...agreemontStatus,
                                addressInfo: !agreemontStatus.addressInfo,
                            })
                        }}/>
                        <span className="text-gray-700">Ön Bilgilendirme Koşulları'nı ve Mesafeli Satış Sözleşmesi'ni okudum, onaylıyorum.</span>
                    </label>
                    <button
                        onClick={() => setStep(2)}
                        className={`w-full py-3 rounded text-white font-semibold transition-colors ${
                            selectedAddressId && agreemontStatus.addressInfo
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                        disabled={!selectedAddressId || !agreemontStatus.addressInfo}
                    >
                        Kaydet ve Devam Et
                    </button>
                </div>
            </section>
        )}

        {step === 2 && (
            <section className="bg-white rounded-lg shadow-md p-6 min-h-[300px] flex items-center justify-center text-gray-500 text-lg"> {/* Placeholder for Payment Options */}
                {kartlar.map((card)=>(
                    <div>
                        <div>
                            <img src=""/>
                            <SiMastercard/>
                        </div>
                        <p>{card.id}</p>
                        <button onClick={()=>console.log(generate16DigitNumber())}>Deneme</button>
                    </div>
                ))}
                <button onClick={() => setStep(1)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Geri Dön</button>
            </section>
        )}
      </div>
      <FooterSection />
    </div>
  );
};