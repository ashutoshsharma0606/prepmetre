import Link from "next/link";

export default function PrivacyPage() {
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
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Legal Document</span>
          <h1 className="text-3xl font-black text-slate-900 mt-3">Privacy Policy & Data Governance</h1>
          <p className="text-sm text-slate-500 mt-1">Effective Date: January 1, 2026 | Sharma Group Governance</p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">1. Commitment to User Privacy</h2>
          <p>
            PrepMetre (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;platform&rdquo;), a venture managed under the <strong>Sharma Group</strong>, places paramount importance on the privacy and security of our registered aspirants, institutional partners, and visitors. This Privacy Policy outlines precisely how we collect, process, safeguard, and utilize your personal and academic telemetry data when you interact with our website, mock test interfaces, and administrative portals.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">2. Information We Collect</h2>
          <p>To deliver personalized mock test analytics and maintain platform integrity, we gather the following data categories:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Account Credentials:</strong> Full name, verified email address, encrypted authentication hashes, and user roles (Student or Administrator).</li>
            <li><strong>Assessment Telemetry:</strong> Question response selections, time elapsed per question, score summaries, and historical test performance metrics.</li>
            <li><strong>Technical Metadata:</strong> IP addresses, browser configurations, session timestamps, and device identifiers utilized strictly for anti-cheat and security auditing.</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">3. Data Security & Anti-Cheat Protocols</h2>
          <p>
            All test content displayed on PrepMetre is protected under intellectual property laws. Our platform employs client-side restriction scripts (such as context-menu disabling, text selection blocking, and persistent watermark overlays) to prevent unauthorized screen captures or content scraping. User data is stored in encrypted PostgreSQL databases secured via industry-standard protocols.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">4. Contact Regarding Privacy Concerns</h2>
          <p>
            If you have questions, data deletion requests, or privacy inquiries regarding our practices, please contact our Compliance Officer directly at <a href="mailto:sharmagroup2026business@gmail.com" className="text-indigo-600 font-semibold underline">sharmagroup2026business@gmail.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}