import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { Contact } from './pages/Contact'
import { Team } from './pages/Team'
import { AboutUs } from './pages/AboutUs'

function App() {


  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/details' element={<ProductDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/teams' element={<Team />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
  )
}

export default App
