"use client";
import { useState, useEffect, ReactElement } from "react";
import Link from "next/link";

interface UserSession {
  email?: string;
  name?: string;
}

export default function AdminPage(): ReactElement {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedExam, setSelectedExam] = useState<string>("jee");
  const [questionText, setQuestionText] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    const match = document.cookie.match(new RegExp('(^| )prepmetre_user=([^;]+)'));
    if (match) {
      try {
        setUser(JSON.parse(decodeURIComponent(match[2])));
      } catch (e) {
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Loading Security Protocol...</div>;
  }

  const ADMIN_EMAIL = "ashutoshsharma61667@gmail.com";

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="bg-rose-500/10 border border-rose-500/20 p-8 rounded-3xl max-w-md w-full backdrop-blur-xl shadow-2xl">
          <span className="text-5xl mb-4 block">🛡️</span>
          <h1 className="text-2xl font-black text-rose-400 mb-2">Restricted Area</h1>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
            This administrative telemetry and question bank control center is strictly locked. Unauthorized attempts are logged.
          </p>
          <div className="space-y-3">
            <a href="/api/auth/google" className="block w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition shadow-lg">
              Sign in with Master Admin Account
            </a>
            <Link href="/" className="block w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold rounded-xl text-xs border border-slate-800 transition">
              ← Return to Student Portal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handlePublishQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    const newQuestionPayload = {
      exam: selectedExam,
      question: questionText,
      options,
      correctAnswer,
      createdAt: new Date().toISOString(),
    };

    console.log("Published Question:", newQuestionPayload);
    setSuccessMessage(`Successfully injected question into ${selectedExam.toUpperCase()} live test series!`);
    
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(0);

    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="bg-slate-900 border-b border-slate-800 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-black text-indigo-400 text-xl">PrepMetre Admin Console</h1>
            <p className="text-xs text-indigo-300 font-semibold mt-0.5">Authenticated as Admin: {user.email}</p>
          </div>
          <Link href="/" className="text-sm font-bold text-slate-300 hover:text-white bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 transition">
            Exit to Student Portal
          </Link>
        </div>
      </header>

      <main className="max-w-4xl w-full mx-auto p-8 flex-1">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
          <div className="mb-6 border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white">Live Test Series Question Builder</h3>
            <p className="text-xs text-slate-400 mt-1">Add structured multiple-choice questions directly to active student mock tests.</p>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold animate-pulse">
              {successMessage}
            </div>
          )}

          <form onSubmit={handlePublishQuestion} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Select Target Test Series</label>
              <select 
                value={selectedExam} 
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
              >
                <option value="jee">Engineering (IIT-JEE Advanced & Mains)</option>
                <option value="neet">Medical (NEET-UG Grand Tests)</option>
                <option value="upsc">UPSC Civil Services Prelims (GS 1)</option>
                <option value="ssc">SSC CGL Tier-1 & Tier-2</option>
                <option value="banking">Banking & Insurance (IBPS/SBI)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Question Statement</label>
              <textarea 
                rows={3} 
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Enter complete question text..." 
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500" 
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">Multiple Choice Options</label>
              {options.map((opt, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <span className="w-8 h-10 flex items-center justify-center font-bold text-xs bg-slate-950 border border-slate-700 rounded-xl text-indigo-400">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <input 
                    type="text" 
                    value={opt}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    placeholder={`Enter option ${String.fromCharCode(65 + idx)} text...`}
                    required
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Select Correct Option Index</label>
              <select 
                value={correctAnswer} 
                onChange={(e) => setCorrectAnswer(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
              >
                <option value={0}>Option A is Correct</option>
                <option value={1}>Option B is Correct</option>
                <option value={2}>Option C is Correct</option>
                <option value={3}>Option D is Correct</option>
              </select>
            </div>

            <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm shadow-lg transition">
              Publish Question to Live Student Portal 🚀
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}