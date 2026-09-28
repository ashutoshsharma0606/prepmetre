"use client";
import { useState, useEffect, ReactElement, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  id: string;
  title: string;
  slug: string;
  badge: string;
  count: string;
  exams: string[];
  color: string;
  icon: string;
}

interface UserSession {
  email: string;
  name: string;
  picture: string;
}

export default function Home(): ReactElement {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const [user, setUser] = useState<UserSession | null>(null);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  
  // Test interface state
  const [activeTest, setActiveTest] = useState<string | null>(null);

  // Admin Portal security state
  const [showAdminPinModal, setShowAdminPinModal] = useState<boolean>(false);
  const [adminPin, setAdminPin] = useState<string>("");
  const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(false);
  const [pinError, setPinError] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Load persisted session from localStorage / cookies
    const savedUser = localStorage.getItem("prepmetre_session");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        setUser(null);
      }
    }
  }, [darkMode]);

  const handleGoogleSignIn = (isAdminAccount: boolean = false) => {
    // Simulated Google Login profile (uses admin email if requested)
    const mockUser: UserSession = isAdminAccount ? {
      name: "Ashutosh Sharma",
      email: "ashutoshsharma61667@gmail.com",
      picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
    } : {
      name: "Student Aspirant",
      email: "aspirant@gmail.com",
      picture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces"
    };

    setUser(mockUser);
    localStorage.setItem("prepmetre_session", JSON.stringify(mockUser));
    setShowAuthModal(false);
  };

  const handleSignOut = () => {
    setUser(null);
    setIsAdminUnlocked(false);
    localStorage.removeItem("prepmetre_session");
  };

  const mainCategories: Category[] = [
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

  const handleAttemptClick = (categoryTitle: string) => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setActiveTest(categoryTitle);
    }
  };

  const handleAdminAccessVerify = (e: FormEvent) => {
    e.preventDefault();
    // Required file security code / PIN
    if (adminPin === "SHARMA-ADMIN-2026") {
      setIsAdminUnlocked(true);
      setShowAdminPinModal(false);
      setPinError(false);
      setAdminPin("");
    } else {
      setPinError(true);
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      
      {/* Navigation Bar */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 sm:px-10 py-4 transition-colors ${darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white/95 border-slate-200"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-md border border-indigo-500/20 bg-white">
              <Image src="/prepmetre.png" alt="PrepMetre Logo" fill className="object-contain p-1" />
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
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Admin Portal Button - Visible only for authorized admin email */}
            {user?.email === "ashutoshsharma61667@gmail.com" && (
              <button 
                onClick={() => setShowAdminPinModal(true)}
                className="text-xs font-bold px-3.5 py-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition flex items-center space-x-1.5"
              >
                <span>🔒 Admin Portal</span>
              </button>
            )}

            {user ? (
              <div className="flex items-center space-x-3 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-2xl">
                <img 
                  src={user.picture} 
                  alt={user.name} 
                  className="w-7 h-7 rounded-full object-cover border border-indigo-400"
                />
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-bold text-indigo-300 leading-tight">{user.name}</p>
                  <p className="text-[10px] text-slate-400 truncate max-w-[140px]">{user.email}</p>
                </div>
                <button 
                  onClick={handleSignOut}
                  title="Sign Out"
                  className="ml-2 text-xs text-rose-400 hover:text-rose-300 font-bold px-2 py-1 rounded bg-rose-500/10 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowAuthModal(true)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Sign in with Google</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Active Test Modal Simulator */}
      {activeTest && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-lg w-full text-center shadow-2xl relative">
            <button 
              onClick={() => setActiveTest(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-sm bg-slate-800/50 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
            <span className="text-4xl mb-3 block">🚀</span>
            <h3 className="text-xl font-black text-white mb-2">Live Test Simulation</h3>
            <p className="text-sm text-indigo-400 font-semibold mb-4">{activeTest}</p>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              You are signed in as <strong className="text-slate-200">{user?.name}</strong>. Your test environment is ready with live timers, question bookmarking, and instant analytics.
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={() => alert("Test started successfully! Loading questions...")}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-xl text-xs transition shadow-lg shadow-indigo-600/20"
              >
                Start Test Now →
              </button>
              <button 
                onClick={() => setActiveTest(null)}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Secure Admin PIN / File Code Verification Modal */}
      {showAdminPinModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-amber-500/40 p-8 rounded-3xl max-w-md w-full text-center shadow-2xl relative">
            <button 
              onClick={() => setShowAdminPinModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-sm bg-slate-800/50 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
            <span className="text-4xl mb-3 block">🛡️</span>
            <h3 className="text-xl font-black text-white mb-1">Secure Admin Authentication</h3>
            <p className="text-xs text-slate-400 mb-6">
              Enter the required admin file security code to access the Sharma Group management console.
            </p>
            
            <form onSubmit={handleAdminAccessVerify} className="space-y-4">
              <input 
                type="password"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                placeholder="Enter Admin File Code (e.g., SHARMA-ADMIN-2026)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 text-center tracking-wider"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-rose-400 font-bold">Invalid security code. Please check file configurations.</p>
              )}
              <button 
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs transition shadow-lg shadow-amber-500/20"
              >
                Verify & Open Admin Portal
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Admin Dashboard View (When Unlocked) */}
      {isAdminUnlocked ? (
        <div className="max-w-7xl mx-auto p-6 sm:p-10 my-8 bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Secure Management Console</span>
              <h2 className="text-2xl font-black text-white mt-2">Sharma Group Admin Portal</h2>
            </div>
            <button 
              onClick={() => setIsAdminUnlocked(false)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition"
            >
              Close Admin View
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Active Users</p>
              <p className="text-3xl font-black text-white mt-2">1,248</p>
              <span className="text-emerald-400 text-xs font-bold mt-1 block">+18% this week</span>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tests Attempted Today</p>
              <p className="text-3xl font-black text-white mt-2">4,812</p>
              <span className="text-indigo-400 text-xs font-bold mt-1 block">Live simulation active</span>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">System Status</p>
              <p className="text-3xl font-black text-emerald-400 mt-2">Optimal</p>
              <span className="text-slate-400 text-xs font-bold mt-1 block">Cloudflare Workers Online</span>
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-white text-sm mb-4">Quick Management Actions</h4>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => alert("Test series questions database updated.")} className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition">
                Manage Question Bank
              </button>
              <button onClick={() => alert("Leaderboard cache cleared.")} className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition">
                Refresh Leaderboards
              </button>
              <button onClick={() => alert("System logs exported.")} className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition">
                Export System Logs
              </button>
            </div>
          </div>
        </div>
      ) : null}

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
            <p className={`text-xs sm:text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              {user ? "All test series are fully unlocked for your account." : "Sign in to attempt tests, record scores, and track national leaderboards."}
            </p>
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

                <button 
                  onClick={() => handleAttemptClick(cat.title)}
                  className={`w-full text-center py-3 font-bold rounded-xl text-xs transition-all shadow-sm border ${
                    darkMode ? "bg-slate-950 text-white border-slate-800 hover:bg-indigo-600 hover:border-indigo-600" : "bg-slate-900 text-white border-slate-900 hover:bg-indigo-600 hover:border-indigo-600"
                  }`}
                >
                  {user ? "Attempt Test Series →" : "Sign In to Attempt →"}
                </button>
              </div>
          ))}
        </div>
      </main>

      {/* Sign In Selection Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full text-center shadow-2xl relative">
            <button 
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-sm bg-slate-800/50 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
            <span className="text-4xl mb-3 block">🔐</span>
            <h3 className="text-xl font-black text-white mb-2">Sign in with Google</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Choose an account profile to access all test series, save performance analytics, and sync your progress.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleGoogleSignIn(false)}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-xl text-xs transition shadow-lg shadow-indigo-600/20 flex items-center justify-center space-x-2"
              >
                <span>Continue as Student Aspirant</span>
              </button>
              
              <button
                onClick={() => handleGoogleSignIn(true)}
                className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-bold rounded-xl text-xs transition flex items-center justify-center space-x-2"
              >
                <span>Sign in as Admin (Ashutosh Sharma)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-12 pb-8 px-6 sm:px-10 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
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
              <li><span className="hover:text-indigo-400 cursor-pointer">IIT-JEE Advanced & Mains</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">NEET-UG Medical Test Series</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">UPSC Civil Services Prelims</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">SSC CGL, CHSL & CPO</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-3">Legal & Compliance</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/copyright" className="hover:text-indigo-400 transition">Copyright Notice</Link></li>
              <li><Link href="/security" className="hover:text-indigo-400 transition">Security Disclosure</Link></li>
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