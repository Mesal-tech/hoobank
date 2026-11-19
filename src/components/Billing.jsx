import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="convert" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Convert at a rate <br className="sm:block hidden" />you can see.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        See the exchange rate and any fee before you confirm. Move money between your currency balances whenever you need to, with no surprises at checkout.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://bank3.midnightdev.app/#product-convert" className="font-poppins text-white border border-white/20 rounded-full px-5 py-3 hover:border-secondary">Explore currency tools <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
);

export default Billing;
