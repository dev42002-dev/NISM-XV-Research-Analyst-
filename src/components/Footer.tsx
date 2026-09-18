import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white py-8 px-4 text-center text-slate-500 text-xs sm:text-sm">
      <div className="max-w-3xl mx-auto space-y-2">
        <p className="font-medium text-slate-700">
          Independent educational practice tool based on concepts covered in the NISM-Series-XV Research Analyst Examination Workbook (February 2026). Not an official NISM examination or question bank.
        </p>
        <p className="text-slate-400">
          Always refer to the latest official NISM material for examination preparation.
        </p>
        <p className="text-[11px] text-slate-400 pt-2">
          Designed with strict syllabus fidelity: Chapter 1 to Chapter 15 • Financial Analysis • Valuation • Regulation • Technicals • Risk & Return.
        </p>
      </div>
    </footer>
  );
};
