import React, { useState } from 'react'
import styles from '../style'
import { Navbar } from '../components'
import { products } from '../constants'
import AboutCard from '../components/AboutCard'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const ProductPage = () =>(
    <div className='bg-primary w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center'> Our Products</h1>
            <div style={styles.container}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
        </div>
           
    </div>
        </div>
        
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

      </div>
  )


export default ProductPage