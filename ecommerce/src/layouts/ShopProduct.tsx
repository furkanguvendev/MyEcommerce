import { useEffect, useState } from 'react'
import { ShopCard } from '../components/ShopCard';
import { IoGrid } from "react-icons/io5";
import { BsListCheck } from "react-icons/bs";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { Clients } from './Clients';
import axiosInstance from '../api/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setProductList, setTotal } from '../store/actions/productActions';
import type { RootState } from '../store/store';
import type { Product } from "../types&enums/types"

export const ShopProduct = () => {
    const { categoryId } = useParams();
    const [navSelected, setNavSelected] = useState<'first' | 'next' | null>(null);
    const [pageSelected, setPageSelected] = useState<number>(1);
    const [product, setProduct] = useState<Product[]>([]);
    const dispatch = useDispatch();
    const urunler = useSelector((state: RootState) => state.product.productList);

    // Her sayfada gösterilecek ürün sayısı
    const pageSize = 12;
    // Toplam sayfa sayısı
    const totalPages = Math.ceil(urunler.length / pageSize);

    const pageClass = (num: number) =>
        `border-2 border-neutral-300 font-bold text-sm xl:text-lg w-14 h-24 ${pageSelected === num ? 'bg-sky-500 text-white' : 'bg-white text-sky-500'}`;

    // Sayfa değişince product state'ini güncelle
    useEffect(() => {
        const start = (pageSelected - 1) * pageSize;
        const end = start + pageSize;
        setProduct(urunler.slice(start, end));
    }, [urunler, pageSelected]);

    // Data çekme
    useEffect(() => {
        axiosInstance
            .get(`/products?category=${categoryId}`)
            .then((res) => {
                dispatch(setProductList(res.data.products));
                dispatch(setTotal(res.data.total));
                setPageSelected(1); // yeni data geldiğinde ilk sayfaya dön
            })
            .catch(() => {
                console.log("Data Getirilemedi");
            });
    }, [dispatch, categoryId]);

    const handleFirst = () => {
        setPageSelected(1);
        setNavSelected('first');
    };

    const handleNext = () => {
        if (pageSelected < totalPages) {
            setPageSelected(pageSelected + 1);
            setNavSelected('next');
        }
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-11/12 flex flex-col max-xl:gap-5 xl:flex-row xl:h-32 items-center justify-between mt-6'>
                <p className='font-bold text-sm xl:text-xl text-neutral-500'>Showing {product.length} result</p>
                <div className='flex flex-row items-center gap-5'>
                    <p className='font-bold text-sm xl:text-xl text-neutral-500'>Vievs:</p>
                    <button className='w-16 h-16 border-2 border-neutral-200 flex justify-center items-center'><IoGrid /></button>
                    <button className='w-16 h-16 border-2 border-neutral-200 flex justify-center items-center'><BsListCheck /></button>
                </div>
                <div className='flex flex-row gap-3'>
                    <select className='border border-neutral-300 bg-neutral-200 rounded-lg w-48 h-16'>
                        <option value="popular">Popularity</option>
                        <option value="newest">Newest Arrivals</option>
                        <option value="price-asc">Price: Low to High <FaLongArrowAltUp /></option>
                        <option value="price-desc">Price: High to Low <FaLongArrowAltDown /></option>
                        <option value="discount">Highest Discount</option>
                        <option value="rating">Top Rated</option>
                    </select>
                    <button className='bg-sky-500 font-bold text-sm xl:text-xl w-32 h-16 text-white rounded-md'>Filter</button>
                </div>
            </div>
            <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16 my-16'>
                {product.map((p, i) => (
                    <ShopCard key={i} product={p} />
                ))}
            </div>
            <div className="flex">
                <button
                    onClick={handleFirst}
                    className={`border border-neutral-500 font-bold text-sm xl:text-lg w-28 h-24 rounded-l-[12px] 
                    ${navSelected === 'first' ? 'bg-neutral-100 text-neutral-300' : 'bg-white text-sky-500'}`}
                >
                    First
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        className={pageClass(num)}
                        onClick={() => {
                            setPageSelected(num);
                            setNavSelected(null);
                        }}
                    >
                        {num}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    className={`border border-neutral-500 font-bold text-sm xl:text-lg w-28 h-24 rounded-r-[12px] 
                    ${navSelected === 'next' ? 'bg-neutral-100 text-neutral-300' : 'bg-white text-sky-500'}`}
                >
                    Next
                </button>
            </div>
            <button onClick={() => { console.log(urunler) }}>DATA KONTROL</button>
            <Clients />
        </div>
    );
};
