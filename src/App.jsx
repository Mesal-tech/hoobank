import styles from "./style";
import { AccountOverview, Billing, Business, CardDeal, CTA, Footer, HowItWorks, MoreTools, Navbar, SecurityCenter, Stats, Testimonials, Hero } from "./components";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import ClerkSetupNotice from "./components/ClerkSetupNotice";

const App = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const clerkConfigured = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

  if (path === "/sign-in" || path.startsWith("/sign-in/")) {
    return <AuthPage mode="sign-in" clerkConfigured={clerkConfigured} />;
  }
  if (path === "/sign-up" || path.startsWith("/sign-up/")) {
    return <AuthPage mode="sign-up" clerkConfigured={clerkConfigured} />;
  }
  if (path === "/dashboard" || ["/dashboard/accounts", "/dashboard/transactions", "/dashboard/reports"].includes(path)) {
    return clerkConfigured ? <Dashboard /> : <ClerkSetupNotice />;
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <AccountOverview />
          <Billing />
          <CardDeal />
          <MoreTools />
          <HowItWorks />
          <SecurityCenter />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
