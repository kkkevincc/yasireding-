import React, { useState } from 'react';
import { X, Upload, AlertCircle } from 'lucide-react';
import { ExamModule } from '../types';

interface ImportModalProps {
  onClose: () => void;
  onImport: (data: ExamModule) => void;
}

const ImportModal: React.FC<ImportModalProps> = ({ onClose, onImport }) => {
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleImport = () => {
    try {
      const data = JSON.parse(jsonText);
      // Basic validation
      if (!data.id || !data.title || !data.passage || !data.questionGroups) {
        throw new Error("Invalid JSON format. Missing required fields (id, title, passage, questionGroups).");
      }
      onImport(data as ExamModule);
      onClose();
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2 text-slate-800">
            <Upload size={20} className="text-indigo-600" />
            <h2 className="font-bold text-lg">Import Passage Data</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-sm text-slate-600 mb-4">
            Paste your lesson JSON configuration below. It must match the <code>ExamModule</code> interface.
          </p>
          
          <textarea 
            className="w-full h-96 p-4 font-mono text-xs bg-slate-900 text-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            placeholder='{ "id": "new-exam", "title": "...", "passage": { ... }, "questionGroups": [...] }'
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
          />

          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm border border-red-100">
              <AlertCircle size={16} />
              {error}
            </div>
          )}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleImport}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Load Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;