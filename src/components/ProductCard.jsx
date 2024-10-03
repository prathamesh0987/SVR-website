// src/OrangeProduct.js
import React from 'react';
import { fms } from '../assets';

const ProductCard = ({content,name,title,img}) => {
  return (
    <div className="bg-black flex justify-center md:grid-cols-2">
      <main className="bg-orange-200 w-full max-w-xs m-10 p-3 md:grid md:grid-cols-2 md:max-w-3xl md:gap-4 md:p-5 bg-mobile bg-no-repeat bg-bottom md:bg-desktop shadow-[5px_5px_0_orange]  hover:bg-orange-400">
        <img src={img} alt="orange with stem and leaf on a white-gray background" />
        <section>
          <h1 className="font-title font-bold text-2xl md:text-3xl">{title}</h1>
          

          <h3 className="uppercase font-light text-lg">Features</h3>
          <ul className="list-disc marker:text-orange text-sm text-gray-600 font-light"> 
            <li className="ml-3 pl-2"><span className="font-medium">Nature's candy</span>: A symphony of sweet and tangy notes</li>
            <li className="ml-3 pl-2"><span className="font-medium">Vibrant hue</span>: A visual feast for the eyes</li>
            <li className="ml-3 pl-2"><span className="font-medium">Invigorating aroma</span>: A sensory delight</li>
            <li className="ml-3 pl-2"><span className="font-medium">Nutrient-rich</span>: Bursting with Vitamin C</li>
            <li className="ml-3 pl-2"><span className="font-medium">Perfect for</span>: snacking, juicing, or culinary creations</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ProductCard;
