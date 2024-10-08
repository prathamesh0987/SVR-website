import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../style'
import { Navbar } from '../components'
import { products } from '../constants'
import AboutCard from '../components/AboutCard'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'


const ProductPage = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode}/>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.flexStart}`}>

        <div className={`${styles.boxWidth}`}>
            <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ${darkMode ? 'text-white' : 'text-black'} ss:leading-[100px] leading-[75px] text-center`}> Our Products</h1>
            <div style={styles.container}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
        </div>
           
    </div>
        </div>
        
      </div>

      <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer darkMode={darkMode} />
        </div>
      </div>

      </div>
  )
}

export default ProductPage