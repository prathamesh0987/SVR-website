import { card, plckit } from "../assets"
import styles,{layout} from "../style"
import Button from "./Button"

const CardDeal = ({darkMode}) => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2 } ${darkMode ? 'bg-primary text-white' : 'bg-lightPrimary text-black'}`}>
        Find a better Robot<br className='sm:block hidden'/> or Automation for you
      </h2>
      <p className={`${styles.paragraph} ${darkMode ? 'bg-primary text-white' : 'bg-lightPrimary text-black'} max-w-[470px] mt-5`}>
      Let us help you elevate your processes and drive innovation. With the perfect robot or automation solution, you'll be empowered to achieve your goals faster and more effectively than ever before. Explore the future of automation with confidence!
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={plckit} alt="card" className="w-[100%] h-[100%]"/>

    </div>

  </section>
)

export default CardDeal