"use client";
import Link from "next/link";
import Image from "next/image";

export default function MockTestsPage() {
  const categories = [
    { id: 1, title: "Banking & Insurance (IBPS / SBI)", tests: 45, duration: "60 mins", level: "Advanced" },
    { id: 2, title: "SSC CGL & CHSL Tier-1", tests: 60, duration: "60 mins", level: "Moderate" },
    { id: 3, title: "Railway NTPC & Group D", tests: 35, duration: "90 mins", level: "Easy to Moderate" },
    { id: 4, title: "UPSC Civil Services Prelims", tests: 20, duration: "120 mins", level: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/prepmetre.png" alt="Logo" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-extrabold text-indigo-700">PrepMetre</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600">Back to Home</Link>
        </div>
      </header>

      {/* Catalog Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">Select Exam Category</h1>
          <p className="text-slate-600">Choose your targeted examination stream to start practicing live tests.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-500 transition">
              <div>
                <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">{cat.level}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4">{cat.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{cat.tests} Full-Length Mock Tests Available</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Duration: {cat.duration}</span>
                <Link href={`/mock-test/sample-test-id`} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow transition">
                  Start Test Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}