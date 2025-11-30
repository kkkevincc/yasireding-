import React, { useEffect, useRef } from 'react';
import { Passage } from '../types';

interface ReadingPanelProps {
  passage: Passage;
  highlightedQuote: string | null;
  targetParagraphId?: string;
}

const ReadingPanel: React.FC<ReadingPanelProps> = ({ passage, highlightedQuote, targetParagraphId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLElement>(null);

  // Auto-scroll to highlighted text when quote changes
  useEffect(() => {
    if (highlightedQuote && markRef.current && containerRef.current) {
      markRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlightedQuote]);

  // Helper to render text with highlights
  const renderTextWithHighlight = (text: string, quote: string | null) => {
    if (!quote) return text;
    
    // Normalize strings for robust matching (remove extra spaces, case insensitive if needed)
    // For this demo, we do a simple split. A production app would use fuzzy matching.
    const parts = text.split(quote);
    
    if (parts.length === 1) return text; // No match found
    
    return (
      <>
        {parts[0]}
        <mark 
          ref={markRef} 
          className="bg-yellow-200 text-gray-900 px-1 py-0.5 rounded highlight-pulse font-medium shadow-sm border-b-2 border-yellow-400"
        >
          {quote}
        </mark>
        {parts[1]}
      </>
    );
  };

  return (
    <div 
      ref={containerRef}
      className="h-full overflow-y-auto bg-white p-8 shadow-inner border-r border-gray-200"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 pb-6 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{passage.title}</h1>
          <p className="text-lg text-gray-600 italic leading-relaxed">{passage.subtitle}</p>
        </div>

        <div className="space-y-6">
          {passage.paragraphs.map((para) => (
            <div key={para.id} id={`para-${para.id}`} className="flex gap-4 group">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-500 font-bold rounded text-sm group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                {para.id}
              </span>
              <p className="text-gray-800 leading-8 text-[1.05rem] font-serif">
                {renderTextWithHighlight(para.text, highlightedQuote)}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-4 bg-gray-50 text-gray-400 text-center text-sm rounded-lg">
          End of Passage
        </div>
      </div>
    </div>
  );
};

export default ReadingPanel;