import styles from "../style";
import Button from "./Button";

const CTA = ({darkMode}) => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col ${darkMode ? 'bg-black-gradient-2 text-white' : 'bg-white-gradient-2 text-black'}  rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} ${darkMode ? ' text-white' : ' text-black'}`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Don't wait—unlock the potential of your robotics and automation today. Let's get started! Reach out now to schedule your consultation!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;