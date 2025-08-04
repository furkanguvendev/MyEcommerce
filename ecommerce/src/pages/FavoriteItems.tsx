import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { FooterSection } from "../layouts/FooterSection";
import type { Category } from "../types&enums/types";
import { removeFav, addItem, removeItem } from "../store/actions/cartActions";
import { TiDeleteOutline } from "react-icons/ti";
import { IoCart } from "react-icons/io5";

export const FavoriteItems = () => {
  const dispatch = useDispatch();
  const favItems = useSelector((state: RootState) => state.cart.favorite);
  const cartItems = useSelector((state: RootState) => state.cart.cart); // cart dizisini al
  const categories: Category[] = useSelector((state: RootState) => state.product.categories);

  const slugify = (text: string): string =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ç/g, "c")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/ğ/g, "g")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <NavBar />
      <div className="w-11/12 mx-auto my-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Favorite Products</h1>

        {favItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">You haven't added any favorites yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {favItems.map((product) => {
              const category = categories.find(cat => cat.id === product.category_id);
              if (!category) return null;

              const isInCart = cartItems.some(item => item.product.id === product.id); // kontrol

              const genderPrefix = category.code.split(":")[0];
              const categoryName = category.code.split(":")[1];
              const productSlug = slugify(product.name);
              const url = `/shop/${genderPrefix}/${categoryName}/${category.id}/${productSlug}/${product.id}`;

              return (
                <div
                  key={product.id}
                  className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden group"
                >
                  {/* Favoriden Kaldır */}
                  <button
                    onClick={() => dispatch(removeFav(product.id))}
                    className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md hover:scale-90 transition transform"
                    title="Remove from Favorites"
                  >
                    <TiDeleteOutline className="text-red-500 text-xl" />
                  </button>

                  {/* Sepete Ekle / Çıkar */}
                  <button
                    onClick={() =>
                      isInCart
                        ? dispatch(removeItem(product.id))
                        : dispatch(addItem({ count: 1, product }))
                    }
                    className={`absolute top-2 left-2 z-10 rounded-full p-2 shadow-md hover:scale-90 transition transform ${
                      isInCart ? "bg-red-100" : "bg-white"
                    }`}
                    title={isInCart ? "Remove from Cart" : "Add to Cart"}
                  >
                    <IoCart
                      className={`text-xl ${
                        isInCart ? "text-red-600" : "text-green-600"
                      }`}
                    />
                  </button>

                  <Link to={url}>
                    <img
                      src={product.images[0]?.url || "/placeholder.jpg"}
                      alt={product.name}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between h-40">
                      <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
                      <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                      <p className="text-primary font-bold text-md mt-2">${product.price.toFixed(2)}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
};
