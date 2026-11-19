import styles from "../style";
import { robot } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section id="home" className="w-full max-w-[1280px] mx-auto px-6 sm:px-16 xl:px-0 py-10 sm:py-16 lg:py-20">
    <div className="grid md:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-4">
      <div className="min-w-0 flex flex-col items-start">
        <div className="inline-flex items-center py-2 px-4 bg-discount-gradient rounded-full mb-6 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-secondary mr-3 shrink-0" />
          <p className="font-poppins text-dimWhite text-sm leading-5">One account for the currencies you use</p>
        </div>

        <h1 className="max-w-[680px] font-poppins font-semibold text-[42px] sm:text-[58px] lg:text-[66px] xl:text-[72px] leading-[1.08] tracking-[-0.045em] text-white">
          Global banking, <span className="text-gradient">made simple.</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[540px] mt-6`}>
          Hold multiple currencies, send and receive money, and convert at a rate you can see. Clear fees and useful controls keep you in charge at every step.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Button label="Open an account" />
          <a href="/sign-in" className="font-poppins text-white/80 hover:text-white px-3 py-3 transition">Sign in <span aria-hidden="true">↗</span></a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-white/55 font-poppins text-sm">
          <span className="inline-flex items-center gap-2"><span className="text-secondary">✓</span> Rates shown upfront</span>
          <span className="inline-flex items-center gap-2"><span className="text-secondary">✓</span> PIN-approved payments</span>
        </div>
      </div>

      <div className="relative flex items-center justify-center min-w-0 md:pl-3">
        <div className="absolute w-[70%] aspect-square rounded-full bg-secondary/10 blur-[100px]" />
        <img
          src={robot}
          alt="Digital banking assistant illustration"
          className="relative z-[1] block w-full max-w-[500px] max-h-[470px] object-contain"
        />
        <div className="absolute z-[2] bottom-[8%] left-0 sm:left-[2%] rounded-2xl border border-white/10 bg-[#101a29]/95 backdrop-blur px-4 py-3 shadow-xl">
          <p className="font-poppins text-white text-sm font-medium">Your money, in one view</p>
          <p className="font-poppins text-dimWhite text-xs mt-1">Balances · transfers · cards</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
