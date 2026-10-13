import { LiturgicalService } from '../../types/liturgy';

export const morningPrayer: LiturgicalService = {
  id: 'morning-prayer',
  slug: 'morning-prayer',
  title: 'The Order for Morning Prayer',
  subtitle: 'Daily Throughout the Year',
  traditionalTitle: 'Mattins',
  category: 'Daily Office',
  description: 'The canonical daily morning office according to the use of the 1662 Book of Common Prayer.',
  blocks: [
    {
      type: 'rubric',
      text: 'At the beginning of Morning Prayer the Minister shall read with a loud voice some one or more of these Sentences of the Scriptures that follow. And then he shall say that which is written after the said Sentences.'
    },
    {
      type: 'scripture_sentence',
      text: 'WHEN the wicked man turneth away from his wickedness that he hath committed, and doeth that which is lawful and right, he shall save his soul alive.',
      citation: 'Ezekiel xviii. 27.'
    },
    {
      type: 'scripture_sentence',
      text: 'I acknowledge my transgressions, and my sin is ever before me.',
      citation: 'Psalm li. 3.'
    },
    {
      type: 'scripture_sentence',
      text: 'Hide thy face from my sins, and blot out all mine iniquities.',
      citation: 'Psalm li. 9.'
    },
    {
      type: 'scripture_sentence',
      text: 'The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.',
      citation: 'Psalm li. 17.'
    },
    {
      type: 'scripture_sentence',
      text: 'Rend your heart, and not your garments, and turn unto the Lord your God: for he is gracious and merciful, slow to anger, and of great kindness, and repenteth him of the evil.',
      citation: 'Joel ii. 13.'
    },
    {
      type: 'scripture_sentence',
      text: 'To the Lord our God belong mercies and forgivenesses, though we have rebelled against him: neither have we obeyed the voice of the Lord our God, to walk in his laws which he set before us.',
      citation: 'Daniel ix. 9, 10.'
    },
    {
      type: 'scripture_sentence',
      text: 'O Lord, correct me, but with judgement; not in thine anger, lest thou bring me to nothing.',
      citation: 'Jer. x. 24. Psalm vi. 1.'
    },
    {
      type: 'scripture_sentence',
      text: 'Repent ye; for the Kingdom of Heaven is at hand.',
      citation: 'St. Matthew iii. 2.'
    },
    {
      type: 'scripture_sentence',
      text: 'I will arise, and go to my father, and will say unto him, Father, I have sinned against heaven, and before thee, and am no more worthy to be called thy son.',
      citation: 'St. Luke xv. 18, 19.'
    },
    {
      type: 'scripture_sentence',
      text: 'Enter not into judgement with thy servant, O Lord; for in thy sight shall no man living be justified.',
      citation: 'Psalm cxliii. 2.'
    },
    {
      type: 'scripture_sentence',
      text: 'If we say that we have no sin, we deceive ourselves, and the truth is not in us: but, if we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
      citation: '1 St. John i. 8, 9.'
    },
    {
      type: 'exhortation',
      title: 'The Exhortation',
      text: 'DEARLY beloved brethren, the Scripture moveth us in sundry places to acknowledge and confess our manifold sins and wickedness; and that we should not dissemble nor cloke them before the face of Almighty God our heavenly Father; but confess them with an humble, lowly, penitent, and obedient heart; to the end that we may obtain forgiveness of the same, by his infinite goodness and mercy. And although we ought at all times humbly to acknowledge our sins before God; yet ought we most chiefly so to do, when we assemble and meet together to render thanks for the great benefits that we have received at his hands, to set forth his most worthy praise, to hear his most holy Word, and to ask those things which are requisite and necessary, as well for the body as the soul. Wherefore I pray and beseech you, as many as are here present, to accompany me with a pure heart, and humble voice, unto the throne of the heavenly grace, saying after me;'
    },
    {
      type: 'rubric',
      text: 'A general Confession to be said of the whole Congregation after the Minister, all kneeling.'
    },
    {
      type: 'prayer',
      title: 'A General Confession',
      text: 'ALMIGHTY and most merciful Father; We have erred, and strayed from thy ways like lost sheep. We have followed too much the devices and desires of our own hearts. We have offended against thy holy laws. We have left undone those things which we ought to have done; And we have done those things which we ought not to have done; And there is no health in us. But thou, O Lord, have mercy upon us, miserable offenders. Spare thou them, O God, which confess their faults. Restore thou them that are penitent; According to thy promises declared unto mankind in Christ Jesu our Lord. And grant, O most merciful Father, for his sake; That we may hereafter live a godly, righteous, and sober life, To the glory of thy holy Name. Amen.'
    },
    {
      type: 'rubric',
      text: 'The Absolution, or Remission of sins, to be pronounced by the Priest alone, standing the people still kneeling.'
    },
    {
      type: 'prayer',
      title: 'The Absolution',
      text: 'ALMIGHTY God, the Father of our Lord Jesus Christ, who desireth not the death of a sinner, but rather that he may turn from his wickedness, and live; and hath given power, and commandment, to his Ministers, to declare and pronounce to his people, being penitent, the Absolution and Remission of their sins: He pardoneth and absolveth all them that truly repent, and unfeignedly believe his holy Gospel. Wherefore let us beseech him to grant us true repentance, and his holy Spirit, that those things may please him, which we do at this present; and that the rest of our life hereafter may be pure, and holy; so that at the last we may come to his eternal joy; through Jesus Christ our Lord.'
    },
    {
      type: 'rubric',
      text: 'The people shall answer here, and at the end of all other prayers, Amen.'
    },
    {
      type: 'rubric',
      text: 'Then the Minister shall kneel, and say the Lord\'s Prayer with an audible voice; the people also kneeling, and repeating it with him, both here, and wheresoever else it is used in Divine Service.'
    },
    {
      type: 'prayer',
      title: 'The Lord\'s Prayer',
      text: 'OUR Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done in earth, As it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive them that trespass against us. And lead us not into temptation; But deliver us from evil: For thine is the kingdom, The power, and the glory, For ever and ever. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then likewise he shall say,'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'O Lord, open thou our lips.' },
        { speaker: 'Answer', text: 'And our mouth shall shew forth thy praise.' },
        { speaker: 'Priest', text: 'O God, make speed to save us.' },
        { speaker: 'Answer', text: 'O Lord, make haste to help us.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Here all standing up, the Priest shall say,'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'Glory be to the Father, and to the Son: and to the Holy Ghost;' },
        { speaker: 'Answer', text: 'As it was in the beginning, is now, and ever shall be: world without end. Amen.' },
        { speaker: 'Priest', text: 'Praise ye the Lord.' },
        { speaker: 'Answer', text: 'The Lord\'s Name be praised.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall be said or sung this Psalm following: except on Easter-Day, upon which another Anthem is appointed; and on the Nineteenth day of every Month it is not to be read here, but in the ordinary Course of the Psalms.'
    },
    {
      type: 'canticle',
      title: 'VENITE, EXULTEMUS DOMINO',
      citation: 'Psalm xcv',
      verses: [
        { text: 'O COME, let us sing unto the Lord : let us heartily rejoice in the strength of our salvation.' },
        { text: 'Let us come before his presence with thanksgiving : and shew ourselves glad in him with Psalms.' },
        { text: 'For the Lord is a great God : and a great King above all gods.' },
        { text: 'In his hand are all the corners of the earth : and the strength of the hills is his also.' },
        { text: 'The sea is his, and he made it : and his hands prepared the dry land.' },
        { text: 'O come, let us worship, and fall down : and kneel before the Lord our Maker.' },
        { text: 'For he is the Lord our God : and we are the people of his pasture, and the sheep of his hand.' },
        { text: 'To day if ye will hear his voice, harden not your hearts : as in the provocation, and as in the day of temptation in the wilderness;' },
        { text: 'When your fathers tempted me : proved me, and saw my works.' },
        { text: 'Forty years long was I grieved with this generation, and said : It is a people that do err in their hearts, for they have not known my ways.' },
        { text: 'Unto whom I sware in my wrath : that they should not enter into my rest.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall follow the Psalms in order as they are appointed. And at the end of every Psalm throughout the Year, and likewise at the end of Benedicite, Benedictus, Magnificat, and Nunc dimittis, shall be repeated,'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'Glory be to the Father, and to the Son: and to the Holy Ghost;' },
        { speaker: 'Answer', text: 'As it was in the beginning, is now, and ever shall be: world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall be read distinctly with an audible voice the First Lesson, taken out of the Old Testament, as is appointed in the Calendar, except there be proper Lessons assigned for that day: He that readeth so standing and turning himself, as he may best be heard of all such as are present. And after that, shall be said or sung, in English, the Hymn called Te Deum Laudamus, daily throughout the Year.\nNote, That before every Lesson the Minister shall say, Here beginneth such a Chapter, or Verse of such a Chapter, of such a Book: And after every Lesson, Here endeth the First, or the Second Lesson.'
    },
    {
      type: 'canticle',
      title: 'TE DEUM LAUDAMUS',
      verses: [
        { text: 'WE praise thee, O God : we acknowledge thee to be the Lord.' },
        { text: 'All the earth doth worship thee : the Father everlasting.' },
        { text: 'To thee all Angels cry aloud : the Heavens, and all the Powers therein.' },
        { text: 'To thee Cherubin, and Seraphin : continually do cry,' },
        { text: 'Holy, Holy, Holy : Lord God of Sabaoth;' },
        { text: 'Heaven and earth are full of the Majesty : of thy Glory.' },
        { text: 'The glorious company of the Apostles : praise thee.' },
        { text: 'The goodly fellowship of the Prophets : praise thee.' },
        { text: 'The noble army of Martyrs : praise thee.' },
        { text: 'The holy Church throughout all the world : doth acknowledge thee;' },
        { text: 'The Father : of an infinite Majesty;' },
        { text: 'Thine honourable, true : and only Son;' },
        { text: 'Also the Holy Ghost : the Comforter.' },
        { text: 'Thou art the King of Glory : O Christ.' },
        { text: 'Thou art the everlasting Son : of the Father.' },
        { text: 'When thou tookest upon thee to deliver man : thou didst not abhor the Virgin\'s womb.' },
        { text: 'When thou hadst overcome the sharpness of death : thou didst open the Kingdom of Heaven to all believers.' },
        { text: 'Thou sittest at the right hand of God : in the Glory of the Father.' },
        { text: 'We believe that thou shalt come : to be our Judge.' },
        { text: 'We therefore pray thee, help thy servants : whom thou hast redeemed with thy precious blood.' },
        { text: 'Make them to be numbered with thy Saints : in glory everlasting.' },
        { text: 'O Lord, save thy people : and bless thine heritage.' },
        { text: 'Govern them : and lift them up for ever.' },
        { text: 'Day by day : we magnify thee;' },
        { text: 'And we worship thy Name : ever world without end.' },
        { text: 'Vouchsafe, O Lord : to keep us this day without sin.' },
        { text: 'O Lord, have mercy upon us : have mercy upon us.' },
        { text: 'O Lord, let thy mercy lighten upon us : as our trust is in thee.' },
        { text: 'O Lord, in thee have I trusted : let me never be confounded.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Or this Canticle,'
    },
    {
      type: 'canticle',
      title: 'BENEDICITE, OMNIA OPERA',
      verses: [
        { text: 'O ALL ye Works of the Lord, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Angels of the Lord, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Heavens, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Waters that be above the Firmament, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O all ye Powers of the Lord, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Sun, and Moon, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Stars of Heaven, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Showers, and Dew, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Winds of God, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Fire and Heat, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Winter and Summer, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Dews, and Frosts, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Frost and Cold, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Ice and Snow, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Nights, and Days, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Light and Darkness, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Lightnings, and Clouds, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O let the Earth bless the Lord : yea, let it praise him, and magnify him for ever.' },
        { text: 'O ye Mountains, and Hills, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O all ye Green Things upon the Earth, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Wells, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Seas, and Floods, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Whales, and all that move in the Waters, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O all ye Fowls of the Air, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O all ye Beasts, and Cattle, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Children of Men, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O let Israel bless the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Priests of the Lord, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Servants of the Lord, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye Spirits and Souls of the Righteous, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O ye holy and humble Men of heart, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'O Ananias, Azarias, and Misael, bless ye the Lord : praise him, and magnify him for ever.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall be read in like manner the Second Lesson, taken out of the New Testament. And after that, the Hymn following; except when that shall happen to be read in the Chapter for the Day, or for the Gospel on St. John Baptist\'s Day.'
    },
    {
      type: 'canticle',
      title: 'BENEDICTUS',
      citation: 'St. Luke i. 68',
      verses: [
        { text: 'BLESSED be the Lord God of Israel : for he hath visited, and redeemed his people;' },
        { text: 'And hath raised up a mighty salvation for us : in the house of his servant David;' },
        { text: 'As he spake by the mouth of his holy Prophets : which have been since the world began;' },
        { text: 'That we should be saved from our enemies : and from the hands of all that hate us;' },
        { text: 'To perform the mercy promised to our forefathers : and to remember his holy Covenant;' },
        { text: 'To perform the oath which he sware to our forefather Abraham : that he would give us;' },
        { text: 'That we being delivered out of the hand of our enemies : might serve him without fear;' },
        { text: 'In holiness and righteousness before him : all the days of our life.' },
        { text: 'And thou, Child, shalt be called the Prophet of the Highest : for thou shalt go before the face of the Lord to prepare his ways;' },
        { text: 'To give knowledge of salvation unto his people : for the remission of their sins,' },
        { text: 'Through the tender mercy of our God : whereby the day-spring from on high hath visited us;' },
        { text: 'To give light to them that sit in darkness, and in the shadow of death : and to guide our feet into the way of peace.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Or this Psalm,'
    },
    {
      type: 'canticle',
      title: 'JUBILATE DEO',
      citation: 'Psalm c',
      verses: [
        { text: 'O BE joyful in the Lord, all ye lands : serve the Lord with gladness, and come before his presence with a song.' },
        { text: 'Be ye sure that the Lord he is God : it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture.' },
        { text: 'O go your way into his gates with thanksgiving, and into his courts with praise : be thankful unto him, and speak good of his Name.' },
        { text: 'For the Lord is gracious, his mercy is everlasting : and his truth endureth from generation to generation.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall be sung or said the Apostles\' Creed by the Minister and the people, standing: except only such days as the Creed of St. Athanasius is appointed to be read.'
    },
    {
      type: 'creed',
      title: 'The Apostles\' Creed',
      text: 'I BELIEVE in God the Father Almighty, Maker of heaven and earth:\nAnd in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried, He descended into hell; The third day he rose again from the dead, He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead.\nI believe in the Holy Ghost; The holy Catholick Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the life everlasting. Amen.'
    },
    {
      type: 'rubric',
      text: 'And after that, these Prayers following, all devoutly kneeling; the Minister first pronouncing with a loud voice,'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Minister', text: 'The Lord be with you.' },
        { speaker: 'Answer', text: 'And with thy spirit.' },
        { speaker: 'Minister', text: 'Let us pray.' },
        { speaker: 'Minister', text: 'Lord, have mercy upon us.' },
        { speaker: 'Answer', text: 'Christ, have mercy upon us.' },
        { speaker: 'Minister', text: 'Lord, have mercy upon us.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then the Minister, Clerks, and people, shall say the Lord\'s Prayer with a loud voice.'
    },
    {
      type: 'prayer',
      title: 'The Lord\'s Prayer',
      text: 'OUR Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done in earth, As it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive them that trespass against us. And lead us not into temptation; But deliver us from evil. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then the Priest standing up shall say,'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'O Lord, shew thy mercy upon us.' },
        { speaker: 'Answer', text: 'And grant us thy salvation.' },
        { speaker: 'Priest', text: 'O Lord, save the King.' },
        { speaker: 'Answer', text: 'And mercifully hear us when we call upon thee.' },
        { speaker: 'Priest', text: 'Endue thy Ministers with righteousness.' },
        { speaker: 'Answer', text: 'And make thy chosen people joyful.' },
        { speaker: 'Priest', text: 'O Lord, save thy people.' },
        { speaker: 'Answer', text: 'And bless thine inheritance.' },
        { speaker: 'Priest', text: 'Give peace in our time, O Lord.' },
        { speaker: 'Answer', text: 'Because there is none other that fighteth for us, but only thou, O God.' },
        { speaker: 'Priest', text: 'O God, make clean our hearts within us.' },
        { speaker: 'Answer', text: 'And take not thy holy Spirit from us.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall follow three Collects; the first of the Day, which shall be the same that is appointed at the Communion; the second for Peace; the third for Grace to live well. And the two last Collects shall never alter, but daily be said at Morning Prayer throughout all the year, as followeth; all kneeling.'
    },
    {
      type: 'prayer',
      title: 'The Second Collect, for Peace',
      text: 'O GOD, who art the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom; Defend us thy humble servants in all assaults of our enemies; that we, surely trusting in thy defence, may not fear the power of any adversaries, through the might of Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Third Collect, for Grace',
      text: 'O LORD, our heavenly Father, Almighty and everlasting God, who hast safely brought us to the beginning of this day; Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'In Quires and Places where they sing, here followeth the Anthem.\nThen these five Prayers following are to be read here, except when the Litany is read; and then only the two last are to be read, as they are there placed.'
    },
    {
      type: 'prayer',
      title: 'A Prayer for the King\'s Majesty',
      text: 'O LORD our heavenly Father, high and mighty, King of kings, Lord of lords, the only Ruler of princes, who dost from thy throne behold all the dwellers upon earth; Most heartily we beseech thee with thy favour to behold our most gracious Sovereign Lord, King EDWARD; and so replenish him with the grace of thy Holy Spirit, that he may alway incline to thy will, and walk in thy way: Endue him plenteously with heavenly gifts; grant him in health and wealth long to live; strengthen him that he may vanquish and overcome all his enemies; and finally, after this life, he may attain everlasting joy and felicity; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Prayer for the Royal Family',
      text: 'ALMIGHTY God, the fountain of all goodness, we humbly beseech thee to bless our gracious Queen Alexandra, George Prince of Wales, the Princess of Wales, and all the Royal Family: Endue them with thy Holy Spirit; enrich them with thy heavenly grace; prosper them with all happiness; and bring them to thine everlasting kingdom; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Prayer for the Clergy and People',
      text: 'ALMIGHTY and everlasting God, who alone workest great marvels; Send down upon our Bishops, and Curates, and all Congregations committed to their charge, the healthful Spirit of thy grace; and that they may truly please thee, pour upon them the continual dew of thy blessing. Grant this, O Lord, for the honour of our Advocate and Mediator, Jesus Christ. Amen.'
    },
    {
      type: 'prayer',
      title: 'A Prayer of St. Chrysostom',
      text: 'ALMIGHTY God, who hast given us grace at this time with one accord to make our common supplications unto thee; and dost promise, that when two or three are gathered together in thy Name thou wilt grant their requests: Fulfil now, O Lord, the desires and petitions of thy servants, as may be most expedient for them; granting us in this world knowledge of thy truth, and in the world to come life everlasting. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Grace',
      citation: '2 Cor. xiii. 14',
      text: 'THE grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. Amen.'
    }
  ]
};
