import json, re

with open('collects1662_pages.json') as f:
    pages = json.load(f)

# Page 1 is metadata, pages 2..109 are propers
cleaned_pages = []
for idx, p in enumerate(pages[1:], 2):
    t = p['text']
    t = t.replace('ſ', 's').replace('\ue000', 'ct').replace('\ue001', 'st').replace('\ue002', 'st')
    lines = t.split('\n')
    if idx > 2:
        # First line is running header in Baskerville edition
        lines = lines[1:]
    cleaned_pages.append('\n'.join(lines))

raw_full = '\n'.join(cleaned_pages)
raw_full = re.sub(r'[ \t]+', ' ', raw_full)
raw_full = raw_full.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"')

# Fix hyphenated line breaks
raw_full = re.sub(r'([a-zA-Z]+)-\s*\n\s*([a-zA-Z]+)', r'\1\2', raw_full)

# Fix spaced out words in headings and texts
spaced_replacements = [
    (r'\bA\s+D\s+V\s+E\s+N\s+T\b', 'ADVENT'),
    (r'\bC\s+H\s+R\s+I\s+S\s+T\s+M\s+A\s+S\b', 'CHRISTMAS'),
    (r'\bC\s+I\s+R\s+C\s+U\s+M\s+C\s+I\s+S\s+I\s+O\s+N\b', 'CIRCUMCISION'),
    (r'\bE\s+P\s+I\s+P\s+H\s+A\s+N\s+Y\b', 'EPIPHANY'),
    (r'\bS\s+E\s+P\s+T\s+U\s+A\s+G\s+E\s+S\s+I\s+M\s+A\b', 'SEPTUAGESIMA'),
    (r'\bS\s+E\s+X\s+A\s+G\s+E\s+S\s+I\s+M\s+A\b', 'SEXAGESIMA'),
    (r'\bQ\s+U\s+I\s+N\s+Q\s+U\s+A\s+G\s+E\s+S\s+I\s+M\s+A\b', 'QUINQUAGESIMA'),
    (r'\bL\s+E\s+N\s+T\b', 'LENT'),
    (r'\bE\s+A\s+S\s+T\s+E\s+R\b', 'EASTER'),
    (r'\bA\s+S\s+C\s+E\s+N\s+S\s+I\s+O\s+N\b', 'ASCENSION'),
    (r'\bW\s+H\s+I\s+T\s+S\s+U\s+N\b', 'WHITSUN'),
    (r'\bT\s+R\s+I\s+N\s+I\s+T\s+Y\b', 'TRINITY'),
    (r'\bA\s+C\s+T\s+S\b', 'ACTS'),
    (r'\bR\s+O\s+M\b', 'ROM'),
    (r'\bC\s+O\s+R\b', 'COR'),
    (r'\bG\s+A\s+L\b', 'GAL'),
    (r'\bE\s+P\s+H\s+E\s+S\b', 'EPHES'),
    (r'\bP\s+H\s+I\s+L\b', 'PHIL'),
    (r'\bC\s+O\s+L\b', 'COL'),
    (r'\bT\s+H\s+E\s+S\s+S\b', 'THESS'),
    (r'\bT\s+I\s+M\b', 'TIM'),
    (r'\bH\s+E\s+B\b', 'HEB'),
    (r'\bP\s+E\s+T\b', 'PET'),
    (r'\bJ\s+O\s+H\s+N\b', 'JOHN'),
    (r'\bJ\s+A\s+M\s+E\s+S\b', 'JAMES'),
    (r'\bJ\s+U\s+D\s+E\b', 'JUDE'),
    (r'\bR\s+E\s+V\b', 'REV'),
    (r'\bM\s+A\s+T\s+T\s+H\b', 'MATTH'),
    (r'\bM\s+A\s+R\s+K\b', 'MARK'),
    (r'\bL\s+U\s+K\s+E\b', 'LUKE'),
    (r'\bJ\s+E\s+R\b', 'JER'),
    (r'\bI\s+S\s+A\s+I\b', 'ISAI'),
    (r'\bJ\s+O\s+E\s+L\b', 'JOEL'),
    (r'\bM\s+A\s+L\b', 'MAL'),
    (r'\bJ\s+E\s+S\s+U\s+S\b', 'JESUS'),
    (r'\bC\s+H\s+R\s+I\s+S\s+T\b', 'CHRIST'),
    (r'\bC\s+H\s+R\s+I\s+S\s+T\s+M\s+A\s+S\s+-\s+D\s+A\s+Y\b', 'CHRISTMAS-DAY'),
    (r'\bS\s+T\s+E\s+P\s+H\s+E\s+N\b', 'STEPHEN'),
    (r'\bI\s+N\s+N\s+O\s+C\s+E\s+N\s+T\s+S\b', 'INNOCENTS'),
    (r'\bB\s+A\s+R\s+N\s+A\s+B\s+A\s+S\b', 'BARNABAS'),
    (r'\bB\s+A\s+R\s+T\s+H\s+O\s+L\s+O\s+M\s+E\s+W\b', 'BARTHOLOMEW'),
    (r'\bM\s+I\s+C\s+H\s+A\s+E\s+L\b', 'MICHAEL'),
    (r'\bS\s+I\s+M\s+O\s+N\b', 'SIMON'),
]
for pat, rep in spaced_replacements:
    raw_full = re.sub(pat, rep, raw_full)

# Fix missing initial drop-cap letters
dropcap_fixes = [
    (r'\bL M I G H T Y\b', 'ALMIGHTY'),
    (r'\bB L E S S E D\b', 'BLESSED'),
    (r'\bL E S S E D\b', 'BLESSED'),
    (r'\bW E no man\b', 'OWE no man'),
    (r'\bW H E N\b', 'WHEN'),
    (r'\bH E N\b', 'WHEN'),
    (r'\bN D there shall be\b', 'AND there shall be'),
    (r'\bN D\b', 'AND'),
    (r'\bL E T\b', 'LET'),
    (r'\bE T a man\b', 'LET a man'),
    (r'\bN O W\b', 'NOW'),
    (r'\bO W\b', 'NOW'),
    (r'\bR E J O I C E\b', 'REJOICE'),
    (r'\bE J O I C E\b', 'REJOICE'),
    (r'\bT H I S\b', 'THIS'),
    (r'\bH I S\b', 'THIS'),
    (r'\bO D , who\b', 'GOD, who'),
    (r'\bO D\b', 'GOD'),
    (r'\bG R A N T\b', 'GRANT'),
    (r'\bR A N T\b', 'GRANT'),
    (r'\bM E R C I F U L\b', 'MERCIFUL'),
    (r'\bE R C I F U L\b', 'MERCIFUL'),
    (r'\bT H A T\b', 'THAT'),
    (r'\bH A T\b', 'THAT'),
    (r'\bJ E S U S\b', 'JESUS'),
    (r'\bE S U S\b', 'JESUS'),
    (r'\bI L O O K E D\b', 'I LOOKED'),
    (r'\bO O K E D\b', 'I LOOKED'),
    (r'\bB E S E E C H\b', 'BESEECH'),
    (r'\bE S E E C H\b', 'BESEECH'),
    (r'\bI S P E A K\b', 'I SPEAK'),
    (r'\bP E A K\b', 'I SPEAK'),
    (r'\bT U R N\b', 'TURN'),
    (r'\bE V E R Y\b', 'EVERY'),
    (r'\bP U T\b', 'PUT'),
    (r'\bB E H O L D\b', 'BEHOLD'),
    (r'\bE H O L D\b', 'BEHOLD'),
    (r'\bS E E I N G\b', 'SEEING'),
    (r'\bV E R I L Y\b', 'VERILY'),
    (r'\bE R I L Y\b', 'VERILY'),
    (r'\bM A R V E L\b', 'MARVEL'),
    (r'\bA R V E L\b', 'MARVEL'),
    (r'\bA F T E R\b', 'AFTER'),
    (r'\bF T E R\b', 'AFTER'),
    (r'\bK N O W\b', 'KNOW'),
    (r'\bB E L O V E D\b', 'BELOVED'),
    (r'\bE L O V E D\b', 'BELOVED'),
    (r'\bA B O U T\b', 'ABOUT'),
    (r'\bB O U T\b', 'ABOUT'),
    (r'\bS T I R\b', 'STIR'),
    (r'\bA L L\b', 'ALL'),
    (r'\bW H O\b', 'WHO'),
    (r'\bT H E R E F O R E\b', 'THEREFORE'),
    (r'\bW A T C H\b', 'WATCH'),
    (r'\bH E A R\b', 'HEAR'),
    (r'\bT E L L\b', 'TELL'),
    (r'\bE L L me\b', 'TELL me'),
    (r'\bH A V I N G\b', 'HAVING'),
    (r'\bA V I N G\b', 'HAVING'),
    (r'\bK E E P\b', 'KEEP'),
    (r'\bE E P\b', 'KEEP'),
    (r'\bB E W A R E\b', 'BEWARE'),
    (r'\bE W A R E\b', 'BEWARE'),
    (r'\bP E T E R\b', 'PETER'),
    (r'\bE T E R\b', 'PETER'),
    (r'\bS E E\b', 'SEE'),
    (r'\bS T E P H E N\b', 'STEPHEN'),
    (r'\bT I D I N G S\b', 'TIDINGS'),
    (r'\bC O M F O R T\b', 'COMFORT'),
    (r'\bM O R E O V E R\b', 'MOREOVER'),
]
for pat, rep in dropcap_fixes:
    raw_full = re.sub(pat, rep, raw_full)

print("Preprocessed 1662 text length:", len(raw_full))
