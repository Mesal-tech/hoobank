import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="cards" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Cards you stay <br className="sm:block hidden" />in control of.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Freeze or unfreeze your card in a tap, set spending limits, and view card details when you need them. Set a savings goal and move money in or out whenever you like.
      </p>

      <Button styles={`mt-10`} label="Open an account" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Bank card illustration" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
