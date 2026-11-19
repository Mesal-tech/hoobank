const ClerkSetupNotice = () => (
  <main className="min-h-screen bg-primary text-white flex items-center justify-center px-6">
    <section className="max-w-xl rounded-3xl border border-white/10 bg-[#0b1221] p-8 sm:p-10">
      <p className="font-poppins text-secondary text-sm uppercase tracking-[0.2em]">Authentication setup</p>
      <h1 className="font-poppins text-3xl font-semibold mt-4">Add your Clerk publishable key</h1>
      <p className="font-poppins text-dimWhite leading-7 mt-4">
        Create or open your Clerk application, copy its publishable key into <code className="text-white">.env.local</code> as <code className="text-white">VITE_CLERK_PUBLISHABLE_KEY</code>, then restart the dev server.
      </p>
      <a href="/" className="inline-flex mt-7 px-5 py-3 rounded-xl bg-blue-gradient text-primary font-poppins font-medium">Back to home</a>
    </section>
  </main>
);

export default ClerkSetupNotice;
