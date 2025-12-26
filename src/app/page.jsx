'use client';

import Header from '@/components/Header';
import ResumeLayout from '@/components/ResumeLayout';

export default function Resume() {
  return (
    <div className="min-h-screen bg-white print:bg-white">
      <div className="max-w-5xl mx-auto p-5 print:p-5 flex flex-col gap-3">
        <Header />
        <ResumeLayout />
      </div>
    </div>
  );
}
