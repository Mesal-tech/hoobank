import styles from "../style";
import Button from "./Button";

const currencies = [
  ["US", "USD", "US Dollar"],
  ["EU", "EUR", "Euro"],
  ["GB", "GBP", "British Pound"],
  ["CA", "CAD", "Canadian Dollar"],
  ["IN", "INR", "Indian Rupee"],
  ["JP", "JPY", "Japanese Yen"],
];

const AccountOverview = () => (
  <section id="product" className="py-16 md:py-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <p className="font-poppins uppercase tracking-[0.22em] text-secondary text-sm">One account, many currencies</p>
        <h2 className={`${styles.heading2} mt-4`}>Your money, all in one view.</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[520px]`}>
          Keep balances for the currencies you use together. Get account details to receive money, then move funds between balances when you need them.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-9">
          {[
            ["Hold", "Keep everyday currencies together."],
            ["Receive", "Use your account details to get paid."],
            ["Convert", "See the rate and fee before you confirm."],
            ["Track", "Follow transfers through each step."],
          ].map(([title, copy]) => (
            <div key={title} className="flex gap-3 items-start">
              <span className="mt-1 w-6 h-6 flex shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">✓</span>
              <div>
                <h3 className="font-poppins text-white font-semibold">{title}</h3>
                <p className="font-poppins text-dimWhite text-sm leading-6 mt-1">{copy}</p>
              </div>
            </div>
          ))}
        </div>
        <Button styles="mt-9" label="Explore the account" />
      </div>

      <div className="relative">
        <div className="absolute -inset-8 bg-[#00f6ff]/10 blur-[90px] rounded-full" />
        <div className="relative rounded-[28px] border border-white/10 bg-[#0b1221] p-6 sm:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="font-poppins text-dimWhite text-xs uppercase tracking-[0.18em]">Account overview</p>
              <h3 className="font-poppins text-white text-xl font-semibold mt-2">Your balances</h3>
            </div>
            <span className="rounded-full bg-secondary/10 text-secondary px-3 py-1.5 text-xs font-poppins">6 currencies</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {currencies.map(([flag, code, name], index) => (
              <div key={code} className={`rounded-2xl border border-white/[0.07] p-4 ${index === 0 ? "bg-white/[0.07]" : "bg-white/[0.025]"}`}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#19283a] flex items-center justify-center font-poppins font-semibold text-secondary text-xs">{flag}</span>
                  <div>
                    <p className="font-poppins text-white font-semibold">{code}</p>
                    <p className="font-poppins text-dimWhite text-xs mt-0.5">{name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#12313b] to-[#172035] p-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-poppins text-white text-sm font-medium">Move money between balances</p>
              <p className="font-poppins text-dimWhite text-xs mt-1">Check the rate and fee before you confirm.</p>
            </div>
            <span className="text-secondary text-xl" aria-hidden="true">↗</span>
          </div>
          <p className="font-poppins text-white/40 text-[11px] mt-4">Illustrative account view · balances not shown</p>
        </div>
      </div>
    </div>
  </section>
);

export default AccountOverview;
