import Link from "next/link";

interface PageProps {
  params: Promise<{ exam: string }>;
}

export default async function ExamTestSeriesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const examName = resolvedParams.exam.toUpperCase();

  const mockTests = [
    { title: `${examName} Full Syllabus Mock Test 01`, questions: 90, duration: "180 Mins", marks: 300, level: "Moderate" },
    { title: `${examName} Advanced Practice Paper 02`, questions: 75, duration: "150 Mins", marks: 250, level: "Hard" },
    { title: `${examName} Chapterwise Assessment (Physics/Quant)`, questions: 30, duration: "60 Mins", marks: 120, level: "Easy" },
    { title: `${examName} Previous Year Solved Paper 2025`, questions: 100, duration: "180 Mins", marks: 400, level: "Exam Level" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <header className="bg-white border-b border-slate-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-sm font-bold text-indigo-600 hover:underline">
            ← Back to Home
          </Link>
          <span className="text-xs font-extrabold uppercase tracking-widest bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg border border-indigo-200">
            {examName} Examination Portal
          </span>
        </div>
      </header>

      <main className="max-w-5xl w-full mx-auto p-8 flex-1">
        <div className="mb-8 bg-indigo-900 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-black">{examName} Test Series & Mock Papers</h1>
          <p className="text-indigo-200 text-sm mt-2">
            Practice simulated test papers designed by top educators. Includes detailed solutions and national performance benchmarking.
          </p>
        </div>

        <div className="space-y-4">
          {mockTests.map((test, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                  {test.level}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">{test.title}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  {test.questions} Questions • {test.duration} • {test.marks} Total Marks
                </p>
              </div>
              <Link 
                href="/mock-test/live" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition shadow-sm whitespace-nowrap"
              >
                Start Test Now →
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs">
        <p>© 2026 PrepMetre • A Sharma Group Venture</p>
      </footer>
    </div>
  );
}