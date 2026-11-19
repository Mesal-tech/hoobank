import { SignIn, SignUp } from "@clerk/react";

const transactions = [
  ["S", "Spotify", "Subscription", "− $15.00", "text-rose-300", "bg-rose-400/5"],
  ["A", "Alex Doe", "Deposit", "+ $88.00", "text-emerald-300", "bg-emerald-400/5"],
  ["F", "Figma", "Income", "− $18.99", "text-rose-300", "bg-transparent"],
  ["G", "Fresh Market", "Groceries", "− $42.50", "text-rose-300", "bg-emerald-400/5"],
];

const DashboardPreview = () => (
  <aside className="hidden lg:flex flex-1 h-screen min-h-0 bg-[#050b16] px-6 2xl:px-14 py-5 items-center justify-center overflow-hidden">
    <div className="w-full h-full max-w-[900px] max-h-[calc(100vh-40px)] rounded-[24px] bg-[#26364c] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] -mr-20 2xl:mr-0">
      <div className="h-full min-h-0 rounded-[17px] bg-[#0b1220] overflow-hidden flex text-white">
        <div className="w-[190px] shrink-0 border-r border-white/10 p-5 flex flex-col">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-xl">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 rotate-[-12deg]" /> HooBank
          </div>
          <div className="mt-9 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-white/40 text-xs">⌕ &nbsp; Search</div>
          <div className="mt-5 space-y-2 text-[12px] font-medium">
            {[["⌂", "Home"], ["◉", "My accounts"], ["▤", "Transactions"], ["↗", "Transfers"], ["＋", "Add money"]].map(([icon, label], i) => (
              <div key={label} className={`rounded-lg px-3 py-3 flex items-center gap-3 ${i === 0 ? "bg-secondary/15 text-secondary" : "text-white/55"}`}>
                <span className="text-base">{icon}</span>{label}
              </div>
            ))}
          </div>
          <div className="mt-auto pt-5 border-t border-white/10 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-bold">HB</span>
            <div className="min-w-0"><p className="text-[11px] font-semibold truncate">Your HooBank account</p><p className="text-[10px] text-white/40">Ready when you are</p></div>
          </div>
        </div>
        <div className="flex-1 min-w-0 p-5 2xl:p-7 bg-[#0d1523]">
          <div className="flex items-start justify-between gap-4">
            <div><p className="text-xl font-semibold">Welcome to HooBank</p><p className="text-white/50 text-xs mt-1.5">A clear view of your money, all in one place.</p></div>
            <span className="text-[10px] uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">Preview</span>
          </div>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-[68px] h-[68px] rounded-full border-[11px] border-secondary border-r-[#1f4367] border-b-[#3262a0] shrink-0" />
              <div><p className="text-xs text-white/50">Multi-currency account</p><p className="text-xl font-semibold mt-2">Balances at a glance</p><p className="text-xs text-white/40 mt-1">Hold the currencies you use in one view</p></div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between"><h3 className="font-semibold text-base">Recent activity</h3><span className="text-secondary text-xs">View all</span></div>
          <div className="mt-4 divide-y divide-white/[0.07] border-y border-white/[0.08]">
            {transactions.map(([initial, name, category, amount, tone, rowBg]) => (
              <div key={name} className={`grid grid-cols-[1fr_auto] gap-3 items-center px-3 py-2.5 ${rowBg}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/75 text-xs font-semibold">{initial}</span>
                  <div className="min-w-0"><p className="text-xs font-semibold truncate">{name}</p><p className="text-[10px] text-white/40 mt-1">{category}</p></div>
                </div>
                <div className="text-right"><p className={`text-xs font-semibold ${tone}`}>{amount}</p><p className="text-[10px] text-white/40 mt-1">Today</p></div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-white/35 mt-3">Illustrative preview · no account data shown</p>
        </div>
      </div>
    </div>
  </aside>
);

const AuthPage = ({ mode, clerkConfigured = true }) => {
  const signingUp = mode === "sign-up";
  const ClerkForm = signingUp ? SignUp : SignIn;

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-primary text-white flex flex-col lg:flex-row">
      <section className="flex-1 min-h-0 lg:h-screen lg:overflow-y-auto flex flex-col px-6 sm:px-12 lg:px-12 2xl:px-20 py-4 sm:py-5">
        <a href="/" aria-label="HooBank home" className="inline-flex items-center gap-3 self-start">
          <span className="w-8 h-8 rounded-full border-[4px] border-white border-r-secondary flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-secondary" /></span>
          <span className="font-serif font-bold text-white text-[22px] tracking-tight">HooBank</span>
        </a>

        <div className="flex-1 flex justify-center pt-5 sm:pt-7 pb-3">
          <div className="w-full max-w-[540px]">
            <h1 className="font-poppins text-[36px] sm:text-[44px] leading-tight tracking-tight font-semibold text-white">
              {signingUp ? "Sign up" : "Sign in"}
            </h1>
            <p className="font-poppins text-dimWhite text-base sm:text-lg mt-2 mb-5">
              {signingUp ? "Create your account to get started." : "Please enter your details."}
            </p>

            {clerkConfigured ? (
              <div id="clerk-auth">
              <ClerkForm
                path={signingUp ? "/sign-up" : "/sign-in"}
                routing="path"
                signInUrl="/sign-in"
                signUpUrl="/sign-up"
                forceRedirectUrl="/dashboard"
                appearance={{
                  variables: {
                    colorPrimary: "#00d9e5",
                    colorBackground: "#00040f",
                    colorInput: "#111827",
                    colorInputForeground: "#ffffff",
                    colorText: "#ffffff",
                    colorMutedForeground: "#aab3c2",
                    borderRadius: "9px",
                    spacing: "0.75rem",
                    fontSize: "14px",
                  },
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none bg-transparent p-0 w-full",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    footer: "hidden",
                    formField: "mb-2",
                    formFieldLabel: "text-white/80 font-poppins text-sm mb-1",
                    formFieldInput: "h-[44px] rounded-[9px] border border-white/15 bg-[#111827] px-4 text-sm text-white placeholder:text-white/40 shadow-none focus:border-secondary focus:ring-0",
                    formButtonPrimary: "h-[44px] rounded-[9px] bg-gradient-to-r from-[#00d9e5] to-[#33a9d7] text-sm font-semibold text-[#00040f] shadow-none hover:brightness-105",
                    socialButtonsBlockButton: "h-[44px] rounded-[9px] border border-white/15 bg-[#111827] text-white shadow-none",
                    socialButtonsBlockButtonText: "text-sm",
                    dividerRow: "my-2",
                    dividerLine: "bg-white/15",
                    dividerText: "text-white/50",
                    identityPreviewText: "text-white",
                    formFieldAction: "text-secondary",
                  },
                }}
              />
              </div>
            ) : (
              <div className="rounded-xl border border-white/10 bg-[#0b1221] p-5 text-dimWhite font-poppins text-sm leading-6">
                Authentication is being connected. Add the Clerk publishable key in <code className="text-white">.env.local</code> to enable this form.
              </div>
            )}

            <p className="font-poppins text-center text-dimWhite text-sm sm:text-base mt-4 pb-1">
              {signingUp ? "Already have an account? " : "Don't have an account? "}
              <a className="text-secondary hover:text-white font-medium" href={signingUp ? "/sign-in" : "/sign-up"}>
                {signingUp ? "Sign in" : "Sign up"}
              </a>
            </p>
          </div>
        </div>
      </section>
      <DashboardPreview />
    </main>
  );
};

export default AuthPage;
