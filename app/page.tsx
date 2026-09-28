"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const mainCategories = [
    { id: "jee", title: "Engineering (IIT-JEE)", slug: "jee", badge: "Core Engineering", count: "140+ Tests", exams: ["JEE Advanced Full Mocks", "JEE Mains Chapterwise Practice", "Previous Year Question Papers"], color: "from-blue-600 to-indigo-600", icon: "⚡" },
    { id: "neet", title: "Medical (NEET-UG)", slug: "neet", badge: "Medical Stream", count: "120+ Tests", exams: ["NEET Biology Grand Tests", "Physics & Chemistry Unit Mocks", "Full Syllabus PCB Papers"], color: "from-emerald-600 to-teal-600", icon: "🧬" },
    { id: "upsc", title: "UPSC Civil Services", slug: "upsc", badge: "Civil Services", count: "95+ Tests", exams: ["IAS Prelims GS Paper 1", "CSAT Quantitative & Reasoning", "Weekly Current Affairs Series"], color: "from-amber-600 to-orange-600", icon: "🏛️" },
    { id: "ssc", title: "Staff Selection Commission (SSC)", slug: "ssc", badge: "Govt Jobs", count: "210+ Tests", exams: ["SSC CGL Tier-1 & Tier-2", "SSC CHSL Practice Sets", "SSC CPO & MTS Full Mocks"], color: "from-indigo-600 to-violet-600", icon: "📚" },
    { id: "banking", title: "Banking & Insurance", slug: "banking", badge: "Banking Sector", count: "160+ Tests", exams: ["IBPS PO & Clerk Prelims", "SBI Clerk Complete Series", "RBI Grade B Mock Papers"], color: "from-purple-600 to-fuchsia-600", icon: "💳" },
    { id: "railways", title: "Railways (RRB)", slug: "railways", badge: "Railways", count: "110+ Tests", exams: ["RRB NTPC CBT 1 & CBT 2", "RRB Group D Practice Sets", "ALP Technician Series"], color: "from-rose-600 to-pink-600", icon: "🚂" },
    { id: "statepcs", title: "State PCS Examinations", slug: "state-pcs", badge: "State Level", count: "85+ Tests", exams: ["UPPSC & BPSC Prelims", "MPPSC & RPSC Test Sets", "State Special GK Mocks"], color: "from-cyan-600 to-blue-600", icon: "🇮🇳" },
    { id: "cbse", title: "CBSE & School Boards", slug: "cbse", badge: "Academics", count: "90+ Tests", exams: ["Class 12 Science Mock Papers", "Class 10 Board Question Banks", "Chapter Assessments"], color: "from-orange-600 to-amber-600", icon: "🎓" },
  ];

  const filteredExams = mainCategories.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.exams.some(ex => ex.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      
      {/* Navigation Bar */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 sm:px-10 py-4 transition-colors ${darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white/95 border-slate-200 shadow-xs"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* prepmetre.png Logo Display */}
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-md border border-indigo-500/20 bg-white">
              <Image 
                src="/prepmetre.png" 
                alt="PrepMetre Logo" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div>
              <Link href="/" className="text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                PrepMetre
              </Link>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">
                A Sharma Group Venture
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border text-sm transition font-semibold ${darkMode ? "bg-slate-800 border-slate-700 text-amber-400" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"}`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            <Link 
              href="/admin" 
              className={`hidden sm:inline-block text-xs font-semibold px-3 py-2 rounded-xl transition ${darkMode ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"}`}
            >
              Admin Portal
            </Link>

            <button 
              onClick={() => signIn("google")}
              className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative overflow-hidden py-20 px-6 text-center border-b ${darkMode ? "bg-gradient-to-b from-indigo-950/40 via-slate-950 to-slate-950 border-slate-900" : "bg-gradient-to-b from-indigo-50/60 via-white to-white border-slate-200"}`}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
            <span>🎯 Comprehensive Online Test Series & Practice Hub</span>
          </div>
          
          <h2 className={`text-4xl sm:text-6xl font-black tracking-tight mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Crack Competitive Exams with <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">PrepMetre</span>
          </h2>
          
          <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Access curated mock tests, real-time exam simulations, instant performance analytics, and structured study plans across all major streams.
          </p>

          <div className={`max-w-2xl mx-auto border p-2 rounded-2xl shadow-xl flex items-center transition-colors ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-300 shadow-slate-200"}`}>
            <span className="pl-4 text-slate-400 text-lg">🔍</span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your examination (e.g., JEE, UPSC, SSC CGL)..."
              className={`w-full bg-transparent px-4 py-3 text-sm focus:outline-none ${darkMode ? "text-white placeholder-slate-500" : "text-slate-900 placeholder-slate-400"}`}
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow-md">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl w-full mx-auto p-6 sm:p-10 flex-1 my-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h3 className={`text-2xl font-black ${darkMode ? "text-white" : "text-slate-900"}`}>Explore Exam Test Series</h3>
            <p className={`text-xs sm:text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Select an exam category to browse available mock test papers and question banks.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["All", "Engineering", "Medical", "UPSC", "SSC"].map((categoryTab) => (
              <button
                key={categoryTab}
                onClick={() => setActiveCategory(categoryTab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeCategory === categoryTab 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" 
                    : darkMode ? "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {categoryTab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExams
            .filter(cat => activeCategory === "All" || cat.title.toLowerCase().includes(activeCategory.toLowerCase()))
            .map((cat, idx) => (
              <div 
                key={idx} 
                className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden ${
                  darkMode ? "bg-slate-900 border-slate-800 hover:border-indigo-500/50" : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300"
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cat.color}`}></div>
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-3xl p-2 rounded-xl border ${darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-100"}`}>{cat.icon}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-lg">
                      {cat.count}
                    </span>
                  </div>

                  <h4 className={`font-extrabold text-lg mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {cat.title}
                  </h4>

                  <ul className="space-y-2 mb-6">
                    {cat.exams.map((examItem, i) => (
                      <li key={i} className={`text-xs font-medium flex items-center ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                        {examItem}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/tests/${cat.slug}`} 
                  className={`w-full text-center py-3 font-bold rounded-xl text-xs transition-all shadow-sm border ${
                    darkMode ? "bg-slate-950 text-white border-slate-800 hover:bg-indigo-600 hover:border-indigo-600" : "bg-slate-900 text-white border-slate-900 hover:bg-indigo-600 hover:border-indigo-600"
                  }`}
                >
                  View Test Series →
                </Link>
              </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-12 pb-8 px-6 sm:px-10 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Footer Logo Display */}
              <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-white shadow border border-indigo-500/20">
                <Image src="/prepmetre.png" alt="PrepMetre Logo" fill className="object-contain p-0.5" />
              </div>
              <span className="text-lg font-black text-white">PrepMetre</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's premier digital examination platform delivering high-precision test series, live simulation, and instant result evaluation.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-3">Top Examinations</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/tests/jee" className="hover:text-indigo-400 transition">IIT-JEE Advanced & Mains</Link></li>
              <li><Link href="/tests/neet" className="hover:text-indigo-400 transition">NEET-UG Medical Test Series</Link></li>
              <li><Link href="/tests/upsc" className="hover:text-indigo-400 transition">UPSC Civil Services Prelims</Link></li>
              <li><Link href="/tests/ssc" className="hover:text-indigo-400 transition">SSC CGL, CHSL & CPO</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-3">Legal & Compliance</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-400 transition">Copyright Notice</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-400 transition">Security Disclosure</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-3">Enterprise Governance</h5>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
              <p className="font-extrabold text-indigo-400 mb-1">SHARMA GROUP VENTURE</p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Operated under absolute digital copyright protection and institutional technology standards.
              </p>
              <div className="mt-3 inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                <span className="text-[10px] font-black tracking-widest text-indigo-300 uppercase animate-pulse">
                  @SharmaGroup2026
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 PrepMetre. All rights reserved. Powered by Sharma Group Enterprise.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Support: sharmagroup2026business@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}