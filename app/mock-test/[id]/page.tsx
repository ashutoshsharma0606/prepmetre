"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MockTestExecutionPage() {
  // Sample questions database (tailored for high-level exam prep)
  const questions = [
    {
      id: 1,
      text: "Which of the following is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      correct: 1,
      explanation: "New Delhi is the capital territory and seat of the executive, legislative, and judiciary branches of the Government of India."
    },
    {
      id: 2,
      text: "What is the national currency of India?",
      options: ["Dollar", "Rupee", "Yen", "Pound"],
      correct: 1,
      explanation: "The Indian Rupee (INR) is the official currency of the Republic of India."
    },
    {
      id: 3,
      text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correct: 2,
      explanation: "Mars is often called the Red Planet because of the iron oxide prevalent on its surface."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes timer
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer countdown hook
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentIndex]: optionIndex });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) score += 1;
    });
    return score;
  };

  if (isSubmitted) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 select-none relative">
        {/* Result Screen Copyright Watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] z-50 rotate-[-30deg]">
          <p className="text-5xl font-black text-slate-900 tracking-widest whitespace-nowrap">
            PREPMETRE © SHARMA GROUP - RESULT REPORT
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md max-w-xl w-full text-center border border-slate-200 z-10">
          <span className="text-4xl">🏆</span>
          <h1 className="text-2xl font-black text-slate-900 mt-4">Test Submitted Successfully!</h1>
          <p className="text-slate-600 mt-1">PrepMetre Assessment Performance Summary.</p>
          
          <div className="my-6 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">Your Final Score</p>
            <p className="text-4xl font-black text-indigo-900 mt-2">{score} / {questions.length}</p>
          </div>

          <div className="space-y-4 text-left max-h-60 overflow-y-auto pr-2">
            <h3 className="font-bold text-slate-800">Review Solutions:</h3>
            {questions.map((q, idx) => (
              <div key={q.id} className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm">
                <p className="font-semibold text-slate-800">{idx + 1}. {q.text}</p>
                <p className="text-emerald-600 mt-1 font-medium">Correct Answer: {q.options[q.correct]}</p>
                <p className="text-slate-500 mt-1 text-xs">{q.explanation}</p>
              </div>
            ))}
          </div>

          <Link href="/tests" className="mt-6 inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow">
            Back to Mock Tests
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div 
      className="min-h-screen bg-slate-100 flex flex-col font-sans select-none relative overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
    >
      {/* Security Copyright Watermark Overlay (Prevents leaks from screenshots/photos) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] z-50 rotate-[-30deg]">
        <p className="text-6xl font-black text-slate-900 tracking-widest whitespace-nowrap">
          PREPMETRE © SHARMA GROUP - STRICTLY CONFIDENTIAL
        </p>
      </div>

      {/* Exam Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center space-x-3">
          <Image src="/prepmetre.png" alt="Logo" width={32} height={32} className="rounded-lg object-contain" />
          <div>
            <span className="font-extrabold text-indigo-700 text-sm md:text-base">PrepMetre Secure Assessment</span>
            <span className="block text-[9px] text-slate-400 font-bold tracking-widest uppercase">A Sharma Group Venture</span>
          </div>
        </div>
        <div className="bg-amber-50 text-amber-800 px-4 py-1.5 rounded-lg border border-amber-200 font-bold text-sm">
          ⏳ Time Remaining: {formatTime(timeLeft)}
        </div>
      </header>

      {/* Main Grid Interface */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6 z-10">
        {/* Question Panel */}
        <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-md">
                🔒 Anti-Cheat & Copyright Active
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">{currentQ.text}</h2>

            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => (
                <label
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={`flex items-center p-4 rounded-xl border cursor-pointer transition ${
                    selectedAnswers[currentIndex] === idx
                      ? "border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold shadow-sm"
                      : "border-slate-200 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentIndex}`}
                    checked={selectedAnswers[currentIndex] === idx}
                    onChange={() => {}}
                    className="mr-3 text-indigo-600 focus:ring-indigo-500"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-10 pt-4 border-t border-slate-100">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="px-6 py-2.5 bg-slate-200 text-slate-700 font-semibold rounded-xl disabled:opacity-40 hover:bg-slate-300 transition"
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (currentIndex < questions.length - 1) {
                  setCurrentIndex((prev) => prev + 1);
                } else {
                  setIsSubmitted(true);
                }
              }}
              className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow"
            >
              {currentIndex === questions.length - 1 ? "Submit Test" : "Save & Next"}
            </button>
          </div>
        </div>

        {/* Question Palette Sidebar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Question Palette</h3>
            <div className="grid grid-cols-4 gap-2">
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-2.5 rounded-xl font-bold text-sm transition ${
                    currentIndex === idx
                      ? "ring-2 ring-indigo-600 ring-offset-2"
                      : ""
                  } ${
                    selectedAnswers[idx] !== undefined
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsSubmitted(true)}
            className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition shadow"
          >
            End Test & Submit
          </button>
        </div>
      </main>
    </div>
  );
}