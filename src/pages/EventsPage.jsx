import React from 'react';
import Slider from 'react-slick'; // Carousel library
import styles from '../style';
import { Navbar } from '../components';
import Footer from '../components/Footer';

import { events } from '../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCard = ({ images, title, description, isReversed }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-10`}>
      {/* Conditionally render the carousel first or second based on isReversed */}
      <div className={`relative w-full h-auto overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        <Slider {...sliderSettings}>
          {images.map((imgSrc, index) => (
            <div key={index} className="relative">
              <img src={imgSrc} alt={`Event ${title} - Image ${index + 1}`} className="w-full h-96 object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-70 transition duration-500"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Conditionally render the content first or second based on isReversed */}
      <div className={`p-6 flex flex-col justify-center bg-primary transition duration-500 ease-in-out transform group-hover:bg-gray-200 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
        <h2 className="text-white text-2xl font-bold group-hover:text-blue-600 transition-all duration-300">{title}</h2>
        <p className="text-zinc-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

const EventsPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Events Section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="w-full bg-primary py-10 px-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              images={event.images} // An array of images for the event
              title={event.title}
              description={event.description}
              isReversed={index % 2 !== 0} // Alternate layout for odd-indexed events
            />
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default EventsPage;
