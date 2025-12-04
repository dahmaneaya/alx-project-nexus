'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">TaskFlow Pro</Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-600 hover:text-slate-900">Dashboard</Link>
          <Link href="#" className="text-slate-600 hover:text-slate-900">Docs</Link>
        </div>
      </div>
    </nav>
  );
}
