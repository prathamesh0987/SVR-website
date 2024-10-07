import React from 'react'
import styles from '../style'
import { Navbar } from '../components'
import Footer from '../components/Footer'
import { papers } from '../constants'


const ResearchPage = () => (
    <div className='bg-primary w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-purple-100 ss:leading-[100px] leading-[75px] text-center'> Publication</h1>

      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div key={index} className="bg-primary text-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold">{paper.title}</h2>
            <p className="text-emerald-400">{paper.authors}</p>
            <p className="text-sky-400">{paper.conference}</p>
            <p className="text-indigo-400">{paper.year ? paper.year : "N/A"}</p>
          </div>
        ))}
      </div>
    
  

        </div>
        
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

      </div>
)


export default ResearchPage