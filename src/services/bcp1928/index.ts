import { ServiceItem } from '../types';
import { morningPrayer1928 } from './morningPrayer';
import { eveningPrayer1928 } from './eveningPrayer';
import { prayersAndThanksgivings1928 } from './prayersAndThanksgivings';
import { litany1928 } from './litany';
import { penitentialOffice1928 } from './penitentialOffice';
import { holyCommunion1928 } from './holyCommunion';
import { holyBaptism1928 } from './holyBaptism';
import { officesOfInstruction1928 } from './officesOfInstruction';
import { confirmation1928 } from './confirmation';
import { matrimony1928 } from './matrimony';
import { churchingOfWomen1928 } from './churchingOfWomen';
import { visitationOfSick1928 } from './visitationOfSick';
import { communionOfSick1928 } from './communionOfSick';
import { burialOfTheDead1928 } from './burialOfTheDead';
import { burialOfChild1928 } from './burialOfChild';
import { visitationOfPrisoners1928 } from './visitationOfPrisoners';
import { thanksgivingDay1928 } from './thanksgivingDay';
import { familyPrayer1928 } from './familyPrayer';

export {
  morningPrayer1928,
  eveningPrayer1928,
  prayersAndThanksgivings1928,
  litany1928,
  penitentialOffice1928,
  holyCommunion1928,
  holyBaptism1928,
  officesOfInstruction1928,
  confirmation1928,
  matrimony1928,
  churchingOfWomen1928,
  visitationOfSick1928,
  communionOfSick1928,
  burialOfTheDead1928,
  burialOfChild1928,
  visitationOfPrisoners1928,
  thanksgivingDay1928,
  familyPrayer1928
};

export const services1928: ServiceItem[] = [
  morningPrayer1928,
  eveningPrayer1928,
  prayersAndThanksgivings1928,
  litany1928,
  penitentialOffice1928,
  holyCommunion1928,
  holyBaptism1928,
  officesOfInstruction1928,
  confirmation1928,
  matrimony1928,
  churchingOfWomen1928,
  visitationOfSick1928,
  communionOfSick1928,
  burialOfTheDead1928,
  burialOfChild1928,
  visitationOfPrisoners1928,
  thanksgivingDay1928,
  familyPrayer1928
];

export function get1928ServiceBySlug(slug?: string): ServiceItem {
  if (!slug) return morningPrayer1928;
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  const found = services1928.find(s => s.slug.toLowerCase() === clean || s.id.toLowerCase() === clean);
  return found || morningPrayer1928;
}
