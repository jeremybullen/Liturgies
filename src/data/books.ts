import { LiturgicalBook, LiturgicalService } from '../types/liturgy';
import { bcp1662Book } from './bcp1662';
import { bcp1928Book } from './bcp1928';
import { er1947Book } from './er1947';

export const allBooks: LiturgicalBook[] = [
  bcp1662Book,
  bcp1928Book,
  er1947Book
];

export function getBook(idOrSlug: string): LiturgicalBook | undefined {
  const norm = idOrSlug.toLowerCase().trim();
  return allBooks.find(b => b.id.toLowerCase() === norm || b.slug.toLowerCase() === norm);
}

export function getService(book: LiturgicalBook, serviceIdOrSlug: string): LiturgicalService | undefined {
  const norm = serviceIdOrSlug.toLowerCase().trim();
  return book.services.find(s => s.id.toLowerCase() === norm || s.slug.toLowerCase() === norm);
}

export interface SearchResult {
  book: LiturgicalBook;
  service: LiturgicalService;
  snippet: string;
  matchType: 'title' | 'content' | 'prayer';
}

export function searchLiturgicalTexts(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q || q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const book of allBooks) {
    for (const service of book.services) {
      if (service.title.toLowerCase().includes(q) || (service.subtitle && service.subtitle.toLowerCase().includes(q))) {
        results.push({
          book,
          service,
          snippet: `${service.title} — ${service.description}`,
          matchType: 'title'
        });
        continue;
      }

      for (const block of service.blocks) {
        let blockContent = '';
        if (block.text) blockContent += block.text + ' ';
        if (block.title) blockContent += block.title + ' ';
        if (block.question) blockContent += block.question + ' ' + (block.answer || '') + ' ';
        if (block.dialogue) {
          blockContent += block.dialogue.map(d => `${d.speaker}: ${d.text}`).join(' ') + ' ';
        }
        if (block.verses) {
          blockContent += block.verses.map(v => v.text).join(' ') + ' ';
        }

        const idx = blockContent.toLowerCase().indexOf(q);
        if (idx !== -1) {
          const start = Math.max(0, idx - 40);
          const end = Math.min(blockContent.length, idx + q.length + 60);
          const snippet = (start > 0 ? '…' : '') + blockContent.substring(start, end).trim() + (end < blockContent.length ? '…' : '');
          
          results.push({
            book,
            service,
            snippet,
            matchType: block.type === 'prayer' ? 'prayer' : 'content'
          });
          break; // One snippet per service to avoid spam
        }
      }
    }
  }

  return results.slice(0, 20);
}
