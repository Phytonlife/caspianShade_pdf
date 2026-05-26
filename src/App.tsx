import React from 'react';
import { PageCover } from './components/PageCover';
import { PageProblem } from './components/PageProblem';
import { PageSolution } from './components/PageSolution';
import { PageWhyUs } from './components/PageWhyUs';
import { PageHoreca } from './components/PageHoreca';
import { PagePartnership } from './components/PagePartnership';
import { PageContacts } from './components/PageContacts';

export default function App() {
  return (
    <div className="presentation-container bg-[#0D0D0F] text-white">
      <main className="w-full mx-auto print:w-[297mm]">
        <PageCover />
        <PageProblem />
        <PageSolution />
        <PageWhyUs />
        <PageHoreca />
        <PagePartnership />
        <PageContacts />
      </main>
      
      {/* Floating Instructions for Web Viewer ONLY. These will be hidden in print. */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 print-hidden z-50">
        <button 
          onClick={() => window.print()}
          className="bg-[#0D0D0F] text-neutral-400 border border-neutral-800 px-6 py-3 font-mono text-[10px] uppercase tracking-widest shadow-2xl hover:bg-neutral-900 transition-colors cursor-pointer"
        >
          CTRL+P (Print to PDF)
        </button>
      </div>
    </div>
  );
}
