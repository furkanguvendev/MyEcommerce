import React from 'react'
import { InfoBar } from '../components/InfoBar'
import { NavBar } from '../components/NavBar'
import { FooterSection } from '../layouts/FooterSection'
import { ShopFilter } from '../layouts/ShopFilter'
import { ShopProduct } from '../layouts/ShopProduct'

export const Shop = () => {
  return (
    <div className='w-full font-montserrat flex flex-col justify-center items-center'>
        <InfoBar />
        <NavBar />
        <ShopFilter />
        <ShopProduct />
        <FooterSection />
    </div>
  )
}
