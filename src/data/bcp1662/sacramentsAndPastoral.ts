import { LiturgicalService } from '../../types/liturgy';

export const publickBaptismInfants: LiturgicalService = {
  id: 'publick-baptism-infants',
  slug: 'publick-baptism-infants',
  title: 'The Ministration of Publick Baptism of Infants',
  subtitle: 'To be Used in the Church',
  category: 'Pastoral Offices',
  description: 'The order for the solemn public baptism of infant children at the font.',
  blocks: [
    {
      type: 'rubric',
      text: 'The people are to be admonished, that it is most convenient that Baptism should not be administered but upon Sundays, and other Holy-days, when the most number of people come together; as well for that the Congregation there present may testify the receiving of them that be newly baptized into the number of Christ\'s Church; as also because in the Baptism of Infants every Man present may be put in remembrance of his own profession made to God in his Baptism. For which cause also it is expedient that Baptism be ministered in the vulgar tongue. Nevertheless, (if necessity so require,) Children may be baptized upon any other day.\n\nAnd note, that there shall be for every Male-child to be baptized two Godfathers and one Godmother; and for every Female, one Godfather and two Godmothers.\n\nWhen there are Children to be baptized, the Parents shall give knowledge thereof over night, or in the morning before the beginning of Morning Prayer, to the Curate. And then the Godfathers and Godmothers, and the people with the Children, must be ready at the Font, either immediately after the last Lesson at Morning Prayer, or else immediately after the last Lesson at Evening Prayer, as the Curate by his discretion shall appoint. And the Priest coming to the Font, (which is then to be filled with pure Water,) and standing there, shall say,\n\nHATH this Child been already baptized, or no?\n\nIf they answer, No: Then shall the Priest proceed as followeth.'
    },
    {
      type: 'exhortation',
      text: 'DEARLY beloved, forasmuch as all men are conceived and born in sin; and that our Saviour Christ saith, None can enter into the kingdom of God, except he be regenerate and born anew of Water and of the Holy Ghost; I beseech you to call upon God the Father, through our Lord Jesus Christ, that of his bounteous mercy he will grant to this Child that thing which by nature he cannot have; that he may be baptized with Water and the Holy Ghost, and received into Christ\'s holy Church, and be made a lively member of the same.'
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest say, Let us pray.'
    },
    {
      type: 'prayer',
      text: 'ALMIGHTY and everlasting God, who of thy great mercy didst save Noah and his family in the ark from perishing by water; and also didst safely lead the children of Israel thy people through the Red Sea, figuring thereby thy holy Baptism; and by the Baptism of thy well-beloved Son Jesus Christ, in the river Jordan, didst sanctify Water to the mystical washing away of sin; We beseech thee, for thine infinite mercies, that thou wilt mercifully look upon this Child; wash him and sanctify him with the Holy Ghost; that he, being delivered from thy wrath, may be received into the ark of Christ\'s Church; and being stedfast in faith, joyful through hope, and rooted in charity, may so pass the waves of this troublesome world, that finally he may come to the land of everlasting life, there to reign with thee world without end; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      text: 'ALMIGHTY and immortal God, the aid of all that need, the helper of all that flee to thee for succour, the life of them that believe, and the resurrection of the dead; We call upon thee for this Infant, that he, coming to thy holy Baptism, may receive remission of his sins by spiritual regeneration. Receive him, O Lord, as thou hast promised by thy well-beloved Son, saying, Ask, and ye shall have; seek, and ye shall find; knock, and it shall be opened unto you: So give now unto us that ask; let us that seek find; open the gate unto us that knock; that this Infant may enjoy the everlasting benediction of thy heavenly washing, and may come to the eternal kingdom which thou hast promised by Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall the people stand up, and the Priest shall say, Hear the words of the Gospel, written by Saint Mark, in the tenth Chapter, at the thirteenth Verse.'
    },
    {
      type: 'scripture_sentence',
      text: 'THEY brought young children to Christ, that he should touch them; and his disciples rebuked those that brought them. But when Jesus saw it, he was much displeased, and said unto them, Suffer the little children to come unto me, and forbid them not; for of such is the kingdom of God. Verily I say unto you, Whosoever shall not receive the kingdom of God as a little child, he shall not enter therein. And he took them up in his arms, put his hands upon them, and blessed them.',
      citation: 'St. Mark x. 13'
    },
    {
      type: 'exhortation',
      text: 'BELOVED, ye hear in this Gospel the words of our Saviour Christ, that he commanded the children to be brought unto him; how he blamed those that would have kept them from him; how he exhorted all men to follow their innocency. Ye perceive how by his outward gesture and deed he declared his good will toward them; for he embraced them in his arms, he laid his hands upon them, and blessed them. Doubt ye not therefore, but earnestly believe, that he will likewise favourably receive this present Infant; that he will embrace him with the arms of his mercy; that he will give unto him the blessing of eternal life, and make him partaker of his everlasting kingdom. Wherefore we being thus persuaded of the good will of our heavenly Father towards this Infant, declared by his Son Jesus Christ; and nothing doubting but that he favourably alloweth this charitable work of ours in bringing this Infant to his holy Baptism; let us faithfully and devoutly give thanks unto him, and say,\n\nALMIGHTY and everlasting God, heavenly Father, we give thee humble thanks, for that thou hast vouchsafed to call us to the knowledge of thy grace, and faith in thee: Increase this knowledge, and confirm this faith in us evermore. Give thy holy Spirit to this Infant, that he may be born again, and be made an heir of everlasting salvation; through our Lord Jesus Christ, who liveth and reigneth with thee and the Holy Spirit, now and for ever. Amen.'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest to Sponsors', text: 'DOST thou, in the name of this Child, renounce the devil and all his works, the vain pomp and glory of the world, with all covetous desires of the same, and the carnal desires of the flesh, so that thou wilt not follow, nor be led by them?' },
        { speaker: 'Answer', text: 'I renounce them all.' },
        { speaker: 'Priest', text: 'DOST thou believe in God the Father Almighty, Maker of heaven and earth?\n\nAnd in Jesus Christ his only-begotten Son our Lord? And that he was conceived by the Holy Ghost; born of the Virgin Mary; that he suffered under Pontius Pilate, was crucified, dead, and buried; that he went down into hell, and also did rise again the third day; that he ascended into heaven, and sitteth at the right hand of God the Father Almighty; and from thence shall come again at the end of the world, to judge the quick and the dead?\n\nAnd dost thou believe in the Holy Ghost; the holy Catholick Church; the Communion of Saints; the Remission of sins; the Resurrection of the flesh; and everlasting life after death?' },
        { speaker: 'Answer', text: 'All this I stedfastly believe.' },
        { speaker: 'Priest', text: 'WILT thou be baptized in this faith?' },
        { speaker: 'Answer', text: 'That is my desire.' },
        { speaker: 'Priest', text: 'WILT thou then obediently keep God\'s holy will and commandments, and walk in the same all the days of thy life?' },
        { speaker: 'Answer', text: 'I will.' }
      ]
    },
    {
      type: 'prayer',
      title: 'The Blessing of the Water',
      text: 'ALMIGHTY, everliving God, whose most dearly beloved Son Jesus Christ, for the forgiveness of our sins, did shed out of his most precious side both water and blood; and gave commandment to his disciples, that they should go teach all nations, and baptize them In the Name of the Father, the Son, and the Holy Ghost; Regard, we beseech thee, the supplications of thy congregation; sanctify this Water to the mystical washing away of sin; and grant that this Child, now to be baptized therein, may receive the fulness of thy grace, and ever remain in the number of thy faithful and elect children; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then the Priest shall take the Child into his hands, and shall say to the Godfathers and Godmothers: Name this Child. And then naming it after them, he shall dip it in the Water discreetly, or pour Water upon it, saying:'
    },
    {
      type: 'prayer',
      title: 'The Baptism & Reception',
      text: 'N. I baptize thee In the Name of the Father, and of the Son, and of the Holy Ghost. Amen.\n\nWE receive this Child into the congregation of Christ\'s flock, and do sign him with the sign of the Cross, in token that hereafter he shall not be ashamed to confess the faith of Christ crucified, and manfully to fight under his banner, against sin, the world, and the devil; and to continue Christ\'s faithful soldier and servant unto his life\'s end. Amen.'
    }
  ]
};

export const catechism: LiturgicalService = {
  id: 'catechism',
  slug: 'catechism',
  title: 'A Catechism',
  subtitle: 'An Instruction to be Learned of Every Person Before He be Brought to be Confirmed by the Bishop',
  category: 'Catechism & Rites',
  description: 'The fundamental doctrinal instruction of the Church of England in the Apostles\' Creed, the Ten Commandments, the Lord\'s Prayer, and the Sacraments.',
  blocks: [
    {
      type: 'rubric',
      text: 'THAT IS TO SAY, AN INSTRUCTION TO BE LEARNED OF EVERY PERSON, BEFORE HE BE BROUGHT TO BE CONFIRMED BY THE BISHOP.'
    },
    {
      type: 'catechism_qa',
      question: 'WHAT is your Name?',
      answer: 'N. or M.'
    },
    {
      type: 'catechism_qa',
      question: 'Who gave you this Name?',
      answer: 'My Godfathers and Godmothers in my Baptism; wherein I was made a member of Christ, the child of God, and an inheritor of the kingdom of heaven.'
    },
    {
      type: 'catechism_qa',
      question: 'What did your Godfathers and Godmothers then for you?',
      answer: 'They did promise and vow three things in my name. First, that I should renounce the devil and all his works, the pomps and vanity of this wicked world, and all the sinful lusts of the flesh. Secondly, that I should believe all the Articles of the Christian Faith. And thirdly, that I should keep God\'s holy will and commandments, and walk in the same all the days of my life.'
    },
    {
      type: 'catechism_qa',
      question: 'Dost thou not think that thou art bound to believe, and to do, as they have promised for thee?',
      answer: 'Yes verily; and by God\'s help so I will. And I heartily thank our heavenly Father, that he hath called me to this state of salvation, through Jesus Christ our Saviour. And I pray unto God to give me his grace, that I may continue in the same unto my life\'s end.'
    },
    {
      type: 'subheading',
      title: 'The Creed'
    },
    {
      type: 'catechism_qa',
      question: 'Rehearse the Articles of thy Belief.',
      answer: 'I BELIEVE in God the Father Almighty, Maker of heaven and earth: And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried, He descended into hell; The third day he rose again from the dead, He ascended into heaven, And sitteth at the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead. I believe in the Holy Ghost; The holy Catholick Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body; And the Life everlasting. Amen.'
    },
    {
      type: 'catechism_qa',
      question: 'What dost thou chiefly learn in these Articles of thy Belief?',
      answer: 'First, I learn to believe in God the Father, who hath made me, and all the world.\nSecondly, in God the Son, who hath redeemed me, and all mankind.\nThirdly, in God the Holy Ghost, who sanctifieth me, and all the elect people of God.'
    },
    {
      type: 'subheading',
      title: 'The Commandments & Duty'
    },
    {
      type: 'catechism_qa',
      question: 'What is thy duty towards God?',
      answer: 'My duty towards God, is to believe in him, to fear him, and to love him with all my heart, with all my mind, with all my soul, and with all my strength; to worship him, to give him thanks, to put my whole trust in him, to call upon him, to honour his holy Name and his Word, and to serve him truly all the days of my life.'
    },
    {
      type: 'catechism_qa',
      question: 'What is thy duty towards thy Neighbour?',
      answer: 'My duty towards my Neighbour, is to love him as myself, and to do to all men, as I would they should do unto me: To love, honour, and succour my father and mother: To honour and obey the King, and all that are put in authority under him: To submit myself to all my governours, teachers, spiritual pastors and masters: To order myself lowly and reverently to all my betters: To hurt no body by word nor deed: To be true and just in all my dealing: To bear no malice nor hatred in my heart: To keep my hands from picking and stealing, and my tongue from evil-speaking, lying, and slandering: To keep my body in temperance, soberness, and chastity: Not to covet nor desire other men\'s goods; but to learn and labour truly to get mine own living, and to do my duty in that state of life, unto which it shall please God to call me.'
    },
    {
      type: 'subheading',
      title: 'The Sacraments'
    },
    {
      type: 'catechism_qa',
      question: 'HOW many Sacraments hath Christ ordained in his Church?',
      answer: 'Two only, as generally necessary to salvation, that is to say, Baptism, and the Supper of the Lord.'
    },
    {
      type: 'catechism_qa',
      question: 'What meanest thou by this word, Sacrament?',
      answer: 'I mean an outward and visible sign of an inward and spiritual grace given unto us, ordained by Christ himself, as a means whereby we receive the same, and a pledge to assure us thereof.'
    },
    {
      type: 'catechism_qa',
      question: 'How many parts are there in a Sacrament?',
      answer: 'Two; the outward visible sign, and the inward spiritual grace.'
    },
    {
      type: 'catechism_qa',
      question: 'What is required of them who come to the Lord\'s Supper?',
      answer: 'To examine themselves, whether they repent them truly of their former sins, stedfastly purposing to lead a new life; have a lively faith in God\'s mercy through Christ, with a thankful remembrance of his death; and be in charity with all men.'
    }
  ]
};

export const confirmation: LiturgicalService = {
  id: 'confirmation',
  slug: 'confirmation',
  title: 'The Order of Confirmation',
  subtitle: 'Or Laying on of Hands upon those that are Baptized and Come to Years of Discretion',
  category: 'Catechism & Rites',
  description: 'The bishop\'s rite of confirmation with the renewal of baptismal vows and the laying on of hands.',
  blocks: [
    {
      type: 'rubric',
      text: 'Upon the day appointed, all that are to be then confirmed, being placed, and standing in order, before the Bishop; he (or some other Minister appointed by him) shall read this Preface following.'
    },
    {
      type: 'exhortation',
      title: 'The Preface',
      text: 'TO the end that Confirmation may be ministered to the more edifying of such as shall receive it, the Church hath thought good to order, That none hereafter shall be Confirmed, but such as can say the Creed, the Lord\'s Prayer, and the Ten Commandments; and can also answer to such other Questions, as in the short Catechism are contained: which order is very convenient to be observed; to the end, that children, being now come to the years of discretion, and having learned what their Godfathers and Godmothers promised for them in Baptism, they may themselves, with their own mouth and consent, openly before the Church, ratify and confirm the same; and also promise, that by the grace of God they will evermore endeavour themselves faithfully to observe such things, as they, by their own confession, have assented unto.'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Bishop', text: 'DO ye here, in the presence of God, and of this congregation, renew the solemn promise and vow that was made in your name at your Baptism; ratifying and confirming the same in your own persons, and acknowledging yourselves bound to believe, and to do, all those things, which your Godfathers and Godmothers then undertook for you?' },
        { speaker: 'Every one shall answer', text: 'I do.' },
        { speaker: 'Bishop', text: 'OUR help is in the Name of the Lord;' },
        { speaker: 'Answer', text: 'Who hath made heaven and earth.' },
        { speaker: 'Bishop', text: 'Blessed be the Name of the Lord;' },
        { speaker: 'Answer', text: 'Henceforth, world without end.' },
        { speaker: 'Bishop', text: 'Lord, hear our prayers.' },
        { speaker: 'Answer', text: 'And let our cry come unto thee.' }
      ]
    },
    {
      type: 'prayer',
      title: 'Prayer for the Sevenfold Gifts of the Spirit',
      text: 'ALMIGHTY and everliving God, who hast vouchsafed to regenerate these thy servants by Water and the Holy Ghost, and hast given unto them forgiveness of all their sins; Strengthen them, we beseech thee, O Lord, with the Holy Ghost the Comforter, and daily increase in them thy manifold gifts of grace; the spirit of wisdom and understanding; the spirit of counsel and ghostly strength; the spirit of knowledge and true godliness; and fill them, O Lord, with the spirit of thy holy fear, now and for ever. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then all of them in order kneeling before the Bishop, he shall lay his hand upon the head of every one severally, saying:'
    },
    {
      type: 'prayer',
      title: 'The Act of Confirmation',
      text: 'DEFEND, O Lord, this thy Child [or this thy Servant] with thy heavenly grace, that he may continue thine for ever; and daily increase in thy holy Spirit more and more, until he come unto thy everlasting kingdom. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Blessing',
      text: 'THE Blessing of God Almighty, the Father, the Son, and the Holy Ghost, be upon you, and remain with you for ever. Amen.'
    }
  ]
};

export const matrimony: LiturgicalService = {
  id: 'matrimony',
  slug: 'matrimony',
  title: 'The Form of Solemnization of Matrimony',
  subtitle: 'The Marriage Service',
  category: 'Pastoral Offices',
  description: 'The ancient marriage liturgy with the exchange of vows, the giving of the ring, and prayers of blessing.',
  blocks: [
    {
      type: 'rubric',
      text: 'First the Banns of all that are to be married together must be published in the Church three several Sundays, during the time of Morning Service, or of Evening Service, immediately after the second Lesson.\n\nAt the day and time appointed for solemnization of Matrimony, the persons to be married shall come into the body of the Church with their friends and neighbours: and there standing together, the Man on the right hand, and the Woman on the left, the Priest shall say:'
    },
    {
      type: 'exhortation',
      title: 'The Address',
      text: 'DEARLY beloved, we are gathered together here in the sight of God, and in the face of this congregation, to join together this Man and this Woman in holy Matrimony; which is an honourable estate, instituted of God in the time of man\'s innocency, signifying unto us the mystical union that is betwixt Christ and his Church; which holy estate Christ adorned and beautified with his presence, and first miracle that he wrought, in Cana of Galilee; and is commended of Saint Paul to be honourable among all men: and therefore is not by any to be enterprised, nor taken in hand, unadvisedly, lightly, or wantonly, to satisfy men\'s carnal lusts and appetites, like brute beasts that have no understanding; but reverently, discreetly, advisedly, soberly, and in the fear of God; duly considering the causes for which Matrimony was ordained.\n\nFirst, It was ordained for the procreation of children, to be brought up in the fear and nurture of the Lord, and to the praise of his holy Name.\nSecondly, It was ordained for a remedy against sin, and to avoid fornication; that such persons as have not the gift of continency might marry, and keep themselves undefiled members of Christ\'s body.\nThirdly, It was ordained for the mutual society, help, and comfort, that the one ought to have of the other, both in prosperity and adversity. Into which holy estate these two persons present come now to be joined. Therefore if any man can shew any just cause, why they may not lawfully be joined together, let him now speak, or else hereafter for ever hold his peace.'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest to the Man', text: 'M. WILT thou have this Woman to thy wedded wife, to live together after God\'s ordinance in the holy estate of Matrimony? Wilt thou love her, comfort her, honour, and keep her in sickness and in health; and, forsaking all other, keep thee only unto her, so long as ye both shall live?' },
        { speaker: 'The Man', text: 'I will.' },
        { speaker: 'Priest to the Woman', text: 'N. WILT thou have this Man to thy wedded husband, to live together after God\'s ordinance in the holy estate of Matrimony? Wilt thou obey him, and serve him, love, honour, and keep him in sickness and in health; and, forsaking all other, keep thee only unto him, so long as ye both shall live?' },
        { speaker: 'The Woman', text: 'I will.' }
      ]
    },
    {
      type: 'subheading',
      title: 'The Nuptial Vows'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'The Man', text: 'I M. take thee N. to my wedded wife, to have and to hold from this day forward, for better for worse, for richer for poorer, in sickness and in health, to love and to cherish, till death us do part, according to God\'s holy ordinance; and thereto I plight thee my troth.' },
        { speaker: 'The Woman', text: 'I N. take thee M. to my wedded husband, to have and to hold from this day forward, for better for worse, for richer for poorer, in sickness and in health, to love, cherish, and to obey, till death us do part, according to God\'s holy ordinance; and thereto I give thee my troth.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall they again loose their hands; and the Man shall give unto the Woman a Ring. And the Man holding the Ring there, and taught by the Priest, shall say:'
    },
    {
      type: 'prayer',
      title: 'The Giving of the Ring',
      text: 'WITH this Ring I thee wed, with my body I thee worship, and with all my worldly goods I thee endow: In the Name of the Father, and of the Son, and of the Holy Ghost. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Blessing of the Union',
      text: 'O ETERNAL God, Creator and Preserver of all mankind, Giver of all spiritual grace, the Author of everlasting life; Send thy blessing upon these thy servants, this man and this woman, whom we bless in thy Name; that, as Isaac and Rebecca lived faithfully together, so these persons may surely perform and keep the vow and covenant betwixt them made, and may ever remain in perfect love and peace together; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Pronouncement',
      text: 'Those whom God hath joined together let no man put asunder.\n\nFORASMUCH as M. and N. have consented together in holy wedlock, and have witnessed the same before God and this company, and thereto have given and pledged their troth either to other, and have declared the same by giving and receiving of a Ring, and by joining of hands; I pronounce that they be Man and Wife together, In the Name of the Father, and of the Son, and of the Holy Ghost. Amen.'
    }
  ]
};
