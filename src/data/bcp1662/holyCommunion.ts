import { LiturgicalService } from '../../types/liturgy';

export const holyCommunion: LiturgicalService = {
  id: 'holy-communion',
  slug: 'holy-communion',
  title: 'The Order for the Administration of the Lord\'s Supper',
  subtitle: 'Or Holy Communion',
  traditionalTitle: 'Holy Communion',
  category: 'Holy Communion',
  description: 'The standard communion liturgy of the 1662 Book of Common Prayer, with the Decalogue, Offertory, Consecration, and Post-Communion.',
  blocks: [
    {
      type: 'rubric',
      text: 'So many as intend to be partakers of the holy Communion, shall signify their names to the Curate at least some time the day before.\n\nAnd if any of those be an open and notorious evil liver, or have done any wrong to his neighbour by word or deed, so that the Congregation be thereby offended; the Curate, having knowledge thereof, shall call him and advertise him, that in any wise he presume not to come to the Lord\'s Table, until he have openly declared himself to have truly repented and amended his former naughty life, that the Congregation may thereby be satisfied, which before were offended; and that he hath recompensed the parties to whom he hath done wrong, or at least declare himself to be in full purpose so to do, as soon as he conveniently may.\n\nThe same order shall the Curate use with those betwixt whom he perceiveth malice and hatred to reign; not suffering them to be partakers of the Lord\'s Table, until he know them to be reconciled. And if one of the parties so at variance be content to forgive from the bottom of his heart all that the other hath trespassed against him, and to make amends for that he himself hath offended; and the other party will not be persuaded to a godly unity, but remain still in his frowardness and malice: the Minister in that case ought to admit the penitent person to the holy Communion, and not him that is obstinate. Provided that every Minister so repelling any, as is specified in this or the next precedent Paragraph of this Rubrick, shall be obliged to give an account of the same to the Ordinary within fourteen days after, at the farthest. And the Ordinary shall proceed against the offending person according to the Canon.\n\nThe Table at the Communion time having a fair white linen cloth upon it, shall stand in the body of the Church, or in the Chancel, where Morning and Evening Prayer are appointed to be said. And the Priest standing at the north side of the Table shall say the Lord\'s Prayer with the Collect following, the people kneeling.'
    },
    {
      type: 'prayer',
      title: 'The Lord\'s Prayer',
      text: 'OUR Father which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done in earth, as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive them that trespass against us. And lead us not into temptation, But deliver us from evil. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Collect for Purity',
      text: 'ALMIGHTY God, unto whom all hearts be open, all desires known, and from whom no secrets are hid; Cleanse the thoughts of our hearts by the inspiration of thy Holy Spirit, that we may perfectly love thee, and worthily magnify thy holy Name; through Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest, turning to the people, rehearse distinctly all the TEN COMMANDMENTS; and the people still kneeling shall, after every Commandment, ask God mercy for their transgression thereof for the time past, and grace to keep the same for the time to come, as followeth.'
    },
    {
      type: 'subheading',
      title: 'The Ten Commandments'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Minister', text: 'GOD spake these words, and said; I am the Lord thy God: Thou shalt have none other gods but me.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Thou shalt not make to thyself any graven image, nor the likeness of any thing that is in heaven above, or in the earth beneath, or in the water under the earth. Thou shalt not bow down to them, nor worship them: for I the Lord thy God am a jealous God, and visit the sins of the fathers upon the children unto the third and fourth generation of them that hate me, and shew mercy unto thousands in them that love me, and keep my commandments.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Thou shalt not take the Name of the Lord thy God in vain: for the Lord will not hold him guiltless, that taketh his Name in vain.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Remember that thou keep holy the Sabbath-day. Six days shalt thou labour, and do all that thou hast to do; but the seventh day is the Sabbath of the Lord thy God. In it thou shalt do no manner of work, thou, and thy son, and thy daughter, thy man-servant, and thy maid-servant, thy cattle, and the stranger that is within thy gates. For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the seventh day, and hallowed it.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Honour thy father and thy mother; that thy days may be long in the land, which the Lord thy God giveth thee.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Thou shalt do no murder.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Thou shalt not commit adultery.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Thou shalt not steal.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Thou shalt not bear false witness against thy neighbour.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and incline our hearts to keep this law.' },
        { speaker: 'Minister', text: 'Thou shalt not covet thy neighbour\'s house, thou shalt not covet thy neighbour\'s wife, nor his servant, nor his maid, nor his ox, nor his ass, nor any thing that is his.' },
        { speaker: 'People', text: 'Lord, have mercy upon us, and write all these thy laws in our hearts, we beseech thee.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall follow one of these two Collects for the King, the Priest standing as before, and saying, Let us pray.'
    },
    {
      type: 'prayer',
      title: 'A Collect for the King',
      text: 'ALMIGHTY God, whose kingdom is everlasting, and power infinite; Have mercy upon the whole Church; and so rule the heart of thy chosen Servant EDWARD, our King and Governour, that he (knowing whose minister he is) may above all things seek thy honour and glory: and that we, and all his subjects (duly considering whose authority he hath) may faithfully serve, honour, and humbly obey him, in thee, and for thee, according to thy blessed Word and ordinance; through Jesus Christ our Lord, who with thee and the Holy Ghost liveth and reigneth, ever one God, world without end. Amen.'
    },
    {
      type: 'prayer',
      title: 'Or This',
      text: 'ALMIGHTY and everlasting God, we are taught by thy holy Word, that the hearts of Kings are in thy rule and governance, and that thou dost dispose and turn them as it seemeth best to thy godly wisdom: We humbly beseech thee so to dispose and govern the heart of EDWARD thy Servant, our King and Governour, that, in all his thoughts, words, and works, he may ever seek thy honour and glory, and study to preserve thy people committed to his charge, in wealth, peace, and godliness: Grant this, O merciful Father, for thy dear Son\'s sake, Jesus Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall be said the Collect of the Day. And immediately after the Collect the Priest shall read the Epistle, saying, The Epistle [or, The portion of Scripture appointed for the Epistle] is written in the — Chapter of — beginning at the — Verse. And the Epistle ended, he shall say, Here endeth the Epistle. Then shall he read the Gospel (the people all standing up) saying, The holy Gospel is written in the — Chapter of — beginning at the — Verse. And the Gospel ended, shall be sung or said the Creed following, the people still standing, as before.'
    },
    {
      type: 'creed',
      title: 'The Nicene Creed',
      text: 'I BELIEVE in one God the Father Almighty, Maker of heaven and earth, And of all things visible and invisible:\n\nAnd in one Lord Jesus Christ, the only-begotten Son of God, Begotten of his Father before all worlds, God of God, Light of Light, Very God of very God, Begotten, not made, Being of one substance with the Father; By whom all things were made, Who for us men, and for our salvation came down from heaven, And was incarnate by the Holy Ghost of the Virgin Mary, And was made man, And was crucified also for us under Pontius Pilate. He suffered and was buried, And the third day he rose again according to the Scriptures, And ascended into heaven, And sitteth on the right hand of the Father. And he shall come again with glory to judge both the quick and the dead: Whose kingdom shall have no end.\n\nAnd I believe in the Holy Ghost, The Lord and Giver of life, Who proceedeth from the Father and the Son, Who with the Father and the Son together is worshipped and glorified, Who spake by the Prophets. And I believe one Catholick and Apostolick Church. I acknowledge one Baptism for the remission of sins, And I look for the Resurrection of the dead, And the life of the world to come. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then the Curate shall declare unto the people what Holy-days, or Fasting-days, are in the Week following to be observed. And then also (if occasion be) shall notice be given of the Communion; and Briefs, Citations, and Excommunications read. And nothing shall be proclaimed or published in the Church, during the time of Divine Service, but by the Minister: nor by him any thing, but what is prescribed in the Rules of this Book, or enjoined by the King, or by the Ordinary of the place.\n\nThen shall follow the Sermon, or one of the Homilies already set forth, or hereafter to be set forth, by authority.\n\nThen shall the Priest return to the Lord\'s Table, and begin the Offertory, saying one or more of these Sentences following, as he thinketh most convenient in his discretion.'
    },
    {
      type: 'subheading',
      title: 'The Offertory Sentences'
    },
    {
      type: 'scripture_sentence',
      text: 'LET your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
      citation: 'St. Matth. v.'
    },
    {
      type: 'scripture_sentence',
      text: 'Lay not up for yourselves treasure upon the earth; where the rust and moth doth corrupt, and where thieves break through and steal: but lay up for yourselves treasures in heaven; where neither rust nor moth doth corrupt, and where thieves do not break through and steal.',
      citation: 'St. Matth. vi.'
    },
    {
      type: 'scripture_sentence',
      text: 'Whatsoever ye would that men should do unto you, even so do unto them; for this is the Law and the Prophets.',
      citation: 'St. Matth. vii.'
    },
    {
      type: 'scripture_sentence',
      text: 'Not every one that saith unto me, Lord, Lord, shall enter into the Kingdom of heaven; but he that doeth the will of my Father which is in heaven.',
      citation: 'St. Matth. vii.'
    },
    {
      type: 'scripture_sentence',
      text: 'Zacchæus stood forth, and said unto the Lord, Behold, Lord, the half of my goods I give to the poor; and if I have done any wrong to any man, I restore four-fold.',
      citation: 'St. Luke xix.'
    },
    {
      type: 'scripture_sentence',
      text: 'Who goeth a warfare at any time of his own cost? Who planteth a vineyard, and eateth not of the fruit thereof? Or who feedeth a flock, and eateth not of the milk of the flock?',
      citation: '1 Cor. ix.'
    },
    {
      type: 'scripture_sentence',
      text: 'If we have sown unto you spiritual things, is it a great matter if we shall reap your worldly things?',
      citation: '1 Cor. ix.'
    },
    {
      type: 'scripture_sentence',
      text: 'Do ye not know, that they who minister about holy things live of the sacrifice; and they who wait at the altar are partakers with the altar? Even so hath the Lord also ordained, that they who preach the Gospel should live of the Gospel.',
      citation: '1 Cor. ix.'
    },
    {
      type: 'scripture_sentence',
      text: 'He that soweth little shall reap little; and he that soweth plenteously shall reap plenteously. Let every man do according as he is disposed in his heart, not grudgingly, or of necessity; for God loveth a cheerful giver.',
      citation: '2 Cor. ix.'
    },
    {
      type: 'scripture_sentence',
      text: 'Let him that is taught in the Word minister unto him that teacheth, in all good things. Be not deceived, God is not mocked: for whatsoever a man soweth that shall he reap.',
      citation: 'Gal. vi.'
    },
    {
      type: 'scripture_sentence',
      text: 'While we have time, let us do good unto all men; and specially unto them that are of the houshold of faith.',
      citation: 'Gal. vi.'
    },
    {
      type: 'scripture_sentence',
      text: 'Godliness is great riches, if a man be content with that he hath: for we brought nothing into the world, neither may we carry any thing out.',
      citation: '1 Tim. vi.'
    },
    {
      type: 'scripture_sentence',
      text: 'Charge them who are rich in this world, that they be ready to give, and glad to distribute; laying up in store for themselves a good foundation against the time to come, that they may attain eternal life.',
      citation: '1 Tim. vi.'
    },
    {
      type: 'scripture_sentence',
      text: 'God is not unrighteous, that he will forget your works, and labour that proceedeth of love; which love ye have shewed for his Name\'s sake, who have ministered unto the saints, and yet do minister.',
      citation: 'Heb. vi.'
    },
    {
      type: 'scripture_sentence',
      text: 'To do good, and to distribute, forget not; for with such sacrifices God is well pleased.',
      citation: 'Heb. xiii.'
    },
    {
      type: 'scripture_sentence',
      text: 'Whoso hath this world\'s good, and seeth his brother have need, and shutteth up his compassion from him, how dwelleth the love of God in him?',
      citation: '1 St. John iii.'
    },
    {
      type: 'scripture_sentence',
      text: 'Give alms of thy goods, and never turn thy face from any poor man; and then the face of the Lord shall not be turned away from thee.',
      citation: 'Tobit iv.'
    },
    {
      type: 'scripture_sentence',
      text: 'Be merciful after thy power. If thou hast much, give plenteously: if thou hast little, do thy diligence gladly to give of that little: for so gatherest thou thyself a good reward in the day of necessity.',
      citation: 'Tobit iv.'
    },
    {
      type: 'scripture_sentence',
      text: 'He that hath pity upon the poor lendeth unto the Lord: and look, what he layeth out, it shall be paid him again.',
      citation: 'Prov. xix.'
    },
    {
      type: 'scripture_sentence',
      text: 'Blessed be the man that provideth for the sick and needy: the Lord shall deliver him in the time of trouble.',
      citation: 'Psalm xli.'
    },
    {
      type: 'rubric',
      text: 'Whilst these Sentences are in reading, the Deacons, Church-wardens, or other fit person appointed for that purpose, shall receive the Alms for the Poor, and other devotions of the people, in a decent bason to be provided by the Parish for that purpose; and reverently bring it to the Priest, who shall humbly present and place it upon the holy Table.\n\nAnd when there is a Communion, the Priest shall then place upon the Table so much Bread and Wine, as he shall think sufficient.\n\nAfter which done, the Priest shall say, Let us pray for the whole state of Christ\'s Church militant here in earth.'
    },
    {
      type: 'prayer',
      title: 'Prayer for the Whole State of Christ\'s Church Militant Here in Earth',
      text: 'ALMIGHTY and everliving God, who by thy holy Apostle hast taught us to make prayers, and supplications, and to give thanks, for all men; We humbly beseech thee most mercifully [*to accept our alms and oblations, and*] to receive these our prayers, which we offer unto thy Divine Majesty; beseeching thee to inspire continually the universal Church with the spirit of truth, unity, and concord: And grant, that all they that do confess thy holy Name may agree in the truth of thy holy Word, and live in unity, and godly love. We beseech thee also to save and defend all Christian Kings, Princes, and Governours; and specially thy Servant EDWARD our King; that under him we may be godly and quietly governed: And grant unto his whole Council, and to all that are put in authority under him, that they may truly and indifferently minister justice, to the punishment of wickedness and vice, and to the maintenance of thy true religion, and virtue. Give grace, O heavenly Father, to all Bishops and Curates, that they may both by their life and doctrine set forth thy true and lively Word, and rightly and duly administer thy holy Sacraments: And to all thy people give thy heavenly grace; and especially to this congregation here present; that, with meek heart and due reverence, they may hear, and receive thy holy Word; truly serving thee in holiness and righteousness all the days of their life. And we most humbly beseech thee of thy goodness, O Lord, to comfort and succour all them, who in this transitory life are in trouble, sorrow, need, sickness, or any other adversity. And we also bless thy holy Name for all thy servants departed this life in thy faith and fear; beseeching thee to give us grace so to follow their good examples, that with them we may be partakers of thy heavenly kingdom: Grant this, O Father, for Jesus Christ\'s sake, our only Mediator and Advocate. Amen.'
    },
    {
      type: 'rubric',
      text: 'At the time of the celebration of the Communion, the Communicants being conveniently placed for the receiving of the holy Sacrament, the Priest shall say this Exhortation.'
    },
    {
      type: 'exhortation',
      title: 'The Exhortation at the Communion',
      text: 'DEARLY beloved in the Lord, ye that mind to come to the holy Communion of the Body and Blood of our Saviour Christ, must consider how Saint Paul exhorteth all persons diligently to try and examine themselves, before they presume to eat of that Bread, and drink of that Cup. For as the benefit is great, if with a true penitent heart and lively faith we receive that holy Sacrament; (for then we spiritually eat the flesh of Christ, and drink his blood; then we dwell in Christ, and Christ in us; we are one with Christ, and Christ with us;) so is the danger great, if we receive the same unworthily. For then we are guilty of the Body and Blood of Christ our Saviour; we eat and drink our own damnation, not considering the Lord\'s Body; we kindle God\'s wrath against us; we provoke him to plague us with divers diseases, and sundry kinds of death. Judge therefore yourselves, brethren, that ye be not judged of the Lord; repent you truly for your sins past; have a lively and stedfast faith in Christ our Saviour; amend your lives, and be in perfect charity with all men; so shall ye be meet partakers of those holy mysteries. And above all things ye must give most humble and hearty thanks to God, the Father, the Son, and the Holy Ghost, for the redemption of the world by the death and passion of our Saviour Christ, both God and man; who did humble himself, even to the death upon the Cross, for us, miserable sinners, who lay in darkness and the shadow of death; that he might make us the children of God, and exalt us to everlasting life. And to the end that we should alway remember the exceeding great love of our Master, and only Saviour, Jesus Christ, thus dying for us, and the innumerable benefits which by his precious blood-shedding he hath obtained to us; he hath instituted and ordained holy mysteries, as pledges of his love, and for a continual remembrance of his death, to our great and endless comfort. To him therefore, with the Father and the Holy Ghost, let us give (as we are most bounden) continual thanks; submitting ourselves wholly to his holy will and pleasure, and studying to serve him in true holiness and righteousness all the days of our life. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest say to them that come to receive the holy Communion,'
    },
    {
      type: 'exhortation',
      title: 'The Invitation',
      text: 'YE that do truly and earnestly repent you of your sins, and are in love and charity with your neighbours, and intend to lead a new life, following the commandments of God, and walking from henceforth in his holy ways; Draw near with faith, and take this holy Sacrament to your comfort; and make your humble confession to Almighty God, meekly kneeling upon your knees.'
    },
    {
      type: 'rubric',
      text: 'Then shall this general Confession be made, in the name of all those that are minded to receive the holy Communion, by one of the Ministers; both he and all the people kneeling humbly upon their knees, and saying,'
    },
    {
      type: 'prayer',
      title: 'The General Confession',
      text: 'ALMIGHTY God, Father of our Lord Jesus Christ, Maker of all things, Judge of all men; We acknowledge and bewail our manifold sins and wickedness, Which we, from time to time, most grievously have committed, By thought, word, and deed, Against thy Divine Majesty, Provoking most justly thy wrath and indignation against us. We do earnestly repent, And are heartily sorry for these our misdoings; The remembrance of them is grievous unto us; The burden of them is intolerable. Have mercy upon us, Have mercy upon us, most merciful Father; For thy Son our Lord Jesus Christ\'s sake, Forgive us all that is past; And grant that we may ever hereafter Serve and please thee In newness of life, To the honour and glory of thy Name; Through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest (or the Bishop, being present,) stand up, and turning himself to the people, pronounce this Absolution.'
    },
    {
      type: 'prayer',
      title: 'The Absolution',
      text: 'ALMIGHTY God, our heavenly Father, who of his great mercy hath promised forgiveness of sins to all them that with hearty repentance and true faith turn unto him; Have mercy upon you; pardon and deliver you from all your sins; confirm and strengthen you in all goodness; and bring you to everlasting life; through Jesus Christ our Lord. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest say, Hear what comfortable words our Saviour Christ saith unto all that truly turn to him.'
    },
    {
      type: 'subheading',
      title: 'The Comfortable Words'
    },
    {
      type: 'scripture_sentence',
      text: 'COME unto me all that travail and are heavy laden, and I will refresh you.',
      citation: 'St. Matth. xi. 28.'
    },
    {
      type: 'scripture_sentence',
      text: 'So God loved the world, that he gave his only-begotten Son, to the end that all that believe in him should not perish, but have everlasting life.',
      citation: 'St. John iii. 16.'
    },
    {
      type: 'scripture_sentence',
      speaker: 'Hear also what Saint Paul saith.',
      text: 'This is a true saying, and worthy of all men to be received, That Christ Jesus came into the world to save sinners.',
      citation: '1 Tim. i. 15.'
    },
    {
      type: 'scripture_sentence',
      speaker: 'Hear also what Saint John saith.',
      text: 'If any man sin, we have an Advocate with the Father, Jesus Christ the righteous; and he is the propitiation for our sins.',
      citation: '1 St. John ii. 1.'
    },
    {
      type: 'rubric',
      text: 'After which the Priest shall proceed, saying,'
    },
    {
      type: 'dialogue',
      dialogue: [
        { speaker: 'Priest', text: 'Lift up your hearts.' },
        { speaker: 'Answer', text: 'We lift them up unto the Lord.' },
        { speaker: 'Priest', text: 'Let us give thanks unto our Lord God.' },
        { speaker: 'Answer', text: 'It is meet and right so to do.' }
      ]
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest turn to the Lord\'s Table, and say,'
    },
    {
      type: 'prayer',
      title: 'The Preface',
      text: 'IT is very meet, right, and our bounden duty, that we should at all times, and in all places, give thanks unto thee, O Lord, [*Holy Father,*] Almighty, Everlasting God.\n\n*(These words [Holy Father] must be omitted on Trinity-Sunday.)*'
    },
    {
      type: 'rubric',
      text: 'Here shall follow the Proper Preface, according to the time, if there be any specially appointed: or else immediately shall follow,'
    },
    {
      type: 'canticle',
      title: 'SANCTUS',
      text: 'THEREFORE with Angels and Archangels, and with all the company of heaven, we laud and magnify thy glorious Name; evermore praising thee, and saying, Holy, holy, holy, Lord God of hosts, heaven and earth are full of thy glory: Glory be to thee, O Lord most High. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall the Priest, kneeling down at the Lord\'s Table, say in the name of all them that shall receive the Communion this Prayer following.'
    },
    {
      type: 'prayer',
      title: 'The Prayer of Humble Access',
      text: 'WE do not presume to come to this thy Table, O merciful Lord, trusting in our own righteousness, but in thy manifold and great mercies. We are not worthy so much as to gather up the crumbs under thy Table. But thou art the same Lord, whose property is always to have mercy: Grant us therefore, gracious Lord, so to eat the flesh of thy dear Son Jesus Christ, and to drink his blood, that our sinful bodies may be made clean by his body, and our souls washed through his most precious blood, and that we may evermore dwell in him, and he in us. Amen.'
    },
    {
      type: 'rubric',
      text: 'When the Priest, standing before the Table, hath so ordered the Bread and Wine, that he may with the more readiness and decency break the Bread before the people, and take the Cup into his hands, he shall say the Prayer of Consecration, as followeth.'
    },
    {
      type: 'prayer',
      title: 'The Prayer of Consecration',
      text: 'ALMIGHTY God, our heavenly Father, who of thy tender mercy didst give thine only Son Jesus Christ to suffer death upon the cross for our redemption; who made there (by his one oblation of himself once offered) a full, perfect, and sufficient sacrifice, oblation, and satisfaction, for the sins of the whole world; and did institute, and in his holy Gospel command us to continue, a perpetual memory of that his precious death, until his coming again: Hear us, O merciful Father, we most humbly beseech thee; and grant that we receiving these thy creatures of bread and wine, according to thy Son our Saviour Jesus Christ\'s holy institution, in remembrance of his death and passion, may be partakers of his most blessed Body and Blood: who, in the same night that he was betrayed, took Bread; and, when he had given thanks, he brake it, and gave it to his disciples, saying, Take, eat, this is my Body which is given for you: Do this in remembrance of me. Likewise after supper he took the Cup; and, when he had given thanks, he gave it to them, saying, Drink ye all of this; for this is my Blood of the New Testament, which is shed for you and for many for the remission of sins: Do this, as oft as ye shall drink it, in remembrance of me. Amen.'
    },
    {
      type: 'rubric',
      text: 'Then shall the Minister first receive the Communion in both kinds himself, and then proceed to deliver the same to the Bishops, Priests, and Deacons, in like manner, (if any be present,) and after that to the people also in order, into their hands, all meekly kneeling. And, when he delivereth the Bread to any one, he shall say,'
    },
    {
      type: 'prayer',
      title: 'At the Delivery of the Bread',
      text: 'THE Body of our Lord Jesus Christ, which was given for thee, preserve thy body and soul unto everlasting life. Take and eat this in remembrance that Christ died for thee, and feed on him in thy heart by faith with thanksgiving.'
    },
    {
      type: 'rubric',
      text: 'And the Minister that delivereth the Cup to any one shall say,'
    },
    {
      type: 'prayer',
      title: 'At the Delivery of the Cup',
      text: 'THE Blood of our Lord Jesus Christ, which was shed for thee, preserve thy body and soul unto everlasting life. Drink this in remembrance that Christ\'s Blood was shed for thee, and be thankful.'
    },
    {
      type: 'rubric',
      text: 'When all have communicated, the Minister shall return to the Lord\'s Table, and reverently place upon it what remaineth of the consecrated Elements, covering the same with a fair linen cloth.\n\nThen shall the Priest say the Lord\'s Prayer, the people repeating after him every Petition.'
    },
    {
      type: 'prayer',
      title: 'The Lord\'s Prayer',
      text: 'OUR Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done in earth, As it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive them that trespass against us. And lead us not into temptation; But deliver us from evil: For thine is the kingdom, The power, and the glory, For ever and ever. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Prayer of Oblation',
      text: 'O LORD and heavenly Father, we thy humble servants entirely desire thy fatherly goodness mercifully to accept this our sacrifice of praise and thanksgiving; most humbly beseeching thee to grant, that by the merits and death of thy Son Jesus Christ, and through faith in his blood, we and all thy whole Church may obtain remission of our sins, and all other benefits of his passion. And here we offer and present unto thee, O Lord, ourselves, our souls and bodies, to be a reasonable, holy, and lively sacrifice unto thee; humbly beseeching thee, that all we, who are partakers of this holy Communion, may be fulfilled with thy grace and heavenly benediction. And although we be unworthy, through our manifold sins, to offer unto thee any sacrifice, yet we beseech thee to accept this our bounden duty and service; not weighing our merits, but pardoning our offences, through Jesus Christ our Lord; by whom, and with whom, in the unity of the Holy Ghost, all honour and glory be unto thee, O Father Almighty, world without end. Amen.'
    },
    {
      type: 'prayer',
      title: 'Or This (Prayer of Thanksgiving)',
      text: 'ALMIGHTY and everliving God, we most heartily thank thee, for that thou dost vouchsafe to feed us, who have duly received these holy mysteries, with the spiritual food of the most precious Body and Blood of thy Son our Saviour Jesus Christ; and dost assure us thereby of thy favour and goodness towards us; and that we are very members incorporate in the mystical body of thy Son, which is the blessed company of all faithful people; and are also heirs through hope of thy everlasting kingdom, by the merits of the most precious death and passion of thy dear Son. And we most humbly beseech thee, O heavenly Father, so to assist us with thy grace, that we may continue in that holy fellowship, and do all such good works as thou hast prepared for us to walk in; through Jesus Christ our Lord, to whom, with thee and the Holy Ghost, be all honour and glory, world without end. Amen.'
    },
    {
      type: 'canticle',
      title: 'GLORIA IN EXCELSIS',
      text: 'GLORY be to God on high, and in earth peace, good will towards men. We praise thee, we bless thee, we worship thee, we glorify thee, we give thanks to thee for thy great glory, O Lord God, heavenly King, God the Father Almighty.\n\nO Lord, the only-begotten Son Jesu Christ; O Lord God, Lamb of God, Son of the Father, that takest away the sins of the world, have mercy upon us. Thou that takest away the sins of the world, have mercy upon us. Thou that takest away the sins of the world, receive our prayer. Thou that sittest at the right hand of God the Father, have mercy upon us.\n\nFor thou only art holy; thou only art the Lord; thou only, O Christ, with the Holy Ghost, art most high in the glory of God the Father. Amen.'
    },
    {
      type: 'prayer',
      title: 'The Blessing',
      text: 'THE peace of God, which passeth all understanding, keep your hearts and minds in the knowledge and love of God, and of his Son Jesus Christ our Lord: and the blessing of God Almighty, the Father, the Son, and the Holy Ghost, be amongst you and remain with you always. Amen.'
    }
  ]
};
