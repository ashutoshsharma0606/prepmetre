import Link from "next/link";

export default function AboutPage() {
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
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Corporate Overview</span>
          <h1 className="text-3xl font-black text-slate-900 mt-3">About PrepMetre — A Sharma Group Venture</h1>
          <p className="text-sm text-slate-500 mt-1">Foundational principles, educational philosophy, and technological architecture.</p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">1. Introduction & Vision</h2>
          <p>
            PrepMetre represents the pinnacle of digital competitive examination preparation. Conceptualized and operated under the parent governance of the <strong>Sharma Group</strong>, our platform bridges the divide between rigorous academic inquiry and modern, lightning-fast computer-based testing (CBT) technology. In an era where examinations such as the Union Public Service Commission (UPSC) Civil Services, Indian Institute of Technology Joint Entrance Examination (IIT-JEE), Staff Selection Commission (SSC), and National Defence Academy (NDA) govern the professional trajectories of millions, PrepMetre provides an uncompromisingly authentic, secure, and data-driven simulation environment.
          </p>
          <p>
            Our core vision is democratization coupled with precision. While traditional test prep platforms rely on static PDF question banks or rudimentary multiple-choice lists, PrepMetre utilizes dynamic question mapping algorithms, stringent anti-cheat telemetry, and granular performance analytics to ensure that every aspirant experiences authentic examination pressure and deep conceptual mastery before facing official test boards.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">2. The Sharma Group Legacy of Excellence</h2>
          <p>
            As a marquee venture of the Sharma Group, PrepMetre inherits a legacy rooted in structural integrity, educational ethics, and technological modernization. The Sharma Group has consistently invested in ventures that transform how Indian learners access professional advancement. By merging deep-domain pedagogical frameworks—curated by veteran educators, retired civil servants, and IIT/IIM alumni—with scalable cloud infrastructure (PostgreSQL, Next.js, and Vercel edge networks), PrepMetre guarantees 99.9% uptime and zero latency during high-concurrency national mock tests.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">3. Comprehensive Exam Streams Offered</h2>
          <p>PrepMetre maintains dedicated curriculum boards for each major competitive category:</p>
          <ul className="list-disc pl-5 space-y-2 font-medium">
            <li><strong>UPSC Civil Services (Prelims & Mains):</strong> Multidisciplinary test series emphasizing analytical comprehension, current affairs synthesis, and GS paper simulations.</li>
            <li><strong>IIT-JEE (Advanced & Mains):</strong> High-difficulty quantitative problem sets in Physics, Chemistry, and Mathematics engineered to test advanced conceptual application.</li>
            <li><strong>SSC CGL, CHSL & MTS:</strong> Speed-oriented quantitative aptitude, reasoning, and English comprehension modules.</li>
            <li><strong>NDA & Naval Academy:</strong> Rigorous testing for General Ability Test (GAT) and Mathematics under strict time constraints.</li>
            <li><strong>Banking (IBPS/SBI PO & Clerk):</strong> Data interpretation, logical reasoning, and financial awareness simulations.</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-800">4. Corporate Contact & Inquiries</h2>
          <p>
            For institutional partnerships, media inquiries, or technical support, stakeholders may reach our central administrative desk directly via official email at <a href="mailto:sharmagroup2026business@gmail.com" className="text-indigo-600 font-semibold underline">sharmagroup2026business@gmail.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}