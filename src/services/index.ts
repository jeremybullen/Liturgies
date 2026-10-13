import { ServiceItem } from './types';
import { preface1662 } from './preface1662';
import { serviceOfTheChurch1662 } from './serviceOfTheChurch1662';
import { ofCeremonies1662 } from './ofCeremonies1662';
import { orderOfPsalter1662 } from './orderOfPsalter1662';
import { orderOfScripture1662 } from './orderOfScripture1662';
import { morningPrayer } from './morningPrayer';
import { eveningPrayer } from './eveningPrayer';
import { athanasianCreed } from './athanasianCreed';
import { litany } from './litany';
import { prayersAndThanksgivings } from './prayersAndThanksgivings';
import { holyCommunion } from './holyCommunion';
import { baptismInfants, privateBaptism } from './pastoralOffices';
import { baptismRiperYears, catechism, confirmation, matrimony } from './pastoralOffices2';
import { visitationSick, communionSick, burial, churchingOfWomen, commination } from './occasionalServices';
import { prayersAtSea1662 } from './prayersAtSea1662';
import {
  ordinalPreface1662,
  makingOfDeacons1662,
  orderingOfPriests1662,
  consecrationOfBishops1662
} from './ordinal1662';
import { psalter1662Days } from './psalter1662';

import { services1947, get1947ServiceBySlug } from './er1947';
import { services1928, get1928ServiceBySlug } from './bcp1928';

export * from './types';
export { preface1662 } from './preface1662';
export { serviceOfTheChurch1662 } from './serviceOfTheChurch1662';
export { ofCeremonies1662 } from './ofCeremonies1662';
export { orderOfPsalter1662 } from './orderOfPsalter1662';
export { orderOfScripture1662 } from './orderOfScripture1662';
export { prayersAtSea1662 } from './prayersAtSea1662';
export {
  ordinalPreface1662,
  makingOfDeacons1662,
  orderingOfPriests1662,
  consecrationOfBishops1662
} from './ordinal1662';
export { psalter1662Days } from './psalter1662';
export { services1947, get1947ServiceBySlug } from './er1947';
export { services1928, get1928ServiceBySlug } from './bcp1928';

export const services1662: ServiceItem[] = [
  preface1662,
  serviceOfTheChurch1662,
  ofCeremonies1662,
  orderOfPsalter1662,
  orderOfScripture1662,
  morningPrayer,
  eveningPrayer,
  litany,
  prayersAndThanksgivings,
  holyCommunion,
  athanasianCreed,
  baptismInfants,
  privateBaptism,
  baptismRiperYears,
  catechism,
  confirmation,
  matrimony,
  visitationSick,
  communionSick,
  burial,
  churchingOfWomen,
  commination,
  prayersAtSea1662,
  ordinalPreface1662,
  makingOfDeacons1662,
  orderingOfPriests1662,
  consecrationOfBishops1662,
  ...psalter1662Days
];

export function get1662ServiceBySlug(slug?: string): ServiceItem {
  if (!slug) return morningPrayer;
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  const found = services1662.find(s => s.slug.toLowerCase() === clean || s.id.toLowerCase() === clean);
  return found || morningPrayer;
}

// Default export alias for backwards compatibility
export const getServiceBySlug = get1662ServiceBySlug;

export interface BookInfo {
  id: '1662' | '1928' | '1947';
  title: string;
  subtitle: string;
  shortLabel: string;
  services: ServiceItem[];
  getServiceBySlug: (slug?: string) => ServiceItem;
  defaultSlug: string;
}

export const books: Record<'1662' | '1928' | '1947', BookInfo> = {
  '1662': {
    id: '1662',
    title: '1662 Book of Common Prayer',
    subtitle: '',
    shortLabel: '1662 Book of Common Prayer',
    services: services1662,
    getServiceBySlug: get1662ServiceBySlug,
    defaultSlug: 'morning-prayer'
  },
  '1928': {
    id: '1928',
    title: '1928 Book of Common Prayer',
    subtitle: '',
    shortLabel: '1928 Book of Common Prayer',
    services: services1928,
    getServiceBySlug: get1928ServiceBySlug,
    defaultSlug: 'morning-prayer'
  },
  '1947': {
    id: '1947',
    title: '1947 Book of Worship',
    subtitle: '',
    shortLabel: '1947 Book of Worship',
    services: services1947,
    getServiceBySlug: get1947ServiceBySlug,
    defaultSlug: 'order-of-worship'
  }
};

