"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isRegistering) {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }
      // Automatically sign in after successful registration
      setIsRegistering(false);
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      if (email === "sharmagroup2026business@gmail.com") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-800">
        <div className="text-center mb-6">
          <Link href="/" className="text-2xl font-black text-indigo-600">
            Prep<span className="text-slate-900">Metre</span>
          </Link>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Sharma Group Portal</p>
          <h2 className="text-xl font-bold text-slate-800 mt-4">
            {isRegistering ? "Create New Account" : "Secure Sign In"}
          </h2>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aspirant Name"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sharmagroup2026business@gmail.com"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow transition text-sm"
          >
            {isRegistering ? "Register Account" : "Secure Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-xs">
          {isRegistering ? (
            <p className="text-slate-600">
              Already have an account?{" "}
              <button onClick={() => setIsRegistering(false)} className="text-indigo-600 font-bold underline">
                Sign In
              </button>
            </p>
          ) : (
            <p className="text-slate-600">
              New aspirant?{" "}
              <button onClick={() => setIsRegistering(true)} className="text-indigo-600 font-bold underline">
                Create Account
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}