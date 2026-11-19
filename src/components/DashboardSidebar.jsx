const navItems = [
  ["Dashboard", "M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z"],
  ["Accounts", "M3 10h18M5 10V7l7-4 7 4v3M5 20h14M7 10v7m5-7v7m5-7v7M3 20h18"],
  ["Transactions", "M4 7h15l-3-3m4 13H5l3 3M5 7 3 9l2 2m14 2 2 2-2 2"],
  ["Reports", "M4 19V5m0 14h17M8 15l3-4 3 2 5-7"],
];

const NavGlyph = ({ path }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[15px] w-[15px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

const DashboardSidebar = ({ active, user, initials, today, theme, onToggleTheme, onOpenSettings, mobileOpen, onToggleMobile }) => (
  <aside className="flex min-w-0 flex-col bg-[#080a13] px-2.5 py-3 sm:px-3 lg:min-h-0 lg:py-4">
    <div className="mb-3 flex items-center justify-between lg:mb-4">
      <a href="/" aria-label="HooBank home" className="flex items-center gap-2 px-2 py-1.5">
        <img src="/hoobank.svg" alt="" className="h-7 w-7 shrink-0" />
        <span className="font-poppins text-[12px] font-semibold tracking-wide text-white/90">HooBank</span>
      </a>
      <button type="button" onClick={onToggleMobile} aria-label={mobileOpen ? "Collapse sidebar" : "Expand sidebar"} aria-expanded={mobileOpen} className="grid h-9 w-9 place-items-center rounded-lg bg-[#181b27] text-white/75 hover:text-white lg:hidden">{mobileOpen ? "×" : "☰"}</button>
    </div>

    <section className={`${mobileOpen ? "block" : "hidden"} mb-3 rounded-[13px] border border-white/[0.045] bg-[#10121c] p-3 lg:block`}>
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {user?.imageUrl ? <img src={user.imageUrl} alt="" className="h-7 w-7 rounded-full object-cover" /> : <span className="grid h-7 w-7 place-items-center rounded-full bg-[#283047] text-[9px] font-semibold text-indigo-200">{initials}</span>}
          <p className="font-poppins text-[8px] tracking-wide text-white/45">{today}</p>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title="Toggle theme" className="grid h-8 w-8 place-items-center rounded-full bg-[#1b1e2a] text-[14px] text-white/70 hover:text-white">{theme === "dark" ? "☼" : "☾"}</button>
          <button type="button" onClick={onOpenSettings} aria-label="Settings" title="Settings" className="grid h-8 w-8 place-items-center rounded-full bg-[#1b1e2a] text-[13px] text-white/70 hover:text-white">⚙</button>
        </div>
      </div>
      <p className="font-poppins text-[15px] font-semibold leading-[1.25] text-white">Welcome back,<br />{user?.firstName || "there"}!</p>
    </section>

    <nav aria-label="Dashboard navigation" className={`${mobileOpen ? "flex" : "hidden"} -mx-1 min-w-0 flex-col gap-0.5 rounded-[13px] border border-white/[0.04] bg-[#10121c] p-2 lg:mx-0 lg:flex lg:overflow-visible`}>
      {navItems.map(([label, path]) => {
        const selected = active === label;
        return <a key={label} href={label === "Dashboard" ? "/dashboard" : `/dashboard/${label.toLowerCase()}`} aria-current={selected ? "page" : undefined}
          className={`flex shrink-0 items-center gap-2 rounded-[8px] px-3 py-2.5 text-left font-poppins text-[11px] transition-colors lg:w-full lg:px-2.5 lg:py-[9px] ${selected ? "bg-[#242631] text-white" : "text-white/50 hover:bg-white/[0.045] hover:text-white/85"}`}>
          <NavGlyph path={path} />{label}
        </a>;
      })}
    </nav>
  </aside>
);

export { navItems };
export default DashboardSidebar;
