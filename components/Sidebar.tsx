import React from 'react';
import { ExamModule } from '../types';
import { BookOpen, PlusCircle, Layers, FileText } from 'lucide-react';

interface SidebarProps {
  exams: ExamModule[];
  activeExamId: string;
  onSelectExam: (id: string) => void;
  onImportClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ exams, activeExamId, onSelectExam, onImportClick }) => {
  return (
    <div className="w-64 bg-slate-900 h-full flex flex-col text-slate-300 border-r border-slate-800 flex-shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
          <div className="bg-indigo-600 p-1.5 rounded text-white">
            <Layers size={18} />
          </div>
          <span>IELTS Master</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-6">
        <div>
          <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Reading Passages</h3>
          <div className="space-y-1">
            {exams.filter(e => e.category === 'Reading').map(exam => (
              <button
                key={exam.id}
                onClick={() => onSelectExam(exam.id)}
                className={`
                  w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-3
                  ${activeExamId === exam.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' 
                    : 'hover:bg-slate-800 hover:text-white'}
                `}
              >
                <FileText size={16} className={activeExamId === exam.id ? 'text-indigo-200' : 'text-slate-500'} />
                <span className="truncate">{exam.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Placeholder for future categories */}
        <div>
          <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Library</h3>
           <div className="px-3 py-4 border border-dashed border-slate-700 rounded-lg text-center">
             <p className="text-xs text-slate-600">No other modules loaded</p>
           </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-800 bg-slate-950">
        <button 
          onClick={onImportClick}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium border border-slate-700 hover:border-slate-600"
        >
          <PlusCircle size={16} />
          <span>Import Data</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;