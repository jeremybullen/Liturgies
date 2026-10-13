import { LiturgicalService } from '../../types/liturgy';

export const litany: LiturgicalService = {
  id: 'litany',
  slug: 'litany',
  title: 'The Litany',
  subtitle: 'Or General Supplication',
  traditionalTitle: 'Litania',
  category: 'Prayers & Thanksgivings',
  description: 'To be sung or said after Morning Prayer upon Sundays, Wednesdays, and Fridays, and at other times when commanded by the Ordinary.',
  blocks: [
    {
      type: 'rubric',
      text: 'Here followeth the LITANY, or General Supplication, to be sung or said after Morning Prayer upon Sundays, Wednesdays, and Fridays, and at other times when it shall be commanded by the Ordinary.'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'O GOD the Father, of heaven: have mercy upon us miserable sinners.' },
        { speaker: 'Answer', text: 'O God the Father, of heaven: have mercy upon us miserable sinners.' },
        { speaker: 'Priest', text: 'O God the Son, Redeemer of the world: have mercy upon us miserable sinners.' },
        { speaker: 'Answer', text: 'O God the Son, Redeemer of the world: have mercy upon us miserable sinners.' },
        { speaker: 'Priest', text: 'O God the Holy Ghost, proceeding from the Father and the Son: have mercy upon us miserable sinners.' },
        { speaker: 'Answer', text: 'O God the Holy Ghost, proceeding from the Father and the Son: have mercy upon us miserable sinners.' },
        { speaker: 'Priest', text: 'O holy, blessed, and glorious Trinity, three Persons and one God: have mercy upon us miserable sinners.' },
        { speaker: 'Answer', text: 'O holy, blessed, and glorious Trinity, three Persons and one God: have mercy upon us miserable sinners.' },
        { speaker: 'Priest', text: 'Remember not, Lord, our offences, nor the offences of our forefathers; neither take thou vengeance of our sins: spare us, good Lord, spare thy people, whom thou hast redeemed with thy most precious blood, and be not angry with us for ever.' },
        { speaker: 'Answer', text: 'Spare us, good Lord.' },
        { speaker: 'Priest', text: 'From all evil and mischief; from sin, from the crafts and assaults of the devil; from thy wrath, and from everlasting damnation,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'From all blindness of heart; from pride, vain-glory, and hypocrisy; from envy, hatred, and malice, and all uncharitableness,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'From fornication, and all other deadly sin; and from all the deceits of the world, the flesh, and the devil,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'From lightning and tempest; from plague, pestilence, and famine; from battle and murder, and from sudden death,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'From all sedition, privy conspiracy, and rebellion; from all false doctrine, heresy, and schism; from hardness of heart, and contempt of thy Word and Commandment,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'By the mystery of thy holy Incarnation; by thy holy Nativity and Circumcision; by thy Baptism, Fasting, and Temptation,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'By thine Agony and bloody Sweat; by thy Cross and Passion; by thy precious Death and Burial; by thy glorious Resurrection and Ascension; and by the coming of the Holy Ghost,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'In all time of our tribulation; in all time of our wealth; in the hour of death, and in the day of judgement,' },
        { speaker: 'Answer', text: 'Good Lord, deliver us.' },
        { speaker: 'Priest', text: 'We sinners do beseech thee to hear us, O Lord God; and that it may please thee to rule and govern thy holy Church universal in the right way;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to keep and strengthen in the true worshipping of thee, in righteousness and holiness of life, thy Servant EDWARD, our most gracious King and Governour;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to rule his heart in thy faith, fear, and love, and that he may evermore have affiance in thee, and ever seek thy honour and glory;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to be his defender and keeper, giving him the victory over all his enemies;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to bless and preserve our gracious Queen Alexandra, George Prince of Wales, the Princess of Wales, and all the Royal Family;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to illuminate all Bishops, Priests, and Deacons, with true knowledge and understanding of thy Word; and that both by their preaching and living they may set it forth, and shew it accordingly;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to endue the Lords of the Council, and all the Nobility, with grace, wisdom, and understanding;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to bless and keep the Magistrates, giving them grace to execute justice, and to maintain truth;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to bless and keep all thy people;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to give to all nations unity, peace, and concord;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to give us an heart to love and dread thee, and diligently to live after thy commandments;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to give to all thy people increase of grace to hear meekly thy Word, and to receive it with pure affection, and to bring forth the fruits of the Spirit;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to bring into the way of truth all such as have erred, and are deceived;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to strengthen such as do stand; and to comfort and help the weak-hearted; and to raise up them that fall; and finally to beat down Satan under our feet;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to succour, help, and comfort, all that are in danger, necessity, and tribulation;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to preserve all that travel by land or by water, all women labouring of child, all sick persons, and young children; and to shew thy pity upon all prisoners and captives;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to defend, and provide for, the fatherless children, and widows, and all that are desolate and oppressed;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to have mercy upon all men;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to forgive our enemies, persecutors, and slanderers, and to turn their hearts;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to give and preserve to our use the kindly fruits of the earth, so as in due time we may enjoy them;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'That it may please thee to give us true repentance; to forgive us all our sins, negligences, and ignorances; and to endue us with the grace of thy Holy Spirit to amend our lives according to thy holy Word;' },
        { speaker: 'Answer', text: 'We beseech thee to hear us, good Lord.' },
        { speaker: 'Priest', text: 'Son of God: we beseech thee to hear us.' },
        { speaker: 'Answer', text: 'Son of God: we beseech thee to hear us.' },
        { speaker: 'Priest', text: 'O Lamb of God: that takest away the sins of the world;' },
        { speaker: 'Answer', text: 'Grant us thy peace.' },
        { speaker: 'Priest', text: 'O Lamb of God: that takest away the sins of the world;' },
        { speaker: 'Answer', text: 'Have mercy upon us.' },
        { speaker: 'Priest', text: 'O Christ, hear us.' },
        { speaker: 'Answer', text: 'O Christ, hear us.' },
        { speaker: 'Priest', text: 'Lord, have mercy upon us.' },
        { speaker: 'Answer', text: 'Lord, have mercy upon us.' },
        { speaker: 'Priest', text: 'Christ, have mercy upon us.' },
        { speaker: 'Answer', text: 'Christ, have mercy upon us.' },
        { speaker: 'Priest', text: 'Lord, have mercy upon us.' },
        { speaker: 'Answer', text: 'Lord, have mercy upon us.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest, and the people with him, say the Lord\'s Prayer.'
    },
    {
      type: 'prayer',
      title: 'The Lord\'s Prayer',
      text: 'OUR Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done in earth, As it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive them that trespass against us. And lead us not into temptation; But deliver us from evil. Amen.'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'O Lord, deal not with us after our sins.' },
        { speaker: 'Answer', text: 'Neither reward us after our iniquities.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Let us pray.'
    },
    {
      type: 'prayer',
      text: 'O GOD, merciful Father, that despisest not the sighing of a contrite heart, nor the desire of such as be sorrowful; Mercifully assist our prayers that we make before thee in all our troubles and adversities, whensoever they oppress us; and graciously hear us, that those evils, which the craft and subtilty of the devil or man worketh against us, be brought to nought; and by the providence of thy goodness they may be dispersed; that we thy servants, being hurt by no persecutions, may evermore give thanks unto thee in thy holy Church; through Jesus Christ our Lord.'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest & Clerks', text: 'O Lord, arise, help us, and deliver us for thy Name\'s sake.' },
        { speaker: 'Priest', text: 'O GOD, we have heard with our ears, and our fathers have declared unto us, the noble works that thou didst in their days, and in the old time before them.' },
        { speaker: 'Answer', text: 'O Lord, arise, help us, and deliver us for thine honour.' },
        { speaker: 'Priest', text: 'Glory be to the Father, and to the Son: and to the Holy Ghost;' },
        { speaker: 'Answer', text: 'As it was in the beginning, is now, and ever shall be: world without end. Amen.' },
        { speaker: 'Versicle', text: 'From our enemies defend us, O Christ.' },
        { speaker: 'Response', text: 'Graciously look upon our afflictions.' },
        { speaker: 'Versicle', text: 'Pitifully behold the sorrows of our hearts.' },
        { speaker: 'Response', text: 'Mercifully forgive the sins of thy people.' },
        { speaker: 'Versicle', text: 'Favourably with mercy hear our prayers.' },
        { speaker: 'Response', text: 'O Son of David, have mercy upon us.' },
        { speaker: 'Versicle', text: 'Both now and ever vouchsafe to hear us, O Christ.' },
        { speaker: 'Response', text: 'Graciously hear us, O Christ; graciously hear us, O Lord Christ.' },
        { speaker: 'Priest', text: 'O Lord, let thy mercy be shewed upon us;' },
        { speaker: 'Answer', text: 'As we do put our trust in thee.' }
      ]
    },
    {
      type: 'prayer',
      title: 'A Collect for Trust and Confidence',
      text: 'WE humbly beseech thee, O Father, mercifully to look upon our infirmities; and for the glory of thy Name turn from us all those evils that we most righteously have deserved; and grant, that in all our troubles we may put our whole trust and confidence in thy mercy, and evermore serve thee in holiness and pureness of living, to thy honour and glory; through our only Mediator and Advocate, Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Prayer of St. Chrysostom',
      text: 'ALMIGHTY God, who hast given us grace at this time with one accord to make our common supplications unto thee; and dost promise, that when two or three are gathered together in thy Name thou wilt grant their requests; Fulfil now, O Lord, the desires and petitions of thy servants, as may be most expedient for them; granting us in this world knowledge of thy truth, and in the world to come life everlasting. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Grace',
      citation: '2 Cor. xiii. 14',
      text: 'THE grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. Amen.'
    }
  ]
};

export const prayersAndThanksgivings: LiturgicalService = {
  id: 'prayers-thanksgivings',
  slug: 'prayers-thanksgivings',
  title: 'Prayers and Thanksgivings',
  subtitle: 'Upon Several Occasions',
  category: 'Prayers & Thanksgivings',
  description: 'To be used before the two final Prayers of the Litany, or of Morning and Evening Prayer.',
  blocks: [
    {
      type: 'rubric',
      text: 'To be used before the two final Prayers of the Litany, or of Morning and Evening Prayer.'
    },
    {
      type: 'heading',
      title: 'Prayers'
    },
    {
      type: 'prayer',
      title: 'For Rain',
      text: 'O GOD, heavenly Father, who by thy Son Jesus Christ hast promised to all them that seek thy kingdom, and the righteousness thereof, all things necessary to their bodily sustenance; Send us, we beseech thee, in this our necessity, such moderate rain and showers, that we may receive the fruits of the earth to our comfort, and to thy honour; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Fair Weather',
      text: 'O ALMIGHTY Lord God, who for the sin of man didst once drown all the world, except eight persons, and afterward of thy great mercy didst promise never to destroy it so again; We humbly beseech thee, that although we for our iniquities have worthily deserved a plague of rain and waters, yet upon our true repentance thou wilt send us such weather, as that we may receive the fruits of the earth in due season; and learn both by thy punishment to amend our lives, and for thy clemency to give thee praise and glory; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'In the Time of Dearth and Famine',
      text: 'O GOD, heavenly Father, whose gift it is, that the rain doth fall, the earth is fruitful, beasts increase, and fishes do multiply; Behold, we beseech thee, the afflictions of thy people; and grant that the scarcity and dearth, which we do now most justly suffer for our iniquity, may through thy goodness be mercifully turned into cheapness and plenty; for the love of Jesus Christ our Lord, to whom with thee and the Holy Ghost be all honour and glory, now and for ever. Amen.'
    },
    {
      type: 'prayer',
      title: 'In the Time of Dearth and Famine (Or This)',
      text: 'O GOD, merciful Father, who, in the time of Elisha the prophet, didst suddenly in Samaria turn great scarcity and dearth into plenty and cheapness; Have mercy upon us, that we, who are now for our sins punished with like adversity, may likewise find a seasonable relief: Increase the fruits of the earth by thy heavenly benediction; and grant that we, receiving thy bountiful liberality, may use the same to thy glory, the relief of those that are needy, and our own comfort; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'In the Time of War and Tumults',
      text: 'O ALMIGHTY God, King of all kings, and Governour of all things, whose power no creature is able to resist, to whom it belongeth justly to punish sinners, and to be merciful to them that truly repent; Save and deliver us, we humbly beseech thee, from the hands of our enemies; abate their pride, asswage their malice, and confound their devices; that we, being armed with thy defence, may be preserved evermore from all perils, to glorify thee, who art the only giver of all victory; through the merits of thy only Son, Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'In the Time of Any Common Plague or Sickness',
      text: 'O ALMIGHTY God, who in thy wrath didst send a plague upon thine own people in the wilderness, for their obstinate rebellion against Moses and Aaron; and also, in the time of king David, didst slay with the plague of Pestilence threescore and ten thousand, and yet remembering thy mercy didst save the rest; Have pity upon us miserable sinners, who now are visited with great sickness and mortality; that like as thou didst then accept of an atonement, and didst command the destroying Angel to cease from punishing, so it may now please thee to withdraw from us this plague and grievous sickness; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'In the Ember Weeks (For those that are to be admitted into Holy Orders)',
      text: 'ALMIGHTY God, our heavenly Father, who hast purchased to thyself an universal Church by the precious blood of thy dear Son; Mercifully look upon the same, and at this time so guide and govern the minds of thy servants the Bishops and Pastors of thy flock, that they may lay hands suddenly on no man, but faithfully and wisely make choice of fit persons to serve in the sacred Ministry of thy Church. And to those which shall be ordained to any holy function give thy grace and heavenly benediction; that both by their life and doctrine they may set forth thy glory, and set forward the salvation of all men; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'In the Ember Weeks (Or This)',
      text: 'ALMIGHTY God, the giver of all good gifts, who of thy divine providence hast appointed divers Orders in thy Church; Give thy grace, we humbly beseech thee, to all those who are to be called to any office and administration in the same; and so replenish them with the truth of thy doctrine, and endue them with innocency of life, that they may faithfully serve before thee, to the glory of thy great Name, and the benefit of thy holy Church; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Prayer That May Be Said After Any of the Former',
      text: 'O GOD, whose nature and property is ever to have mercy and to forgive, receive our humble petitions; and though we be tied and bound with the chain of our sins, yet let the pitifulness of thy great mercy loose us; for the honour of Jesus Christ, our Mediator and Advocate. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Prayer for the High Court of Parliament',
      rubricNote: 'To be read during their Session.',
      text: 'MOST gracious God, we humbly beseech thee, as for this Kingdom in general, so especially for the High Court of Parliament, under our most religious and gracious King at this time assembled: That thou wouldest be pleased to direct and prosper all their consultations to the advancement of thy glory, the good of thy Church, the safety, honour, and welfare of our Sovereign, and his Dominions; that all things may be so ordered and settled by their endeavours, upon the best and surest foundations, that peace and happiness, truth and justice, religion and piety, may be established among us for all generations. These and all other necessaries, for them, for us, and thy whole Church, we humbly beg in the Name and Mediation of Jesus Christ our most blessed Lord and Saviour. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Collect or Prayer for All Conditions of Men',
      rubricNote: 'To be used at such times when the Litany is not appointed to be said.',
      text: 'O GOD, the Creator and Preserver of all mankind, we humbly beseech thee for all sorts and conditions of men; that thou wouldest be pleased to make thy ways known unto them, thy saving health unto all nations. More especially, we pray for the good estate of the Catholick Church; that it may be so guided and governed by thy good Spirit, that all who profess and call themselves Christians may be led into the way of truth, and hold the faith in unity of spirit, in the bond of peace, and in righteousness of life. Finally, we commend to thy fatherly goodness all those, who are any ways afflicted, or distressed, in mind, body, or estate; [*especially those for whom our prayers are desired,*] that it may please thee to comfort and relieve them, according to their several necessities, giving them patience under their sufferings, and a happy issue out of all their afflictions. And this we beg for Jesus Christ his sake. Amen.'
    },
    {
      type: 'heading',
      title: 'Thanksgivings'
    },
    {
      type: 'prayer',
      title: 'A General Thanksgiving',
      text: 'ALMIGHTY God, Father of all mercies, we thine unworthy servants do give thee most humble and hearty thanks for all thy goodness and loving-kindness to us, and to all men; [*particularly to those who desire now to offer up their praises and thanksgivings for thy late mercies vouchsafed unto them.*] We bless thee for our creation, preservation, and all the blessings of this life; but above all, for thine inestimable love in the redemption of the world by our Lord Jesus Christ; for the means of grace, and for the hope of glory. And, we beseech thee, give us that due sense of all thy mercies, that our hearts may be unfeignedly thankful, and that we shew forth thy praise, not only with our lips, but in our lives; by giving up ourselves to thy service, and by walking before thee in holiness and righteousness all our days; through Jesus Christ our Lord, to whom with thee and the Holy Ghost be all honour and glory, world without end. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Rain',
      text: 'O GOD our heavenly Father, who by thy gracious providence dost cause the former and the latter rain to descend upon the earth, that it may bring forth fruit for the use of man; We give thee humble thanks that it hath pleased thee, in our great necessity, to send us at the last a joyful rain upon thine inheritance, and to refresh it when it was dry, to the great comfort of us thy unworthy servants, and to the glory of thy holy Name; through thy mercies in Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Fair Weather',
      text: 'O LORD God, who hast justly humbled us by thy late plague of immoderate rain and waters, and in thy mercy hast relieved and comforted our souls by this seasonable and blessed change of weather; We praise and glorify thy holy Name for this thy mercy, and will always declare thy loving-kindness from generation to generation; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Plenty',
      text: 'O MOST merciful Father, who of thy gracious goodness hast heard the devout prayers of thy Church, and turned our dearth and scarcity into cheapness and plenty; We give thee humble thanks for this thy special bounty; beseeching thee to continue thy loving-kindness unto us, that our land may yield us her fruits of increase, to thy glory and our comfort; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Peace and Deliverance from our Enemies',
      text: 'O ALMIGHTY God, who art a strong tower of defence unto thy servants against the face of their enemies; We yield thee praise and thanksgiving for our deliverance from those great and apparent dangers wherewith we were compassed: We acknowledge it thy goodness that we were not delivered over as a prey unto them; beseeching thee still to continue such thy mercies towards us, that all the world may know that thou art our Saviour and mighty Deliverer; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Restoring Publick Peace at Home',
      text: 'O ETERNAL God, our heavenly Father, who alone makest men to be of one mind in a house, and stillest the outrage of a violent and unruly people; We bless thy holy Name, that it hath pleased thee to appease the seditious tumults which have been lately raised up amongst us; most humbly beseech thee to grant to all of us grace, that we may henceforth obediently walk in thy holy commandments; and, leading a quiet and peaceable life in all godliness and honesty, may continually offer unto thee our sacrifice of praise and thanksgiving for these thy mercies towards us; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Deliverance from the Plague, or Other Common Sickness',
      text: 'O LORD God, who hast wounded us for our sins, and consumed us for our transgressions, by thy late heavy and dreadful visitation; and now, in the midst of judgement remembering mercy, hast redeemed our souls from the jaws of death; We offer unto thy fatherly goodness ourselves, our souls and bodies which thou hast delivered, to be a living sacrifice unto thee, always praising and magnifying thy mercies in the midst of thy Church; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'For Deliverance from the Plague, or Other Common Sickness (Or This)',
      text: 'WE humbly acknowledge before thee, O most merciful Father, that all the punishments which are threatened in thy law might justly have fallen upon us, by reason of our manifold transgressions and hardness of heart: Yet seeing it hath pleased thee of thy tender mercy, upon our weak and unworthy humiliation, to asswage the contagious sickness wherewith we lately have been sore afflicted, and to restore the voice of joy and health into our dwellings; We offer unto thy Divine Majesty the sacrifice of praise and thanksgiving, lauding and magnifying thy glorious Name for such thy preservation and providence over us; through Jesus Christ our Lord. Amen.'
    }
  ]
};
