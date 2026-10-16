import json, re

with open('collects1662_pages.json') as f:
    pages = json.load(f)

# Running header regex matching Baskerville running headers
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

print("Document cleaned and preprocessed, total length:", len(doc))
