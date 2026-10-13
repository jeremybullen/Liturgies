import { LiturgicalService } from '../../types/liturgy';

export const eveningPrayer: LiturgicalService = {
  id: 'evening-prayer',
  slug: 'evening-prayer',
  title: 'The Order for Evening Prayer',
  subtitle: 'Daily Throughout the Year',
  traditionalTitle: 'Evensong',
  category: 'Daily Office',
  description: 'The canonical daily evening office according to the use of the 1662 Book of Common Prayer.',
  blocks: [
    {
      type: 'rubric',
      text: 'At the beginning of Evening Prayer the Minister shall read with a loud voice some one or more of these Sentences of the Scriptures that follow. And then he shall say that which is written after the said Sentences.'
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
      text: 'Repent ye; for the Kingdom of heaven is at hand.',
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
      text: 'If we say that we have no sin, we deceive ourselves, and the truth is not in us: but if we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
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
      text: 'ALMIGHTY God, the Father of our Lord Jesus Christ, who desireth not the death of a sinner, but rather that he may turn from his wickedness, and live; and hath given power, and commandment, to his Ministers, to declare and pronounce to his people, being penitent, the Absolution and Remission of their sins: He pardoneth and absolveth all them that truly repent, and unfeignedly believe his holy Gospel. Wherefore let us beseech him to grant us true repentance, and his Holy Spirit, that those things may please him, which we do at this present; and that the rest of our life hereafter may be pure, and holy; so that at the last we may come to his eternal joy through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then the Minister shall kneel, and say the Lord\'s Prayer; the people also kneeling, and repeating it with him.'
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
      text: 'Then shall be said or sung the Psalms in order as they are appointed. Then a Lesson of the Old Testament, as is appointed. And after that, Magnificat (or the Song of the blessed Virgin Mary) in English, as followeth.'
    },
    {
      type: 'canticle',
      title: 'MAGNIFICAT',
      citation: 'St. Luke i. 46',
      verses: [
        { text: 'MY soul doth magnify the Lord : and my spirit hath rejoiced in God my Saviour.' },
        { text: 'For he hath regarded : the lowliness of his handmaiden.' },
        { text: 'For behold, from henceforth : all generations shall call me blessed.' },
        { text: 'For he that is mighty hath magnified me : and holy is his Name.' },
        { text: 'And his mercy is on them that fear him : throughout all generations.' },
        { text: 'He hath shewed strength with his arm : he hath scattered the proud in the imagination of their hearts.' },
        { text: 'He hath put down the mighty from their seat : and hath exalted the humble and meek.' },
        { text: 'He hath filled the hungry with good things : and the rich he hath sent empty away.' },
        { text: 'He remembering his mercy hath holpen his servant Israel : as he promised to our forefathers, Abraham and his seed, for ever.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Or else this Psalm; except it be on the Nineteenth Day of the Month, when it is read in the ordinary Course of the Psalms.'
    },
    {
      type: 'canticle',
      title: 'CANTATE DOMINO',
      citation: 'Psalm xcviii',
      verses: [
        { text: 'O SING unto the Lord a new song : for he hath done marvellous things.' },
        { text: 'With his own right hand, and with his holy arm : hath he gotten himself the victory.' },
        { text: 'The Lord declared his salvation : his righteousness hath he openly shewed in the sight of the heathen.' },
        { text: 'He hath remembered his mercy and truth toward the house of Israel : and all the ends of the world have seen the salvation of our God.' },
        { text: 'Shew yourselves joyful unto the Lord, all ye lands : sing, rejoice, and give thanks.' },
        { text: 'Praise the Lord upon the harp : sing to the harp with a psalm of thanksgiving.' },
        { text: 'With trumpets also and shawms : O shew yourselves joyful before the Lord the King.' },
        { text: 'Let the sea make a noise, and all that therein is : the round world, and they that dwell therein.' },
        { text: 'Let the floods clap their hands, and let the hills be joyful together before the Lord : for he cometh to judge the earth.' },
        { text: 'With righteousness shall he judge the world : and the people with equity.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then a Lesson of the New Testament, as it is appointed. And after that, Nunc dimittis (or the Song of Symeon) in English, as followeth.'
    },
    {
      type: 'canticle',
      title: 'NUNC DIMITTIS',
      citation: 'St. Luke ii. 29',
      verses: [
        { text: 'LORD, now lettest thou thy servant depart in peace : according to thy word.' },
        { text: 'For mine eyes have seen : thy salvation,' },
        { text: 'Which thou hast prepared : before the face of all people;' },
        { text: 'To be a light to lighten the Gentiles : and to be the glory of thy people Israel.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Or else this Psalm; except it be on the Twelfth Day of the Month.'
    },
    {
      type: 'canticle',
      title: 'DEUS MISEREATUR',
      citation: 'Psalm lxvii',
      verses: [
        { text: 'GOD be merciful unto us, and bless us : and shew us the light of his countenance, and be merciful unto us:' },
        { text: 'That thy way may be known upon earth : thy saving health among all nations.' },
        { text: 'Let the people praise thee, O God : yea, let all the people praise thee.' },
        { text: 'O let the nations rejoice and be glad : for thou shalt judge the folk righteously, and govern the nations upon earth.' },
        { text: 'Let the people praise thee, O God : yea, let all the people praise thee.' },
        { text: 'Then shall the earth bring forth her increase : and God, even our own God, shall give us his blessing.' },
        { text: 'God shall bless us : and all the ends of the world shall fear him.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall be said or sung the Apostles\' Creed by the Minister and the people, standing.'
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
      text: 'OUR Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done in earth, As it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive them that trespass against us. And lead us not into temptation; But deliver us from evil. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then the Priest standing up shall say,'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'O Lord, shew thy mercy upon us;' },
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
        { speaker: 'Answer', text: 'And take not thy Holy Spirit from us.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall follow three Collects; the first of the Day; the second for Peace; the third for Aid against all Perils, as hereafter followeth: which two last Collects shall be daily said at Evening Prayer without alteration.'
    },
    {
      type: 'prayer',
      title: 'The Second Collect at Evening Prayer (For Peace)',
      text: 'O GOD, from whom all holy desires, all good counsels, and all just works do proceed; Give unto thy servants that peace which the world cannot give; that both our hearts may be set to obey thy commandments, and also that by thee we being defended from the fear of our enemies may pass our time in rest and quietness; through the merits of Jesus Christ our Saviour. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Third Collect, for Aid against all Perils',
      text: 'LIGHTEN our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour, Jesus Christ. Amen.'
    },
    {
      type: 'rubric',
      text: 'In Quires and Places where they sing, here followeth the Anthem.'
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

export const athanasianCreed: LiturgicalService = {
  id: 'athanasian-creed',
  slug: 'athanasian-creed',
  title: 'The Creed of Saint Athanasius',
  subtitle: 'At Morning Prayer upon Certain Feasts',
  traditionalTitle: 'Quicunque Vult',
  category: 'Daily Office',
  description: 'The ancient confession of the Catholic Faith appointed for the great feasts of the Christian year.',
  blocks: [
    {
      type: 'rubric',
      text: 'Upon these Feasts; Christmas-day, the Epiphany, Saint Matthias, Easter-day, Ascension-day, Whitsunday, Saint John Baptist, Saint James, Saint Bartholomew, Saint Matthew, Saint Simon and Saint Jude, Saint Andrew, and upon Trinity-Sunday, shall be sung or said at Morning Prayer, instead of the Apostles\' Creed, this Confession of our Christian Faith, commonly called The Creed of Saint Athanasius, by the Minister and people standing.'
    },
    {
      type: 'canticle',
      title: 'QUICUNQUE VULT',
      verses: [
        { text: 'WHOSOEVER will be saved : before all things it is necessary that he hold the Catholick Faith.' },
        { text: 'Which Faith except every one do keep whole and undefiled : without doubt he shall perish everlastingly.' },
        { text: 'And the Catholick Faith is this : That we worship one God in Trinity, and Trinity in Unity;' },
        { text: 'Neither confounding the Persons : nor dividing the Substance.' },
        { text: 'For there is one Person of the Father, another of the Son : and another of the Holy Ghost.' },
        { text: 'But the Godhead of the Father, of the Son, and of the Holy Ghost, is all one : the Glory equal, the Majesty co-eternal.' },
        { text: 'Such as the Father is, such is the Son : and such is the Holy Ghost.' },
        { text: 'The Father uncreate, the Son uncreate : and the Holy Ghost uncreate.' },
        { text: 'The Father incomprehensible, the Son incomprehensible : and the Holy Ghost incomprehensible.' },
        { text: 'The Father eternal, the Son eternal : and the Holy Ghost eternal.' },
        { text: 'And yet they are not three eternals : but one eternal.' },
        { text: 'As also there are not three incomprehensibles, nor three uncreated : but one uncreated, and one incomprehensible.' },
        { text: 'So likewise the Father is Almighty, the Son Almighty : and the Holy Ghost Almighty.' },
        { text: 'And yet they are not three Almighties : but one Almighty.' },
        { text: 'So the Father is God, the Son is God : and the Holy Ghost is God.' },
        { text: 'And yet they are not three Gods : but one God.' },
        { text: 'So likewise the Father is Lord, the Son Lord : and the Holy Ghost Lord.' },
        { text: 'And yet not three Lords : but one Lord.' },
        { text: 'For like as we are compelled by the Christian verity : to acknowledge every Person by himself to be God and Lord;' },
        { text: 'So are we forbidden by the Catholick Religion : to say, there be three Gods, or three Lords.' },
        { text: 'The Father is made of none : neither created, nor begotten.' },
        { text: 'The Son is of the Father alone : not made, nor created, but begotten.' },
        { text: 'The Holy Ghost is of the Father and of the Son : neither made, nor created, nor begotten, but proceeding.' },
        { text: 'So there is one Father, not three Fathers; one Son, not three Sons : one Holy Ghost, not three Holy Ghosts.' },
        { text: 'And in this Trinity none is afore, or after other : none is greater, or less than another;' },
        { text: 'But the whole three Persons are co-eternal together : and co-equal.' },
        { text: 'So that in all things, as is aforesaid : the Unity in Trinity, and the Trinity in Unity is to be worshipped.' },
        { text: 'He therefore that will be saved : must thus think of the Trinity.' },
        { text: 'Furthermore, it is necessary to everlasting salvation : that he also believe rightly the Incarnation of our Lord Jesus Christ.' },
        { text: 'For the right Faith is, that we believe and confess : that our Lord Jesus Christ, the Son of God, is God and Man;' },
        { text: 'God, of the Substance of the Father, begotten before the worlds : and Man, of the Substance of his Mother, born in the world;' },
        { text: 'Perfect God, and perfect Man : of a reasonable soul and human flesh subsisting;' },
        { text: 'Equal to the Father, as touching his Godhead : and inferior to the Father, as touching his Manhood.' },
        { text: 'Who although he be God and Man : yet he is not two, but one Christ;' },
        { text: 'One; not by conversion of the Godhead into flesh : but by taking of the Manhood into God;' },
        { text: 'One altogether; not by confusion of Substance : but by unity of Person.' },
        { text: 'For as the reasonable soul and flesh is one man : so God and Man is one Christ;' },
        { text: 'Who suffered for our salvation : descended into hell, rose again the third day from the dead.' },
        { text: 'He ascended into heaven, he sitteth on the right hand of the Father, God Almighty : from whence he shall come to judge the quick and the dead.' },
        { text: 'At whose coming all men shall rise again with their bodies : and shall give account for their own works.' },
        { text: 'And they that have done good shall go into life everlasting : and they that have done evil into everlasting fire.' },
        { text: 'This is the Catholick Faith : which except a man believe faithfully, he cannot be saved.' },
        { text: 'Glory be to the Father, and to the Son : and to the Holy Ghost;' },
        { text: 'As it was in the beginning, is now, and ever shall be : world without end. Amen.' }
      ]
    }
  ]
};
