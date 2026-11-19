import styles from "../style";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Banking for <br className="sm:block hidden" />everyday life.
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          From transparent currency conversion to tracked transfers, the essentials stay together in one clear account.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6 w-full relative z-[1]">
      {[
        ["01", "Hold currencies", "Keep the balances you use together, with your own account details for receiving money."],
        ["02", "Send with confidence", "Follow each transfer through its journey, with security checks before it is sent."],
        ["03", "Save with a plan", "Choose a goal and date, then move money in or out whenever you need."],
      ].map(([number, title, copy]) => (
        <article key={number} className="p-7 rounded-[20px] bg-black-gradient border border-white/5">
          <span className="text-secondary font-poppins text-sm">{number}</span>
          <h3 className="font-poppins font-semibold text-white text-xl mt-5">{title}</h3>
          <p className={`${styles.paragraph} !text-base mt-3`}>{copy}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;
