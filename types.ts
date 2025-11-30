export interface Passage {
  title: string;
  subtitle: string;
  paragraphs: PassageParagraph[];
}

export interface PassageParagraph {
  id: string; // e.g., "A", "B", "C" or "1", "2"
  text: string;
}

export interface QuestionGroup {
  id: string;
  title: string;
  instruction: string;
  questions: QuestionItem[];
}

export interface QuestionItem {
  id: number;
  text: string;
  type: 'matching' | 'summary' | 'multiple_choice' | 'true_false' | 'completion';
  options?: string[]; // For multiple choice or matching lists
  answer: string;
  explanation: string;
  evidenceQuote: string; // The exact string in the text to highlight
  evidenceParagraphId: string; // To help scroll to the right section
  keywords: string[]; // Keywords to help teacher explain mapping
}

export interface ExamModule {
  id: string;
  title: string;
  category: 'Reading' | 'Writing' | 'Listening';
  passage: Passage;
  questionGroups: QuestionGroup[];
}

export interface AppState {
  activeExamId: string;
  highlightedQuote: string | null;
  activeQuestionId: number | null;
}