import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import type { Product } from "../types&enums/types";
import { InfoBar } from "../components/InfoBar";
import { NavBar } from "../components/NavBar";
import { FooterSection } from "../layouts/FooterSection";
import {FaHooli, FaLyft, FaPiedPiperHat, FaStripe, FaAws, FaRedditAlien} from "react-icons/fa";
import { ProductDetailsCard } from "../layouts/ProductDetailsCard";
import { ProductDescrip } from "../layouts/ProductDescrip";
import { ProductDetailsBest } from "../layouts/ProductDetailsBest";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const { categoryId, productId } = useParams();

  const [product, setProduct] = useState<Product>();
  const [items, setItems] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!productId) return;
    axiosInstance.get(`/products/${Number(productId)}`)
      .then(res => {
        setProduct(res.data);
        console.log(res.data);
        setLoading(false);
        toast.success("Ürün Bilgileri Başarı İle Getirildi!!")
      })
      .catch(err => {
        console.error("Ürün alınırken hata oluştu", err);
      });
  }, [productId]);

  useEffect(() => {
    if (!categoryId) return;
    axiosInstance
      .get(`/products?category=${Number(categoryId)}&sort=sell_count:desc&limit=8`)
      .then(res => {
        setItems(res.data.products);
        console.log(res.data);
      })
      .catch(err => {
        console.error("Kategori ürünleri alınırken hata oluştu", err);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex flex-row gap-2 justify-center items-center h-screen">
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center font-montserrat">
      <InfoBar />
      <NavBar />
      {product && <ProductDetailsCard product={product} />}
      <ProductDescrip />
      {items && <ProductDetailsBest items={items} />}
      <div className='w-4/5 flex flex-col xl:flex-row justify-between text-neutral-500 items-center py-28'>
        <FaHooli className='w-36 xl:w-24 h-36 xl:h-24' />
        <FaLyft className='w-36 xl:w-24 h-36 xl:h-24' />
        <FaPiedPiperHat className='w-36 xl:w-24 h-36 xl:h-24' />
        <FaStripe className='w-36 xl:w-24 h-36 xl:h-24' />
        <FaAws className='w-36 xl:w-24 h-36 xl:h-24' />
        <FaRedditAlien className='w-36 xl:w-24 h-36 xl:h-24' />
      </div>
      <FooterSection />
    </div>
  );
};
