import Link from "next/link";

export default function TermsPage() {
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
            Legal Framework & Agreement
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Terms & Conditions of Service
          </h1>
          <p className="text-sm text-slate-500 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Governing Entity:</strong> Sharma Group Legal Division</span>
            <span>•</span>
            <span><strong>Version:</strong> 4.0 Enterprise</span>
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">1. Acceptance of Terms & Legal Binding</h2>
          <p>
            By accessing, browsing, registering on, or utilizing <strong>PrepMetre</strong> (&ldquo;the Platform&rdquo;), a premier educational assessment ecosystem operated under the corporate management of the <strong>Sharma Group</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you enter into a binding legal agreement to comply with and be bound by these Terms and Conditions of Service. 
          </p>
          <p>
            If you are accessing or using the platform on behalf of a school, coaching institution, or corporate entity, you represent and warrant that you possess the legal authority to bind that entity to these terms. If you do not agree with any provision, clause, or restriction contained herein, you must immediately cease all access, registration, and usage of PrepMetre and its associated testing interfaces.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">2. Account Registration, Eligibility & Security</h2>
          <p>To access mock tests, performance analytics, and specialized preparation pathways, users must register for a verified account. The following conditions govern account creation and management:</p>
          <div className="space-y-3 pl-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">A. Accuracy of Information</strong>
              <p className="text-slate-600">You agree to provide true, accurate, current, and complete registration data during account setup and to keep your profile information updated.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">B. Credential Confidentiality</strong>
              <p className="text-slate-600">You are entirely responsible for maintaining the strict confidentiality of your password, authentication tokens, and account access. Account sharing, multi-user logins, and credential trading are strictly prohibited.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              <strong className="text-slate-900 block mb-1">C. Account Suspension</strong>
              <p className="text-slate-600">Sharma Group reserves the right to suspend or terminate any account immediately without prior notice if suspicious activity, automated script usage, or security breaches are detected.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">3. Intellectual Property, Content & Copyright Protection</h2>
          <p>
            All mock test questions, diagnostic modules, analytical explanations, software code, user interface layouts, graphic assets, brand logos, and trademarks displayed on PrepMetre are the exclusive intellectual property of the Sharma Group.
          </p>
          <p>
            Unauthorized reproduction, redistribution, screenshotting for public distribution, scraping, reverse engineering, decompilation, or commercial resale of our test materials is strictly prohibited. Any infringement will be prosecuted to the maximum extent permitted under applicable national and international copyright, intellectual property, and cyber law statutes.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">4. User Conduct & Strict Anti-Cheat Compliance</h2>
          <p>
            PrepMetre maintains an uncompromising environment of academic integrity. Users explicitly agree to the following behavioral standards during active assessments:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Users shall not attempt to bypass client-side or server-side anti-cheat restrictions, fullscreen enforcement protocols, or context-menu locks.</li>
            <li>The deployment of automated bots, macro scripts, browser extensions designed to extract text, or remote assistance software during timed mock tests is strictly banned.</li>
            <li>Violation of anti-cheat telemetry rules will trigger an instant test session abort, invalidation of scorecards, and permanent banishment from the PrepMetre ecosystem.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">5. Subscription Fees, Billing & Refund Policies</h2>
          <p>
            Certain advanced mock test tiers, institutional analytics packages, and specialized preparation modules require paid subscriptions. All transactions are securely handled through PCI-DSS compliant third-party payment gateways. Unless explicitly stated otherwise in promotional offers, all subscription fees are non-refundable once test modules have been accessed or unlocked. Subscription pricing is subject to change upon advance notice published on the platform.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">6. Limitation of Liability & Educational Disclaimers</h2>
          <p>
            PrepMetre is designed as a preparatory and diagnostic simulation tool. While Sharma Group endeavors to maintain high standards of question accuracy and simulation fidelity, we do not guarantee exact score correlation with official competitive examinations. 
          </p>
          <p>
            Under no circumstances shall Sharma Group, its directors, employees, partners, or affiliates be held liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the platform services.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">7. Modifications to Terms of Service</h2>
          <p>
            Sharma Group reserves the right to modify, amend, update, or replace these Terms and Conditions at any time at its sole discretion. Continued usage of PrepMetre following the publication of revised terms constitutes full acceptance of those changes. Users are advised to review this page periodically.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4 text-sm leading-relaxed border-t border-slate-100 pt-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">8. Official Business Correspondence & Legal Notices</h2>
          <p>
            All formal legal notices, partnership inquiries, and business correspondence must be directed to our official corporate email address:
          </p>
          <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 flex flex-col space-y-2">
            <span className="font-bold text-slate-900">Sharma Group Legal & Administrative Division</span>
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