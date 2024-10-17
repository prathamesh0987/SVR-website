import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Footer, Navbar } from '../components';
import styles from '../style';
import { about } from "../constants";
import AboutCard from '../components/AboutCard';

const DownloadPage = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext); // Access theme state and toggle function

  return (
    <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode}/>
        </div>
      </div>

    <section className="max-h-screen  py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-black'} mb-8`}>Downloads</h1>

        {/* FEAST Section */}
        <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} shadow-lg rounded-lg p-6 mb-8`}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">FEAST</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="/downloads/feast-software-2022-setup" className="text-blue-500 hover:underline">
                FEAST Software 2022 Setup
              </a>
            </li>
            <li>
              <a href="/downloads/feast-installation-guide" className="text-blue-500 hover:underline">
                FEAST Software Installation Guide
              </a>
            </li>
            <li>
              <a href="/downloads/feast-tutorial-modules" className="text-blue-500 hover:underline">
                FEAST Tutorial Modules
              </a>
            </li>
            <li>
              <a href="/downloads/verification-manual" className="text-blue-500 hover:underline">
                Verification Manual
              </a>
            </li>
            <li>
              <a href="/downloads/user-manual" className="text-blue-500 hover:underline">
                User Manual
              </a>
            </li>
          </ul>
        </div>

        {/* RoboAnalyzer Section */}
        <div className="${darkMode ? 'bg-grey-light' : 'bg-lightPrimary'} shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">RoboAnalyzer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="/downloads/roboanalyzer-v8.0.1" className="text-blue-500 hover:underline">
                RoboAnalyzer V8.0.1
              </a>
            </li>
            <li>
              <a href="/downloads/roc-2023" className="text-blue-500 hover:underline">
                RoboAnalyzer based Online Competition (ROC-2023), June 01 - September 30, 2023
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div className={`${darkMode ? 'bg-primary' : 'bg-lightPrimary'} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer darkMode={darkMode}/>
        </div>
      </div>
    </div>
  )
}

export default DownloadPage