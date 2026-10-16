import json, re

with open('collects1662_pages.json') as f:
    pages = json.load(f)

# Running header pattern - matches running headers in Baskerville 1762
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

    # 2. Column 2 running header
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

    # 3. Bottom of page signatures/catchwords
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

# Typographical ligature fixes
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
    (r'\bCollest\b', 'Collect'),
    (r'\bcircumspestly\b', 'circumspectly'),
    (r'\bdestrustion\b', 'destruction'),
    (r'\bexpestation\b', 'expectation'),
    (r'\bmalefastors\b', 'malefactors'),
    (r'\brespester\b', 'respecter'),
    (r'\bsanstification\b', 'sanctification'),
    (r'\bsanstifieth\b', 'sanctifieth'),
    (r'\bsanstify\b', 'sanctify'),
    (r'\bvistory\b', 'victory'),
    (r'\bbenefastors\b', 'benefactors'),
    (r'\bcompasted\b', 'compacted'),
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
    ("The First Sunday in Lent", "first-sunday-in-lent", "1st Sunday in Lent", "LENTEN SEASON", "", r'The\s+first\s+Sunday\s+in\s+Lent\s*\.\s*The\s+Collect'),
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

def normalize_citation(cit):
    cit = cit.strip()
    cit = re.sub(r'[ \t]+', ' ', cit)
    cit = re.sub(r'\bR\s*O\s*M\b', 'Romans', cit, flags=re.I)
    cit = re.sub(r'\b1\s*C\s*O\s*R\b', '1 Cor.', cit, flags=re.I)
    cit = re.sub(r'\b2\s*C\s*O\s*R\b', '2 Cor.', cit, flags=re.I)
    cit = re.sub(r'\bC\s*O\s*R\b', 'Cor.', cit, flags=re.I)
    cit = re.sub(r'\bP\s*H\s*I\s*L\b', 'Philippians', cit, flags=re.I)
    cit = re.sub(r'\bC\s*O\s*L\b', 'Colossians', cit, flags=re.I)
    cit = re.sub(r'\b1\s*T\s*H\s*E\s*S\s*S\b', '1 Thess.', cit, flags=re.I)
    cit = re.sub(r'\b2\s*T\s*I\s*M\b', '2 Tim.', cit, flags=re.I)
    cit = re.sub(r'\bT\s*I\s*M\b', 'Tim.', cit, flags=re.I)
    cit = re.sub(r'\bH\s*E\s*B\s*R?\b', 'Hebrews', cit, flags=re.I)
    cit = re.sub(r'\bA\s*C\s*T\s*S\b', 'Acts', cit, flags=re.I)
    cit = re.sub(r'\bG\s*A\s*L\b', 'Galatians', cit, flags=re.I)
    cit = re.sub(r'\bE\s*P\s*H\s*E\s*S\b', 'Ephesians', cit, flags=re.I)
    cit = re.sub(r'\bR\s*E\s*V\b', 'Revelation', cit, flags=re.I)
    cit = re.sub(r'\bI\s*S\s*A\s*I\s*A\s*H\b', 'Isaiah', cit, flags=re.I)
    cit = re.sub(r'\bJ\s*E\s*R\b', 'Jeremiah', cit, flags=re.I)
    cit = re.sub(r'\bM\s*A\s*L\b', 'Malachi', cit, flags=re.I)
    cit = re.sub(r'\bJ\s*O\s*E\s*L\b', 'Joel', cit, flags=re.I)
    cit = re.sub(r'\b1\s*S\.\s*P\s*E\s*T(?:E\s*R)?\b', '1 St. Peter', cit, flags=re.I)
    cit = re.sub(r'\b2\s*S\.\s*P\s*E\s*T(?:E\s*R)?\b', '2 St. Peter', cit, flags=re.I)
    cit = re.sub(r'\b1\s*S\.\s*J\s*O\s*H\s*N\b', '1 St. John', cit, flags=re.I)
    cit = re.sub(r'\bS\.\s*M\s*A\s*T\s*T\s*H\b', 'St. Matthew', cit, flags=re.I)
    cit = re.sub(r'\bS\.\s*M\s*A\s*R\s*K\b', 'St. Mark', cit, flags=re.I)
    cit = re.sub(r'\bS\.\s*L\s*U\s*K\s*E\b', 'St. Luke', cit, flags=re.I)
    cit = re.sub(r'\bS\.\s*J\s*O\s*H\s*N\b', 'St. John', cit, flags=re.I)
    cit = re.sub(r'\bS\.\s*J\s*A\s*M\s*E\s*S\b', 'St. James', cit, flags=re.I)
    cit = re.sub(r'\bS\.\s*J\s*U\s*D\s*E\b', 'St. Jude', cit, flags=re.I)
    cit = re.sub(r'\bSt\s+L\s*U\s*K\s*E\b', 'St. Luke', cit, flags=re.I)
    cit = re.sub(r'\.\s*\.', '.', cit)
    cit = re.sub(r'\b(Romans|Philippians|Colossians|Hebrews|Acts|Galatians|Ephesians|Revelation|Isaiah|Jeremiah|Malachi|Joel|St\. Matthew|St\. Mark|St\. Luke|St\. John|St\. James|St\. Jude|1 St\. Peter|2 St\. Peter|1 St\. John)\s*\.\s*', r'\1 ', cit)
    cit = re.sub(r'\b(1 Cor\.|2 Cor\.|Cor\.|1 Thess\.|2 Tim\.|Tim\.)\s*\.\s*', r'\1 ', cit)
    cit = re.sub(r'\s+', ' ', cit)
    cit = cit.rstrip(' .') + '.'
    return cit.strip()

START_FIXES = [
    # Specific collect fixes
    (r'^E\s*R\s*C\s*I\s*F\s*U\s*L\s+Lord\b', 'MERCIFUL Lord'),
    (r'^MERCIFUL\s+Lord\b', 'MERCIFUL Lord'),
    (r'^E\s*E\s*P\s*,\s*we\s+beseech\b', 'KEEP, we beseech'),
    (r'^KEEP\s*,\s*we\s+beseech\b', 'KEEP, we beseech'),
    (r'^Lord\s+Jesu\s+Christ\b', 'O LORD Jesu Christ'),
    (r'^Lord,\s+raise\s+up\b', 'O LORD, raise up'),
    (r'^Lord,\s+we\s+beseech\s+thee\s+mercifully\s+to\s+receive\b', 'O LORD, we beseech thee mercifully to receive'),
    (r'^Lord,\s+we\s+beseech\s+thee\s+to\s+keep\s+thy\s+Church\b', 'O LORD, we beseech thee to keep thy Church'),
    (r'^Lord,\s+we\s+beseech\s+thee\s+favourably\b', 'O LORD, we beseech thee favourably'),
    (r'^Lord\s+God,\s+who\s+seest\b', 'O LORD God, who seest'),
    (r'^Lord,\s+who\s+hast\s+taught\s+us\b', 'O LORD, who hast taught us'),
    (r'^Lord,\s+who\s+for\s+our\s+sake\b', 'O LORD, who for our sake'),
    (r'^Lord,\s+from\s+whom\s+all\s+good\s+things\b', 'O LORD, from whom all good things'),
    (r'^Lord,\s+who\s+never\s+failest\b', 'O LORD, who never failest'),
    (r'^Lord,\s+we\s+beseech\s+thee\s+mercifully\s+to\s+hear\b', 'O LORD, we beseech thee mercifully to hear'),
    (r'^Lord,\s+we\s+beseech\s+thee,\s+let\s+thy\s+continual\b', 'O LORD, we beseech thee, let thy continual'),
    (r'^Lord,\s+we\s+beseech\s+thee,\s+absolve\b', 'O LORD, we beseech thee, absolve'),
    (r'^Lord\s+God\s+Almighty,\s+who\s+didst\s+endue\b', 'O LORD God Almighty, who didst endue'),
    (r'^God,\s+who\s+by\s+the\s+leading\b', 'O GOD, who by the leading'),
    (r'^God,\s+who\s+knowest\s+us\b', 'O GOD, who knowest us'),
    (r'^God,\s+whose\s+blessed\s+Son\b', 'O GOD, whose blessed Son'),
    (r'^God,\s+the\s+King\s+of\s+glory\b', 'O GOD, the King of glory'),
    (r'^God,\s+the\s+strength\s+of\s+all\b', 'O GOD, the strength of all'),
    (r'^God,\s+the\s+protector\s+of\s+all\b', 'O GOD, the protector of all'),
    (r'^God,\s+who\s+hast\s+prepared\s+for\s+them\b', 'O GOD, who hast prepared for them'),
    (r'^God,\s+whose\s+never-failing\s+providence\b', 'O GOD, whose never-failing providence'),
    (r'^God,\s+who\s+declarest\s+thy\s+almighty\b', 'O GOD, who declarest thy almighty'),
    (r'^God,\s+forasmuch\s+as\s+without\s+thee\b', 'O GOD, forasmuch as without thee'),
    (r'^God,\s+our\s+refuge\s+and\s+strength\b', 'O GOD, our refuge and strength'),
    (r'^God,\s+who,\s+through\s+the\s+preaching\b', 'O GOD, who, through the preaching'),
    (r'^Everlasting\s+God,\s+who\s+hast\s+ordained\b', 'O EVERLASTING God, who hast ordained'),
    (r'^T\s*E\s*P\s*H\s*E\s*N\b', 'STEPHEN'),
    (r'^STEPHEN\b', 'STEPHEN'),
    (r'^A\s*V\s*I\s*N\s*G\s+then\s+gifts\b', 'HAVING then gifts'),
    (r'^HAVING\s+then\s+gifts\b', 'HAVING then gifts'),
    (r'^(?:H\s*E\s*N|WHEN)\s+if\s+any\s+man\b', 'THEN if any man'),
    (r'^(?:H\s*E\s*N|WHEN)\s+Jesus\s+took\s+unto\s+him\b', 'THEN Jesus took unto him'),
    (r'^(?:H\s*E\s*N|WHEN)\s+was\s+Jesus\s+led\b', 'THEN was Jesus led'),
    (r'^(?:H\s*E\s*N|WHEN)\s+Peter\s+opened\b', 'THEN Peter opened'),
    (r'^(?:H\s*E\s*N|WHEN)\s+drew\s+near\b', 'THEN drew near'),
    (r'^(?:H\s*E\s*N|WHEN)\s+went\s+the\s+Pharisees\b', 'THEN went the Pharisees'),
    (r'^(?:H\s*E\s*N|WHEN)\s+came\s+to\s+him\s+the\s+mother\b', 'THEN came to him the mother'),
    (r'^(?:H\s*E\s*R\s*E|THERE)\s+a\s+testament\b', 'WHERE a testament'),
    (r'^(?:N\s*O\s*W|NOW)\s+ye\s+not\b', 'KNOW ye not'),
    (r'^(?:H\s*E\s*R\s*E|THERE)\s*F\s*O\s*R\s*E\s+seeing\b', 'THEREFORE seeing'),
    (r'^E\s+suffer\s+fools\b', 'YE suffer fools'),
    (r'^H\s*O\s*U\s*G\s*H\s+I\s+speak\b', 'THOUGH I speak'),
    (r'^U\s*R\s*N\s+ye\s+even\b', 'TURN ye even'),
    (r'^E\s+then,\s+as\s+workers\b', 'WE then, as workers'),
    (r'^E\s+beseech\s+you,\s+brethren\b', 'WE beseech you, brethren'),
    (r'^E\s*L\s*L\s+me,\s+ye\s+that\b', 'TELL me, ye that'),
    (r'^H\s*R\s*I\s*S\s*T\s+being\s+come\b', 'CHRIST being come'),
    (r'^H\s*E\s+Lord\s+GOD\s+hath\b', 'THE Lord GOD hath'),
    (r'^N\s+this\s+that\s+I\s+declare\b', 'IN this that I declare'),
    (r'^H\s*E\s+law\s+having\b', 'THE law having'),
    (r'^T\s+is\s+better,\s+if\s+the\s+will\b', 'IT is better, if the will'),
    (r'^F\s+ye\s+then\s+be\s+risen\b', 'IF ye then be risen'),
    (r'^O\s+Abraham\s+and\s+his\b', 'TO Abraham and his'),
    (r'^O\s*W\s+when\s+John\b', 'NOW when John'),
    (r'^N\s+the\s+beginning\b', 'IN the beginning'),
    (r'^O\s*W\s+his\s+parents\b', 'NOW his parents'),
    (r'^H\s*E\s+kingdom\s+of\s+heaven\b', 'THE kingdom of heaven'),
    (r'^O\s*W\s+the\s+feast\b', 'NOW the feast'),
    (r'^H\s*E\s+whole\s+multitude\b', 'THE whole multitude'),
    (r'^I\s*L\s*A\s*T\s*E\s+therefore\b', 'PILATE therefore'),
    (r'^H\s*E\s+first\s+day\b', 'THE first day'),
    (r'^H\s*I\s*L\s*E\s+Jesus\s+spake\b', 'WHILE Jesus spake'),
    (r'^T\s+the\s+same\s+time\b', 'AT the same time'),
    (r'^L\s*M\s*I\s*G\s*H\s*T\s*Y\b', 'ALMIGHTY'),
    (r'^LMIGHTY\b', 'ALMIGHTY'),
    (r'^L\s*E\s*S\s*S\s*E\s*D\b', 'BLESSED'),
    (r'^W\s*E\s+no\s+man\b', 'OWE no man'),
    (r'^W\s*H\s*E\s*N\b', 'WHEN'),
    (r'^H\s*E\s*N\b', 'WHEN'),
    (r'^H\s*A\s*T\s*S\s*O\s*E\s*V\s*E\s*R\b', 'WHATSOEVER'),
    (r'^H\s*A\s*T\s+which\s+was\b', 'THAT which was'),
    (r'^T\s*H\s*A\s*T\s+which\s+was\b', 'THAT which was'),
    (r'^H\s*I\s*S\b', 'THIS'),
    (r'^T\s*H\s*I\s*S\b', 'THIS'),
    (r'^H\s*E\s*S\s*E\b', 'THESE'),
    (r'^T\s*H\s*E\s*S\s*E\b', 'THESE'),
    (r'^H\s*E\s*R\s*E\b', 'THERE'),
    (r'^T\s*H\s*E\s*R\s*E\b', 'THERE'),
    (r'^H\s*E\s+former\b', 'THE former'),
    (r'^H\s*E\s+same\s+day\b', 'THE same day'),
    (r'^H\s*E\s+end\s+of\b', 'THE end of'),
    (r'^H\s*E\s+Lord\s+appointed\b', 'THE Lord appointed'),
    (r'^H\s*E\s+birth\s+of\b', 'THE birth of'),
    (r'^H\s*E\s+Angel\s+of\b', 'THE Angel of'),
    (r'^H\s*O\s+is\s+this\b', 'WHO is this'),
    (r'^H\s*O\s*M\s*A\s*S\b', 'THOMAS'),
    (r'^N\s*D\b', 'AND'),
    (r'^A\s*N\s*D\b', 'AND'),
    (r'^E\s*S\s*U\s*S\b', 'JESUS'),
    (r'^J\s*E\s*S\s*U\s*S\b', 'JESUS'),
    (r'^E\s*T\s+a\s+man\b', 'LET a man'),
    (r'^E\s*T\s+this\s+mind\b', 'LET this mind'),
    (r'^E\s*T\s+every\s+soul\b', 'LET every soul'),
    (r'^E\s*T\s+thy\s+merciful\b', 'LET thy merciful'),
    (r'^E\s*J\s*O\s*I\s*C\s*E\b', 'REJOICE'),
    (r'^R\s*E\s*J\s*O\s*I\s*C\s*E\b', 'REJOICE'),
    (r'^O\s*D\s*,\s*who\b', 'GOD, who'),
    (r'^O\s*D\s+so\s+loved\b', 'GOD so loved'),
    (r'^R\s*A\s*N\s*T\b', 'GRANT'),
    (r'^G\s*R\s*A\s*N\s*T\b', 'GRANT'),
    (r'^Looked\b', 'I looked'),
    (r'^O\s*O\s*K\s*E\s*D\b', 'I looked'),
    (r'^OW\s+I\s+say\b', 'NOW I say'),
    (r'^N\s*O\s*W\b', 'NOW'),
    (r'^O\s*R\s+this\s+cause\b', 'FOR this cause'),
    (r'^Beseech\s+you\s+therefore\b', 'I BESEECH you therefore'),
    (r'^E\s+not\s+wise\b', 'BE not wise'),
    (r'^U\s*T\s+on\s+therefore\b', 'PUT on therefore'),
    (r'^E\s+beseech\s+thee\b', 'WE beseech thee'),
    (r'^E\s*T\s*E\s*R\b', 'PETER'),
    (r'^P\s*E\s*T\s*E\s*R\b', 'PETER'),
    (r'^E\s*H\s*O\s*L\s*D\b', 'BEHOLD'),
    (r'^B\s*E\s*H\s*O\s*L\s*D\b', 'BEHOLD'),
    (r'^E\s+N\s+and\s+brethren\b', 'MEN and brethren'),
    (r'^E\s*A\s*R\s*L\s*Y\s+beloved\b', 'DEARLY beloved'),
    (r'^VERY\s+good\s+gift\b', 'EVERY good gift'),
    (r'^E\s+ye\s+doers\b', 'BE ye doers'),
    (r'^E\s+ye\s+all\b', 'BE ye all'),
    (r'^E\s+ye\s+therefore\b', 'BE ye therefore'),
    (r'^E\s*R\s*I\s*L\s*Y\b', 'VERILY'),
    (r'^V\s*E\s*R\s*I\s*L\s*Y\b', 'VERILY'),
    (r'^F\s*T\s*E\s*R\b', 'AFTER'),
    (r'^A\s*F\s*T\s*E\s*R\b', 'AFTER'),
    (r'^E\s*L\s*O\s*V\s*E\s*D\b', 'BELOVED'),
    (r'^B\s*E\s*L\s*O\s*V\s*E\s*D\b', 'BELOVED'),
    (r'^A\s*R\s*V\s*E\s*L\s+not\b', 'MARVEL not'),
    (r'^Certain\s+man\b', 'A certain man'),
    (r'^LL\s+of\s+you\b', 'ALL of you'),
    (r'^Reckon\s+that\b', 'I RECKON that'),
    (r'^T\s+came\s+to\s+pass\b', 'IT came to pass'),
    (r'^O\s*R\s*D\s+of\s+all\b', 'LORD of all'),
    (r'^O\s*R\s*D\s*,\s*we\s+pray\b', 'LORD, we pray'),
    (r'^O\s*R\s*D\s*,\s*we\s+beseech\b', 'LORD, we beseech'),
    (r'^speak\s+after\s+the\s+manner\b', 'I SPEAK after the manner'),
    (r'^N\s+those\s+days\b', 'IN those days'),
    (r'^R\s*E\s*T\s*H\s*R\s*E\s*N\b', 'BRETHREN'),
    (r'^B\s*R\s*E\s*T\s*H\s*R\s*E\s*N\b', 'BRETHREN'),
    (r'^E\s*W\s*A\s*R\s*E\b', 'BEWARE'),
    (r'^B\s*E\s*W\s*A\s*R\s*E\b', 'BEWARE'),
    (r'^O\s*N\s*C\s*E\s*R\s*N\s*I\s*N\s*G\b', 'CONCERNING'),
    (r'^U\s*C\s*H\s+trust\b', 'SUCH trust'),
    (r'^Say\s+then\s*,\s*Walk\b', 'I SAY then, Walk'),
    (r'^E\s+see\s+how\s+large\b', 'YE see how large'),
    (r'^O\s+man\s+can\s+serve\b', 'NO man can serve'),
    (r'^Desire\s+that\s+ye\b', 'I DESIRE that ye'),
    (r'^Therefore\s+the\s+prisoner\b', 'I THEREFORE the prisoner'),
    (r'^Thank\s+my\s+God\b', 'I THANK my God'),
    (r'^E\s*E\s+then\s+that\b', 'SEE then that'),
    (r'^Y\s+brethren\s*,\s*be\s+strong\b', 'MY brethren, be strong'),
    (r'^E\s+give\s+thanks\b', 'WE give thanks'),
    (r'^T\s*I\s*R\s+up\b', 'STIR up'),
    (r'^S\s*T\s*I\s*R\s+up\b', 'STIR up'),
    (r'^F\s+thou\s+shalt\b', 'IF thou shalt'),
    (r'^OW\s+therefore\s+ye\b', 'NOW therefore ye'),
    (r'^ND\s+Saul\b', 'AND Saul'),
    (r'^T\s+that\s+time\b', 'AT that time'),
    (r'^OREOVER\b', 'MOREOVER'),
    (r'^N\s*T\s*O\s+every\b', 'UNTO every'),
    (r'^Am\s+the\s+true\s+vine\b', 'I AM the true vine'),
    (r'^A\s*M\s*E\s*S\s*,\s*a\s+servant\b', 'JAMES, a servant'),
    (r'^I\s*D\s*I\s*N\s*G\s*S\b', 'TIDINGS'),
    (r'^T\s*I\s*D\s*I\s*N\s*G\s*S\b', 'TIDINGS'),
    (r'^O\s*M\s*F\s*O\s*R\s*T\b', 'COMFORT'),
    (r'^C\s*O\s*M\s*F\s*O\s*R\s*T\b', 'COMFORT'),
    (r'^L\s*I\s*S\s*A\s*B\s*E\s*T\s*H\b', 'ELISABETH'),
    (r'^E\s*L\s*I\s*S\s*A\s*B\s*E\s*T\s*H\b', 'ELISABETH'),
    (r'^B\s*O\s*U\s*T\s+that\s+time\b', 'ABOUT that time'),
    (r'^Y\s+the\s+hands\b', 'BY the hands'),
    (r'^ATCH\s+thou\b', 'WATCH thou'),
    (r'^W\s*A\s*T\s*C\s*H\b', 'WATCH'),
    (r'^U\s*D\s*E\s*,\s*the\s+servant\b', 'JUDE, the servant'),
    (r'^J\s*U\s*D\s*E\s*,\s*the\s+servant\b', 'JUDE, the servant'),
]

def fix_start(text):
    text = text.strip()
    for pat, rep in START_FIXES:
        if re.search(pat, text, flags=re.I):
            text = re.sub(pat, rep, text, count=1, flags=re.I)
            break
    return text

def clean_paragraph_text(text):
    text = re.sub(r'\s*\n\s*', ' ', text)
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\s+([,.:;!?])', r'\1', text)
    text = text.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    # Fix spaced phrases in scriptures
    text = re.sub(r'T\s+H\s+I\s+S\s+I\s+S\s+J\s+E\s+S\s+U\s+S\s+T\s+H\s+E\s+K\s+I\s+N\s+G\s+O\s+F\s+T\s+H\s+E\s+J\s+E\s+W\s+S', 'THIS IS JESUS THE KING OF THE JEWS', text)
    text = re.sub(r'T\s+H\s+I\s+S\s+I\s+S\s+T\s+H\s+E\s+K\s+I\s+N\s+G\s+O\s+F\s+T\s+H\s+E\s+J\s+E\s+W\s+S', 'THIS IS THE KING OF THE JEWS', text)
    text = re.sub(r'J\s+E\s+S\s+U\s+S\s+O\s+F\s+N\s+A\s+Z\s+A\s+R\s+E\s+T\s+H', 'JESUS OF NAZARETH', text)
    text = re.sub(r'T\s+H\s+E\s+K\s+I\s+N\s+G\s+O\s+F\s+T\s+H\s+E\s+J\s+E\s+W\s+S', 'THE KING OF THE JEWS', text)
    text = re.sub(r'T\s+H\s+E\s+L\s+O\s+R\s+D\s+O\s+U\s+R\s+R\s+I\s+G\s+H\s+T\s+E\s+O\s+U\s+S\s+N\s+E\s+S\s+S', 'THE LORD OUR RIGHTEOUSNESS', text)
    text = re.sub(r'\bJ\s+E\s+S\s+U\s+S\b', 'JESUS', text)
    text = re.sub(r'\bTHERE\s+F\s+O\s+R\s+E\b', 'THEREFORE', text)
    text = re.sub(r'\bELISABETH\s*\'\s*s\b', "ELISABETH's", text)
    return text.strip()

markdown_sections = [
    "# The Collects, Epistles, and Gospels",
    "## To be used throughout the Year.",
    "",
    "*¶ Note, that the Collect appointed for every Sunday, or for any Holy-day that hath a Vigil or Eve, shall be said at the Evening Service next before.*",
    ""
]

propers_index = []
current_season = None

for i in range(len(matches)):
    start = matches[i][0]
    end = matches[i+1][0] if i+1 < len(matches) else len(doc)
    title = matches[i][1]
    slug = matches[i][2]
    short_title = matches[i][3]
    season = matches[i][4]
    date = matches[i][5]
    match_str = matches[i][6]
    chunk = doc[start:end]

    season_header = season.upper()
    if season_header != current_season:
        current_season = season_header
        markdown_sections.append(f"## {season_header}")
        markdown_sections.append("")

    date_badge = f" *[{date}]*" if date else ""
    markdown_sections.append(f"### {title} {{#{slug}}}{date_badge}")
    markdown_sections.append("")

    if slug in ["monday-before-easter", "tuesday-before-easter", "wednesday-before-easter", "thursday-before-easter"]:
        markdown_sections.append("*¶ The Collect for the Sunday next before Easter is to be said.*")
        markdown_sections.append("")
        after_collect = chunk
    elif slug == "easter-day":
        anthems_text = (
            "*¶ At Morning Prayer, instead of the Psalm, O come let us sing, &c. these Anthems shall be sung or said.*\n\n"
            "CHRIST our passover is sacrificed for us: therefore let us keep the feast;\n"
            "Not with the old leaven, nor with the leaven of malice and wickedness: but with the unleavened bread of sincerity and truth. 1 Cor. 5. 7.\n\n"
            "CHRIST being raised from the dead dieth no more: death hath no more dominion over him.\n"
            "For in that he died, he died unto sin once: but in that he liveth, he liveth unto God.\n"
            "Likewise reckon ye also yourselves to be dead indeed unto sin: but alive unto God through Jesus Christ our Lord. Rom. 6. 9.\n\n"
            "CHRIST is risen from the dead: and become the first-fruits of them that slept.\n"
            "For since by man came death: by man came also the resurrection of the dead.\n"
            "For as in Adam all die: even so in Christ shall all be made alive. 1 Cor. 15. 20.\n\n"
            "Glory be to the Father, and to the Son: and to the Holy Ghost;\n"
            "As it was in the beginning, is now, and ever shall be: world without end. Amen."
        )
        markdown_sections.append(anthems_text)
        markdown_sections.append("")
        
        col_m = re.search(r'The\s+Collect\s*\.\s*(.*?)(?=(?:The|For\s+the)\s+Epistle)', chunk, re.DOTALL | re.I)
        collect_text = col_m.group(1).strip() if col_m else ""
        collect_text = fix_start(clean_paragraph_text(collect_text))
        markdown_sections.append("#### The Collect.")
        markdown_sections.append("")
        markdown_sections.append(collect_text)
        markdown_sections.append("")
        after_collect = chunk[col_m.end():] if col_m else chunk
    elif slug == "good-friday":
        markdown_sections.append("#### The Collects.")
        markdown_sections.append("")
        col_m = re.search(r'Good\s+Friday\s*\.\s*The\s+Collects\s*\.\s*(.*?)(?=(?:The|For\s+the)\s+Epistle)', chunk, re.DOTALL | re.I)
        c_raw = col_m.group(1).strip() if col_m else ""
        c_parts = re.split(r'(?<=\bAmen\.)\s*', c_raw)
        for part in c_parts:
            part = part.strip()
            if not part:
                continue
            fixed_part = fix_start(clean_paragraph_text(part))
            markdown_sections.append(fixed_part)
            markdown_sections.append("")
        after_collect = chunk[col_m.end():] if col_m else chunk
    else:
        col_m = re.search(r'The\s+Collect\s*\.\s*(.*?)(?=(?:The|For\s+the)\s+Epistle)', chunk, re.DOTALL | re.I)
        c_raw = col_m.group(1).strip() if col_m else ""
        rubric_after = None
        rubric_match = re.search(r'(¶\s*[^.\n]+(?:\.|\n)[^\n]*)', c_raw)
        if rubric_match:
            r_text = rubric_match.group(1).strip()
            c_raw = c_raw.replace(r_text, '').strip()
            rubric_after = f"*{clean_paragraph_text(r_text)}*"
            
        collect_text = fix_start(clean_paragraph_text(c_raw))
        markdown_sections.append("#### The Collect.")
        markdown_sections.append("")
        markdown_sections.append(collect_text)
        markdown_sections.append("")
        if rubric_after:
            markdown_sections.append(rubric_after)
            markdown_sections.append("")
            
        after_collect = chunk[col_m.end():] if col_m else chunk

    # Epistle with strict lookahead \n\s*The\s+Gospel\s*\.
    ep_m = re.search(r'(The|For\s+the)\s+Epistle\s*\.\s*([^\n]+)\n(.*?)(?=\n\s*The\s+Gospel\s*\.)', after_collect, re.DOTALL | re.I)
    if ep_m:
        prefix = ep_m.group(1).strip()
        raw_cit = ep_m.group(2).strip()
        ep_cit = normalize_citation(raw_cit)
        ep_body = ep_m.group(3).strip()
        ep_text = fix_start(clean_paragraph_text(ep_body))
        markdown_sections.append(f"#### {prefix.capitalize()} Epistle. {ep_cit}")
        markdown_sections.append("")
        markdown_sections.append(ep_text)
        markdown_sections.append("")
        after_epistle = after_collect[ep_m.end():]
    else:
        print(f"ERROR: Could not find Epistle in {slug}")
        ep_cit = ""
        after_epistle = after_collect

    # Gospel
    go_m = re.search(r'\n\s*The\s+Gospel\s*\.\s*([^\n]+)\n(.*)', after_epistle, re.DOTALL | re.I)
    if go_m:
        raw_cit = go_m.group(1).strip()
        go_cit = normalize_citation(raw_cit)
        go_body = go_m.group(2).strip()
        
        trailing_rubric = None
        rubric_match = re.search(r'(¶\s*.*)$', go_body, re.DOTALL)
        if rubric_match:
            r_text = rubric_match.group(1).strip()
            go_body = go_body[:rubric_match.start()].strip()
            trailing_rubric = f"*{clean_paragraph_text(r_text)}*"

        go_text = fix_start(clean_paragraph_text(go_body))
        markdown_sections.append(f"#### The Gospel. {go_cit}")
        markdown_sections.append("")
        markdown_sections.append(go_text)
        markdown_sections.append("")
        if trailing_rubric:
            markdown_sections.append(trailing_rubric)
            markdown_sections.append("")
    else:
        print(f"ERROR: Could not find Gospel in {slug}")
        go_cit = ""

    full_citation = f"{ep_cit} · {go_cit}" if ep_cit and go_cit else ep_cit or go_cit
    propers_index.append({
        "id": slug,
        "title": title,
        "shortTitle": short_title,
        "season": season,
        "date": date,
        "citation": full_citation
    })

full_markdown = "\n".join(markdown_sections)
print(f"Total markdown generated: {len(full_markdown)} characters across {len(matches)} days.")

# Write collectsEpistlesGospels1662.ts
content_repr = json.dumps(full_markdown)

ts_content = f"""import {{ ServiceItem }} from './types';

/**
 * The Collects, Epistles, and Gospels to be used throughout the Year
 * The 1662 Book of Common Prayer (Church of England)
 */
export const collectsEpistlesGospels1662: ServiceItem = {{
  id: 'collects-epistles-gospels-1662',
  slug: 'collects-epistles-gospels',
  title: 'The Collects, Epistles, and Gospels',
  shortTitle: 'The Collects, Epistles, and Gospels',
  category: 'Collects, Epistles & Gospels',
  isService: true,
  content: {content_repr}
}};
"""

with open('src/services/collectsEpistlesGospels1662.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Saved src/services/collectsEpistlesGospels1662.ts")

# Write propersIndex1662.ts
index_json = json.dumps(propers_index, indent=2)
index_ts = f"""export interface ProperDayItem {{
  id: string;
  title: string;
  shortTitle: string;
  season: string;
  date?: string;
  citation?: string;
}}

export const PROPERS_1662_INDEX: ProperDayItem[] = {index_json};
"""

with open('src/services/propersIndex1662.ts', 'w', encoding='utf-8') as f:
    f.write(index_ts)

print("Saved src/services/propersIndex1662.ts")
