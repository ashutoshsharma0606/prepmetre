"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [selectedExam, setSelectedExam] = useState("jee");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handlePublishQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    // Payload ready for database injection or API dispatch
    const newQuestionPayload = {
      exam: selectedExam,
      question: questionText,
      options,
      correctAnswer,
      createdAt: new Date().toISOString(),
    };

    console.log("Published Question to Live Test Series:", newQuestionPayload);
    setSuccessMessage(`Successfully injected question into ${selectedExam.toUpperCase()} live test series!`);
    
    // Reset form fields
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
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Sharma Group Governance</p>
          </div>
          <Link href="/" className="text-sm font-bold text-slate-300 hover:text-white bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
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
                placeholder="Enter complete question text with equations or formatting..." 
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

            <button 
              type="submit" 
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
            >
              Publish Question to Live Student Portal 🚀
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}