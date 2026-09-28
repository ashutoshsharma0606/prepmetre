import Link from "next/link";

export default function SecurityPage() {
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
            <Link href="/copyright" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
              Copyright Notice
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
            Platform Security & Defense
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Security Disclosure & Vulnerability Reporting
          </h1>
          <p className="text-sm text-slate-500 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Governing Entity:</strong> Sharma Group Security Operations Center</span>
            <span>•</span>
            <span><strong>Version:</strong> 3.1 Enterprise</span>
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">1. Commitment to Platform Security</h2>
          <p>
            At <strong>PrepMetre</strong>, a venture managed under the <strong>Sharma Group</strong>, we maintain a proactive security posture to safeguard student credentials, assessment items, performance telemetry databases, and real-time proctoring systems against evolving cyber threats.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">2. Technical Safeguards & Anti-Cheat Controls</h2>
          <p>Our engineering architecture implements layered security protocols:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong>Data Encryption:</strong> All database storage is encrypted via AES-256 at rest, and all transit communications utilize TLS 1.3 protocol standards.</li>
            <li><strong>Proctoring & Telemetry Audits:</strong> Client-side triggers record focus loss, window resizing, and multi-device authentications to protect assessment integrity.</li>
            <li><strong>Access Control:</strong> Strict Role-Based Access Control (RBAC) ensures administrative privileges are tightly restricted.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">3. Responsible Disclosure Policy</h2>
          <p>
            If you are a security researcher or platform user who has discovered a potential security vulnerability, bug, or exposure, we appreciate your cooperation through responsible disclosure. Please do not exploit the vulnerability, access private user telemetry, or disrupt live mock test sessions.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 text-sm leading-relaxed border-t border-slate-100 pt-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">4. Vulnerability Reporting & Contact</h2>
          <p>
            Report security vulnerabilities or coordinate disclosure procedures directly with our cybersecurity response team:
          </p>
          <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 flex flex-col space-y-2">
            <span className="font-bold text-slate-900">Sharma Group Security Operations Center (SOC)</span>
            <span><strong>Secure Email:</strong> <a href="mailto:sharmagroup2026business@gmail.com" className="text-indigo-600 font-semibold underline hover:text-indigo-800 transition-colors">sharmagroup2026business@gmail.com</a></span>
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