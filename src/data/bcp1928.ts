import { LiturgicalBook } from '../types/liturgy';

export const bcp1928Book: LiturgicalBook = {
  id: '1928',
  slug: '1928',
  year: 1928,
  title: 'The Book of Common Prayer (1928)',
  shortTitle: '1928 BCP',
  formalTitle: 'The Book of Common Prayer and Administration of the Sacraments and Other Rites and Ceremonies of the Church According to the Use of the Protestant Episcopal Church in the United States of America',
  tradition: 'Episcopal / Anglican',
  jurisdiction: 'The Episcopal Church in the United States of America',
  sourceNote: '1928 American Revision (excluding Ordinal, Psalter, Prefaces, Collects, Epistles, and Gospels). Public domain.',
  historicalContext: 'Ratified by the General Convention in 1928, this revision represented the culmination of American prayer book development prior to the 1979 reform. It restored ancient elements like the Scottish Consecration prayer (Epiclesis), shortened several rubrical requirements, added the Offices of Instruction, and included numerous contemporary prayers for social justice and the country.',
  status: 'available',
  accentColor: 'indigo',
  services: [
    {
      id: 'morning-prayer-1928',
      slug: 'morning-prayer',
      title: 'The Order for Daily Morning Prayer',
      category: 'Daily Office',
      description: 'The canonical daily morning office according to the 1928 American Book of Common Prayer.',
      blocks: [
        {
          type: 'rubric',
          text: 'The Minister shall begin the Morning Prayer by reading one or more of the following Sentences of Scripture.'
        },
        {
          type: 'scripture_sentence',
          text: 'THE LORD is in his holy temple: let all the earth keep silence before him.',
          citation: 'Hab. ii. 20.'
        },
        {
          type: 'prayer',
          title: 'A General Confession',
          text: 'ALMIGHTY and most merciful Father, We have erred, and strayed from thy ways like lost sheep...'
        }
      ]
    },
    {
      id: 'evening-prayer-1928',
      slug: 'evening-prayer',
      title: 'The Order for Daily Evening Prayer',
      category: 'Daily Office',
      description: 'The canonical daily evening office with Magnificat and Nunc dimittis.',
      blocks: [
        {
          type: 'rubric',
          text: 'The Minister shall begin the Evening Prayer by reading one or more of the following Sentences of Scripture.'
        },
        {
          type: 'prayer',
          title: 'A Collect for Peace',
          text: 'O GOD, from whom all holy desires, all good counsels, and all just works do proceed...'
        }
      ]
    },
    {
      id: 'prayers-and-thanksgivings-1928',
      slug: 'prayers-and-thanksgivings',
      title: 'Prayers and Thanksgivings',
      category: 'Prayers & Thanksgivings',
      description: 'Prayers upon several occasions: for Our Country, Congress, Social Justice, Every Man in his Work, and the departed.',
      blocks: [
        {
          type: 'prayer',
          title: 'For Our Country',
          text: 'ALMIGHTY God, who hast given us this good land for our heritage; We humbly beseech thee that we may always prove ourselves a people mindful of thy favour and glad to do thy will...'
        }
      ]
    },
    {
      id: 'litany-1928',
      slug: 'litany',
      title: 'The Litany',
      category: 'Prayers & Thanksgivings',
      description: 'The General Supplication according to the 1928 American book.',
      blocks: [
        {
          type: 'dialogue',
          dialogue: [
            { speaker: 'Minister', text: 'O GOD the Father, Creator of heaven and earth;' },
            { speaker: 'People', text: 'Have mercy upon us.' }
          ]
        }
      ]
    },
    {
      id: 'penitential-office-1928',
      slug: 'penitential-office',
      title: 'A Penitential Office for Ash Wednesday',
      category: 'Penitential',
      description: 'Solemn penitential office for the First Day of Lent with Psalm 51 and the Turn thou us supplication.',
      blocks: [
        {
          type: 'rubric',
          text: 'On the First Day of Lent, the Office ensuing may be read immediately after the Prayer, We humbly beseech thee, in the Litany.'
        }
      ]
    },
    {
      id: 'holy-communion-1928',
      slug: 'holy-communion',
      title: "The Order for the Administration of the Lord's Supper, or Holy Communion",
      category: 'Holy Communion',
      description: 'The 1928 American Eucharistic liturgy, noted for its Scottish-derived Consecration Prayer with Oblation and Invocation.',
      blocks: [
        {
          type: 'rubric',
          text: 'The Table, at the Communion-time having a fair white linen cloth upon it, shall stand in the Body of the Church, or in the Chancel.'
        },
        {
          type: 'prayer',
          title: 'The Prayer of Consecration',
          text: 'ALL glory be to thee, Almighty God, our heavenly Father, for that thou, of thy tender mercy, didst give thine only Son Jesus Christ to suffer death upon the Cross for our redemption...'
        }
      ]
    },
    {
      id: 'holy-baptism-1928',
      slug: 'holy-baptism',
      title: 'The Ministration of Holy Baptism',
      category: 'Pastoral Offices',
      description: 'The unified sacrament of Holy Baptism for infants and adults.',
      blocks: [
        {
          type: 'rubric',
          text: 'When the candidates are presented, the Minister, standing by the Font, shall say, Hath this Child (Person) been already baptized, or no?'
        }
      ]
    },
    {
      id: 'offices-of-instruction-1928',
      slug: 'offices-of-instruction',
      title: 'Offices of Instruction',
      category: 'Catechism & Rites',
      description: 'The First and Second Office of Instruction replacing the old catechism.',
      blocks: [
        {
          type: 'rubric',
          text: 'To be used for the catechizing and preparation of candidates for Confirmation.'
        }
      ]
    },
    {
      id: 'confirmation-1928',
      slug: 'confirmation',
      title: 'The Order of Confirmation',
      category: 'Pastoral Offices',
      description: 'The laying on of hands upon those that are baptized, and come to years of discretion.',
      blocks: [
        {
          type: 'prayer',
          title: 'The Laying on of Hands',
          text: 'DEFEND, O Lord, this thy Child with thy heavenly grace; that he may continue thine for ever...'
        }
      ]
    },
    {
      id: 'matrimony-1928',
      slug: 'matrimony',
      title: 'The Solemnization of Matrimony',
      category: 'Pastoral Offices',
      description: 'The historic holy matrimony rite of the 1928 prayer book.',
      blocks: [
        {
          type: 'exhortation',
          text: 'DEARLY beloved, we are gathered together here in the sight of God, and in the face of this company, to join together this Man and this Woman in holy Matrimony...'
        }
      ]
    },
    {
      id: 'churching-of-women-1928',
      slug: 'churching-of-women',
      title: 'The Thanksgiving of Women after Child-birth',
      category: 'Pastoral Offices',
      description: 'Commonly called the Churching of Women, with thanksgiving for safe deliverance.',
      blocks: [
        {
          type: 'prayer',
          text: 'O ALMIGHTY God, we give thee humble thanks for that thou hast been pleased to deliver this woman thy servant from the great pain and peril of child-birth...'
        }
      ]
    },
    {
      id: 'visitation-of-the-sick-1928',
      slug: 'visitation-of-the-sick',
      title: 'The Order for the Visitation of the Sick',
      category: 'Pastoral Offices',
      description: 'Pastoral office including prayers, commendatory prayer, and the restored Unction of the Sick.',
      blocks: [
        {
          type: 'prayer',
          title: 'The Unction of the Sick',
          text: 'I ANOINT thee with oil (or I lay my hand upon thee), in the Name of the Father, and of the Son, and of the Holy Ghost...'
        }
      ]
    },
    {
      id: 'communion-of-the-sick-1928',
      slug: 'communion-of-the-sick',
      title: 'The Communion of the Sick',
      category: 'Pastoral Offices',
      description: 'Ministration of the Holy Communion to the sick in their homes, with rubric on Spiritual Communion.',
      blocks: [
        {
          type: 'rubric',
          text: 'When the sick person is visited, and desireth to receive the Holy Communion...'
        }
      ]
    },
    {
      id: 'burial-of-the-dead-1928',
      slug: 'burial-of-the-dead',
      title: 'The Order for the Burial of the Dead',
      category: 'Pastoral Offices',
      description: 'The funeral office and committal at the grave.',
      blocks: [
        {
          type: 'scripture_sentence',
          text: 'I AM the resurrection and the life, saith the Lord: he that believeth in me, though he were dead, yet shall he live...'
        }
      ]
    },
    {
      id: 'burial-of-a-child-1928',
      slug: 'burial-of-a-child',
      title: 'At the Burial of a Child',
      category: 'Pastoral Offices',
      description: 'Tender office for the burial of a child, newly added in the 1928 revision.',
      blocks: [
        {
          type: 'scripture_sentence',
          text: 'JESUS called them unto him, and said, Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God.'
        }
      ]
    },
    {
      id: 'visitation-of-prisoners-1928',
      slug: 'visitation-of-prisoners',
      title: 'A Form of Prayer for the Visitation of Prisoners',
      category: 'Pastoral Offices',
      description: 'Office of prayer and comfort for persons confined in prison.',
      blocks: [
        {
          type: 'prayer',
          text: 'O GOD, who sparest when we deserve punishment, and in thy wrath rememberest mercy...'
        }
      ]
    },
    {
      id: 'thanksgiving-day-1928',
      slug: 'thanksgiving-day',
      title: 'A Form of Prayer and Thanksgiving for the Fruits of the Earth',
      category: 'Prayers & Thanksgivings',
      description: 'Annual service for Thanksgiving Day with harvest anthem and prayer for our country.',
      blocks: [
        {
          type: 'scripture_sentence',
          text: 'HONOUR the LORD with thy substance, and with the firstfruits of all thine increase...'
        }
      ]
    },
    {
      id: 'family-prayer-1928',
      slug: 'family-prayer',
      title: 'Forms of Prayer to Be Used in Families',
      category: 'Prayers & Thanksgivings',
      description: 'Morning and Evening Prayer for families with additional prayers.',
      blocks: [
        {
          type: 'prayer',
          title: 'Morning Prayer in Families',
          text: 'ALMIGHTY and everlasting God, in whom we live and move and have our being; We, thy needy creatures, render thee our humble praises...'
        }
      ]
    }
  ]
};
