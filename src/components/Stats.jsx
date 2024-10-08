import React from 'react';
import styles from '../style';
import { stats } from '../constants';

const Stats = ({darkMode}) => (
  <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6 ${darkMode ? 'bg-primary' : 'bg-lightPrimary'} p-6 rounded-lg shadow-lg`}> {/* Light background, padding, rounded corners, and shadow */}
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className={`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] ${darkMode ? ' text-white' : ' text-black'}`}> {/* Changed text color to black */}
          {stat.value}
        </h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'> {/* You might want to adjust the gradient if it doesn't fit the light theme */}
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
