import { ServiceItem } from '../types';
import { ratification1928 } from './ratification1928';
import { preface1928 } from './preface1928';
import { serviceOfTheChurch1928 } from './serviceOfTheChurch1928';
import { calendarAndTables1928 } from './calendarAndTables1928';
import { tableOfLessons1928 } from './tableOfLessons1928';
import { morningPrayer1928 } from './morningPrayer';
import { eveningPrayer1928 } from './eveningPrayer';
import { prayersAndThanksgivings1928 } from './prayersAndThanksgivings';
import { litany1928 } from './litany';
import { penitentialOffice1928 } from './penitentialOffice';
import { holyCommunion1928 } from './holyCommunion';
import { collectsEpistlesGospels1928 } from './collectsEpistlesGospels1928';
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
import { catechism1928 } from './catechism1928';
import { familyPrayer1928 } from './familyPrayer';
import {
  ordinalPreface1928,
  makingOfDeacons1928,
  orderingOfPriests1928,
  consecrationOfBishops1928,
  litanyForOrdinations1928,
  consecrationOfChurch1928,
  institutionOfMinisters1928
} from './ordinal1928';
import { articlesOfReligion1928 } from './articlesOfReligion';
import { psalter1928 } from './psalter1928';

export {
  ratification1928,
  preface1928,
  serviceOfTheChurch1928,
  calendarAndTables1928,
  tableOfLessons1928,
  morningPrayer1928,
  eveningPrayer1928,
  prayersAndThanksgivings1928,
  litany1928,
  penitentialOffice1928,
  holyCommunion1928,
  collectsEpistlesGospels1928,
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
  catechism1928,
  familyPrayer1928,
  ordinalPreface1928,
  makingOfDeacons1928,
  orderingOfPriests1928,
  consecrationOfBishops1928,
  litanyForOrdinations1928,
  consecrationOfChurch1928,
  institutionOfMinisters1928,
  articlesOfReligion1928,
  psalter1928
};

export const services1928: ServiceItem[] = [
  ratification1928,
  preface1928,
  serviceOfTheChurch1928,
  calendarAndTables1928,
  tableOfLessons1928,
  morningPrayer1928,
  eveningPrayer1928,
  prayersAndThanksgivings1928,
  litany1928,
  penitentialOffice1928,
  holyCommunion1928,
  collectsEpistlesGospels1928,
  holyBaptism1928,
  officesOfInstruction1928,
  confirmation1928,
  matrimony1928,
  churchingOfWomen1928,
  visitationOfSick1928,
  communionOfSick1928,
  burialOfTheDead1928,
  burialOfChild1928,
  psalter1928,
  ordinalPreface1928,
  makingOfDeacons1928,
  orderingOfPriests1928,
  consecrationOfBishops1928,
  litanyForOrdinations1928,
  consecrationOfChurch1928,
  institutionOfMinisters1928,
  visitationOfPrisoners1928,
  thanksgivingDay1928,
  catechism1928,
  familyPrayer1928,
  articlesOfReligion1928
];

export function get1928ServiceBySlug(slug?: string): ServiceItem {
  if (!slug) return morningPrayer1928;
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  const found = services1928.find(s => {
    const sSlug = s.slug.toLowerCase();
    const sId = s.id.toLowerCase();
    return sSlug === clean || sId === clean ||
      (clean === 'ratification' && sSlug === 'ratification') ||
      (clean === 'preface' && sSlug === 'preface') ||
      (clean === 'service-of-the-church' && sSlug === 'concerning-the-service-of-the-church') ||
      ((clean === 'calendar' || clean === 'the-calendar' || clean === 'tables' || clean === 'feasts-and-fasts') && sSlug === 'calendar-and-tables') ||
      ((clean === 'lessons' || clean === 'lectionary' || clean === 'table-of-lessons' || clean === 'psalms-and-lessons') && sSlug === 'table-of-lessons') ||
      ((clean === 'catechism' || clean === 'a-catechism') && sSlug === 'catechism') ||
      (clean === 'making-of-deacons' && sSlug === 'making-deacons') ||
      (clean === 'ordering-of-priests' && sSlug === 'ordering-priests') ||
      (clean === 'consecration-of-bishops' && sSlug === 'consecrating-bishops') ||
      (clean === 'the-ordinal-preface' && sSlug === 'ordinal-preface') ||
      ((clean === 'articles' || clean === 'the-articles' || clean === '39-articles') && sSlug === 'articles-of-religion') ||
      ((clean === 'collects' || clean === 'propers' || clean === 'collects-and-epistles' || clean === 'collects-epistles' || clean === 'epistles-and-gospels') && sSlug === 'collects-epistles-gospels');
  });
  return found || morningPrayer1928;
}


