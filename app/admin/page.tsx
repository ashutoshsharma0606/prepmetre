"use client";
import { useState, useEffect, ReactElement } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface UserSession {
  email?: string;
  name?: string;
}

export default function AdminPage(): ReactElement {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedTestId, setSelectedTestId] = useState<string>("");
  const [availableTests, setAvailableTests] = useState<{ id: string; title: string; category: string }[]>([]);
  const [questionText, setQuestionText] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState<number>(0);
  const [explanation, setExplanation] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
    fetchTests();
  }, []);

  const fetchTests = async () => {
    const { data, error } = await supabase.from('tests').select('id, title, category');
    if (data && data.length > 0) {
      setAvailableTests(data);
      setSelectedTestId(data[0].id);
    } else {
      // If no tests exist yet in Supabase, create a default test automatically
      const { data: newTest, error: insertError } = await supabase.from('tests').insert([
        { title: 'JEE Advanced Full Mock 1', slug: 'jee-advanced-mock-1', category: 'jee', badge: 'Core Engineering', total_questions: 30, duration_minutes: 180 }
      ]).select('id, title, category').single();

      if (newTest) {
        setAvailableTests([newTest]);
        setSelectedTestId(newTest.id);
      }
    }
  };

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

  const handlePublishQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim() || !selectedTestId) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await supabase.from('questions').insert([
      {
        test_id: selectedTestId,
        question_text: questionText,
        options: options,
        correct_option: correctOption,
        explanation: explanation || "No explanation provided."
      }
    ]);

    setIsSubmitting(false);

    if (error) {
      setErrorMessage(`Failed to save question: ${error.message}`);
    } else {
      setSuccessMessage(`Successfully injected question directly into Supabase database! 🚀`);
      setQuestionText("");
      setOptions(["", "", "", ""]);
      setCorrectOption(0);
      setExplanation("");

      setTimeout(() => setSuccessMessage(""), 5000);
    }
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
            <h3 className="text-xl font-black text-white">Live Supabase Question Ingester</h3>
            <p className="text-xs text-slate-400 mt-1">Add structured multiple-choice questions directly to your live Supabase database tables.</p>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-rose-950/60 border border-rose-500/30 text-rose-300 rounded-xl text-xs font-bold">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handlePublishQuestion} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Select Target Test Series</label>
              <select 
                value={selectedTestId} 
                onChange={(e) => setSelectedTestId(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
              >
                {availableTests.map((t) => (
                  <option key={t.id} value={t.id}>{t.title} ({t.category.toUpperCase()})</option>
                ))}
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
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Select Correct Option</label>
              <select 
                value={correctOption} 
                onChange={(e) => setCorrectOption(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
              >
                <option value={0}>Option A is Correct</option>
                <option value={1}>Option B is Correct</option>
                <option value={2}>Option C is Correct</option>
                <option value={3}>Option D is Correct</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Solution Explanation (Optional)</label>
              <input 
                type="text"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Enter brief step-by-step answer explanation..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm shadow-lg transition disabled:opacity-50"
            >
              {isSubmitting ? "Saving to Supabase..." : "Publish Question to Supabase Database 🚀"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}