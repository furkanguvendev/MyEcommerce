import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
import { AboutUs } from './pages/AboutUs';
import { SingUp } from './pages/SingUp';
import { Team } from './pages/Team';
import { Pricing } from './pages/Pricing';
import { Login } from './pages/Login';
import axiosInstance from './api/axiosInstance';
import { loginUser, logoutUser } from './store/actions/userActions';
import { setCategories } from './store/actions/productActions';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = token;

      axiosInstance
        .get('/verify')
        .then((res) => {
          const user = res.data;

          dispatch(loginUser({ ...user, token }));

          localStorage.setItem('token', token);
        })
        .catch(() => {
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
          delete axiosInstance.defaults.headers.common['Authorization'];
          dispatch(logoutUser());
        });
    }
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get("/categories")
      .then((res) => {
        dispatch(setCategories(res.data));
        setLoading(false);
      })
      .catch(() => {
        console.log("Categories Not Found");
        setLoading(false);
      });
  }, [dispatch]);

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
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop/:gender/:categoryName/:categoryId' element={<Shop />} />
      <Route path='/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId' element={<ProductDetail />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/singup' element={<SingUp />} />
      <Route path='/teams' element={<Team />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
    </Routes>
  );
}

export default App;
