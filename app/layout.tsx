import './globals.css';
import React from 'react';

export const metadata = {
  title: "TaskFlow Pro",
  description: "Smart Task & Productivity Manager"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
