import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../style'
import { Navbar } from '../components'
import Footer from '../components/Footer'
import { papers } from '../constants'

const ResearchPage = () => {
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
            <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ${darkMode ? 'text-white' : 'text-black'} ss:leading-[100px] leading-[75px] text-center`}> Publication</h1>

      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div key={index} className={`${darkMode ? 'bg-primary text-white' : 'bg-lightPrimary text-black'} p-4 shadow-md rounded-md`}>
            <h2 className="text-xl font-semibold">{paper.title}</h2>
            <p className="text-emerald-400">{paper.authors}</p>
            <p className="text-sky-400">{paper.conference}</p>
            <p className="text-indigo-400">{paper.year ? paper.year : "N/A"}</p>
          </div>
        ))}
      </div>
    
  

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

export default ResearchPage
