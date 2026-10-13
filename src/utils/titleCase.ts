const MINOR_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'in', 'into',
  'nor', 'of', 'off', 'on', 'onto', 'or', 'so', 'than', 'the', 'to', 'unto',
  'up', 'upon', 'with', 'yet'
]);

const PRESERVED_ACRONYMS = new Set([
  'USA', 'US', 'BCP', 'E&R', 'AM', 'PM'
]);

// Standard Roman numerals common in biblical, liturgical, or ordinal citations
const ROMAN_NUMERAL_REGEX = /^(?:[ivxlcdm]+)$/i;

export function toTitleCase(str: string): string {
  if (!str) return '';

  const trimmed = str.trim();
  if (!trimmed) return '';

  // Split into tokens: words, whitespace, and punctuation delimiters
  // We keep delimiters so we can rebuild the exact spacing and punctuation
  const rawTokens = trimmed.split(/(\s+|[-—–:,;.()\[\]"“"'’])/g).filter(Boolean);

  // Identify all word token indices (excluding pure punctuation/whitespace)
  const wordIndices: number[] = [];
  rawTokens.forEach((t, i) => {
    if (/[a-zA-Z0-9]/.test(t)) {
      wordIndices.push(i);
    }
  });

  if (wordIndices.length === 0) return trimmed;

  const firstWordIndex = wordIndices[0];
  const lastWordIndex = wordIndices[wordIndices.length - 1];

  let prevDelimiter = '';

  return rawTokens
    .map((token, index) => {
      // Delimiters or whitespace
      if (!/[a-zA-Z0-9]/.test(token)) {
        prevDelimiter = token;
        return token;
      }

      // Check if this token is a preserved acronym like USA, BCP, E&R
      const upperToken = token.toUpperCase();
      if (PRESERVED_ACRONYMS.has(upperToken)) {
        prevDelimiter = '';
        return upperToken;
      }

      // Check if token is a Roman numeral (e.g., I, II, III, IV, VI, XIII, XCV)
      // Check that it doesn't just mean the word 'i' (standalone pronoun), which is also 'I'
      if (ROMAN_NUMERAL_REGEX.test(token)) {
        prevDelimiter = '';
        return upperToken;
      }

      // Check for biblical book abbreviation like "Cor." or "St."
      if (/^st$/i.test(token)) {
        prevDelimiter = '';
        return 'St.';
      }

      const lower = token.toLowerCase();
      const isFirst = index === firstWordIndex;
      const isLast = index === lastWordIndex;
      const followsMajorBreak = /[:—–?!]/.test(prevDelimiter);

      prevDelimiter = '';

      // Minor words lowercased unless first word, last word, or after a colon / dash
      if (!isFirst && !isLast && !followsMajorBreak && MINOR_WORDS.has(lower)) {
        return lower;
      }

      // Normal word: Capitalize first letter, rest lowercase
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}
