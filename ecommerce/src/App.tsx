import { useEffect } from 'react';
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (token) {
      // Token'ı axios header'a tanımla
      axiosInstance.defaults.headers.common['Authorization'] = token; // Not: BEARER eklenmeyecek

      // Token'ı verify et
      axiosInstance
        .get('/verify') // Beklenen endpoint: /verify
        .then((res) => {
          const user = res.data;

          // Redux store'a kullanıcı bilgisi aktar
          dispatch(loginUser({ ...user, token }));

          // İsteğe bağlı olarak token'ı yenile (gerekirse)
          localStorage.setItem('token', token); // Eğer rememberMe varsa
        })
        .catch(() => {
          // Token geçersizse tüm bilgileri temizle
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
          delete axiosInstance.defaults.headers.common['Authorization'];
          dispatch(logoutUser());
        });
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/details' element={<ProductDetail />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/singup' element={<SingUp />} />
      <Route path='/teams' element={<Team />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
