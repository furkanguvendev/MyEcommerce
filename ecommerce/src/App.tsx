import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { Contact } from './pages/Contact'

function App() {


  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/details' element={<ProductDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
  )
}

export default App
