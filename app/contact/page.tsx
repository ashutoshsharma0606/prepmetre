"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-8 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black text-indigo-600">Prep<span className="text-slate-900">Metre</span></Link>
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600">← Return Home</Link>
        </div>
      </header>

      <main className="max-w-3xl w-full mx-auto p-8 my-8 bg-white rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Helpdesk & Support</span>
          <h1 className="text-3xl font-black text-slate-900 mt-3">Contact PrepMetre Support</h1>
          <p className="text-sm text-slate-500 mt-1">Get in touch with the Sharma Group central administrative and technical team.</p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-sm space-y-2">
          <p className="font-bold text-indigo-900">Official Business Email Channel:</p>
          <p className="text-indigo-700 font-mono font-semibold text-base">
            <a href="mailto:sharmagroup2026business@gmail.com" className="underline">sharmagroup2026business@gmail.com</a>
          </p>
          <p className="text-xs text-indigo-600 mt-1">We respond to all verified student and institutional inquiries within 24 business hours.</p>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-semibold text-sm">
            ✅ Thank you for contacting PrepMetre. Your message has been dispatched to our support desk successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Your Full Name</label>
              <input type="text" required placeholder="Aspirant Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input type="email" required placeholder="aspirant@sharmagroup.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message / Support Inquiry</label>
              <textarea rows={4} required placeholder="Describe your technical or academic query..." className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm" />
            </div>
            <button type="submit" className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow transition">
              Send Support Message
            </button>
          </form>
        )}
      </main>
    </div>
  );
}