import { ServiceItem } from '../types';
import { theOrderOfWorshipContent } from './the_order_of_worship';
import { anAlternateOrderOfWorshipContent } from './an_alternate_order_of_worship';
import { theEveningServiceContent } from './the_evening_service';
import { theOrderForHolyCommunionContent } from './the_order_for_holy_communion';
import { anAlternateOrderForHolyCommunionContent } from './an_alternate_order_for_holy_communion';
import { thePreparatoryServiceContent } from './the_preparatory_service';
import { theLitanyContent } from './the_litany';
import { generalPrayersContent } from './general_prayers';
import { baptismOfInfantsContent } from './baptism_of_infants';
import { baptismOfAdultsContent } from './baptism_of_adults';
import { confirmationContent } from './confirmation';
import { marriageContent } from './marriage';
import { alternateMarriageContent } from './alternate_marriage';
import { burialContent } from './burial';
import { ordinationContent } from './ordination';

export const services1947: ServiceItem[] = [
  {
    id: 'er-order-of-worship',
    slug: 'order-of-worship',
    title: 'The Order of Worship',
    shortTitle: 'The Order of Worship',
    category: 'Worship',
    content: theOrderOfWorshipContent
  },
  {
    id: 'er-alternate-order-of-worship',
    slug: 'alternate-order-of-worship',
    title: 'An Alternate Order of Worship',
    shortTitle: 'An Alternate Order of Worship',
    category: 'Worship',
    content: anAlternateOrderOfWorshipContent
  },
  {
    id: 'er-evening-service',
    slug: 'evening-service',
    title: 'The Evening Service',
    shortTitle: 'The Evening Service',
    category: 'Worship',
    content: theEveningServiceContent
  },
  {
    id: 'er-preparatory-service',
    slug: 'preparatory-service',
    title: 'The Preparatory Service',
    shortTitle: 'The Preparatory Service',
    category: 'Communion',
    content: thePreparatoryServiceContent
  },
  {
    id: 'er-holy-communion',
    slug: 'holy-communion',
    title: 'The Order for Holy Communion',
    shortTitle: 'The Order for Holy Communion',
    category: 'Communion',
    content: theOrderForHolyCommunionContent
  },
  {
    id: 'er-alternate-holy-communion',
    slug: 'alternate-holy-communion',
    title: 'An Alternate Order for Holy Communion',
    shortTitle: 'An Alternate Order for Holy Communion',
    category: 'Communion',
    content: anAlternateOrderForHolyCommunionContent
  },
  {
    id: 'er-litany',
    slug: 'the-litany',
    title: 'The Litany',
    shortTitle: 'The Litany',
    category: 'Prayers',
    content: theLitanyContent
  },
  {
    id: 'er-general-prayers',
    slug: 'general-prayers',
    title: 'General Prayers',
    shortTitle: 'General Prayers',
    category: 'Prayers',
    content: generalPrayersContent
  },
  {
    id: 'er-baptism-infants',
    slug: 'baptism-of-infants',
    title: 'The Order for Baptism of Infants',
    shortTitle: 'The Order for Baptism of Infants',
    category: 'Baptism',
    content: baptismOfInfantsContent
  },
  {
    id: 'er-baptism-adults',
    slug: 'baptism-of-adults',
    title: 'The Order for Baptism of Adults',
    shortTitle: 'The Order for Baptism of Adults',
    category: 'Baptism',
    content: baptismOfAdultsContent
  },
  {
    id: 'er-confirmation',
    slug: 'confirmation',
    title: 'The Order for Confirmation',
    shortTitle: 'The Order for Confirmation',
    category: 'Rites',
    content: confirmationContent
  },
  {
    id: 'er-marriage',
    slug: 'marriage',
    title: 'The Order for Marriage',
    shortTitle: 'The Order for Marriage',
    category: 'Rites',
    content: marriageContent
  },
  {
    id: 'er-alternate-marriage',
    slug: 'alternate-marriage',
    title: 'An Alternate Order for Marriage',
    shortTitle: 'An Alternate Order for Marriage',
    category: 'Rites',
    content: alternateMarriageContent
  },
  {
    id: 'er-burial',
    slug: 'burial',
    title: 'The Order for Burial of the Dead',
    shortTitle: 'The Order for Burial of the Dead',
    category: 'Rites',
    content: burialContent
  },
  {
    id: 'er-ordination',
    slug: 'ordination',
    title: 'The Order for Ordination of a Minister',
    shortTitle: 'The Order for Ordination of a Minister',
    category: 'Rites',
    content: ordinationContent
  }
];

export function get1947ServiceBySlug(slug?: string): ServiceItem {
  if (!slug) return services1947[0];
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  const found = services1947.find(s => s.slug.toLowerCase() === clean || s.id.toLowerCase() === clean);
  return found || services1947[0];
}
