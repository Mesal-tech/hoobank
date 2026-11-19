import { useState } from "react";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const formatAmountWhileTyping = (value) => {
  const cleaned = value.replace(/[^\d.]/g, "");
  const decimalIndex = cleaned.indexOf(".");
  const integer = (decimalIndex === -1 ? cleaned : cleaned.slice(0, decimalIndex)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (decimalIndex === -1) return integer;
  return `${integer}.${cleaned.slice(decimalIndex + 1).replace(/\./g, "").slice(0, 2)}`;
};
const formatAmountOnBlur = (value) => {
  const numeric = Number(value.replace(/,/g, ""));
  return Number.isFinite(numeric) && numeric > 0
    ? new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numeric)
    : value;
};
const initialAccounts = [
  { id: "checking", name: "Everyday Checking", type: "Checking account", number: "•••• 3842", receivingNumber: "0000 0000 3842", balance: 1842050, icon: "↗", color: "from-indigo-500/25 to-blue-500/5" },
  { id: "savings", name: "HooBank Savings", type: "Savings account", number: "•••• 1190", receivingNumber: "0000 0000 1190", balance: 1442000, icon: "◉", color: "from-emerald-500/20 to-teal-500/5" },
  { id: "wallet", name: "Travel Wallet", type: "USD wallet", number: "•••• 0224", receivingNumber: "0000 0000 0224", balance: 520450, icon: "◇", color: "from-violet-500/20 to-fuchsia-500/5" },
  { id: "business", name: "Business Checking", type: "Business account", number: "•••• 4432", receivingNumber: "0000 0000 4432", balance: 700000, icon: "▦", color: "from-amber-500/20 to-orange-500/5" },
];

const initialActivity = [
  { id: 1, title: "Salary deposit", detail: "Everyday Checking · Today", amount: 420000, time: "Today" },
  { id: 2, title: "Transfer to savings", detail: "Everyday Checking · Yesterday", amount: -50000, time: "Yesterday" },
  { id: 3, title: "Online purchase", detail: "Travel Wallet · Nov 14", amount: -12999, time: "Nov 14" },
];

const AccountCard = ({ account, onAction }) => (
  <article className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0d17] p-4 shadow-[0_12px_30px_rgba(0,0,0,.12)] sm:p-5">
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${account.color}`} />
    <div className="relative">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.08] text-lg text-white/80">{account.icon}</span><div className="min-w-0"><h3 className="truncate font-poppins text-xs font-medium text-white/90">{account.name}</h3><p className="mt-1 font-poppins text-[9px] text-white/40">{account.type}</p></div></div>
        <span className="shrink-0 rounded-full bg-emerald-400/10 px-2 py-1 font-poppins text-[8px] text-emerald-300">Active</span>
      </div>
      <div className="mt-6"><p className="font-poppins text-[9px] text-white/40">Available balance</p><p className="mt-1 font-poppins text-2xl font-semibold tracking-tight tabular-nums text-white">{money.format(account.balance / 100)}</p></div>
      <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3"><span className="font-poppins text-[10px] tracking-[0.12em] text-white/45">{account.number}</span><button type="button" onClick={() => onAction("transfer", account.id)} className="rounded-lg bg-white/[0.07] px-3 py-2 font-poppins text-[9px] text-white/75 transition hover:bg-white/[0.12]">Transfer ↗</button></div>
    </div>
  </article>
);

const AccountsPage = ({ holderName = "HooBank Account Holder" }) => {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [activity, setActivity] = useState(initialActivity);
  const [action, setAction] = useState(null);
  const [accountId, setAccountId] = useState("checking");
  const [targetId, setTargetId] = useState("savings");
  const [amount, setAmount] = useState("");
  const [bankDetails, setBankDetails] = useState({ bankName: "", accountName: "", accountNumber: "" });
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");
  const total = accounts.reduce((sum, account) => sum + account.balance, 0);

  const startAction = (type, selectedAccount = "checking") => {
    setAction(type);
    setAccountId(selectedAccount);
    setTargetId(accounts.find(({ id }) => id !== selectedAccount)?.id || "checking");
    setAmount("");
    setBankDetails({ bankName: "", accountName: "", accountNumber: "" });
    setError("");
    setCopied(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (action === "deposit") return;
    const cents = Math.round(Number(amount.replace(/,/g, "")) * 100);
    if (!Number.isFinite(cents) || cents <= 0) return setError("Enter an amount greater than $0.");
    if (action === "withdraw" && (!bankDetails.bankName.trim() || !bankDetails.accountName.trim() || bankDetails.accountNumber.replace(/\D/g, "").length < 6)) {
      return setError("Enter the bank name, account holder and a valid account number (at least 6 digits).");
    }
    const source = accounts.find(({ id }) => id === accountId);
    const target = accounts.find(({ id }) => id === targetId);
    if (action !== "deposit" && source.balance < cents) return setError("There aren’t enough funds in this account.");
    if (action === "transfer" && accountId === targetId) return setError("Choose two different accounts.");

    if (action === "transfer") setAccounts((current) => current.map((account) => {
      if (action === "transfer" && account.id === accountId) return { ...account, balance: account.balance - cents };
      if (action === "transfer" && account.id === targetId) return { ...account, balance: account.balance + cents };
      return account;
    }));

    const bankLastFour = bankDetails.accountNumber.replace(/\D/g, "").slice(-4);
    const bankLabel = bankDetails.bankName.trim();
    const title = action === "withdraw" ? "Withdrawal request" : `Transfer to ${target.name}`;
    const detail = action === "deposit"
      ? `${source.name} · Bank transfer to HooBank · Just now`
      : action === "withdraw"
        ? `${source.name} · To ${bankLabel} · •••• ${bankLastFour} · Awaiting manager review`
        : `${source.name} · Just now`;
    setActivity((current) => [{ id: Date.now(), title, detail, amount: -cents, time: "Just now", status: action === "withdraw" ? "Pending review" : "Completed" }, ...current]);
    if (action === "withdraw") setNotice("Withdrawal request recorded. Please message your account manager to review and process it. Your available balance has not changed.");
    setAction(null);
  };

  const actionLabel = action === "deposit" ? "Deposit" : action === "withdraw" ? "Withdraw" : "Transfer";

  return <div className="mx-auto max-w-[1440px] pb-8">
    <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div><p className="mb-2 font-poppins text-[9px] font-medium tracking-[0.2em] text-indigo-300">YOUR MONEY, IN ONE PLACE</p><h1 className="font-poppins text-2xl font-semibold tracking-tight sm:text-[30px]">Accounts</h1><p className="mt-2 max-w-xl font-poppins text-xs text-white/45 sm:text-sm">Manage your balances and move money between accounts.</p></div>
      <div className="flex w-full flex-wrap gap-2 sm:w-auto"><button type="button" onClick={() => startAction("deposit")} className="flex-1 rounded-lg bg-gradient-to-r from-[#4b5bff] to-[#3157f6] px-4 py-2.5 font-poppins text-[11px] font-medium text-white shadow-[0_4px_14px_rgba(67,88,255,.18)] hover:brightness-110 sm:flex-none">＋ Deposit</button><button type="button" onClick={() => startAction("withdraw")} className="flex-1 rounded-lg border border-white/[0.1] bg-white/[0.035] px-4 py-2.5 font-poppins text-[11px] text-white/75 hover:bg-white/[0.07] sm:flex-none">Withdraw</button><button type="button" onClick={() => startAction("transfer")} className="flex-1 rounded-lg border border-white/[0.1] bg-white/[0.035] px-4 py-2.5 font-poppins text-[11px] text-white/75 hover:bg-white/[0.07] sm:flex-none">⇄ Transfer</button></div>
    </header>
    {notice && <div role="status" className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] px-4 py-3"><p className="font-poppins text-[10px] leading-5 text-amber-100/85">{notice}</p><button type="button" onClick={() => setNotice("")} aria-label="Dismiss message" className="text-amber-100/60 hover:text-white">×</button></div>}

    <section className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr]">
      <div className="dashboard-account-total rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-[#17244b] via-[#11182d] to-[#0b0d17] p-5 sm:p-6"><p className="font-poppins text-[10px] text-white/55">Total across accounts</p><p className="mt-2 font-poppins text-3xl font-semibold tracking-tight tabular-nums">{money.format(total / 100)}</p><p className="mt-2 font-poppins text-[9px] text-emerald-300">All account balances in USD</p></div>
      <div className="rounded-2xl border border-white/[0.06] bg-[#0b0d17] p-5"><p className="font-poppins text-[10px] text-white/45">Accounts</p><p className="mt-3 font-poppins text-2xl font-semibold">{accounts.length}</p><p className="mt-1 font-poppins text-[9px] text-white/40">Connected and active</p></div>
      <div className="rounded-2xl border border-white/[0.06] bg-[#0b0d17] p-5"><p className="font-poppins text-[10px] text-white/45">Recent activity</p><p className="mt-3 font-poppins text-2xl font-semibold">{activity.length}</p><p className="mt-1 font-poppins text-[9px] text-white/40">Deposits, withdrawals and transfers</p></div>
    </section>

    <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,.75fr)]">
      <section><div className="mb-3 flex items-end justify-between"><div><h2 className="font-poppins text-sm font-medium">Your accounts</h2><p className="mt-1 font-poppins text-[9px] text-white/40">Select an account to start a transfer.</p></div></div><div className="grid gap-3 sm:grid-cols-2">{accounts.map((account) => <AccountCard key={account.id} account={account} onAction={startAction} />)}</div></section>
      <section className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b0d17]">
        <div className="border-b border-white/[0.06] p-4"><h2 className="font-poppins text-sm font-medium">Account activity</h2><p className="mt-1 font-poppins text-[9px] text-white/40">Recent account movements</p></div>
        <div className="divide-y divide-white/[0.055]">{activity.slice(0, 8).map((item) => <div key={item.id} className="flex items-center justify-between gap-3 px-4 py-3.5"><div className="flex min-w-0 items-center gap-3"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${item.amount > 0 ? "bg-emerald-400/10 text-emerald-300" : "bg-white/[0.06] text-white/55"}`}>{item.amount > 0 ? "↓" : "↑"}</span><div className="min-w-0"><p className="truncate font-poppins text-[10px] font-medium text-white/85">{item.title}</p><p className="mt-1 truncate font-poppins text-[8px] text-white/40">{item.detail}</p></div></div><div className="flex shrink-0 flex-col items-end gap-1"><span className={`font-poppins text-[10px] font-medium tabular-nums ${item.amount > 0 ? "text-emerald-300" : "text-white/75"}`}>{item.amount > 0 ? "+" : "−"}{money.format(Math.abs(item.amount) / 100)}</span>{item.status && <span className={`rounded-full px-2 py-0.5 font-poppins text-[7px] ${item.status === "Pending review" ? "bg-amber-300/10 text-amber-200" : "bg-emerald-300/10 text-emerald-200"}`}>{item.status}</span>}</div></div>)}</div>
        <p className="border-t border-white/[0.06] px-4 py-3 font-poppins text-[8px] leading-4 text-white/35">Demo mode: actions update this page only. No funds are moved.</p>
      </section>
    </div>

    {action && <div className="fixed inset-0 z-40 grid place-items-center bg-black/65 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setAction(null); }}>
      <form onSubmit={handleSubmit} className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 bg-[#111522] p-5 shadow-2xl sm:p-6">
        <div className="mb-5 flex items-start justify-between"><div><p className="font-poppins text-[9px] uppercase tracking-[0.18em] text-indigo-300">Account action</p><h2 className="mt-1 font-poppins text-lg font-semibold">{actionLabel}</h2></div><button type="button" onClick={() => setAction(null)} aria-label="Close" className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06] text-white/65 hover:text-white">×</button></div>
        <label className="mb-4 block font-poppins text-[10px] text-white/55">{action === "deposit" ? "Deposit into" : action === "withdraw" ? "Withdraw from" : "Transfer from"}<select value={accountId} onChange={(event) => { const nextAccount = event.target.value; setAccountId(nextAccount); if (nextAccount === targetId) setTargetId(accounts.find(({ id }) => id !== nextAccount)?.id || ""); }} className="mt-1.5 block w-full rounded-lg border border-white/[0.1] bg-[#0b0d17] px-3 py-3 text-[11px] text-white outline-none focus:border-indigo-400/60">{accounts.map((account) => <option key={account.id} value={account.id}>{account.name} · {money.format(account.balance / 100)}</option>)}</select></label>
        {action === "transfer" && <label className="mb-4 block font-poppins text-[10px] text-white/55">Transfer to<select value={targetId} onChange={(event) => setTargetId(event.target.value)} className="mt-1.5 block w-full rounded-lg border border-white/[0.1] bg-[#0b0d17] px-3 py-3 text-[11px] text-white outline-none focus:border-indigo-400/60">{accounts.filter((account) => account.id !== accountId).map((account) => <option key={account.id} value={account.id}>{account.name}</option>)}</select></label>}
        {action !== "deposit" && <label className="block font-poppins text-[10px] text-white/55">Amount<div className="relative mt-1.5"><span aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-poppins text-sm text-white/45">$</span><input autoFocus value={amount} onChange={(event) => { setAmount(formatAmountWhileTyping(event.target.value)); setError(""); }} onBlur={() => setAmount((current) => formatAmountOnBlur(current))} type="text" inputMode="decimal" required placeholder="0.00" aria-label="Amount in US dollars" className="block w-full rounded-lg border border-white/[0.1] bg-[#0b0d17] py-3 pl-8 pr-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-400/60" /></div></label>}
        {action === "withdraw" && <p className="mt-3 rounded-lg border border-amber-300/15 bg-amber-300/[0.05] px-3 py-2.5 font-poppins text-[9px] leading-4 text-amber-100/75">Your account manager must review and process withdrawals. Please message them after submitting your request. Funds stay in your balance until approved.</p>}
        {action === "deposit" && <fieldset className="mb-4 mt-4 rounded-xl border border-indigo-300/20 bg-indigo-400/[0.045] p-3.5">
          <legend className="px-1 font-poppins text-[10px] font-medium text-white/75">Receiving account details</legend>
          <p className="mb-3 font-poppins text-[9px] leading-4 text-white/40">Use these details to send a bank transfer into the selected HooBank account.</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-3 rounded-lg bg-black/[0.12] p-3">
            <div><p className="font-poppins text-[8px] uppercase tracking-wide text-white/35">Bank</p><p className="mt-1 font-poppins text-[10px] font-medium text-white/85">HooBank</p></div>
            <div><p className="font-poppins text-[8px] uppercase tracking-wide text-white/35">Account type</p><p className="mt-1 font-poppins text-[10px] font-medium text-white/85">{accounts.find(({ id }) => id === accountId)?.type}</p></div>
            <div className="col-span-2"><p className="font-poppins text-[8px] uppercase tracking-wide text-white/35">Account holder</p><p className="mt-1 font-poppins text-[10px] font-medium text-white/85">{holderName}</p></div>
            <div className="col-span-2 flex items-end justify-between gap-2"><div><p className="font-poppins text-[8px] uppercase tracking-wide text-white/35">Account number</p><p className="mt-1 font-poppins text-xs font-semibold tracking-wider text-white">{accounts.find(({ id }) => id === accountId)?.receivingNumber}</p></div><button type="button" onClick={async () => { try { await navigator.clipboard.writeText(accounts.find(({ id }) => id === accountId)?.receivingNumber || ""); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setError("Could not access clipboard. Select and copy the account number."); } }} className="rounded-md border border-white/[0.1] px-2.5 py-1.5 font-poppins text-[9px] text-white/70 hover:bg-white/[0.06]">{copied ? "Copied" : "Copy"}</button></div>
          </div>
        </fieldset>}
        {action === "withdraw" && <fieldset className="mb-4 mt-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5">
          <legend className="px-1 font-poppins text-[10px] font-medium text-white/75">Send to another bank</legend>
          <p className="mb-3 font-poppins text-[9px] leading-4 text-white/40">Enter the receiving bank account details. These details are only used for this local demo and are not saved or sent.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="font-poppins text-[9px] text-white/50">Bank name<input value={bankDetails.bankName} onChange={(event) => { setBankDetails({ ...bankDetails, bankName: event.target.value }); setError(""); }} required autoComplete="organization" placeholder="e.g. First National Bank" className="mt-1 block w-full rounded-lg border border-white/[0.1] bg-[#0b0d17] px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-white/25 focus:border-indigo-400/60" /></label>
            <label className="font-poppins text-[9px] text-white/50">Account holder<input value={bankDetails.accountName} onChange={(event) => { setBankDetails({ ...bankDetails, accountName: event.target.value }); setError(""); }} required autoComplete="name" placeholder="Name on the account" className="mt-1 block w-full rounded-lg border border-white/[0.1] bg-[#0b0d17] px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-white/25 focus:border-indigo-400/60" /></label>
            <label className="font-poppins text-[9px] text-white/50 sm:col-span-2">Account number<input value={bankDetails.accountNumber} onChange={(event) => { setBankDetails({ ...bankDetails, accountNumber: event.target.value }); setError(""); }} required inputMode="numeric" autoComplete="off" placeholder="Enter account number" className="mt-1 block w-full rounded-lg border border-white/[0.1] bg-[#0b0d17] px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-white/25 focus:border-indigo-400/60" /></label>
          </div>
        </fieldset>}
        {error && <p role="alert" className="mt-3 rounded-lg bg-rose-400/10 px-3 py-2 font-poppins text-[10px] text-rose-300">{error}</p>}
        {action === "deposit" ? <button type="button" onClick={() => setAction(null)} className="mt-5 w-full rounded-lg bg-gradient-to-r from-[#4b5bff] to-[#3157f6] px-4 py-3 font-poppins text-xs font-medium text-white hover:brightness-110">Done</button> : <button type="submit" className="mt-5 w-full rounded-lg bg-gradient-to-r from-[#4b5bff] to-[#3157f6] px-4 py-3 font-poppins text-xs font-medium text-white hover:brightness-110">{action === "withdraw" ? "Submit withdrawal request" : "Confirm transfer"}</button>}
      </form>
    </div>}
  </div>;
};

export default AccountsPage;
