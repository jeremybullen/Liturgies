import json, re

with open('collects1662_pages.json') as f:
    pages = json.load(f)

# Running header pattern
RH_PATTERN = re.compile(
    r'^(?:'
    r'T\s*H\s*E\s+C\s*O\s*L\s*L\s*E\s*C\s*T\s*S.*|'
    r'The\s+(?:First|Second|Third|Fourth|Fifth|Sixth|Seventh|Eighth|Ninth|Tenth|Eleventh|Twelfth|Thirteenth|Fourteenth|Fifteenth|Sixteenth|Seventeenth|Eighteenth|Nineteenth|Ninteenth|Twentieth|Twenty-[a-z]+|fir[st]+|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth|thirteenth|fourteenth|fifteenth|sixteenth|seventeenth|eighteenth|nineteenth|twentieth|next)\s+Sunday(?:\s+(?:in|after|before)\s+.*)?|'
    r'The\s+Sunday\s+next\s+before\s+.*|'
    r'Sunday\s+after\s+A\s*S\s*C\s*E\s*N\s*S\s*I\s*O\s*N.*|'
    r'The\s+First\s+Day\s+of\s+L\s*E\s*N\s*T.*|'
    r'(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\s+(?:before|in)\s+.*|'
    r'G\s*O\s*O\s*D\s*-\s*F\s*R\s*I\s*D\s*A\s*Y.*|'
    r'E\s*A\s*S\s*T\s*E\s*R\s*-\s*E\s*V\s*E\s*N.*|'
    r'E\s*A\s*S\s*T\s*E\s*R\s*-\s*D\s*A\s*Y.*|'
    r'The\s+A\s*S\s*C\s*E\s*N\s*S\s*I\s*O\s*N.*|'
    r'W\s*H\s*I\s*T\s*-\s*S\s*U\s*N\s*D\s*A\s*Y.*|'
    r'T\s*R\s*I\s*N\s*I\s*T\s*Y.*|'
    r'S\s*E\s*P\s*T\s*U\s*A\s*G\s*E\s*S\s*I\s*M\s*A.*|'
    r'S\s*E\s*X\s*A\s*G\s*E\s*S\s*I\s*M\s*A.*|'
    r'Q\s*U\s*I\s*N\s*Q\s*U\s*A\s*G\s*E\s*S\s*I\s*M\s*A.*|'
    r'C\s*H\s*R\s*I\s*S\s*T\s*M\s*A\s*S.*|'
    r'The\s+(?:Sunday\s+after\s+)?C\s*H\s*R\s*I\s*S\s*T\s*M\s*A\s*S.*|'
    r'The\s+C\s*I\s*R\s*C\s*U\s*M\s*C\s*I\s*S\s*I\s*O\s*N\s+of\s+Christ.*|'
    r'The\s+E\s*P\s*I\s*P\s*H\s*A\s*N\s*Y.*|'
    r'St\.\s*S\s*T\s*E\s*P\s*H\s*E\s*N.*|'
    r'St\.\s*J\s*O\s*H\s*N.*|'
    r'The\s+I\s*N\s*N\s*O\s*C\s*E\s*N\s*T\s*S.*|'
    r'St\.\s*.*(?:Day|Apostle|Evangelist|Angels|Paul|J\s*U\s*D\s*E).*|'
    r'The\s+(?:Conversion|Purification|Annunciation|Presentation)\s+of.*|'
    r'All\s+Saints\s+Day.*'
    r')[\.\s]*$',
    re.I
)

def is_sig_or_catchword(line):
    s = line.strip()
    if len(s) == 0:
        return False
    if len(s) <= 4 and s.isupper() and not any(ch in s for ch in '.,:;!?()[]"'):
        return True
    return False

def is_real_service_heading(lines, i):
    line = lines[i].strip()
    next_line = lines[i+1].strip() if i+1 < len(lines) else ''
    if 'The Collect' in line or 'The Collects' in line:
        return True
    if 'The Collect' in next_line or 'The Collects' in next_line:
        if any(w in next_line for w in ['Sunday', 'Day', 'Purification', 'Annunciation', 'Conversion']):
            return False
        return True
    if re.match(r'^(?:Monday|Tuesday|Wednesday|Thursday)\s+before\s+Easter', line, re.I):
        if 'Epistle' in next_line:
            return True
    if re.match(r'^E\s*A\s*S\s*T\s*E\s*R\s*-\s*D\s*A\s*Y', line, re.I):
        if 'Morning Prayer' in next_line or 'Psalm' in next_line:
            return True
    return False

def clean_page(p_num, raw_text):
    t = raw_text.replace('ſ', 's').replace('\ue000', 'ct').replace('\ue001', 'st').replace('\ue002', 'st')
    t = t.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"')
    lines = t.split('\n')
    to_drop = set()

    # 1. Page > 2: Line 0 is top running header
    if p_num > 2:
        to_drop.add(0)

    # 2. Find Column 2 running header (between index 18 and 42)
    for i in range(18, min(42, len(lines))):
        s = re.sub(r'\s+', ' ', lines[i]).strip()
        if RH_PATTERN.match(s):
            if is_real_service_heading(lines, i):
                continue
            to_drop.add(i)
            # Drop signatures/catchwords immediately preceding this running header
            for b in range(1, 4):
                prev_i = i - b
                if prev_i >= 0 and is_sig_or_catchword(lines[prev_i]):
                    to_drop.add(prev_i)
                else:
                    break
            break

    # 3. Drop signatures/catchwords at bottom of page
    for b in range(len(lines) - 1, max(0, len(lines) - 4), -1):
        if is_sig_or_catchword(lines[b]):
            to_drop.add(b)
        else:
            break

    kept = [l for i, l in enumerate(lines) if i not in to_drop]
    return '\n'.join(kept)

cleaned_pages = [clean_page(idx, pages[idx-1]['text']) for idx in range(2, 110)]
full_doc = '\n'.join(cleaned_pages)

compound_exceptions = {'Holy-day', 'like-minded', 'first-fruits', 'first-born', 'water-pots', 'money-changers', 'peace-makers', 'self-same', 'Foot-stool', 'foot-stool'}
def dehyphen(match):
    combined = match.group(1) + '-' + match.group(2)
    if combined in compound_exceptions or combined.lower() in {c.lower() for c in compound_exceptions}:
        return combined
    return match.group(1) + match.group(2)

doc = re.sub(r'([a-zA-Z]+)-\s*\n\s*([a-zA-Z]+)', dehyphen, full_doc)

# Typographical ligature fixes for Baskerville 'ct' mismapped to 'st'
ligature_fixes = [
    (r'\baffestion\b', 'affection'),
    (r'\baffestioned\b', 'affectioned'),
    (r'\baffestions\b', 'affections'),
    (r'\bafflistion\b', 'affliction'),
    (r'\bafflistions\b', 'afflictions'),
    (r'\bafflisted\b', 'afflicted'),
    (r'\bdostors\b', 'doctors'),
    (r'\bdostrine\b', 'doctrine'),
    (r'\beffest\b', 'effect'),
    (r'\beffestual\b', 'effectual'),
    (r'\beffestually\b', 'effectually'),
    (r'\belest\b', 'elect'),
    (r'\bexpesting\b', 'expecting'),
    (r'\binsurrestion\b', 'insurrection'),
    (r'\bjurisdistion\b', 'jurisdiction'),
    (r'\bperfest\b', 'perfect'),
    (r'\bperfested\b', 'perfected'),
    (r'\bperfesting\b', 'perfecting'),
    (r'\bperfestion\b', 'perfection'),
    (r'\bperfestly\b', 'perfectly'),
    (r'\bperfestness\b', 'perfectness'),
    (r'\bprotestion\b', 'protection'),
    (r'\bprotestor\b', 'protector'),
    (r'\bresurrestion\b', 'resurrection'),
    (r'\bsatisfastion\b', 'satisfaction'),
    (r'\bsubjest\b', 'subject'),
    (r'\bsubjested\b', 'subjected'),
    (r'\bsubjestion\b', 'subjection'),
    (r'\bdirest\b', 'direct'),
    (r'\bdirestion\b', 'direction'),
    (r'\bsanstified\b', 'sanctified'),
    (r'\bsanstuary\b', 'sanctuary'),
    (r'\binstrusted\b', 'instructed'),
]

for pat, rep in ligature_fixes:
    doc = re.sub(pat, rep, doc, flags=re.I)

DAYS_CONFIG = [
    # Advent
    ("The First Sunday in Advent", "first-sunday-in-advent", "1st Sunday in Advent", "Advent Season", "", r'The\s+first\s+Sunday\s+in\s+Advent\s*\.\s*The\s+Collect'),
    ("The Second Sunday in Advent", "second-sunday-in-advent", "2nd Sunday in Advent", "Advent Season", "", r'The\s+second\s+Sunday\s+in\s+Advent\s*\.\s*The\s+Collect'),
    ("The Third Sunday in Advent", "third-sunday-in-advent", "3rd Sunday in Advent", "Advent Season", "", r'The\s+third\s+Sunday\s+in\s+Advent\s*\.\s*The\s+Collect'),
    ("The Fourth Sunday in Advent", "fourth-sunday-in-advent", "4th Sunday in Advent", "Advent Season", "", r'The\s+fourth\s+Sunday\s+in\s+Advent\s*\.\s*The\s+Collect'),
    # Christmas
    ("The Nativity of our Lord, or the Birth-Day of Christ, commonly called Christmas-Day", "christmas-day", "Christmas Day", "Christmastide", "Dec 25", r'The\s+Nativity\s+of\s+our\s+Lord.*?The\s+Collect'),
    ("Saint Stephen's Day", "saint-stephen", "St. Stephen", "Christmastide", "Dec 26", r'Saint\s+Stephen\'s\s+Day\s*\.\s*The\s+Collect'),
    ("Saint John the Evangelist's Day", "saint-john-evangelist", "St. John Evangelist", "Christmastide", "Dec 27", r'Saint\s+John\s+the\s+Evangelist\'s\s+Day\s*\.\s*The\s+Collect'),
    ("The Innocents' Day", "the-innocents-day", "The Innocents' Day", "Christmastide", "Dec 28", r'The\s+Innocents\s+Day\s*\.\s*The\s+Collect'),
    ("The Sunday after Christmas-Day", "sunday-after-christmas", "Sunday after Christmas", "Christmastide", "", r'The\s+Sunday\s+after\s+Christmas-Day\s*\.\s*The\s+Collect'),
    ("The Circumcision of Christ", "circumcision-of-christ", "Circumcision of Christ", "Christmastide", "Jan 1", r'The\s+Circumcision\s+of\s+Christ\s*\.\s*The\s+Collect'),
    # Epiphany
    ("The Epiphany, or the Manifestation of Christ to the Gentiles", "the-epiphany", "The Epiphany", "Epiphany Season", "Jan 6", r'The\s+E\s*P\s*I\s*P\s*H\s*A\s*N\s*Y\s*,\s*or\s+the\s+Manifestation\s+of\s+Christ.*?The\s+Collect'),
    ("The First Sunday after the Epiphany", "first-sunday-after-epiphany", "1st Sun after Epiphany", "Epiphany Season", "", r'The\s+first\s+Sunday\s+after\s+the\s+Epiphany\s*\.\s*The\s+Collect'),
    ("The Second Sunday after the Epiphany", "second-sunday-after-epiphany", "2nd Sun after Epiphany", "Epiphany Season", "", r'The\s+second\s+Sunday\s+after\s+the\s+Epiphany\s*\.\s*The\s+Collect'),
    ("The Third Sunday after the Epiphany", "third-sunday-after-epiphany", "3rd Sun after Epiphany", "Epiphany Season", "", r'The\s+third\s+Sunday\s+after\s+the\s+Epiphany\s*\.\s*The\s+Collect'),
    ("The Fourth Sunday after the Epiphany", "fourth-sunday-after-epiphany", "4th Sun after Epiphany", "Epiphany Season", "", r'The\s+fourth\s+Sunday\s+after\s+the\s+Epiphany\s*\.\s*The\s+Collect'),
    ("The Fifth Sunday after the Epiphany", "fifth-sunday-after-epiphany", "5th Sun after Epiphany", "Epiphany Season", "", r'The\s+fifth\s+Sunday\s+after\s+the\s+Epiphany\s*\.\s*The\s+Collect'),
    ("The Sixth Sunday after the Epiphany", "sixth-sunday-after-epiphany", "6th Sun after Epiphany", "Epiphany Season", "", r'The\s+sixth\s+Sunday\s+after\s+the\s+Epiphany\s*\.\s*The\s+Collect'),
    # Pre-Lent
    ("The Sunday called Septuagesima, or the third Sunday before Lent", "septuagesima", "Septuagesima", "Pre-Lenten Season", "", r'The\s+Sunday\s+called\s+Septuagesima.*?The\s+Collect'),
    ("The Sunday called Sexagesima, or the second Sunday before Lent", "sexagesima", "Sexagesima", "Pre-Lenten Season", "", r'The\s+Sunday\s+called\s+Sexagesima.*?The\s+Collect'),
    ("The Sunday called Quinquagesima, or the next Sunday before Lent", "quinquagesima", "Quinquagesima", "Pre-Lenten Season", "", r'The\s+Sunday\s+called\s+Quinquagesima.*?The\s+Collect'),
    # Lent
    ("The First Day of Lent, commonly called Ash-Wednesday", "ash-wednesday", "Ash Wednesday", "Lenten Season", "", r'The\s+first\s+Day\s+of\s+Lent\s+commonly\s+called\s+Ash.*?The\s+Collect'),
    ("The First Sunday in Lent", "first-sunday-in-lent", "1st Sunday in Lent", "Lenten Season", "", r'The\s+first\s+Sunday\s+in\s+Lent\s*\.\s*The\s+Collect'),
    ("The Second Sunday in Lent", "second-sunday-in-lent", "2nd Sunday in Lent", "Lenten Season", "", r'The\s+second\s+Sunday\s+in\s+Lent\s*\.\s*The\s+Collect'),
    ("The Third Sunday in Lent", "third-sunday-in-lent", "3rd Sunday in Lent", "Lenten Season", "", r'The\s+third\s+Sunday\s+in\s+Lent\s*\.\s*The\s+Collect'),
    ("The Fourth Sunday in Lent", "fourth-sunday-in-lent", "4th Sunday in Lent", "Lenten Season", "", r'The\s+fourth\s+Sunday\s+in\s+Lent\s*\.\s*The\s+Collect'),
    ("The Fifth Sunday in Lent", "fifth-sunday-in-lent", "5th Sunday in Lent", "Lenten Season", "", r'The\s+fifth\s+Sunday\s+in\s+Lent\s*\.\s*The\s+Collect'),
    # Holy Week
    ("The Sunday next before Easter", "sunday-next-before-easter", "Sunday before Easter", "Passiontide & Holy Week", "", r'The\s+Sunday\s+next\s+before\s+Easter\s*\.\s*The\s+Collect'),
    ("Monday before Easter", "monday-before-easter", "Monday before Easter", "Passiontide & Holy Week", "", r'Monday\s+before\s+Easter\s*\.\s*(?:For\s+the\s+Epistle|\n)'),
    ("Tuesday before Easter", "tuesday-before-easter", "Tuesday before Easter", "Passiontide & Holy Week", "", r'Tuesday\s+before\s+Easter\s*\.\s*(?:For\s+the\s+Epistle|\n)'),
    ("Wednesday before Easter", "wednesday-before-easter", "Wednesday before Easter", "Passiontide & Holy Week", "", r'Wednesday\s+before\s+Easter\s*\.\s*(?:The\s+Epistle|\n)'),
    ("Thursday before Easter", "thursday-before-easter", "Thursday before Easter", "Passiontide & Holy Week", "", r'Thursday\s+before\s+Easter\s*\.\s*(?:The\s+Epistle|\n)'),
    ("Good Friday", "good-friday", "Good Friday", "Passiontide & Holy Week", "", r'Good\s+Friday\s*\.\s*The\s+Collects'),
    ("Easter Even", "easter-even", "Easter Even", "Passiontide & Holy Week", "", r'Easter\s+Even\s*\.\s*The\s+Collect'),
    # Eastertide
    ("Easter-Day", "easter-day", "Easter Day", "Eastertide", "", r'E\s*A\s*S\s*T\s*E\s*R\s*-\s*D\s*A\s*Y\s*\.'),
    ("Monday in Easter-Week", "monday-in-easter-week", "Easter Monday", "Eastertide", "", r'Monday\s+in\s+Easter\s+Week\s*\.\s*The\s+Collect'),
    ("Tuesday in Easter-Week", "tuesday-in-easter-week", "Easter Tuesday", "Eastertide", "", r'Tuesday\s+in\s+Easter\s+Week\s*\.\s*The\s+Collect'),
    ("The First Sunday after Easter", "first-sunday-after-easter", "1st Sun after Easter", "Eastertide", "", r'The\s+first\s+Sunday\s+after\s+Easter\s*\.\s*The\s+Collect'),
    ("The Second Sunday after Easter", "second-sunday-after-easter", "2nd Sun after Easter", "Eastertide", "", r'The\s+second\s+Sunday\s+after\s+Easter\s*\.\s*The\s+Collect'),
    ("The Third Sunday after Easter", "third-sunday-after-easter", "3rd Sun after Easter", "Eastertide", "", r'The\s+third\s+Sunday\s+after\s+Easter\s*\.\s*The\s+Collect'),
    ("The Fourth Sunday after Easter", "fourth-sunday-after-easter", "4th Sun after Easter", "Eastertide", "", r'The\s+fourth\s+Sunday\s+after\s+Easter\s*\.\s*The\s+Collect'),
    ("The Fifth Sunday after Easter", "fifth-sunday-after-easter", "5th Sun after Easter", "Eastertide", "", r'The\s+fifth\s+Sunday\s+after\s+Easter\s*\.\s*The\s+Collect'),
    # Ascension
    ("The Ascension-day", "ascension-day", "Ascension Day", "Ascensiontide", "", r'The\s+Ascension-day\s*\.\s*The\s+Collect'),
    ("Sunday after Ascension-Day", "sunday-after-ascension-day", "Sunday after Ascension", "Ascensiontide", "", r'Sunday\s+after\s+Ascension-Day\s*\.\s*The\s+Collect'),
    # Whitsuntide
    ("Whit-Sunday", "whit-sunday", "Whit-Sunday", "Whitsuntide", "", r'W\s*H\s*I\s*T\s*-\s*S\s*U\s*N\s*D\s*A\s*Y\s*\.\s*The\s+Collect'),
    ("Monday in Whitsun-Week", "monday-in-whitsun-week", "Whitsun Monday", "Whitsuntide", "", r'Monday\s+in\s+Whitsun-week\s*\.\s*The\s+Collect'),
    ("Tuesday in Whitsun-Week", "tuesday-in-whitsun-week", "Whitsun Tuesday", "Whitsuntide", "", r'Tuesday\s+in\s+Whitsun\s+Week\s*\.\s*The\s+Collect'),
    # Trinity Season
    ("Trinity-Sunday", "trinity-sunday", "Trinity Sunday", "Trinity Season", "", r'T\s*R\s*I\s*N\s*I\s*T\s*Y\s*-\s*S\s*U\s*N\s*D\s*A\s*Y\s*\.\s*The\s+Collect'),
    ("The First Sunday after Trinity", "first-sunday-after-trinity", "1st Sun after Trinity", "Trinity Season", "", r'The\s+first\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Second Sunday after Trinity", "second-sunday-after-trinity", "2nd Sun after Trinity", "Trinity Season", "", r'The\s+second\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Third Sunday after Trinity", "third-sunday-after-trinity", "3rd Sun after Trinity", "Trinity Season", "", r'The\s+third\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Fourth Sunday after Trinity", "fourth-sunday-after-trinity", "4th Sun after Trinity", "Trinity Season", "", r'The\s+fourth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Fifth Sunday after Trinity", "fifth-sunday-after-trinity", "5th Sun after Trinity", "Trinity Season", "", r'The\s+fifth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Sixth Sunday after Trinity", "sixth-sunday-after-trinity", "6th Sun after Trinity", "Trinity Season", "", r'The\s+sixth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Seventh Sunday after Trinity", "seventh-sunday-after-trinity", "7th Sun after Trinity", "Trinity Season", "", r'The\s+seventh\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Eighth Sunday after Trinity", "eighth-sunday-after-trinity", "8th Sun after Trinity", "Trinity Season", "", r'The\s+eighth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Ninth Sunday after Trinity", "ninth-sunday-after-trinity", "9th Sun after Trinity", "Trinity Season", "", r'The\s+ninth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Tenth Sunday after Trinity", "tenth-sunday-after-trinity", "10th Sun after Trinity", "Trinity Season", "", r'The\s+tenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Eleventh Sunday after Trinity", "eleventh-sunday-after-trinity", "11th Sun after Trinity", "Trinity Season", "", r'The\s+eleventh\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Twelfth Sunday after Trinity", "twelfth-sunday-after-trinity", "12th Sun after Trinity", "Trinity Season", "", r'The\s+twelfth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Thirteenth Sunday after Trinity", "thirteenth-sunday-after-trinity", "13th Sun after Trinity", "Trinity Season", "", r'The\s+thirteenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Fourteenth Sunday after Trinity", "fourteenth-sunday-after-trinity", "14th Sun after Trinity", "Trinity Season", "", r'The\s+fourteenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Fifteenth Sunday after Trinity", "fifteenth-sunday-after-trinity", "15th Sun after Trinity", "Trinity Season", "", r'The\s+fifteenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Sixteenth Sunday after Trinity", "sixteenth-sunday-after-trinity", "16th Sun after Trinity", "Trinity Season", "", r'The\s+sixteenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Seventeenth Sunday after Trinity", "seventeenth-sunday-after-trinity", "17th Sun after Trinity", "Trinity Season", "", r'The\s+seventeenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Eighteenth Sunday after Trinity", "eighteenth-sunday-after-trinity", "18th Sun after Trinity", "Trinity Season", "", r'The\s+eighteenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Nineteenth Sunday after Trinity", "nineteenth-sunday-after-trinity", "19th Sun after Trinity", "Trinity Season", "", r'The\s+nineteenth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Twentieth Sunday after Trinity", "twentieth-sunday-after-trinity", "20th Sun after Trinity", "Trinity Season", "", r'The\s+twentieth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Twenty-first Sunday after Trinity", "twenty-first-sunday-after-trinity", "21st Sun after Trinity", "Trinity Season", "", r'The\s+twenty-first\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Twenty-second Sunday after Trinity", "twenty-second-sunday-after-trinity", "22nd Sun after Trinity", "Trinity Season", "", r'The\s+twenty-second\s+Sunday\s+after\s+Trinity\s*\.\s*(?:The\s+Collect|\n)'),
    ("The Twenty-third Sunday after Trinity", "twenty-third-sunday-after-trinity", "23rd Sun after Trinity", "Trinity Season", "", r'The\s+twenty-third\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    ("The Twenty-fourth Sunday after Trinity", "twenty-fourth-sunday-after-trinity", "24th Sun after Trinity", "Trinity Season", "", r'The\s+twenty-fourth\s+Sunday\s+after\s+Trinity\s*\.\s*(?:The\s+Collect|\n)'),
    ("The Twenty-fifth Sunday after Trinity", "twenty-fifth-sunday-after-trinity", "25th Sun after Trinity", "Trinity Season", "", r'The\s+Twenty-Fifth\s+Sunday\s+after\s+Trinity\s*\.\s*The\s+Collect'),
    # Holy Days
    ("Saint Andrew's Day", "saint-andrews-day", "St. Andrew", "Holy Days", "Nov 30", r'St\.\s*Andrew\'s\s+Day\s*\.\s*The\s+Collect'),
    ("Saint Thomas the Apostle", "saint-thomas-the-apostle", "St. Thomas", "Holy Days", "Dec 21", r'St\.\s*Thomas\s+the\s+Apostle\s*\.\s*The\s+Collect'),
    ("The Conversion of Saint Paul", "conversion-of-saint-paul", "Conversion of St. Paul", "Holy Days", "Jan 25", r'The\s+Conversion\s+of\s+St\.\s*Paul\s*\.\s*The\s+Collect'),
    ("The Presentation of Christ in the Temple, commonly called The Purification of Saint Mary the Virgin", "purification-of-saint-mary", "Purification of St. Mary", "Holy Days", "Feb 2", r'The\s+Presentation\s+of\s+C\s*H\s*R\s*I\s*S\s*T.*?The\s+Collect'),
    ("Saint Matthias's Day", "saint-matthiass-day", "St. Matthias", "Holy Days", "Feb 24", r'St\.\s*Matthias\'s\s+Day\s*\.\s*The\s+Collect'),
    ("The Annunciation of the blessed Virgin Mary", "annunciation-of-the-virgin-mary", "Annunciation of BVM", "Holy Days", "Mar 25", r'The\s+Annunciation\s+of\s+the\s+Blessed\s+Virgin\s+Mary\s*\.\s*The\s+Collect'),
    ("Saint Mark's Day", "saint-marks-day", "St. Mark", "Holy Days", "Apr 25", r'St\.\s*Mark\'s\s+Day\s*\.\s*The\s+Collect'),
    ("Saint Philip and Saint James's Day", "saint-philip-and-saint-jamess-day", "SS. Philip & James", "Holy Days", "May 1", r'St\.\s*Philip\s+and\s+St\.\s*James\'s\s+Day\s*\.\s*The\s+Collect'),
    ("Saint Barnabas the Apostle", "saint-barnabas-the-apostle", "St. Barnabas", "Holy Days", "Jun 11", r'St\.\s*Barnabas\s+the\s+Apostle\s*\.\s*The\s+Collect'),
    ("Saint John Baptist's Day", "saint-john-baptists-day", "St. John Baptist", "Holy Days", "Jun 24", r'St\.\s*John\s+Baptist\'s\s+Day\s*\.\s*The\s+Collect'),
    ("Saint Peter's Day", "saint-peters-day", "St. Peter", "Holy Days", "Jun 29", r'St\.\s*Peter\'s\s+Day\s*\.\s*The\s+Collect'),
    ("Saint James the Apostle", "saint-james-the-apostle", "St. James", "Holy Days", "Jul 25", r'St\.\s*James\s+the\s+Apostle\s*\.\s*The\s+Collect'),
    ("Saint Bartholomew the Apostle", "saint-bartholomew-the-apostle", "St. Bartholomew", "Holy Days", "Aug 24", r'St\.\s*Bartholomew\s+the\s+Apostle\s*\.\s*The\s+Collect'),
    ("Saint Matthew the Apostle", "saint-matthew-the-apostle", "St. Matthew", "Holy Days", "Sep 21", r'St\.\s*Matthew\s+the\s+Apostle\s*\.\s*The\s+Collect'),
    ("Saint Michael and all Angels", "saint-michael-and-all-angels", "St. Michael & All Angels", "Holy Days", "Sep 29", r'St\.\s*Michael\s+and\s+All\s+Angels\s*\.\s*The\s+Collect'),
    ("Saint Luke the Evangelist", "saint-luke-the-evangelist", "St. Luke", "Holy Days", "Oct 18", r'St\.\s*Luke\s+the\s+Evangelist\s*\.\s*The\s+Collect'),
    ("Saint Simon and Saint Jude, Apostles", "saint-simon-and-saint-jude-apostles", "SS. Simon & Jude", "Holy Days", "Oct 28", r'St\.\s*Simon\s+and\s+St\.\s*Jude,\s*Apostles\s*\.\s*The\s+Collect'),
    ("All Saints' Day", "all-saints-day", "All Saints' Day", "Holy Days", "Nov 1", r'All\s+Saints\s+Day\s*\.\s*The\s+Collect'),
]

pos = 0
matches = []
for idx, (title, slug, short, season, date, pat) in enumerate(DAYS_CONFIG):
    m = re.search(pat, doc[pos:], re.I | re.DOTALL)
    abs_pos = pos + m.start()
    matches.append((abs_pos, title, slug, short, season, date, m.group(0)))
    pos = abs_pos + len(m.group(0))

print(f"Matched {len(matches)} out of 90 days.")
