import React, { useState } from 'react';
import { QuestionGroup, QuestionItem } from '../types';
import { Eye, EyeOff, MapPin, CheckCircle2, HelpCircle, BookOpen } from 'lucide-react';

interface QuestionPanelProps {
  groups: QuestionGroup[];
  activeQuestionId: number | null;
  onQuestionClick: (q: QuestionItem) => void;
  onRevealAnswer: (q: QuestionItem) => void;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({ 
  groups, 
  activeQuestionId, 
  onQuestionClick,
  onRevealAnswer 
}) => {
  const [revealedIds, setRevealedIds] = useState<Set<number>>(new Set());

  const toggleReveal = (q: QuestionItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSet = new Set(revealedIds);
    if (newSet.has(q.id)) {
      newSet.delete(q.id);
    } else {
      newSet.add(q.id);
      onRevealAnswer(q); // Trigger scroll to evidence
    }
    setRevealedIds(newSet);
  };

  const handleCardClick = (q: QuestionItem) => {
    onQuestionClick(q);
  };

  return (
    <div className="h-full overflow-y-auto bg-slate-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        {groups.map((group) => (
          <div key={group.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-800">{group.title}</h2>
              <p className="text-slate-600 text-sm mt-1">{group.instruction}</p>
            </div>

            <div className="divide-y divide-slate-100">
              {group.questions.map((q) => {
                const isActive = activeQuestionId === q.id;
                const isRevealed = revealedIds.has(q.id);

                return (
                  <div 
                    key={q.id}
                    onClick={() => handleCardClick(q)}
                    className={`
                      relative p-6 transition-all duration-200 cursor-pointer hover:bg-blue-50
                      ${isActive ? 'bg-blue-50 ring-2 ring-inset ring-blue-500' : ''}
                    `}
                  >
                    {/* Header Row */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`
                          flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold border
                          ${isRevealed 
                            ? 'bg-green-100 text-green-700 border-green-300' 
                            : 'bg-white text-slate-500 border-slate-300'}
                        `}>
                          {q.id}
                        </span>
                        {q.type === 'summary' && (
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                            Summary
                          </span>
                        )}
                      </div>
                      
                      <button
                        onClick={(e) => toggleReveal(q, e)}
                        className={`
                          flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                          ${isRevealed 
                            ? 'bg-slate-800 text-white hover:bg-slate-700' 
                            : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'}
                        `}
                      >
                        {isRevealed ? (
                          <>
                            <EyeOff size={16} /> Hide
                          </>
                        ) : (
                          <>
                            <Eye size={16} /> Reveal Analysis
                          </>
                        )}
                      </button>
                    </div>

                    {/* Question Text */}
                    <div className="pl-11 pr-2">
                       {/* For summary completion, we might want to render inputs, but for teaching, display text is better */}
                      <p className="text-slate-800 text-lg leading-relaxed font-medium">
                        {q.text.split('______').map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="inline-block w-24 border-b-2 border-slate-400 mx-1"></span>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>

                    {/* Analysis / Answer Section */}
                    {isRevealed && (
                      <div className="mt-6 ml-11 bg-slate-50 rounded-lg border border-slate-200 p-5 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-green-100 p-2 rounded-lg text-green-700">
                            <CheckCircle2 size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Correct Answer</p>
                            <p className="text-2xl font-bold text-slate-900">{q.answer}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                            <MapPin size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">Evidence Location</p>
                            <p className="text-sm text-slate-600">
                              Found in <span className="font-semibold text-slate-900">Paragraph {q.evidenceParagraphId}</span>. 
                              (Text highlighted on the left)
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-2 rounded-lg text-amber-700">
                            <BookOpen size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Teacher's Analysis</p>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {q.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;