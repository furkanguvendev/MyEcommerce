import { useEffect, useState } from 'react';
import { ShopCard } from '../components/ShopCard';
import { IoGrid } from "react-icons/io5";
import { BsListCheck } from "react-icons/bs";
import { Clients } from './Clients';
import axiosInstance from '../api/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setProductList, setTotal } from '../store/actions/productActions';
import type { RootState } from '../store/store';
import type { Product } from "../types&enums/types";

export const ShopProduct = () => {
    const { categoryId } = useParams();
    const [navSelected, setNavSelected] = useState<'first' | 'next' | null>(null);
    const [pageSelected, setPageSelected] = useState<number>(1);
    const [product, setProduct] = useState<Product[]>([]);
    const dispatch = useDispatch();
    const urunler = useSelector((state: RootState) => state.product.productList);
    const total = useSelector((state: RootState) => state.product.total);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");

    const pageSize = 12;
    const totalPages = Math.ceil(total / pageSize);

    const pageClass = (num: number) =>
        `border-2 border-neutral-300 font-bold text-sm xl:text-lg w-14 h-24 ${pageSelected === num ? 'bg-sky-500 text-white' : 'bg-white text-sky-500'}`;


    useEffect(() => {
        const offset = (pageSelected - 1) * pageSize;
        const params = new URLSearchParams();

        if (categoryId) params.append("category", categoryId);
        if (searchTerm) params.append("filter", searchTerm);


        let sortValue = "";
        switch (sortOption) {
            case "popular":
                sortValue = "sell_count:desc";
                break;
            case "newest":
                sortValue = "sell_count:asc";
                break;
            case "price:asc":
                sortValue = "price:asc";
                break;
            case "price:desc":
                sortValue = "price:desc";
                break;
            case "discount":
                sortValue = "stock:desc";
                break;
            case "rating":
                sortValue = "rating:desc";
                break;
        }

        if (sortValue) params.append("sort", sortValue);
        params.append("offset", offset.toString());
        params.append("limit", pageSize.toString());

        axiosInstance
            .get(`/products?${params.toString()}`)
            .then((res) => {
                dispatch(setProductList(res.data.products));
                dispatch(setTotal(res.data.total));
            })
            .catch(() => {
                console.log("Veri getirilemedi.");
            });
    }, [categoryId, pageSelected, searchTerm, sortOption]);


    useEffect(() => {
        setProduct(urunler);
    }, [urunler]);

    const handleFirst = () => {
        setPageSelected(1);
        setNavSelected('first');
    };

    const handleNext = () => {
        if (pageSelected < totalPages) {
            setPageSelected(prev => prev + 1);
            setNavSelected('next');
        }
    };

    const handleFilter = () => {
        setPageSelected(1); // Filtrelemeden sonra 1. sayfaya git
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-11/12 flex flex-col max-xl:gap-5 xl:flex-row xl:h-32 items-center justify-between mt-6'>
                <p className='font-bold text-sm xl:text-xl text-neutral-500'>Showing {product.length} result</p>
                <div className='flex flex-row items-center gap-5'>
                    <p className='font-bold text-sm xl:text-xl text-neutral-500'>Views:</p>
                    <button className='w-16 h-16 border-2 border-neutral-200 flex justify-center items-center'><IoGrid /></button>
                    <button className='w-16 h-16 border-2 border-neutral-200 flex justify-center items-center'><BsListCheck /></button>
                </div>
                <div className='flex flex-col max-xl:items-center xl:flex-row gap-3'>
                    <input
                        type='text'
                        placeholder='Aramak için yazın...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border border-neutral-300 bg-white rounded-lg w-48 h-16 px-2'
                    />
                    <select
                        className='border border-neutral-300 bg-neutral-200 rounded-lg w-48 h-16'
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">Sıralama Seç</option>
                        <option value="popular">Popularity</option>
                        <option value="newest">Newest Arrivals</option>
                        <option value="price:asc">Price: Low to High</option>
                        <option value="price:desc">Price: High to Low</option>
                        <option value="discount">Highest Discount</option>
                        <option value="rating">Top Rated</option>
                    </select>
                    <button
                        onClick={handleFilter}
                        className='bg-sky-500 font-bold text-sm xl:text-xl w-32 h-16 text-white rounded-md'
                    >
                        Filter
                    </button>
                </div>
            </div>
            <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16 my-16'>
                {product.map((p, i) => (
                    <ShopCard key={i} product={p} />
                ))}
            </div>

            {/* {DESKTOP PAGINATION} */}
            <div className="hidden xl:flex">
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
            {/* MOBILE PAGINATION */}
            <div className="flex flex-col items-center gap-4 md:hidden">
                <p className='text-sm font-medium text-neutral-500'>
                    Page {pageSelected} of {totalPages}
                </p>
                <div className="flex gap-4">
                    <button
                    disabled={pageSelected === 1}
                    onClick={handleFirst}
                    className="bg-sky-500 text-white rounded-md px-4 py-2 disabled:opacity-50"
                    >
                    First
                    </button>
                    <button
                    disabled={pageSelected === totalPages}
                    onClick={handleNext}
                    className="bg-sky-500 text-white rounded-md px-4 py-2 disabled:opacity-50"
                    >
                    Next
                    </button>
                </div>
            </div>
            <Clients />
        </div>
    );
};
