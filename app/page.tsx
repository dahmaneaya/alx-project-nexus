import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white rounded-2xl p-10 shadow">
        <h1 className="text-3xl font-bold text-primary">TaskFlow Pro</h1>
        <p className="mt-4 text-slate-600">
          A modern task & productivity manager built with Next.js, TypeScript, and TailwindCSS.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/dashboard" className="px-4 py-2 rounded bg-primary text-white">Open Dashboard</Link>
          <a href="#" className="px-4 py-2 rounded border">Docs</a>
        </div>
      </div>
    </main>
  );
}
