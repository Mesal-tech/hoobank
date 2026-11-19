import styles from "../style";

const tools = [
  ["↗", "Pay bills", "Handle everyday bill payments from your account."],
  ["✦", "Gift cards", "Browse gift card options in the app."],
  ["◎", "Savings", "Set a goal and a date, then move money in or out."],
  ["▤", "Fixed deposits", "Explore fixed deposit options alongside your balances."],
  ["⌁", "Investments", "Access investment options from the same account."],
  ["＋", "Loans & grants", "Find loan and grant tools within the app."],
];

const MoreTools = () => (
  <section className="py-16 md:py-24">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
      <div>
        <p className="font-poppins uppercase tracking-[0.22em] text-secondary text-sm">More in the app</p>
        <h2 className={`${styles.heading2} mt-4 max-w-2xl`}>More of your money life, in one place.</h2>
      </div>
      <p className={`${styles.paragraph} max-w-[420px] !text-base`}>
        Alongside accounts, transfers, and cards, explore useful tools for everyday payments and longer-term plans.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tools.map(([icon, title, copy]) => (
        <article key={title} className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 hover:bg-white/[0.05] hover:border-secondary/30 transition">
          <span className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl" aria-hidden="true">{icon}</span>
          <h3 className="font-poppins text-white font-semibold text-lg mt-5">{title}</h3>
          <p className="font-poppins text-dimWhite text-sm leading-6 mt-2">{copy}</p>
        </article>
      ))}
    </div>
  </section>
);

export default MoreTools;
