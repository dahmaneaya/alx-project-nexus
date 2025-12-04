'use client';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="sticky top-6">
      <div className="bg-white p-4 rounded shadow-sm space-y-2">
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-50">All Tasks</button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-50">Today</button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-50">Important</button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-50">Completed</button>
      </div>
    </div>
  );
}
