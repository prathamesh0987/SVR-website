import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Footer, Navbar } from '../components';
import styles from '../style';
import { about } from "../constants";
import AboutCard from '../components/AboutCard';

const About = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext); // Access theme state and toggle function

  return (
    <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode}/>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ${darkMode ? 'text-white' : 'text-black'} ss:leading-[100px] leading-[75px] text-center`}> Yes we are, SVR!</h1>
          <div className="flex flex-wrap sm:justify-start justify-between w-full relative z-[1] items-center ">
            {about.map((card) => <AboutCard key={card.id} {...card} />)}
          </div>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer darkMode={darkMode}/>
        </div>
      </div>
    </div>
  );
};

export default About;
