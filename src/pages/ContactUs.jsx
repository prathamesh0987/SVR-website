import styles from '../style'
import { Navbar } from '../components'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ContactUs = () => {
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
            <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ${darkMode ? 'text-white' : 'text-black'} ss:leading-[100px] leading-[75px] text-center`}> Contact Us</h1>
            <div className="flex flex-wrap sm:justify-start justify-between w-full relative z-[1] items-center ">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <h2 className='font-poppins font-semibold ss:text-[32px] text-[10px] text-blue-300 ss:leading-[50px] leading-[25px] text-center'>"We are always ready to help you."</h2>
                </div>
            </div>

            <ContactForm />


            
        </div>
        </div>

        <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer darkMode={darkMode}/>
        </div>
      </div>
    </div>
    )
}

export default ContactUs