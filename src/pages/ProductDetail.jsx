import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Navbar } from '../components';
import Footer from '../components/Footer';
import styles from '../style';
import { useParams } from 'react-router-dom';
import { products } from '../constants'; // Assuming products are imported from a constants file

const ProductDetail = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { productId } = useParams(); // Capture productId from the URL
  const product = products.find(p => p.id === parseInt(productId)); // Find the product by id

  const [activeTab, setActiveTab] = useState('description'); // Manage the active tab state

  if (!product) {
    return <div>Product not found</div>;
  }

  // Content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div>
            <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Description:</strong></p>
            <ul className={`list-disc ${darkMode ? 'text-white' : 'text-black'} pl-5`}>
              {product.description.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        );
      case 'technical':
        return (
          <div>
            <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Specifications:</strong></p>
            <ul className={`list-disc ${darkMode ? 'text-white' : 'text-black'} pl-5`}>
              {product.technicalSpecs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        );
      case 'models':
        return (
          <div>
            <p className={`${darkMode ? 'text-white' : 'text-black'}`}><strong>Models:</strong></p>
            <ul className={`list-disc ${darkMode ? 'text-white' : 'text-black'} pl-5`}>
              {product.models.map((model, index) => (
                <li key={index}>{model}</li>
              ))}
            </ul>
          </div>
        );
      // case 'flowGraphs':
      //   return (
      //     <div>
      //       <p><strong>Flow Graphs:</strong></p>
      //       <img src={product.flowGraphImage} alt="Flow Graphs" />
      //     </div>
      //   );
      // case 'precautions':
      //   return <p>{product.precautions}</p>;
      // case 'howToOrder':
      //   return <p>{product.howToOrder}</p>;
      default:
        return null;
    }
  };

  return (
    <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} w-full overflow-hidden`}>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        </div>
      </div>

      {/* Product Detail Section */}
      <div className={`py-10 px-12 ${darkMode ? 'bg-primary' : 'bg-lightPrimary'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-blue-600' : 'text-blue-600'}  mb-4`}>
                {product.title}
              </h1>
              <p className={`text-lg ${darkMode ? 'text-white' : 'text-black'} mb-4`}>
                {product.details}
              </p>

              {/* Buttons */}
              <div className="flex space-x-4 mb-6">
                {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                  Ask Quote
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  3D Download
                </button> */}
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Tabs - Now below the product description */}
          <div className="border-b my-6 flex justify-center">
            <ul className="flex space-x-4 text-sm">
              <li
                className={`cursor-pointer ${activeTab === 'description' ? 'bg-blue-500 text-white px-4 py-2 rounded-lg' : 'bg-gray-500 text-white px-4 py-2 rounded-lg'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </li>
              <li
                className={`cursor-pointer ${activeTab === 'technical' ? 'bg-blue-500 text-white px-4 py-2 rounded-lg' : 'bg-gray-500 text-white px-4 py-2 rounded-lg'}`}
                onClick={() => setActiveTab('technical')}
              >
                Technical Specifications
              </li>
              <li
                className={`cursor-pointer ${activeTab === 'models' ? 'bg-blue-500 text-white px-4 py-2 rounded-lg' : 'bg-gray-500 text-white px-4 py-2 rounded-lg'}`}
                onClick={() => setActiveTab('models')}
              >
                Models
              </li>
              {/* <li
                className={`cursor-pointer ${activeTab === 'flowGraphs' ? 'bg-blue-500 text-white px-4 py-2 rounded-lg' : 'bg-gray-500 text-white px-4 py-2 rounded-lg'}`}
                onClick={() => setActiveTab('flowGraphs')}
              >
                Flow Graphs
              </li> */}
              {/* <li
                className={`cursor-pointer ${activeTab === 'precautions' ? 'bg-blue-500 text-white px-4 py-2 rounded-lg' : 'bg-gray-500 text-white px-4 py-2 rounded-lg'}`}
                onClick={() => setActiveTab('precautions')}
              >
                Precautions
              </li> */}
              {/* <li
                className={`cursor-pointer ${activeTab === 'howToOrder' ? 'bg-blue-500 text-white px-4 py-2 rounded-lg' : 'bg-gray-500 text-white px-4 py-2 rounded-lg'}`}
                onClick={() => setActiveTab('howToOrder')}
              >
                How to order
              </li> */}
            </ul>
          </div>

          {/* Tab Content */}
          <div>
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
