import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { Contact } from './pages/Contact'
import { AboutUs } from './pages/AboutUs'
import { SingUp } from './pages/SingUp'
import { Team } from './pages/Team'
import { Pricing } from './pages/Pricing'

function App() {


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
      </Routes>
  )
}

export default App
