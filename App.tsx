import React, { useState } from 'react';
import { INITIAL_EXAMS } from './constants';
import ReadingPanel from './components/ReadingPanel';
import QuestionPanel from './components/QuestionPanel';
import Sidebar from './components/Sidebar';
import ImportModal from './components/ImportModal';
import { QuestionItem, ExamModule } from './types';
import { Layout } from 'lucide-react';

function App() {
  const [exams, setExams] = useState<ExamModule[]>(INITIAL_EXAMS);
  const [activeExamId, setActiveExamId] = useState<string>(INITIAL_EXAMS[0].id);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const [highlightedQuote, setHighlightedQuote] = useState<string | null>(null);
  const [targetParagraph, setTargetParagraph] = useState<string | undefined>(undefined);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Derived active exam
  const activeExam = exams.find(e => e.id === activeExamId) || exams[0];

  // When a question is clicked or revealed
  const handleQuestionInteraction = (q: QuestionItem) => {
    setActiveQuestionId(q.id);
    setHighlightedQuote(q.evidenceQuote);
    setTargetParagraph(q.evidenceParagraphId);
  };

  const handleExamChange = (id: string) => {
    setActiveExamId(id);
    // Reset state for new exam
    setActiveQuestionId(null);
    setHighlightedQuote(null);
    setTargetParagraph(undefined);
  };

  const handleImport = (newExam: ExamModule) => {
    setExams([...exams, newExam]);
    setActiveExamId(newExam.id);
  };

  return (
    <div className="h-screen flex bg-gray-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar 
        exams={exams}
        activeExamId={activeExamId}
        onSelectExam={handleExamChange}
        onImportClick={() => setIsImportModalOpen(true)}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 z-10 shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-slate-900">{activeExam.title}</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
              {activeExam.category} Module • {activeExam.passage.paragraphs.length} Paragraphs
            </p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-100">
               <Layout size={16} />
               <span>Teacher View Active</span>
             </div>
          </div>
        </header>

        {/* Content: Split View */}
        <main className="flex-1 flex overflow-hidden">
          {/* Left Panel: Reading Text */}
          <section className="w-1/2 min-w-[500px] h-full border-r border-gray-200 relative bg-white">
            <ReadingPanel 
              passage={activeExam.passage}
              highlightedQuote={highlightedQuote}
              targetParagraphId={targetParagraph}
            />
          </section>

          {/* Right Panel: Questions */}
          <section className="w-1/2 h-full bg-slate-50 relative">
            <QuestionPanel 
              groups={activeExam.questionGroups}
              activeQuestionId={activeQuestionId}
              onQuestionClick={handleQuestionInteraction}
              onRevealAnswer={handleQuestionInteraction}
            />
          </section>
        </main>
      </div>

      {/* Import Modal */}
      {isImportModalOpen && (
        <ImportModal 
          onClose={() => setIsImportModalOpen(false)} 
          onImport={handleImport}
        />
      )}
    </div>
  );
}

export default App;