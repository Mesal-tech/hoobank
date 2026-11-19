import styles from "../style";
import Button from "./Button";

const steps = [
  ["01", "Open your account", "Sign up with your email, confirm it, and choose a PIN to approve payments."],
  ["02", "Verify your identity", "Add a photo of your ID and a quick selfie to unlock your account features."],
  ["03", "Add money and get going", "Fund your account, then send, convert, and manage money from one place."],
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-16 md:py-24">
    <div className="text-center max-w-2xl mx-auto">
      <p className="font-poppins uppercase tracking-[0.22em] text-secondary text-sm">Getting started</p>
      <h2 className={`${styles.heading2} mt-4`}>Up and running in three steps.</h2>
      <p className={`${styles.paragraph} mt-4`}>
        No branch visits and no paperwork in the post. Complete your setup in the app, in a few minutes.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-5 mt-12 relative">
      <div className="hidden md:block absolute top-8 left-[17%] right-[17%] border-t border-dashed border-secondary/30" />
      {steps.map(([number, title, copy]) => (
        <article key={number} className="relative rounded-[24px] border border-white/10 bg-white/[0.025] p-7 pt-6">
          <span className="relative z-[1] w-16 h-16 rounded-2xl bg-[#10202e] border border-secondary/20 flex items-center justify-center font-poppins text-secondary font-semibold text-xl">{number}</span>
          <h3 className="font-poppins text-white text-xl font-semibold mt-6">{title}</h3>
          <p className="font-poppins text-dimWhite leading-7 mt-3">{copy}</p>
        </article>
      ))}
    </div>
    <div className="flex justify-center mt-9">
      <Button label="Start your account" />
    </div>
  </section>
);

export default HowItWorks;
