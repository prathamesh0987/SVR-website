import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../style'
import { Navbar } from '../components'
import { products } from '../constants'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        </div>
      </div>

      <div className={`py-10 px-12 ${darkMode ? 'bg-primary' : 'bg-lightPrimary'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className={`${darkMode ? 'bg-sky-100' : 'bg-gray-300'} rounded-lg shadow-lg p-6`}>
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                {product.title}
              </h2>
              
              <Link to={product.link} className="text-blue-500 hover:underline">
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
