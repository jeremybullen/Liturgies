import React, { useMemo } from 'react';
import { toTitleCase } from '../utils/titleCase';

interface LiturgicalReaderProps {
  content: string;
  fontSize: number; // in pixels, e.g. 19, 21, 24
  category?: string;
  isService?: boolean;
}

const DAY_WORD_MAP: Record<string, number> = {
  'FIRST': 1, 'SECOND': 2, 'THIRD': 3, 'FOURTH': 4, 'FIFTH': 5,
  'SIXTH': 6, 'SEVENTH': 7, 'EIGHTH': 8, 'NINTH': 9, 'TENTH': 10,
  'ELEVENTH': 11, 'TWELFTH': 12, 'THIRTEENTH': 13, 'FOURTEENTH': 14, 'FIFTEENTH': 15,
  'SIXTEENTH': 16, 'SEVENTEENTH': 17, 'EIGHTEENTH': 18, 'NINETEENTH': 19, 'TWENTIETH': 20,
  'TWENTY-FIRST': 21, 'TWENTY-SECOND': 22, 'TWENTY-THIRD': 23, 'TWENTY-FOURTH': 24, 'TWENTY-FIFTH': 25,
  'TWENTY-SIXTH': 26, 'TWENTY-SEVENTH': 27, 'TWENTY-EIGHTH': 28, 'TWENTY-NINTH': 29, 'THIRTIETH': 30
};

const ROMAN_MAP: Record<string, number> = {
  I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
};

function parseRomanNumeral(roman: string): number {
  let val = 0;
  const upper = roman.toUpperCase();
  for (let i = 0; i < upper.length; i++) {
    const curr = ROMAN_MAP[upper[i]] || 0;
    const next = ROMAN_MAP[upper[i + 1]] || 0;
    if (curr < next) val -= curr;
    else val += curr;
  }
  return val;
}

interface DropCapAnalysis {
  type: 'none' | 'drop-cap-2' | 'drop-cap-3';
  lineCount: number;
  speakerRubric?: string;
  quotePrefix?: string;
  firstLetter?: string;
  smallCapsText?: string;
  remainder: string;
  fullBodyText: string;
}

/**
 * Converts all-caps liturgical opening words (e.g. "WHEN", "I ACKNOWLEDGE", "O LORD",
 * "REPENT YE", "HIDE", "THE", "REND", etc.) into natural sentence/title case
 * so they display naturally in normal case when there is no drop cap.
 * Words are never deleted.
 */
const SACRED_NAMES = new Set([
  'GOD', 'LORD', 'FATHER', 'SON', 'JESUS', 'JESU', 'CHRIST', 'GHOST', 'SAVIOUR', 'KING',
  'ALMIGHTY', 'MARY', 'PILATE', 'ISRAEL', 'DAVID', 'ABRAHAM', 'PAUL', 'PETER',
  'MATTHEW', 'MARK', 'LUKE', 'JOHN', 'MOSES', 'TRINITY'
]);

/**
 * Converts all-caps liturgical opening words into natural sentence case
 * so they display naturally in normal case when there is no drop cap or
 * when following a single-word drop cap. Words are never deleted.
 */
function toNormalCase(text: string): string {
  if (!text) return '';

  let cleaned = text;

  // Handle leading pronoun "I" followed by all-caps verb (e.g. "I ACKNOWLEDGE" -> "I acknowledge", "I WILL" -> "I will", "I AM" -> "I am", "I KNOW" -> "I know")
  cleaned = cleaned.replace(/^([“\"‘']?\s*I)\s+([A-Z]{2,})\b/, (_, prefix, verb) => {
    return `${prefix} ${verb.toLowerCase()}`;
  });

  // Handle leading vocative "O" followed by all-caps word (e.g. "O LORD" -> "O Lord", "O GOD" -> "O God")
  cleaned = cleaned.replace(/^([“\"‘']?\s*O)\s+([A-Z]{2,})\b/, (_, prefix, noun) => {
    return `${prefix} ${noun.charAt(0).toUpperCase()}${noun.slice(1).toLowerCase()}`;
  });

  // Handle leading all-caps word at start of sentence (e.g. "WHEN" -> "When", "HIDE" -> "Hide", "THE" -> "The", "REND" -> "Rend")
  cleaned = cleaned.replace(/^([“\"‘']?\s*)([A-Z]{2,})\b/, (_, prefix, word) => {
    return `${prefix}${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
  });

  // Convert other all-caps words (2+ letters) into standard sentence case:
  // sacred names are capitalized (e.g. God, Lord, Father), all others lowercased (e.g. beloved, brethren)
  return cleaned.replace(/\b([A-Z]{2,})\b/g, (match) => {
    if (match === 'AMEN') return 'Amen';
    const upper = match.toUpperCase();
    if (SACRED_NAMES.has(upper)) {
      return upper.charAt(0) + upper.slice(1).toLowerCase();
    }
    return match.toLowerCase();
  });
}

/**
 * Detects whether text is spoken liturgical dialogue / prayer / response / bidding
 * rather than a directional rubric (which instructs actions or order).
 */
export function isSpokenLiturgicalText(text: string): boolean {
  if (!text) return false;
  let clean = text.replace(/[*_#]/g, '').trim();
  if (!clean) return false;

  // Strip leading speaker label if present (e.g. "Minister. ", "Priest. ", "The Bishop. ")
  clean = clean.replace(/^(?:The\s+)?(?:Minister|Priest|Bishop|Dean|Reader|Officiant|Deacon|Question|Answer|People|The People|Congregation)[.:]?\s+/i, '');

  // Known spoken liturgical biddings, invocations, versicles, and responses
  return /^(?:Let us pray\b|The Lord be with you\b|And with thy spirit\b|And with your spirit\b|Lord, have mercy\b|Christ, have mercy\b|O Lord, open\b|O Lord, make haste\b|O God, make speed\b|And our mouth\b|And my mouth\b|Glory be to the Father\b|As it was in the beginning\b|Praise ye the Lord\b|The Lord's Name be praised\b|Good Lord, deliver us\b|We beseech thee to hear us\b|Graciously hear us\b|Son of God\b|O Lamb of God\b|Grant us thy peace\b|Have mercy upon us\b|Spare us, good Lord\b|O Lord, save\b|Endue thy Ministers\b|And make thy chosen\b|Give peace in our time\b|O God, make clean\b|And take not thy Holy Spirit\b|Lift up your hearts\b|We lift them up\b|Let us give thanks\b|It is meet and right\b|Amen\.?$|I do\.?$|I will\.?$|Our Father\b|I believe in God\b|I believe in one God\b|The peace of God\b|The grace of our Lord\b)/i.test(clean);
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
 * Extracts a strictly single-word small-caps drop cap:
 * - If starting with single-letter vocative/pronoun "O" or "I" followed by a word:
 *   Drop cap is "O" or "I", small caps is the single following word (e.g. "LORD", "BELIEVE").
 * - Otherwise:
 *   Drop cap is the first letter of the word, small caps is the remainder of that ONE word ONLY.
 *   (e.g., "DEARLY" -> 'D' + 'EARLY', with remainder " beloved brethren").
 * Small caps strictly extends only ONE word.
 */
function extractDropCapSingleWord(
  trimmed: string,
  type: 'drop-cap-2' | 'drop-cap-3',
  lineCount: number,
  speakerRubric?: string,
  quotePrefix?: string,
  fullBodyText: string = trimmed
): DropCapAnalysis {
  // Case 1: Starts with single-letter word "O" or "I" followed by another word
  const oiMatch = trimmed.match(/^([OI])(\s+)([A-Za-z\-]+[,;.:]?)(\s+[\s\S]*|$)/i);
  if (oiMatch) {
    const firstLetter = oiMatch[1].toUpperCase();
    const smallCapsText = oiMatch[3].trim();
    const rawRemainder = oiMatch[4] || '';
    const remainder = toNormalCase(rawRemainder);
    return {
      type,
      lineCount,
      speakerRubric,
      quotePrefix,
      firstLetter,
      smallCapsText,
      remainder,
      fullBodyText
    };
  }

  // Case 2: Standard word (e.g. DEARLY, ALMIGHTY, OUR, WHEN, WE, etc.)
  const wordMatch = trimmed.match(/^([A-Za-z])([A-Za-z\-]*[,;.:]?)(\s+[\s\S]*|$)/);
  if (wordMatch) {
    const firstLetter = wordMatch[1].toUpperCase();
    const smallCapsText = wordMatch[2];
    const rawRemainder = wordMatch[3] || '';
    const remainder = toNormalCase(rawRemainder);
    return {
      type,
      lineCount,
      speakerRubric,
      quotePrefix,
      firstLetter,
      smallCapsText,
      remainder,
      fullBodyText
    };
  }

  return { type: 'none', lineCount, speakerRubric, quotePrefix, remainder: trimmed, fullBodyText };
}

/**
 * Intelligent analysis of liturgical text to determine whether to use:
 * 1) No drop cap (and NO small caps) for single lines / versicles / responses
 * 2) Scaled 2-line drop cap (2 lines) with 1-word small caps companion
 * 3) Classical 3-line drop cap (3+ lines) with 1-word small caps companion
 * Per user instruction: small caps strictly extends only ONE word in all drop-cap cases.
 */
function analyzeLiturgicalBlock(text: string, fontSize: number): DropCapAnalysis {
  let trimmed = text.trim();

  // Pure headers are never drop-capped
  if (trimmed.startsWith('#')) {
    return { type: 'none', lineCount: 1, remainder: trimmed, fullBodyText: trimmed };
  }

  // Pure rubrics (*...*) are never drop-capped
  if (trimmed.startsWith('*') && trimmed.endsWith('*') && !/^\*[A-Za-z\s/&.]+\*\s+\S/.test(trimmed)) {
    const inner = trimmed.slice(1, -1).trim();
    if (!isSpokenLiturgicalText(inner)) {
      return { type: 'none', lineCount: 1, remainder: trimmed, fullBodyText: trimmed };
    }
  }

  // Standalone Amen is never drop-capped
  if (/^[*_\s]*Amen\.?[*_\s]*$/i.test(trimmed)) {
    return { type: 'none', lineCount: 1, remainder: trimmed, fullBodyText: trimmed };
  }

  // Extract leading speaker rubric like *Priest.*, *Minister.*, *Question.*, *The Bishop.*
  let speakerRubric: string | undefined;
  const speakerMatch = trimmed.match(/^(\*[A-Za-z\s/&.]+\*)\s*([\s\S]*)$/);
  if (!speakerMatch && trimmed.startsWith('*') && trimmed.endsWith('*')) {
    const combinedMatch = trimmed.slice(1, -1).trim().match(/^((?:Minister|Priest|Bishop|Dean|Reader|Officiant|Deacon|Question|Answer|People|The People|Congregation)[.:]?)\s+([\s\S]+)$/i);
    if (combinedMatch) {
      speakerRubric = `*${combinedMatch[1]}*`;
      trimmed = combinedMatch[2].trim();
    } else if (isSpokenLiturgicalText(trimmed.slice(1, -1))) {
      trimmed = trimmed.slice(1, -1).trim();
    }
  } else if (speakerMatch) {
    speakerRubric = speakerMatch[1];
    trimmed = speakerMatch[2].trim();
  } else if (trimmed.startsWith('*') && trimmed.endsWith('*') && isSpokenLiturgicalText(trimmed.slice(1, -1))) {
    trimmed = trimmed.slice(1, -1).trim();
  }

  // Extract opening quote if present
  let quotePrefix: string | undefined;
  const quoteMatch = trimmed.match(/^([“\"‘'])/);
  if (quoteMatch) {
    quotePrefix = quoteMatch[1];
    trimmed = trimmed.slice(1).trim();
  }

  // Preserve full body text so non-drop-cap rendering preserves all opening words in normal case
  const fullBodyText = trimmed;

  // Determine line count for this block
  const lineCount = estimateLineCount(trimmed, fontSize);

  // Must begin with an alphabetical character
  if (!/^[A-Za-z]/.test(trimmed)) {
    return { type: 'none', lineCount, speakerRubric, quotePrefix, remainder: trimmed, fullBodyText };
  }

  // TIER 1: SINGLE-LINE TEXT (lineCount <= 1) - no drop cap, no small caps
  if (lineCount <= 1) {
    return { type: 'none', lineCount: 1, speakerRubric, quotePrefix, remainder: trimmed, fullBodyText };
  }

  // TIER 2: TWO-LINE TEXT (lineCount === 2) - 2-line drop cap, 1-word small caps
  if (lineCount === 2) {
    return extractDropCapSingleWord(trimmed, 'drop-cap-2', 2, speakerRubric, quotePrefix, fullBodyText);
  }

  // TIER 3: THREE OR MORE LINES (lineCount >= 3) - 3-line drop cap, 1-word small caps
  return extractDropCapSingleWord(trimmed, 'drop-cap-3', lineCount, speakerRubric, quotePrefix, fullBodyText);
}

export const LiturgicalReader: React.FC<LiturgicalReaderProps> = ({
  content,
  fontSize,
  category,
  isService
}) => {
  const elements = useMemo(() => {
    // Drop caps are strictly reserved for liturgical worship services (never in prefaces, tables, or non-service prose)
    const isNonServiceText =
      isService === false ||
      category === 'Prefaces & Tables' ||
      (category && /preface|table|calendar|intro/i.test(category)) ||
      /^\s*#+\s*(?:THE\s+)?PREFACE\b/i.test(content);

    const allowDropCaps = !isNonServiceText;

    // Normalize content: ensure all Markdown headers (#, ##, ###) are followed by double newlines
    // so headers never swallow subsequent prayers
    const normalized = content.replace(/^(#{1,6}\s+[^\n]+)\n+(?!\n)/gm, '$1\n\n');
    const rawParagraphs = normalized.split(/\n\s*\n/);

    // Helper to detect if a paragraph has an italicized Bible citation (e.g. *Psalm li. 3.*, *Jer. x. 24. Psalm vi. 1.*, *St. Matth. v.*, *Acts xx. 35.*)
    const isScriptureVerse = (p: string) => {
      const t = p.trim();
      if (t.startsWith('#') || t.startsWith('*')) return false;
      return /\*\s*(?:[123]\s+)?[A-Za-z.]+[\s\S]*?[0-9ivxlc]+[^*]*\*\s*$/i.test(t);
    };

    // Helper to detect rubric or header introducing optional scriptures (Opening Sentences, Offertory Sentences, etc.)
    const isOptionalScriptureIntro = (p: string) => {
      const t = p.trim();
      return (
        /(?:one or more\s+(?:of these\s+|of the following\s+)?Sentences|Sentences of(?: the)? Scripture|begin the Offertory,\s+saying one or more|The Offertory Sentences)/i.test(t)
      );
    };

    // Helper to detect major section transition ending the optional scripture series
    const isOptionalScriptureOutro = (p: string) => {
      const t = p.trim();
      if (t.startsWith('## ') || t.startsWith('# ')) return true;
      return (
        /(?:Dearly beloved brethren|Confession of Sin|general Confession|Let us humbly confess|receive the Alms|place upon the Table|alms and oblations|whole state of Christ's Church)/i.test(t)
      );
    };

    let inOptionalScriptureSection = false;
    let seenFirstVerseInSeries = false;
    let currentDayNumber: number | null = null;

    return rawParagraphs.map((para, pIdx) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      if (isOptionalScriptureIntro(trimmed)) {
        inOptionalScriptureSection = true;
        seenFirstVerseInSeries = false;
      } else if (isOptionalScriptureOutro(trimmed)) {
        inOptionalScriptureSection = false;
        seenFirstVerseInSeries = false;
      }

      const currentIsScripture =
        isScriptureVerse(trimmed) ||
        (inOptionalScriptureSection && !trimmed.startsWith('#') && !trimmed.startsWith('*'));

      let skipDropCapForScripture = false;
      if (currentIsScripture) {
        if (seenFirstVerseInSeries) {
          skipDropCapForScripture = true;
        } else {
          seenFirstVerseInSeries = true;
        }
      } else if (!trimmed.startsWith('#')) {
        // Reset when leaving scripture verses (unless just passing a season subheading like ### Advent or other heading)
        if (!inOptionalScriptureSection) {
          seenFirstVerseInSeries = false;
        }
      }

      // H1 Header (# ) -> Service / Book Title: Grandest scale, dignified centered
      if (trimmed.startsWith('# ')) {
        let text = trimmed.replace(/^#\s+/, '');
        let headerId: string | undefined;
        const idMatch = text.match(/\{#([a-zA-Z0-9_-]+)\}\s*$/);
        if (idMatch) {
          headerId = idMatch[1];
          text = text.replace(/\{#[a-zA-Z0-9_-]+\}\s*$/, '').trim();
        }

        const isPsalterTitle = /^(?:THE\s+)?PSALMS\s+OF\s+DAVID\b/i.test(text);
        const dayMatch = text.match(/THE\s+([A-Z\-]+)\s+DAY/i);

        if (dayMatch) {
          const num = DAY_WORD_MAP[dayMatch[1].toUpperCase()];
          if (num) {
            currentDayNumber = num;
            headerId = `day-${num}`;
          }
        } else if (isPsalterTitle) {
          headerId = 'the-psalter-top';
        }

        return (
          <h1
            key={pIdx}
            id={headerId}
            className="text-center font-bold text-stone-900 dark:text-[#FAF7F0] my-8 sm:my-10 scroll-mt-16 sm:scroll-mt-20"
            style={{
              fontSize: `${Math.round(fontSize * 1.6)}px`,
              lineHeight: 1.22,
              letterSpacing: '0.015em'
            }}
          >
            {toTitleCase(text)}
          </h1>
        );
      }

      // H2 Header (## ) -> Major Liturgical Office / Section: Centered, wider tracking, distinct section break
      if (trimmed.startsWith('## ')) {
        let text = trimmed.replace(/^##\s+/, '');
        let headerId: string | undefined;
        const idMatch = text.match(/\{#([a-zA-Z0-9_-]+)\}\s*$/);
        if (idMatch) {
          headerId = idMatch[1];
          text = text.replace(/\{#[a-zA-Z0-9_-]+\}\s*$/, '').trim();
        }

        if (currentDayNumber) {
          if (/Morning\s+Prayer/i.test(text)) {
            headerId = `day-${currentDayNumber}-morning`;
          } else if (/Evening\s+Prayer/i.test(text)) {
            headerId = `day-${currentDayNumber}-evening`;
          }
        }
        return (
          <h2
            key={pIdx}
            id={headerId}
            className="text-center font-bold text-stone-900 dark:text-[#FAF7F0] mt-10 mb-5 sm:mt-12 sm:mb-6 scroll-mt-16 sm:scroll-mt-20"
            style={{
              fontSize: `${Math.round(fontSize * 1.28)}px`,
              lineHeight: 1.3,
              letterSpacing: '0.05em'
            }}
          >
            {toTitleCase(text)}
          </h2>
        );
      }

      // H3 Header (### ) -> Subsections, Canticles, Collects, Seasons: Centered, semibold, cohesive spacing
      if (trimmed.startsWith('### ')) {
        let text = trimmed.replace(/^###\s+/, '');
        let headerId: string | undefined;
        const idMatch = text.match(/\{#([a-zA-Z0-9_-]+)\}\s*$/);
        if (idMatch) {
          headerId = idMatch[1];
          text = text.replace(/\{#[a-zA-Z0-9_-]+\}\s*$/, '').trim();
        }

        const psalmMatch = text.match(/^PSALM\s+([IVXLCDM0-9]+)\b/i);
        if (!headerId && psalmMatch) {
          const val = psalmMatch[1];
          const pNum = /^\d+$/.test(val) ? parseInt(val, 10) : parseRomanNumeral(val);
          if (pNum > 0) {
            headerId = `psalm-${pNum}`;
          }
        }
        return (
          <h3
            key={pIdx}
            id={headerId}
            data-psalm={headerId ? headerId.replace('psalm-', '') : undefined}
            className="text-center font-semibold text-stone-800 dark:text-[#EDE7DD] mt-7 mb-3 sm:mt-8 sm:mb-3 scroll-mt-16 sm:scroll-mt-20"
            style={{
              fontSize: `${Math.round(fontSize * 1.12)}px`,
              lineHeight: 1.35,
              letterSpacing: '0.015em'
            }}
          >
            {toTitleCase(text)}
          </h3>
        );
      }

      // H4 Header (#### ) -> Minor divisions, numbered petitions, lectionary readings: Centered, italic medium
      if (trimmed.startsWith('#### ')) {
        let text = trimmed.replace(/^####\s+/, '');
        let headerId: string | undefined;
        const idMatch = text.match(/\{#([a-zA-Z0-9_-]+)\}\s*$/);
        if (idMatch) {
          headerId = idMatch[1];
          text = text.replace(/\{#[a-zA-Z0-9_-]+\}\s*$/, '').trim();
        }

        return (
          <h4
            key={pIdx}
            id={headerId}
            className="text-center font-medium italic text-stone-700 dark:text-[#DDD6C8] mt-5 mb-2 sm:mt-6 sm:mb-2 scroll-mt-16 sm:scroll-mt-20"
            style={{
              fontSize: `${Math.round(fontSize * 1.02)}px`,
              lineHeight: 1.4,
              letterSpacing: '0.01em'
            }}
          >
            {toTitleCase(text)}
          </h4>
        );
      }

      // H5 Header (##### ) -> Subordinate notes: Centered, italic regular
      if (trimmed.startsWith('##### ')) {
        const text = trimmed.replace(/^#####\s+/, '');
        return (
          <h5
            key={pIdx}
            className="text-center font-normal italic text-stone-600 dark:text-[#C5BEB0] mt-4 mb-2"
            style={{
              fontSize: `${Math.round(fontSize * 0.95)}px`,
              lineHeight: 1.4
            }}
          >
            {toTitleCase(text)}
          </h5>
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
        const inner = trimmed.replace(/^\*+|\*+$/g, '').trim();

        // Check if this text is actually spoken liturgical text (like "*Let us pray.*" or "*Minister. Let us pray.*")
        if (isSpokenLiturgicalText(inner)) {
          // Check for embedded speaker label like "*Minister. Let us pray.*" or "*The Bishop. Let us pray.*"
          const spMatch = inner.match(/^((?:The\s+)?(?:Minister|Priest|Bishop|Dean|Reader|Officiant|Deacon|Question|Answer|People|The People|Congregation)[.:]?)\s+([\s\S]+)$/i);
          if (spMatch) {
            return (
              <div key={pIdx} className="my-4 leading-relaxed text-stone-900 dark:text-[#EDE7DD] clear-both">
                <span className="text-[#991B1B] dark:text-[#E86558] italic text-[0.92em] mr-2">
                  {spMatch[1]}
                </span>
                <p className="inline leading-relaxed font-normal">
                  {renderLineContent(spMatch[2])}
                </p>
              </div>
            );
          }

          // Plain spoken bidding or versicle without speaker prefix
          return (
            <div key={pIdx} className="my-4 leading-relaxed text-stone-900 dark:text-[#EDE7DD] clear-both">
              <p className="inline leading-relaxed font-normal">
                {renderLineContent(inner)}
              </p>
            </div>
          );
        }

        // True directional rubric
        return (
          <p
            key={pIdx}
            className="text-[#991B1B] dark:text-[#E86558] italic my-4 leading-relaxed clear-both"
            style={{ fontSize: `${Math.round(fontSize * 0.94)}px` }}
          >
            {renderInlineMarkdown(inner)}
          </p>
        );
      }

      // Paragraph with multiple lines (e.g. canticles, psalm verses, responsive prayers, dialogues)
      const lines = trimmed.split('\n');
      if (lines.length > 1) {
        // If this multi-line block is a dialogue (versicles & responses), do NOT apply drop cap
        const isDialogueBlock = lines.some((l, idx) => idx > 0 && /^\*(?:Answer|Response|People|The People|Congregation)\b/i.test(l.trim()));

        // Check if the very first line of this multi-line block qualifies for drop cap or small caps
        const blockAnalysis = !isDialogueBlock
          ? analyzeLiturgicalBlock(trimmed, fontSize)
          : ({ type: 'none', lineCount: lines.length, remainder: trimmed, fullBodyText: trimmed } as DropCapAnalysis);

        const canApplyDropCap = allowDropCaps && !skipDropCapForScripture;

        if (canApplyDropCap && (blockAnalysis.type === 'drop-cap-3' || blockAnalysis.type === 'drop-cap-2')) {
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
                {renderLineContent(toNormalCase(blockAnalysis.remainder || ''))}
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
                {renderLine(toNormalCase(line))}
              </div>
            ))}
          </div>
        );
      }

      // Single continuous paragraph: analyze based on intelligent line count!
      const analysis = analyzeLiturgicalBlock(trimmed, fontSize);
      const canApplyDropCap = allowDropCaps && !skipDropCapForScripture;

      // Multi-line drop cap (2 lines scaled, or 3+ lines classical)
      // Small caps is strictly restricted to accompany the drop cap initial
      if (canApplyDropCap && (analysis.type === 'drop-cap-2' || analysis.type === 'drop-cap-3')) {
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
              {renderLineContent(toNormalCase(analysis.remainder || ''))}
            </p>
          </div>
        );
      }

      // Default paragraph (no drop cap -> strictly NO small caps!)
      // Never delete the first words: display the complete fullBodyText in normal case
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
            {renderLineContent(toNormalCase(analysis.fullBodyText))}
          </p>
        </div>
      );
    });
  }, [content, fontSize, category, isService]);

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

  // If the whole line is italic, check if it's purely a rubric or spoken text / Amen / response
  if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
    const inner = trimmed.slice(1, -1).trim();

    if (/^Amen\.?$/i.test(inner)) {
      return (
        <div className="text-stone-900 dark:text-[#EDE7DD] italic font-normal leading-relaxed">
          {inner}
        </div>
      );
    }

    if (isSpokenLiturgicalText(inner) || isCongregationalResponse) {
      // Check for embedded speaker like "*Minister. Let us pray.*"
      const spMatch = inner.match(/^((?:The\s+)?(?:Minister|Priest|Bishop|Dean|Reader|Officiant|Deacon|Question|Answer|People|The People|Congregation)[.:]?)\s+([\s\S]+)$/i);
      if (spMatch) {
        return (
          <div className="text-stone-900 dark:text-[#EDE7DD] font-normal leading-relaxed">
            <span className="text-[#991B1B] dark:text-[#E86558] italic mr-2">{spMatch[1]}</span>
            {renderLineContent(spMatch[2])}
          </div>
        );
      }

      // If it's a congregational response line, apply hanging indent
      const isResponse = isCongregationalResponse || /^\*(?:Answer|People|Congregation)\b/i.test(trimmed);
      return (
        <div className={isResponse ? "pl-5 sm:pl-8 text-stone-900 dark:text-[#EDE7DD] italic font-normal leading-relaxed" : "text-stone-900 dark:text-[#EDE7DD] font-normal leading-relaxed"}>
          {renderLineContent(inner, isResponse)}
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
 * Renders line content with caesura (choral colon ` : ` or asterisk ` * `) formatted with breathing space
 */
function renderLineContent(text: string, isResponse: boolean = false): React.ReactNode {
  // If line contains a 1928 choral asterisk caesura (" * ")
  if (text.includes(' * ')) {
    const parts = text.split(' * ');
    return (
      <span>
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <span className="inline-block px-1.5 text-[#991B1B] dark:text-[#E86558] font-serif select-none text-[0.95em]" title="Choral Pause">*</span>
            )}
            {renderInlineMarkdown(part, isResponse)}
          </React.Fragment>
        ))}
      </span>
    );
  }

  // If line contains a 1662 psalm/canticle choral caesura (" : ")
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
      const isAmen = /^Amen\.?$/i.test(trimmedItalic);

      // Check if this italic part is spoken liturgical text (e.g. "Let us pray", "Lord, have mercy upon us")
      const isSpoken = isSpokenLiturgicalText(trimmedItalic);

      // Check if this italic part is a speaker tag like *Minister.*, *Priest.* vs text
      const isSpeakerTag = /^(?:Minister|Priest|Bishop|Dean|Reader|Officiant|Deacon|Question|Answer|People|The People|Congregation)[.:]?$/i.test(trimmedItalic);

      if (isAmen || isSpoken || (isResponse && !isSpeakerTag)) {
        // Spoken liturgical text, Amens, and congregational responses are strictly standard ink, NEVER red rubrics
        parts.push(
          <span key={key++} className="text-stone-900 dark:text-[#EDE7DD] font-normal">
            {italicText}
          </span>
        );
      } else if (isSpeakerTag) {
        // Speaker labels render in vermilion rubric color
        parts.push(
          <span key={key++} className="text-[#991B1B] dark:text-[#E86558] italic">
            {italicText}
          </span>
        );
      } else {
        // Directional rubrics render in vermilion rubric color
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
