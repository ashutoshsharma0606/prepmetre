import Link from "next/link";

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-50 shadow-xs">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black text-indigo-600 tracking-tight">
            Prep<span className="text-slate-900">Metre</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/security" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
              Security Disclosure
            </Link>
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 flex items-center gap-1 transition-colors">
              <span>←</span> Return Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl w-full mx-auto p-6 md:p-12 my-8 bg-white rounded-2xl shadow-sm border border-slate-200 space-y-12">
        
        {/* Document Title Header */}
        <div className="border-b border-slate-100 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Intellectual Property Framework
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Copyright Notice & Intellectual Property Rights
          </h1>
          <p className="text-sm text-slate-500 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Governing Entity:</strong> Sharma Group IP Legal Division</span>
            <span>•</span>
            <span><strong>Version:</strong> 2.0 Enterprise</span>
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">1. Ownership of Platform Content</h2>
          <p>
            All content published, displayed, hosted, or streamed on <strong>PrepMetre</strong>—including but not limited to mock test questions, answer keys, diagnostic explanations, structural architecture, database schemas, source code, user interface designs, custom graphics, typography elements, audio files, logos, and trademarks—is the exclusive intellectual property of the <strong>Sharma Group</strong> or its licensed content partners.
          </p>
          <p>
            The compilation of all content on this site is the exclusive property of Sharma Group and is protected under national and international copyright laws, treaties, and conventions.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">2. Permitted vs. Prohibited Uses</h2>
          <p>Users are granted a limited, revocable, non-exclusive license to access PrepMetre strictly for personal, non-commercial exam preparation purposes. Under no circumstances may you:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Copy, reproduce, republish, upload, post, transmit, or distribute test materials or platform source code in any form without explicit prior written authorization from Sharma Group.</li>
            <li>Scrape, crawl, harvest, or index question banks or data pages using automated bots, scripts, or spider applications.</li>
            <li>Resell, license, lease, or sub-license platform test modules or analytical evaluations to third-party institutions or coaching centers.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">3. Reporting Copyright Infringements (DMCA Policy)</h2>
          <p>
            Sharma Group respects the intellectual property rights of others. If you believe that your copyrighted work has been copied, scraped, or made available on PrepMetre in a way that constitutes copyright infringement, please submit a formal takedown notice to our compliance team with concrete evidence.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 text-sm leading-relaxed border-t border-slate-100 pt-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">4. Copyright Contact & Licensing Requests</h2>
          <p>
            For official licensing permissions, institutional usage inquiries, or copyright infringement notifications, contact our legal team:
          </p>
          <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 flex flex-col space-y-2">
            <span className="font-bold text-slate-900">Sharma Group Intellectual Property Division</span>
            <span><strong>Email Support:</strong> <a href="mailto:sharmagroup2026business@gmail.com" className="text-indigo-600 font-semibold underline hover:text-indigo-800 transition-colors">sharmagroup2026business@gmail.com</a></span>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>© 2026 PrepMetre — A Sharma Group Venture. All rights reserved.</p>
      </footer>
    </div>
  );
}