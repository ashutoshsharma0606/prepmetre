import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-8 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black text-indigo-600">Prep<span className="text-slate-900">Metre</span></Link>
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600">← Return Home</Link>
        </div>
      </header>

      <main className="max-w-4xl w-full mx-auto p-8 my-8 bg-white rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Legal Framework</span>
          <h1 className="text-3xl font-black text-slate-900 mt-3">Terms & Conditions of Service</h1>
          <p className="text-sm text-slate-500 mt-1">Please read these terms carefully before accessing PrepMetre mock tests.</p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">1. Acceptance of Terms</h2>
          <p>
            By accessing, registering on, or utilizing <strong>PrepMetre</strong> (operated by the <strong>Sharma Group</strong>), you enter into a binding legal agreement to comply with these Terms and Conditions. If you do not agree with any provision herein, you must immediately cease usage of the platform and its associated services.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">2. Intellectual Property & Copyright Protection</h2>
          <p>
            All mock test questions, analytical explanations, software code, graphic layouts, logos, and trademarks displayed on PrepMetre are the exclusive intellectual property of the Sharma Group. Unauthorized reproduction, redistribution, screenshotting for public distribution, scraping, or commercial resale of our test materials is strictly prohibited and will be prosecuted under applicable copyright and cyber law statutes.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">3. User Conduct & Anti-Cheat Compliance</h2>
          <p>
            Users agree not to attempt to bypass anti-cheat protections, tamper with test timers, or utilize automated scripts/bots during active assessments. Any violation will result in immediate termination of the user session and permanent banishment from the platform.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">4. Official Business Correspondence</h2>
          <p>
            All formal notices, legal queries, and partnership proposals must be directed to our official corporate email address: <a href="mailto:sharmagroup2026business@gmail.com" className="text-indigo-600 font-semibold underline">sharmagroup2026business@gmail.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}