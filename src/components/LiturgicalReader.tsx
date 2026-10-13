import React, { useMemo } from 'react';
import { toTitleCase } from '../utils/titleCase';

interface LiturgicalReaderProps {
  content: string;
  fontSize: number; // in pixels, e.g. 19, 21, 24
}

interface DropCapAnalysis {
  type: 'none' | 'drop-cap-2' | 'drop-cap-3';
  lineCount: number;
  speakerRubric?: string;
  quotePrefix?: string;
  firstLetter?: string;
  smallCapsText?: string;
  remainder: string;
}

/**
 * For paragraphs and lines without a drop cap, converts raw shouty all-caps words
 * (such as "WHEN", "I ACKNOWLEDGE", "O LORD", "REPENT YE", "HIDE", etc.)
 * into normal title/sentence case so they read naturally without small caps.
 */
function cleanNonDropCapText(text: string): string {
  return text.replace(/\b([A-Z]{2,})\b/g, (match) => {
    return match.charAt(0) + match.slice(1).toLowerCase();
  });
}

/**
 * Estimates the rendered number of lines for a liturgical paragraph or block
 * based on explicit line-breaks and column character capacity at current font size.
 */
function estimateLineCount(text: string, fontSize: number): number {
  const explicitLines = text.split('\n').filter(l => l.trim().length > 0);
  // Strip markdown markers (*, _, #) to get readable text length
  const clean = text.replace(/[*_#]/g, '').trim();
  // In max-w-3xl (approx 720px readable width), calculate average characters per line
  const charsPerLine = Math.max(40, Math.round(720 / (fontSize * 0.48)));
  const wrappedLines = Math.max(1, Math.ceil(clean.length / charsPerLine));
  return Math.max(explicitLines.length, wrappedLines);
}

/**
 * Known liturgical opening invocations that receive full small-caps styling
 * in substantial prayers and collects (3+ lines).
 */
const KNOWN_INVOCATIONS = [
  /^Almighty and most merciful Father/i,
  /^Almighty and most merciful God(?: our heavenly Father)?/i,
  /^Almighty and everlasting God/i,
  /^Almighty and immortal God/i,
  /^Almighty God, Father of all mercies/i,
  /^Almighty God, the Father of our Lord Jesus Christ/i,
  /^Almighty God, unto whom all hearts be open/i,
  /^Almighty God, who hast given us grace/i,
  /^Almighty God, Fountain of all goodness/i,
  /^Almighty God, our heavenly Father/i,
  /^Our Father, which art in heaven/i,
  /^Our Father, who art in heaven/i,
  /^Dearly beloved brethren/i,
  /^I believe in God the Father Almighty/i,
  /^I believe in the Holy Ghost/i,
  /^We praise thee, O God/i,
  /^Glory be to God on high/i,
  /^O God, the Creator and Preserver(?: of all mankind)?/i,
  /^O God, who art the author of peace/i,
  /^O Lord our heavenly Father/i,
  /^O Thou God and Father(?: of our Lord Jesus Christ)?/i,
  /^God of all power and glory/i,
  /^Beloved in the Lord/i,
  /^Lord God of hosts/i
];

/**
 * Intelligent analysis of liturgical text to determine whether to use:
 * 1) No drop cap (and NO small caps) for single lines / versicles / responses
 * 2) Scaled 2-line drop cap (2 lines) with small caps companion
 * 3) Classical 3-line drop cap with extended small-caps invocation (3+ lines)
 */
function analyzeLiturgicalBlock(text: string, fontSize: number): DropCapAnalysis {
  let trimmed = text.trim();

  // Pure headers are never drop-capped
  if (trimmed.startsWith('#')) {
    return { type: 'none', lineCount: 1, remainder: trimmed };
  }

  // Pure rubrics (*...*) are never drop-capped
  if (trimmed.startsWith('*') && trimmed.endsWith('*') && !/^\*[A-Za-z\s/&.]+\*\s+\S/.test(trimmed)) {
    return { type: 'none', lineCount: 1, remainder: trimmed };
  }

  // Standalone Amen is never drop-capped
  if (/^[*_\s]*Amen\.?[*_\s]*$/i.test(trimmed)) {
    return { type: 'none', lineCount: 1, remainder: trimmed };
  }

  // Extract leading speaker rubric like *Priest.*, *Minister.*, *Question.*, *The Bishop.*
  let speakerRubric: string | undefined;
  const speakerMatch = trimmed.match(/^(\*[A-Za-z\s/&.]+\*)\s*([\s\S]*)$/);
  if (speakerMatch) {
    speakerRubric = speakerMatch[1];
    trimmed = speakerMatch[2].trim();
  }

  // Extract opening quote if present
  let quotePrefix: string | undefined;
  const quoteMatch = trimmed.match(/^([“\"‘'])/);
  if (quoteMatch) {
    quotePrefix = quoteMatch[1];
    trimmed = trimmed.slice(1).trim();
  }

  // Determine line count for this block
  const lineCount = estimateLineCount(trimmed, fontSize);

  // Must begin with an alphabetical character
  if (!/^[A-Za-z]/.test(trimmed)) {
    return { type: 'none', lineCount, speakerRubric, quotePrefix, remainder: trimmed };
  }

  // -------------------------------------------------------------
  // TIER 1: SINGLE-LINE TEXT (lineCount <= 1)
  // Single-line text never receives a drop cap. Per user instruction:
  // NO small caps when there is not a drop cap.
  // -------------------------------------------------------------
  if (lineCount <= 1) {
    return { type: 'none', lineCount: 1, speakerRubric, quotePrefix, remainder: trimmed };
  }

  // -------------------------------------------------------------
  // TIER 2: TWO-LINE TEXT (lineCount === 2)
  // A proportionate 2-line drop cap that spans exactly two lines
  // without dangling into subsequent paragraphs.
  // -------------------------------------------------------------
  if (lineCount === 2) {
    // If starts with "O" or "I" followed by word
    const oiMatch = trimmed.match(/^([OI])(\s+[A-Za-z\-]+[,;.:]?)(\s+[\s\S]*|$)/i);
    if (oiMatch) {
      return {
        type: 'drop-cap-2',
        lineCount: 2,
        speakerRubric,
        quotePrefix,
        firstLetter: oiMatch[1].toUpperCase(),
        smallCapsText: oiMatch[2].trim(),
        remainder: oiMatch[3] || ''
      };
    }

    // If starts with consecutive uppercase word(s)
    const upperMatch = trimmed.match(/^([A-Z])([A-Z\-]+[,;.:]?)(\s+[\s\S]*|$)/);
    if (upperMatch) {
      return {
        type: 'drop-cap-2',
        lineCount: 2,
        speakerRubric,
        quotePrefix,
        firstLetter: upperMatch[1],
        smallCapsText: upperMatch[2],
        remainder: upperMatch[3] || ''
      };
    }

    // Standard word of 2+ letters
    const generalWordMatch = trimmed.match(/^([A-Za-z])([A-Za-z\-]*[,;.:]?)(\s+[\s\S]*|$)/);
    if (generalWordMatch) {
      return {
        type: 'drop-cap-2',
        lineCount: 2,
        speakerRubric,
        quotePrefix,
        firstLetter: generalWordMatch[1].toUpperCase(),
        smallCapsText: generalWordMatch[2],
        remainder: generalWordMatch[3] || ''
      };
    }

    return { type: 'none', lineCount: 2, speakerRubric, quotePrefix, remainder: trimmed };
  }

  // -------------------------------------------------------------
  // TIER 3: THREE OR MORE LINES (lineCount >= 3)
  // Classical 3-line drop cap with intelligent small caps for
  // opening invocation words (the longer the text, the more generous
  // the small-caps opening phrase).
  // -------------------------------------------------------------

  // 1. Check known liturgical invocations (e.g. "Almighty and most merciful Father")
  for (const pattern of KNOWN_INVOCATIONS) {
    const invMatch = trimmed.match(pattern);
    if (invMatch) {
      const fullInvocation = invMatch[0];
      const firstLetter = fullInvocation[0].toUpperCase();
      const smallCapsText = fullInvocation.slice(1);
      const remainder = trimmed.slice(fullInvocation.length);
      return {
        type: 'drop-cap-3',
        lineCount,
        speakerRubric,
        quotePrefix,
        firstLetter,
        smallCapsText,
        remainder
      };
    }
  }

  // 2. Check for consecutive uppercase words in source (e.g. "ALMIGHTY AND MOST MERCIFUL FATHER")
  const multiCapsMatch = trimmed.match(/^([A-Z])([A-Z\-]{1,}(?:[-–—\s]+[A-Z]{2,})*[,;.:]?)(\s+[\s\S]*|$)/);
  if (multiCapsMatch) {
    return {
      type: 'drop-cap-3',
      lineCount,
      speakerRubric,
      quotePrefix,
      firstLetter: multiCapsMatch[1],
      smallCapsText: multiCapsMatch[2],
      remainder: multiCapsMatch[3] || ''
    };
  }

  // 3. For 4+ lines: extend small caps to the first 3-4 words or up to the first comma/semicolon
  if (lineCount >= 4) {
    const multiWordMatch = trimmed.match(/^([A-Za-z])((?:[a-zA-Z\-]+(?:\s+[a-zA-Z\-]+){1,3})[,;.:]?)(\s+[\s\S]*|$)/);
    if (multiWordMatch && multiWordMatch[2].length <= 36) {
      return {
        type: 'drop-cap-3',
        lineCount,
        speakerRubric,
        quotePrefix,
        firstLetter: multiWordMatch[1].toUpperCase(),
        smallCapsText: multiWordMatch[2],
        remainder: multiWordMatch[3] || ''
      };
    }
  }

  // 4. Default for 3 lines: drop cap first letter + small caps rest of first word (or 2 words if O/I)
  const singleOi = trimmed.match(/^([OI])(\s+[A-Za-z\-]+[,;.:]?)(\s+[\s\S]*|$)/i);
  if (singleOi) {
    return {
      type: 'drop-cap-3',
      lineCount,
      speakerRubric,
      quotePrefix,
      firstLetter: singleOi[1].toUpperCase(),
      smallCapsText: singleOi[2].trim(),
      remainder: singleOi[3] || ''
    };
  }

  const standardLead = trimmed.match(/^([A-Za-z])([A-Za-z\-]*[,;.:]?)(\s+[\s\S]*|$)/);
  if (standardLead) {
    return {
      type: 'drop-cap-3',
      lineCount,
      speakerRubric,
      quotePrefix,
      firstLetter: standardLead[1].toUpperCase(),
      smallCapsText: standardLead[2],
      remainder: standardLead[3] || ''
    };
  }

  return { type: 'none', lineCount, speakerRubric, quotePrefix, remainder: trimmed };
}

export const LiturgicalReader: React.FC<LiturgicalReaderProps> = ({ content, fontSize }) => {
  const elements = useMemo(() => {
    // Normalize content: ensure all Markdown headers (#, ##, ###) are followed by double newlines
    // so headers never swallow subsequent prayers
    const normalized = content.replace(/^(#{1,6}\s+[^\n]+)\n+(?!\n)/gm, '$1\n\n');
    const rawParagraphs = normalized.split(/\n\s*\n/);

    return rawParagraphs.map((para, pIdx) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      // H1 Header (# ) -> Title Case, dignified centered
      if (trimmed.startsWith('# ')) {
        const text = trimmed.replace(/^#\s+/, '');
        return (
          <h1
            key={pIdx}
            className="text-center font-bold text-stone-900 dark:text-[#FAF7F0] tracking-normal my-8 sm:my-10"
            style={{
              fontSize: `${Math.round(fontSize * 1.55)}px`,
              lineHeight: 1.25,
              letterSpacing: '0.01em'
            }}
          >
            {toTitleCase(text)}
          </h1>
        );
      }

      // H2 Header (## ) -> Title Case
      if (trimmed.startsWith('## ')) {
        const text = trimmed.replace(/^##\s+/, '');
        return (
          <h2
            key={pIdx}
            className="text-center font-bold text-stone-900 dark:text-[#FAF7F0] tracking-normal my-6 sm:my-8"
            style={{ fontSize: `${Math.round(fontSize * 1.3)}px`, lineHeight: 1.3 }}
          >
            {toTitleCase(text)}
          </h2>
        );
      }

      // H3 Header (### ) -> Title Case
      if (trimmed.startsWith('### ')) {
        const text = trimmed.replace(/^###\s+/, '');
        return (
          <h3
            key={pIdx}
            className="font-bold text-stone-900 dark:text-[#FAF7F0] tracking-normal mt-7 mb-3"
            style={{ fontSize: `${Math.round(fontSize * 1.15)}px`, lineHeight: 1.35 }}
          >
            {toTitleCase(text)}
          </h3>
        );
      }

      // Standalone Amen Paragraph: Amens are prayer text/responses, NEVER rubrics
      const isAmenParagraph = /^[*_\s]*Amen\.?[*_\s]*$/i.test(trimmed);
      if (isAmenParagraph) {
        return (
          <p
            key={pIdx}
            className="my-3 leading-relaxed text-stone-900 dark:text-[#EDE7DD] italic clear-both font-normal"
            style={{ fontSize: `${fontSize}px` }}
          >
            Amen.
          </p>
        );
      }

      // Standalone Rubric Paragraph (*...*)
      // Differentiated with vermilion red color and italic font
      const isDialogueLead = /^\*[A-Za-z\s/&.]+\*\s+\S/.test(trimmed);
      const isEntirelyRubric = trimmed.startsWith('*') && trimmed.endsWith('*') && !isDialogueLead;

      if (isEntirelyRubric) {
        const rubricText = trimmed.replace(/^\*+|\*+$/g, '');
        return (
          <p
            key={pIdx}
            className="text-[#991B1B] dark:text-[#E86558] italic my-4 leading-relaxed clear-both"
            style={{ fontSize: `${Math.round(fontSize * 0.94)}px` }}
          >
            {renderInlineMarkdown(rubricText)}
          </p>
        );
      }

      // Paragraph with multiple lines (e.g. canticles, psalm verses, responsive prayers, dialogues)
      const lines = trimmed.split('\n');
      if (lines.length > 1) {
        // If this multi-line block is a dialogue (versicles & responses), do NOT apply drop cap
        const isDialogueBlock = lines.some((l, idx) => idx > 0 && /^\*(?:Answer|Response|People|The People|Congregation)\b/i.test(l.trim()));

        // Check if the very first line of this multi-line block qualifies for drop cap or small caps
        const blockAnalysis = !isDialogueBlock ? analyzeLiturgicalBlock(trimmed, fontSize) : { type: 'none', lineCount: lines.length, remainder: trimmed } as DropCapAnalysis;

        if (blockAnalysis.type === 'drop-cap-3' || blockAnalysis.type === 'drop-cap-2') {
          const isTwoLine = blockAnalysis.type === 'drop-cap-2';
          return (
            <div key={pIdx} className="my-5 leading-relaxed text-stone-900 dark:text-[#EDE7DD] clear-both">
              {blockAnalysis.speakerRubric && (
                <div className="text-[#991B1B] dark:text-[#E86558] italic text-[0.9em] mb-1">
                  {renderInlineMarkdown(blockAnalysis.speakerRubric.replace(/^\*+|\*+$/g, ''))}
                </div>
              )}
              <p className="leading-relaxed">
                {blockAnalysis.quotePrefix && (
                  <span className="select-none text-stone-900 dark:text-[#EDE7DD] font-normal mr-0.5">{blockAnalysis.quotePrefix}</span>
                )}
                <span
                  className="float-left text-[#8A211D] dark:text-[#E86558] select-none font-semibold leading-none"
                  style={{
                    fontSize: isTwoLine ? '2.2em' : '3.3em',
                    lineHeight: isTwoLine ? '0.86' : '0.82',
                    marginTop: isTwoLine ? '0.06em' : '0.05em',
                    marginRight: isTwoLine ? '0.12em' : '0.13em',
                    marginBottom: '-0.02em',
                    fontFamily: "'EB Garamond', Garamond, Georgia, serif"
                  }}
                >
                  {blockAnalysis.firstLetter}
                </span>
                <span
                  className="text-stone-900 dark:text-[#FAF7F0] font-medium"
                  style={{ fontVariant: 'small-caps', letterSpacing: '0.045em' }}
                >
                  {blockAnalysis.smallCapsText?.toLowerCase()}
                </span>
                {renderLineContent(blockAnalysis.remainder || '')}
              </p>
              <div className="space-y-1.5 mt-2">
                {lines.slice(1).map((line, lIdx) => (
                  <div key={lIdx}>{renderLine(line)}</div>
                ))}
              </div>
            </div>
          );
        }

        // Standard responsive line list (versicles, litany, or plain dialogue lines) - no drop cap, no small caps
        return (
          <div key={pIdx} className="my-4 space-y-1.5 leading-relaxed text-stone-900 dark:text-[#EDE7DD] clear-both">
            {lines.map((line, lIdx) => (
              <div key={lIdx}>
                {renderLine(cleanNonDropCapText(line))}
              </div>
            ))}
          </div>
        );
      }

      // Single continuous paragraph: analyze based on intelligent line count!
      const analysis = analyzeLiturgicalBlock(trimmed, fontSize);

      // Multi-line drop cap (2 lines scaled, or 3+ lines classical)
      // Small caps is strictly restricted to accompany the drop cap initial
      if (analysis.type === 'drop-cap-2' || analysis.type === 'drop-cap-3') {
        const isTwoLine = analysis.type === 'drop-cap-2';
        return (
          <div key={pIdx} className="my-5 leading-relaxed text-stone-900 dark:text-[#EDE7DD] clear-both">
            {analysis.speakerRubric && (
              <div className="text-[#991B1B] dark:text-[#E86558] italic text-[0.9em] mb-1">
                {renderInlineMarkdown(analysis.speakerRubric.replace(/^\*+|\*+$/g, ''))}
              </div>
            )}
            <p className="leading-relaxed">
              {analysis.quotePrefix && (
                <span className="select-none text-stone-900 dark:text-[#EDE7DD] font-normal mr-0.5">{analysis.quotePrefix}</span>
              )}
              <span
                className="float-left text-[#8A211D] dark:text-[#E86558] select-none font-semibold leading-none"
                style={{
                  fontSize: isTwoLine ? '2.2em' : '3.3em',
                  lineHeight: isTwoLine ? '0.86' : '0.82',
                  marginTop: isTwoLine ? '0.06em' : '0.05em',
                  marginRight: isTwoLine ? '0.12em' : '0.13em',
                  marginBottom: '-0.02em',
                  fontFamily: "'EB Garamond', Garamond, Georgia, serif"
                }}
              >
                {analysis.firstLetter}
              </span>
              <span
                className="text-stone-900 dark:text-[#FAF7F0] font-medium"
                style={{ fontVariant: 'small-caps', letterSpacing: '0.045em' }}
              >
                {analysis.smallCapsText?.toLowerCase()}
              </span>
              {renderLineContent(cleanNonDropCapText(analysis.remainder || ''))}
            </p>
          </div>
        );
      }

      // Default paragraph (no drop cap -> strictly NO small caps!)
      return (
        <div key={pIdx} className="my-4 leading-relaxed text-stone-900 dark:text-[#EDE7DD] clear-both">
          {analysis.speakerRubric && (
            <span className="text-[#991B1B] dark:text-[#E86558] italic text-[0.92em] mr-2">
              {renderInlineMarkdown(analysis.speakerRubric.replace(/^\*+|\*+$/g, ''))}
            </span>
          )}
          <p className="inline leading-relaxed">
            {analysis.quotePrefix && (
              <span className="select-none text-stone-900 dark:text-[#EDE7DD] font-normal mr-0.5">{analysis.quotePrefix}</span>
            )}
            {renderLineContent(cleanNonDropCapText(analysis.remainder || ''))}
          </p>
        </div>
      );
    });
  }, [content, fontSize]);

  return (
    <article
      className="liturgical-text max-w-3xl mx-auto px-4 sm:px-6 py-6"
      style={{ fontSize: `${fontSize}px` }}
    >
      {elements}
    </article>
  );
};

// Helper to render markdown line with red rubrics (*italic*) and versicle formatting
function renderLine(line: string): React.ReactNode {
  const trimmed = line.trim();

  // Standalone Amen on a responsive line: must be rendered in standard ink italic, NEVER rubric red
  const isAmenOnlyLine = /^[*_\s]*Amen\.?[*_\s]*$/i.test(trimmed);
  if (isAmenOnlyLine) {
    return (
      <div className="pl-5 sm:pl-8 text-stone-900 dark:text-[#EDE7DD] italic font-normal leading-relaxed">
        Amen.
      </div>
    );
  }

  // Check if this line is an italicized congregational response (e.g. in Kyrie or Litany)
  const isCongregationalResponse =
    /^\*(?:Good Lord|We beseech|Spare us|Lord,|Christ,|Have mercy|Thanks be|Glory be|Praise be|Amen|And with)\b/i.test(trimmed);

  // If the whole line is italic, check if it's purely a rubric or an Amen/response
  if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
    const inner = trimmed.slice(1, -1).trim();

    if (/^Amen\.?$/i.test(inner)) {
      return (
        <div className="text-stone-900 dark:text-[#EDE7DD] italic font-normal leading-relaxed">
          {inner}
        </div>
      );
    }

    if (isCongregationalResponse) {
      return (
        <div className="pl-5 sm:pl-8 text-stone-900 dark:text-[#EDE7DD] italic font-normal leading-relaxed">
          {renderInlineMarkdown(inner, true)}
        </div>
      );
    }

    // Pure rubric line
    if (!/^(?:Minister|Priest|Bishop|Question|Answer|People|Congregation)\b/i.test(inner)) {
      return (
        <div className="text-[#991B1B] dark:text-[#E86558] italic leading-relaxed">
          {renderInlineMarkdown(inner)}
        </div>
      );
    }
  }

  // Response lines (*Answer.*, *People.*, *Congregation.*, or Litany congregational responses) receive classic liturgical hanging indent
  // Responses remain strictly in standard ink, never styled as rubrics
  const isResponseLine =
    /^\*(?:Answer|People|The People|Congregation)\b/i.test(trimmed) ||
    isCongregationalResponse;

  return (
    <div className={isResponseLine ? 'pl-5 sm:pl-8 text-stone-900 dark:text-[#EDE7DD] font-normal' : 'text-stone-900 dark:text-[#EDE7DD] font-normal'}>
      {renderLineContent(line, isResponseLine)}
    </div>
  );
}

/**
 * Renders line content with caesura (choral colon ` : `) formatted with breathing space
 */
function renderLineContent(text: string, isResponse: boolean = false): React.ReactNode {
  // If line contains a psalm/canticle choral caesura (" : ")
  if (text.includes(' : ')) {
    const parts = text.split(' : ');
    return (
      <span>
        {renderInlineMarkdown(parts[0], isResponse)}
        <span className="inline-block px-1.5 text-stone-900/70 dark:text-[#EDE7DD]/70 font-serif select-none" title="Choral Caesura / Breath">:</span>
        {renderInlineMarkdown(parts.slice(1).join(' : '), isResponse)}
      </span>
    );
  }

  return renderInlineMarkdown(text, isResponse);
}

// Render inline markdown: red for rubrics, standard ink for amens/responses, no small caps
function renderInlineMarkdown(text: string, isResponse: boolean = false): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for bold **...**
    const boldMatch = remaining.match(/^([\s\S]*?)\*\*([\s\S]+?)\*\*([\s\S]*)$/);
    // Check for rubric/italic *...*
    const italicMatch = remaining.match(/^([\s\S]*?)\*([\s\S]+?)\*([\s\S]*)$/);

    if (boldMatch && (!italicMatch || boldMatch[1].length <= italicMatch[1].length)) {
      if (boldMatch[1]) {
        parts.push(<span key={key++}>{boldMatch[1]}</span>);
      }
      parts.push(<strong key={key++} className="font-bold">{boldMatch[2]}</strong>);
      remaining = boldMatch[3];
    } else if (italicMatch) {
      if (italicMatch[1]) {
        parts.push(<span key={key++}>{italicMatch[1]}</span>);
      }

      const italicText = italicMatch[2];
      const trimmedItalic = italicText.trim();

      // Check if this italic part is an Amen (e.g. "Amen." or "Amen")
      // Amens are sacred prayer endings and congregational affirmations, NEVER rubrics
      const isAmen = /^Amen\.?$/i.test(trimmedItalic);

      // Check if this italic part is a speaker tag like *Minister.*, *Priest.* vs text
      const isSpeakerTag = /^(?:Minister|Priest|Bishop|Dean|Reader|Officiant|Deacon|Question|Answer|People|The People|Congregation)\b/i.test(trimmedItalic);

      if (isAmen) {
        // Amens are strictly rendered in standard ink italic text, NEVER rubrics
        parts.push(
          <span key={key++} className="text-stone-900 dark:text-[#EDE7DD] italic font-normal">
            {italicText}
          </span>
        );
      } else if (isResponse && !isSpeakerTag) {
        // Congregational response text must remain standard ink text, never styled as rubrics
        parts.push(
          <span key={key++} className="text-stone-900 dark:text-[#EDE7DD] italic">
            {italicText}
          </span>
        );
      } else {
        // Rubrics and speaker labels render in vermilion rubric color
        parts.push(
          <span key={key++} className="text-[#991B1B] dark:text-[#E86558] italic">
            {italicText}
          </span>
        );
      }
      remaining = italicMatch[3];
    } else {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }
  }

  return <>{parts}</>;
}
