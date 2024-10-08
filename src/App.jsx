import React, { useContext } from "react";
import { ThemeContext } from './context/ThemeContext'; // Import ThemeContext
import styles from "./style";
import { Navbar, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Hero } from "./components";

const App = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext); // Access theme state and toggle function

  return (
    <div className={`w-full overflow-hidden ${darkMode ? 'bg-primary' : 'bg-lightPrimary'} transition-all duration-500`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        </div>
      </div>

      <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero darkMode={darkMode} />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats darkMode={darkMode}/>
          <Business darkMode={darkMode}/>
          <Billing  darkMode={darkMode}/>
          <CardDeal darkMode={darkMode}/>
          {/* <Testimonials darkMode={darkMode}/> */}
          <Clients />
          <CTA darkMode={darkMode}/>
          <Footer darkMode={darkMode}/>
        </div>
      </div>
    </div>
  );
};

export default App;
