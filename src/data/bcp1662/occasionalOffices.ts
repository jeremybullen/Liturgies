import { LiturgicalService } from '../../types/liturgy';

export const visitationSick: LiturgicalService = {
  id: 'visitation-sick',
  slug: 'visitation-sick',
  title: 'The Order for the Visitation of the Sick',
  subtitle: 'And the Communion of the Sick',
  category: 'Pastoral Offices',
  description: 'Prayers, exhortations, and the absolution for the sick and dying.',
  blocks: [
    {
      type: 'rubric',
      text: 'When any person is sick, notice shall be given thereof to the Minister of the Parish; who, coming into the sick person\'s house, shall say: PEACE be to this house, and to all that dwell in it.'
    },
    {
      type: 'prayer',
      text: 'REMEMBER not, Lord, our iniquities, nor the iniquities of our forefathers: Spare us, good Lord, spare thy people, whom thou hast redeemed with thy most precious blood, and be not angry with us for ever. Spare us, good Lord.'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Minister', text: 'O Lord, save thy servant;' },
        { speaker: 'Answer', text: 'Which putteth his trust in thee.' },
        { speaker: 'Minister', text: 'Send him help from thy holy place;' },
        { speaker: 'Answer', text: 'And evermore mightily defend him.' },
        { speaker: 'Minister', text: 'Let the enemy have no advantage of him;' },
        { speaker: 'Answer', text: 'Nor the wicked approach to hurt him.' }
      ]
    },
    {
      type: 'prayer',
      title: 'Prayer for Mercy and Safety',
      text: 'O LORD, look down from heaven, behold, visit, and relieve this thy servant. Look upon him with the eyes of thy mercy, give him comfort and sure confidence in thee, defend him from the danger of the enemy, and keep him in perpetual peace and safety; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Commendatory Prayer for a Sick Person at the Point of Departure',
      text: 'O ALMIGHTY God, with whom do live the spirits of just men made perfect, after they are delivered from their earthly prisons; We humbly commend the soul of this thy servant, our dear brother, into thy hands, as into the hands of a faithful Creator, and most merciful Saviour; most humbly beseeching thee, that it may be precious in thy sight. Wash it, we pray thee, in the blood of that immaculate Lamb, that was slain to take away the sins of the world; that whatsoever defilements it may have contracted in the midst of this miserable and naughty world, through the lusts of the flesh, or the wiles of Satan, being purged and done away, it may be presented pure and without spot before thee. And teach us who survive, in this and other like daily spectacles of mortality, to see how frail and uncertain our own condition is; and so to number our days, that we may seriously apply our hearts to that holy and heavenly wisdom, whilst we live here, which may in the end bring us to life everlasting, through the merits of Jesus Christ thine only Son our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Blessing for the Sick',
      text: 'UNTO God\'s gracious mercy and protection we commit thee. The Lord bless thee, and keep thee. The Lord make his face to shine upon thee, and be gracious unto thee. The Lord lift up his countenance upon thee, and give thee peace, both now and evermore. Amen.'
    }
  ]
};

export const burialOfDead: LiturgicalService = {
  id: 'burial',
  slug: 'burial',
  title: 'The Order for the Burial of the Dead',
  subtitle: 'The Funeral Office',
  category: 'Pastoral Offices',
  description: 'The historic burial service: the opening anthems, Psalm xc, 1 Corinthians xv, and the committal at the grave.',
  blocks: [
    {
      type: 'rubric',
      text: 'Here is to be noted, that the Office ensuing is not to be used for any that die unbaptized, or excommunicate, or have laid violent hands upon themselves.\n\nThe Priest and Clerks meeting the Corpse at the entrance of the Church-yard, and going before it, either into the Church, or towards the Grave, shall say, or sing:'
    },
    {
      type: 'scripture_sentence',
      text: 'I AM the resurrection and the life, saith the Lord: he that believeth in me, though he were dead, yet shall he live: and whosoever liveth and believeth in me shall never die.',
      citation: 'St. John xi. 25, 26.'
    },
    {
      type: 'scripture_sentence',
      text: 'I KNOW that my Redeemer liveth, and that he shall stand at the latter day upon the earth. And though after my skin worms destroy this body, yet in my flesh shall I see God: whom I shall see for myself, and mine eyes shall behold, and not another.',
      citation: 'Job xix. 25, 26, 27.'
    },
    {
      type: 'scripture_sentence',
      text: 'WE brought nothing into this world, and it is certain we can carry nothing out. The Lord gave, and the Lord hath taken away; blessed be the Name of the Lord.',
      citation: '1 Tim. vi. 7. Job i. 21.'
    },
    {
      type: 'canticle',
      title: 'DOMINE, REFUGIUM',
      citation: 'Psalm xc',
      verses: [
        { text: 'LORD, thou hast been our refuge : from one generation to another.' },
        { text: 'Before the mountains were brought forth, or ever the earth and the world were made : thou art God from everlasting, and world without end.' },
        { text: 'Thou turnest man to destruction : again thou sayest, Come again, ye children of men.' },
        { text: 'For a thousand years in thy sight are but as yesterday : seeing that is past as a watch in the night.' },
        { text: 'The days of our age are threescore years and ten; and though men be so strong, that they come to fourscore years : yet is their strength then but labour and sorrow; so soon passeth it away, and we are gone.' },
        { text: 'O teach us to number our days : that we may apply our hearts unto wisdom.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'subheading',
      title: 'At the Grave'
    },
    {
      type: 'canticle',
      title: 'MEDIA VITA',
      verses: [
        { text: 'MAN that is born of a woman hath but a short time to live, and is full of misery. He cometh up, and is cut down, like a flower; he fleeth as it were a shadow, and never continueth in one stay.' },
        { text: 'In the midst of life we are in death: of whom may we seek for succour, but of thee, O Lord, who for our sins art justly displeased?' },
        { text: 'Yet, O Lord God most holy, O Lord most mighty, O holy and most merciful Saviour, deliver us not into the bitter pains of eternal death.' }
      ]
    },
    {
      type: 'prayer',
      title: 'The Committal',
      text: 'FORASMUCH as it hath pleased Almighty God of his great mercy to take unto himself the soul of our dear brother here departed, we therefore commit his body to the ground; earth to earth, ashes to ashes, dust to dust; in sure and certain hope of the Resurrection to eternal life, through our Lord Jesus Christ; who shall change our vile body, that it may be like unto his glorious body, according to the mighty working, whereby he is able to subdue all things to himself.'
    },
    {
      type: 'prayer',
      title: 'The Collect',
      text: 'O MERCIFUL God, the Father of our Lord Jesus Christ, who is the resurrection and the life; in whom whosoever believeth shall live, though he die; and whosoever liveth, and believeth in him, shall not die eternally; who also hath taught us, by his holy Apostle Saint Paul, not to be sorry, as men without hope, for them that sleep in him; We meekly beseech thee, O Father, to raise us from the death of sin unto the life of righteousness; that, when we shall depart this life, we may rest in him, as our hope is this our brother doth; and that, at the general Resurrection in the last day, we may be found acceptable in thy sight; and receive that blessing, which thy well-beloved Son shall then pronounce to all that love and fear thee, saying, Come, ye blessed children of my Father, receive the kingdom prepared for you from the beginning of the world: Grant this, we beseech thee, O merciful Father, through Jesus Christ, our Mediator and Redeemer. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Grace',
      citation: '2 Cor. xiii. 14',
      text: 'THE grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. Amen.'
    }
  ]
};

export const churchingOfWomen: LiturgicalService = {
  id: 'churching-women',
  slug: 'churching-women',
  title: 'The Thanksgiving of Women After Child-Birth',
  subtitle: 'Commonly Called, The Churching of Women',
  category: 'Pastoral Offices',
  description: 'The service of thanksgiving and blessing following safe delivery in childbirth.',
  blocks: [
    {
      type: 'rubric',
      text: 'The Woman, at the usual time after her Delivery, shall come into the Church decently apparelled, and there shall kneel down in some convenient place, as hath been accustomed, or as the Ordinary shall direct: And then the Priest shall say unto her:'
    },
    {
      type: 'exhortation',
      text: 'FORASMUCH as it hath pleased Almighty God of his goodness to give you safe deliverance, and hath preserved you in the great danger of Child-birth; you shall therefore give hearty thanks unto God, and say Psalm cxvi or Psalm cxxvii.'
    },
    {
      type: 'prayer',
      title: 'The Thanksgiving Collect',
      text: 'O ALMIGHTY God, we give thee humble thanks for that thou hast vouchsafed to deliver this woman thy servant from the great pain and peril of Child-birth; Grant, we beseech thee, most merciful Father, that she, through thy help, may both faithfully live, and walk according to thy will, in this life present; and also may be partaker of everlasting glory in the life to come; through Jesus Christ our Lord. Amen.'
    }
  ]
};

export const commination: LiturgicalService = {
  id: 'commination',
  slug: 'commination',
  title: 'A Commination',
  subtitle: 'Or Denouncing of God\'s Anger and Judgements Against Sinners',
  category: 'Penitential',
  description: 'With certain prayers to be used on Ash Wednesday, the first day of Lent, and other appointed times.',
  blocks: [
    {
      type: 'rubric',
      text: 'After Morning Prayer, the Litany ended according to the accustomed manner, the Priest shall, in the Reading-Pew or Pulpit, say:'
    },
    {
      type: 'exhortation',
      title: 'The Exhortation for Lent',
      text: 'BRETHREN, in the Primitive Church there was a godly discipline, that, at the beginning of Lent, such persons as stood convicted of notorious sin were put to open penance, and punished in this world, that their souls might be saved in the day of the Lord; and that others, admonished by their example, might be the more afraid to offend.\n\nInstead whereof, (until the said discipline may be restored again, which is much to be wished,) it is thought good, that at this time (in the presence of you all) should be read the general sentences of God\'s cursing against impenitent sinners, gathered out of the seven and twentieth Chapter of Deuteronomy, and other places of Scripture; and that ye should answer to every Sentence, Amen: To the intent that, being admonished of the great indignation of God against sinners, ye may the rather be moved to earnest and true repentance; and may walk more warily in these dangerous days; fleeing from such vices, for which ye affirm with your own mouths the curse of God to be due.'
    },
    {
      type: 'subheading',
      title: 'The Sentences of Deuteronomy'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Minister', text: 'CURSED is the man that maketh any carved or molten image, to worship it.' },
        { speaker: 'People', text: 'Amen.' },
        { speaker: 'Minister', text: 'Cursed is he that curseth his father or mother.' },
        { speaker: 'People', text: 'Amen.' },
        { speaker: 'Minister', text: 'Cursed is he that removeth his neighbour\'s land-mark.' },
        { speaker: 'People', text: 'Amen.' },
        { speaker: 'Minister', text: 'Cursed is he that maketh the blind to go out of his way.' },
        { speaker: 'People', text: 'Amen.' },
        { speaker: 'Minister', text: 'Cursed is he that perverteth the judgement of the stranger, the fatherless, and widow.' },
        { speaker: 'People', text: 'Amen.' },
        { speaker: 'Minister', text: 'Cursed is he that smiteth his neighbour secretly.' },
        { speaker: 'People', text: 'Amen.' },
        { speaker: 'Minister', text: 'Cursed are the unmerciful, fornicators, and adulterers, covetous persons, idolaters, slanderers, drunkards, and extortioners.' },
        { speaker: 'People', text: 'Amen.' }
      ]
    },
    {
      type: 'canticle',
      title: 'MISERERE MEI, DEUS',
      citation: 'Psalm li',
      verses: [
        { text: 'HAVE mercy upon me, O God, after thy great goodness : according to the multitude of thy mercies do away mine offences.' },
        { text: 'Wash me throughly from my wickedness : and cleanse me from my sin.' },
        { text: 'For I acknowledge my faults : and my sin is ever before me.' },
        { text: 'Turn thy face away from my sins : and put out all my misdeeds.' },
        { text: 'Make me a clean heart, O God : and renew a right spirit within me.' },
        { text: 'Cast me not away from thy presence : and take not thy holy Spirit from me.' },
        { text: 'O give me the comfort of thy help again : and stablish me with thy free Spirit.' }
      ]
    },
    {
      type: 'prayer',
      title: 'The Penitential Supplication',
      text: 'TURN thou us, O good Lord, and so shall we be turned. Be favourable, O Lord, Be favourable to thy people, Who turn to thee in weeping, fasting, and praying. For thou art a merciful God, Full of compassion, Long-suffering, and of great pity. Thou sparest when we deserve punishment, And in thy wrath thinkest upon mercy. Spare thy people good Lord, spare them, And let not thine heritage be brought to confusion. Hear us, O Lord, for thy mercy is great, And after the multitude of thy mercies look upon us; Through the merits and mediation of thy blessed Son, Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Blessing',
      text: 'THE Lord bless us, and keep us; the Lord lift up the light of his countenance upon us, and give us peace, now and for evermore. Amen.'
    }
  ]
};
