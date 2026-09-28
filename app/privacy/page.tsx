import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-50 shadow-xs">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black text-indigo-600 tracking-tight">
            Prep<span className="text-slate-900">Metre</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
              Terms of Service
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
            Legal Document & Data Governance
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Privacy Policy & Data Governance Framework
          </h1>
          <p className="text-sm text-slate-500 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Governing Entity:</strong> Sharma Group Governance</span>
            <span>•</span>
            <span><strong>Version:</strong> 3.4 Enterprise</span>
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">1. Commitment to User Privacy & Scope</h2>
          <p>
            PrepMetre (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;platform&rdquo;), a premier educational assessment ecosystem managed under the corporate umbrella of the <strong>Sharma Group</strong>, places paramount importance on the privacy, confidentiality, and security of our registered aspirants, institutional partners, educators, and platform visitors. 
          </p>
          <p>
            This Privacy Policy outlines precisely how we collect, process, safeguard, store, and utilize your personal, academic, and technical telemetry data when you interact with our website, mock test interfaces, real-time analytics dashboards, mobile applications, and administrative portals. By accessing or utilizing PrepMetre, you acknowledge that you have read, understood, and agreed to the data practices articulated within this governance framework.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">2. Information Categories We Collect</h2>
          <p>To deliver precise, personalized mock test analytics, ensure fair testing environments, and maintain platform integrity, we gather distinct categories of data:</p>
          
          <div className="space-y-3 pl-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">A. Account & Registration Credentials</strong>
              <p className="text-slate-600">Full legal name, verified email address, encrypted authentication hashes (passwords), telephone numbers (if 2FA is enabled), profile pictures, and designated user roles (Student, Educator, or Institutional Administrator).</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">B. Assessment & Performance Telemetry</strong>
              <p className="text-slate-600">Question response selections, precise time elapsed per question, section-wise score summaries, accuracy percentages, historical test performance curves, and comparative percentile benchmarks.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">C. Technical Metadata & Security Telemetry</strong>
              <p className="text-slate-600">IP addresses, browser types and versions, operating system details, session timestamps, device hardware identifiers, and browser focus/blur events utilized strictly for anti-cheat verification and platform security auditing.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">D. Financial & Transactional Data</strong>
              <p className="text-slate-600">If you subscribe to premium test tiers, payment processing is handled through PCI-DSS compliant third-party gateways (e.g., Stripe, Razorpay). PrepMetre stores transaction IDs, invoice logs, and subscription statuses but does not store raw credit/debit card numbers or CVVs.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">3. How We Utilize Collected Information</h2>
          <p>We process your information strictly for legitimate operational, educational, and security purposes, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Generating comprehensive, individualized performance scorecards and diagnostic analytical insights.</li>
            <li>Maintaining account security, verifying user identities, and preventing credential sharing or multi-login exploitation.</li>
            <li>Enforcing strict proctoring and anti-cheat protocols during live timed assessments.</li>
            <li>Sending critical transactional notices, platform updates, test schedule reminders, and security alerts.</li>
            <li>Conducting internal algorithmic research and aggregated statistical analysis to improve question bank calibration and test difficulty scaling.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">4. Data Security & Advanced Anti-Cheat Protocols</h2>
          <p>
            All test content, question banks, and algorithmic evaluations displayed on PrepMetre are protected under international intellectual property laws and Sharma Group proprietary rights. 
          </p>
          <p>
            Our platform employs robust client-side restriction scripts—including context-menu disabling, text-selection blocking, full-screen enforcement, clipboard event monitoring, and dynamic persistent watermark overlays—to prevent unauthorized screen captures, content scraping, or test leaks. 
          </p>
          <p>
            User telemetry and account databases are housed in encrypted PostgreSQL clusters secured via TLS 1.3 encryption in transit and AES-256 encryption at rest. Access to production servers is strictly limited to authorized Sharma Group security personnel under strict role-based access control (RBAC).
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">5. Cookie Policy & Tracking Technologies</h2>
          <p>
            PrepMetre utilizes essential cookies, local storage tokens, and session identifiers to maintain your login state, remember dashboard preferences, and preserve active test session states in case of sudden network disconnections. We do not utilize third-party advertising trackers or sell behavioral telemetry data to marketing brokers.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">6. Data Retention & Account Deletion Rights</h2>
          <p>
            We retain your personal data and assessment telemetry for as long as your account remains active or as needed to provide you platform services. If you wish to close your account or request the permanent erasure of your personal data from our servers, you may submit a formal request to our compliance team. Upon verification, all identifiable telemetry will be purged within 30 business days, subject to legal or financial record-keeping obligations.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">7. Compliance & Regulatory Frameworks</h2>
          <p>
            As a global educational platform under Sharma Group, PrepMetre aligns its operational workflows with major global privacy expectations, including the General Data Protection Regulation (GDPR) for European users, the California Consumer Privacy Act (CCPA) for California residents, and applicable digital governance standards in South Asia.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4 text-sm leading-relaxed border-t border-slate-100 pt-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">8. Contact Regarding Privacy Concerns</h2>
          <p>
            If you have questions, data access requests, compliance inquiries, or grievance submissions regarding our privacy practices, please contact our Compliance Officer directly:
          </p>
          <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 flex flex-col space-y-2">
            <span className="font-bold text-slate-900">Sharma Group Data Compliance Division</span>
            <span><strong>Email Support:</strong> <a href="mailto:sharmagroup2026business@gmail.com" className="text-indigo-600 font-semibold underline hover:text-indigo-800 transition-colors">sharmagroup2026business@gmail.com</a></span>
            <span><strong>Response Time Commitment:</strong> Within 48 to 72 business hours.</span>
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