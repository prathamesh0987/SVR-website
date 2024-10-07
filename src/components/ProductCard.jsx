import React from 'react';

const ProductCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-center">
      <main className="relative bg-gradient-to-br from-blue-300 to-purple-300 w-full p-5 m-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-500 ease-in-out">
        {/* Product Image */}
        <img 
          src={img} 
          alt={title} 
          className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" 
        />
        
        {/* Product Details Section */}
        <section className="p-4 relative z-10">
          {/* Title */}
          <h1 className="font-title font-bold text-2xl md:text-3xl text-white">
            {title}
          </h1>

          {/* View Details Button */}
          <button className="mt-3 py-2 px-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 hover:text-white focus:ring-2 focus:ring-yellow-300 transition duration-300 ease-in-out">
            View Details
          </button>
        </section>

        {/* Floating Content/Description on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center p-4 transition-opacity duration-500 rounded-lg z-0">
          <p className="text-white text-center">{content}</p>
        </div>
      </main>
    </div>
  );
};

export default ProductCard;
