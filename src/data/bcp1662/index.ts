import { LiturgicalBook } from '../../types/liturgy';
import { morningPrayer } from './morningPrayer';
import { eveningPrayer, athanasianCreed } from './eveningPrayer';
import { litany, prayersAndThanksgivings } from './litanyAndPrayers';
import { holyCommunion } from './holyCommunion';
import { publickBaptismInfants, catechism, confirmation, matrimony } from './sacramentsAndPastoral';
import { visitationSick, burialOfDead, churchingOfWomen, commination } from './occasionalOffices';

export const bcp1662Book: LiturgicalBook = {
  id: '1662',
  slug: '1662',
  year: 1662,
  title: 'The Book of Common Prayer (1662)',
  shortTitle: '1662 BCP',
  formalTitle: 'The Book of Common Prayer and Administration of the Sacraments and Other Rites and Ceremonies of the Church',
  tradition: 'Church of England / Anglican',
  jurisdiction: 'England & The Anglican Communion',
  sourceNote: 'Derived from the 1901 Statutory Prayer Book (Edward VII accession text). Public domain.',
  historicalContext: 'Authorized by the Act of Uniformity 1662 following the Restoration of King Charles II, the 1662 Book of Common Prayer remains the official and definitive statutory liturgical standard of the Church of England and the wellspring of classical Anglican language and worship across the globe.',
  status: 'available',
  accentColor: 'amber',
  services: [
    morningPrayer,
    eveningPrayer,
    athanasianCreed,
    litany,
    prayersAndThanksgivings,
    holyCommunion,
    publickBaptismInfants,
    catechism,
    confirmation,
    matrimony,
    visitationSick,
    burialOfDead,
    churchingOfWomen,
    commination
  ]
};
