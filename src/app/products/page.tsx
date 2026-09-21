import ConacentProducts from '@/src/features/products/components/ConacentProduct'
import OnlineProducts from '@/src/features/products/components/OnlineProducts'
import ProductsHero from '@/src/features/products/components/ProductsHero'
import Technologies from '@/src/features/products/components/Technologies'
import { main } from 'motion/react-client'
import React from 'react'

export default function Products() {
  return (
    <main>
        <ProductsHero/>
        <OnlineProducts/>
        <ConacentProducts/>
        <Technologies/>
    </main>
  )
}
