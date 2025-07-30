import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { FooterSection } from "../layouts/FooterSection"
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, deleteAddress, setAddress, updateAddress } from "../store/actions/cartActions";
import { MdOutlineUpload } from "react-icons/md";
import { FaPlus,FaTrashAlt } from "react-icons/fa";
import type { RootState } from "../store/store";
import type { Address } from "../types&enums/types";
import { useForm } from "react-hook-form";

export const Order = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const addresses = useSelector((state: RootState) => state.cart.address);
    const [addAddressOpen, setAddAddressOpen] = useState(false);
    const [updateAddressOpen, setUpdateAddressOpen] = useState(false);
    // const [step, setStep] = useState<1 | 2>(1);
    const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);

    const { register: registerNew, handleSubmit: handleSubmitNew, reset: resetNew } = useForm<Address>();
    const { register: registerUpdate, handleSubmit: handleSubmitUpdate, reset: resetUpdate } = useForm<Address>();

    useEffect(() => {
        if(!token) {
            navigate("/login");
        }
        if(addresses.length > 0) {
            setSelectedAddressId(addresses[0].id);
        } else {
            setSelectedAddressId(null);
        }
    }, [token, navigate, addresses]);

    useEffect(() => {
       axiosInstance.get("/user/address", {headers: {
        Authoization: `Bearer ${token}`,
       }})
       .then((res)=>{
        dispatch(setAddress(res.data));
        console.log(res.data);
       })
       .catch(()=>{
        console.log("Adres bilgileri alınamadı.")
       })
    }, [token, dispatch]);

    const onSubmit = (data: Address) => {
       axiosInstance.post("/user/address", data, {headers: {
        Authoization: `Bearer ${token}`,
       }})
        .then(res => {
            dispatch(addAddress(res.data["0"]));
            setAddAddressOpen(false);
            resetNew();
        })
        .catch((error) => {
            console.error("Adres eklenirken hata:", error);
        })
    }

    const handleEditClick = (data: Address) => {
        axiosInstance.put("/user/address", data, {
            headers: {
                Authoization: `Bearer ${token}`,
            }
        })
        .then(()=>{
            dispatch(updateAddress(data));
            resetUpdate();
        })
        .catch((error)=>{
            console.error("Adres değiştirilirken hata:", error);
        })
    };
    
  return (
    <div className="w-full flex flex-col items-center">
        <NavBar />
        <div>
            <div>
                <div>
                    <h3><span>1.</span> Adres Bilgileri</h3>
                    <h3><span>2.</span> Ödeme Seçenekleri</h3>
                </div>
                <div>
                    <h4>Teslimat Adresi</h4>
                    <button onClick={() => setAddAddressOpen(true)}><FaPlus/> Yeni Adres Ekle</button>
                    {addAddressOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                            <div className="bg-white rounded-2xl p-6 w-96 relative shadow-xl">
                            <button
                                onClick={() => setAddAddressOpen(false)}
                                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Yeni Adres Ekle</h2>
                            <form onSubmit={handleSubmitNew(onSubmit)} className="space-y-4">
                                <input
                                type="text"
                                placeholder="Adres Başlığı"
                                {...registerNew("title", { required: "Adres başlığı zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded"
                                />
                                <input
                                type="text"
                                placeholder="Ad"
                                {...registerNew("name", { required: "Ad zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded"
                                />
                                <input
                                type="text"
                                placeholder="Soyad"
                                {...registerNew("surname", { required: "Soyad zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded"
                                />
                                <input
                                type="tel"
                                placeholder="Telefon"
                                {...registerNew("phone", { required: "Telefon zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded"
                                />
                                <input
                                type="text"
                                placeholder="Şehir"
                                {...registerNew("city", { required: "Şehir zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded"
                                />
                                <input
                                type="text"
                                placeholder="İlçe"
                                {...registerNew("district", { required: "İlçe zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded"
                                />
                                <textarea
                                placeholder="Adres Detayları"
                                {...registerNew("neighborhood", { required: "Adres detayları zorunludur" })}
                                className="w-full border border-gray-300 p-2 rounded resize-none"
                                />
                                <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                                >
                                Kaydet
                                </button>
                            </form>
                            </div>
                        </div>
                    )}
                    {addresses && addresses.length > 0 ? (
                      addresses.map((item) => (
                        <div key={item.id} className="border p-3 my-2 rounded shadow-sm">
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                            type="radio"
                            name="selectedAddress"
                            value={item.id}
                            checked={selectedAddressId === item.id}
                            onChange={() => {
                                setSelectedAddressId(item.id);
                            }}
                            className="mt-1"
                            />
                            <div className="flex flex-col">
                            <p className="font-semibold">{item.title}</p>
                            <p>{item.name} {item.surname} - {item.phone}</p>
                            <p>{item.city}, {item.district}</p>
                            <p>{item.neighborhood}</p>
                            </div>
                        </label>
                        <button onClick={()=>dispatch(deleteAddress(item.id))}><FaTrashAlt/> Sil</button>
                        <button onClick={()=> setUpdateAddressOpen(true)}><MdOutlineUpload/>Düzenle</button>
                        {updateAddressOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                <div className="bg-white rounded-2xl p-6 w-96 relative shadow-xl">
                                <button
                                    onClick={() => setUpdateAddressOpen(false)}
                                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                                <h2 className="text-xl font-semibold mb-4">Adresi Güncelle</h2>
                                <form onSubmit={handleSubmitUpdate(handleEditClick)} className="space-y-4">
                                    <input
                                    type="hidden"
                                    defaultValue={item.id}
                                    {...registerUpdate("id")}
                                    />
                                    <input
                                    type="text"
                                    placeholder="Adres Başlığı"
                                    defaultValue={item.title}
                                    {...registerUpdate("title", { required: "Adres başlığı zorunludur" })}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    />
                                    <input
                                    type="text"
                                    placeholder="Ad"
                                    defaultValue={item.name}
                                    {...registerUpdate("name", { required: "Ad zorunludur" })}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    />
                                    <input
                                    type="text"
                                    placeholder="Soyad"
                                    defaultValue={item.surname}
                                    {...registerUpdate("surname", { required: "Soyad zorunludur" })}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    />
                                    <input
                                    type="tel"
                                    placeholder="Telefon"
                                    defaultValue={item.phone}
                                    {...registerUpdate("phone", { required: "Telefon zorunludur" })}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    />
                                    <input
                                    type="text"
                                    placeholder="Şehir"
                                    defaultValue={item.city}
                                    {...registerUpdate("city", { required: "Şehir zorunludur" })}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    />
                                    <input
                                    type="text"
                                    placeholder="İlçe"
                                    defaultValue={item.district}
                                    {...registerUpdate("district", { required: "İlçe zorunludur" })}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    />
                                    <textarea
                                    placeholder="Adres Detayları"
                                    defaultValue={item.neighborhood}
                                    {...registerUpdate("neighborhood", { required: "Adres detayları zorunludur" })}
                                    className="w-full border border-gray-300 p-2 rounded resize-none"
                                    />
                                    <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
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
                        <p className="text-gray-500 mt-4">Kayıtlı adresiniz bulunmamaktadır.</p>
                    )}
                </div>
                <div>

                </div>
                <button onClick={()=> console.log(addresses)}>Adresler</button>
                <button onClick={()=>console.log(selectedAddressId)}>Seçilen Adresin İd</button>
            </div>
        </div>
        <FooterSection />
    </div>
  )
}
