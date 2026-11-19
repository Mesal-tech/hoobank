import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Open your account in minutes.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Sign up with your email, verify your identity, and manage your money across currencies from one place.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button label="Get started" />
    </div>
  </section>
);

export default CTA;
