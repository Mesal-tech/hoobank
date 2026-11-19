import styles from "../style";

const protections = [
  ["01", "A PIN for every payment", "Nothing leaves your account until you approve it with your own PIN."],
  ["02", "Two-factor sign-in", "Add an authenticator code so your password is never the only layer."],
  ["03", "Recent sign-ins", "Review when and from which device your account was used, and sign out other devices."],
  ["04", "Checked transfers", "Transfers pass security checks before they are sent, and you can follow each stage."],
];

const SecurityCenter = () => (
  <section id="security" className="py-16 md:py-24">
    <div className="rounded-[30px] bg-gradient-to-br from-[#101b2a] via-[#0a1220] to-[#0c1825] border border-white/[0.08] p-7 sm:p-10 lg:p-14 relative overflow-hidden">
      <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]" />
      <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div>
          <p className="font-poppins uppercase tracking-[0.22em] text-secondary text-sm">Security by design</p>
          <h2 className={`${styles.heading2} mt-4`}>Your money, protected at every step.</h2>
          <p className={`${styles.paragraph} mt-5`}>
            Security is built into the everyday actions: signing in, approving payments, and keeping track of your account.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border border-white/10 text-white/80 font-poppins text-sm">Payment PIN</span>
            <span className="px-4 py-2 rounded-full border border-white/10 text-white/80 font-poppins text-sm">Two-factor sign-in</span>
            <span className="px-4 py-2 rounded-full border border-white/10 text-white/80 font-poppins text-sm">Device controls</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {protections.map(([number, title, copy]) => (
            <article key={number} className="rounded-2xl bg-black/20 border border-white/[0.07] p-5">
              <div className="flex justify-between items-center">
                <span className="font-poppins text-secondary text-xs tracking-widest">{number}</span>
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_rgba(0,246,255,0.7)]" />
              </div>
              <h3 className="font-poppins font-semibold text-white mt-5">{title}</h3>
              <p className="font-poppins text-dimWhite text-sm leading-6 mt-2">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SecurityCenter;
