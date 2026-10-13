export type BlockType = 
  | 'heading' 
  | 'subheading'
  | 'rubric' 
  | 'dialogue' 
  | 'prayer' 
  | 'scripture_sentence'
  | 'exhortation' 
  | 'canticle' 
  | 'creed'
  | 'catechism_qa'
  | 'paragraph';

export interface DialogueLine {
  speaker: string; // 'Priest' | 'Answer' | 'Minister' | 'People' | 'Catechist' | etc.
  text: string;
}

export interface LiturgicalBlock {
  type: BlockType;
  title?: string;
  rubricNote?: string;
  citation?: string;
  speaker?: string;
  text?: string;
  dialogue?: DialogueLine[];
  verses?: { text: string; halfVerse?: string }[];
  question?: string;
  answer?: string;
}

export interface LiturgicalService {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  traditionalTitle?: string;
  category: 'Daily Office' | 'Holy Communion' | 'Pastoral Offices' | 'Catechism & Rites' | 'Prayers & Thanksgivings' | 'Penitential';
  estimatedReadTimeMinutes?: number;
  description: string;
  blocks: LiturgicalBlock[];
}

export interface LiturgicalBook {
  id: string; // '1662' | '1928' | '1947'
  slug: string;
  year: number;
  title: string;
  shortTitle: string;
  formalTitle: string;
  tradition: string;
  jurisdiction: string;
  sourceNote: string;
  historicalContext: string;
  status: 'available' | 'awaiting_text';
  accentColor: string; // Tailwind color token
  services: LiturgicalService[];
}

export interface ReadingSettings {
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  theme: 'parchment' | 'alabaster' | 'night';
  rubricColor: 'crimson' | 'charcoal';
  dialogueLayout: 'inline' | 'indented';
  measureWidth: 'standard' | 'wide';
}
