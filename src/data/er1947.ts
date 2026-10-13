import { LiturgicalBook } from '../types/liturgy';

export const er1947Book: LiturgicalBook = {
  id: '1947',
  slug: '1947',
  year: 1947,
  title: 'The Book of Worship (1947)',
  shortTitle: '1947 Book of Worship',
  formalTitle: 'The Book of Worship for the Evangelical and Reformed Church',
  tradition: 'Evangelical and Reformed',
  jurisdiction: 'Evangelical and Reformed Church (United States)',
  sourceNote: 'Prepared by the Commission on Church Order and Approved by the General Synod (1947). Public domain.',
  historicalContext: 'Formed in 1934 by the union of the Reformed Church in the United States (tracing back to the Heidelberg Catechism) and the Evangelical Synod of North America (Prussian Union heritage), the Evangelical and Reformed Church authorized this monumental 1947 Book of Worship. It stands as a sublime synthesis of classic German Reformed liturgy (Palatinate, Mercersburg) and Evangelical biblical devotion.',
  status: 'awaiting_text',
  accentColor: 'emerald',
  services: [
    {
      id: 'morning-worship-1947',
      slug: 'morning-worship',
      title: 'The Order for the Morning Worship of God',
      category: 'Daily Office',
      description: 'The standard Sunday morning service of the word and praise.',
      blocks: [
        {
          type: 'rubric',
          text: 'The text for the 1947 Book of Worship is being prepared for ingestion. You may provide the public domain text to populate this section.'
        }
      ]
    },
    {
      id: 'holy-communion-1947',
      slug: 'holy-communion',
      title: 'The Order for the Celebration of the Lord\'s Supper or Holy Communion',
      category: 'Holy Communion',
      description: 'The historic Evangelical and Reformed Eucharistic liturgy incorporating classic Reformed liturgical forms.',
      blocks: [
        {
          type: 'rubric',
          text: 'The text for the 1947 Book of Worship is being prepared for ingestion.'
        }
      ]
    },
    {
      id: 'holy-baptism-1947',
      slug: 'holy-baptism',
      title: 'The Order for the Administration of Holy Baptism',
      subtitle: 'To Infants and Children / To Adults',
      category: 'Pastoral Offices',
      description: 'The sacrament of baptism in the Reformed tradition.',
      blocks: [
        {
          type: 'rubric',
          text: 'The text for the 1947 Book of Worship is being prepared for ingestion.'
        }
      ]
    },
    {
      id: 'confirmation-1947',
      slug: 'confirmation',
      title: 'The Order for Confirmation',
      category: 'Catechism & Rites',
      description: 'The rite of confirmation and reception into full church membership.',
      blocks: [
        {
          type: 'rubric',
          text: 'The text for the 1947 Book of Worship is being prepared for ingestion.'
        }
      ]
    },
    {
      id: 'burial-1947',
      slug: 'burial',
      title: 'The Order for the Burial of the Dead',
      category: 'Pastoral Offices',
      description: 'The memorial and funeral service of the Evangelical and Reformed Church.',
      blocks: [
        {
          type: 'rubric',
          text: 'The text for the 1947 Book of Worship is being prepared for ingestion.'
        }
      ]
    }
  ]
};
