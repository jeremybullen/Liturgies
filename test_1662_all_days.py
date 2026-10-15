import re
from generate_1662_propers_full import raw_full

# Fix specific artifacts in text:
text = raw_full
text = re.sub(r'TRINITY\s*-\s*S\s*U\s*AND\s*A\s*Y', 'Trinity-Sunday', text)
text = re.sub(r'The\s+Innocents\s+Day', "The Innocents' Day", text)
text = re.sub(r'All\s+Saints\s+Day', "All Saints' Day", text)
text = re.sub(r'EASTER\s*-\s*D\s*A\s*Y', 'Easter-Day', text)
text = re.sub(r'WHIT\s*-\s*S\s*U\s*AND\s*A\s*Y', 'Whit-Sunday', text)
text = re.sub(r'St\.\s*', 'Saint ', text)

DAYS_1662 = [
    # Advent
    ("The first Sunday in Advent", "first-sunday-in-advent", "1st Sunday in Advent", "ADVENT SEASON"),
    ("The Second Sunday in Advent", "second-sunday-in-advent", "2nd Sunday in Advent", None),
    ("The Third Sunday in Advent", "third-sunday-in-advent", "3rd Sunday in Advent", None),
    ("The Fourth Sunday in Advent", "fourth-sunday-in-advent", "4th Sunday in Advent", None),
    # Christmas
    ("The Nativity of our Lord, or the Birth-Day of CHRIST", "christmas-day", "Christmas Day", "CHRISTMASTIDE"),
    ("Saint Stephen's Day", "saint-stephens-day", "St. Stephen", None),
    ("Saint John the Evangelist's Day", "saint-john-evangelist", "St. John Evangelist", None),
    ("The Innocents' Day", "the-innocents-day", "The Innocents' Day", None),
    ("The Sunday after Christmas-day", "sunday-after-christmas", "Sunday after Christmas", None),
    ("The Circumcision of Christ", "circumcision-of-christ", "Circumcision of Christ", None),
    # Epiphany
    ("The EPIPHANY", "the-epiphany", "The Epiphany", "EPIPHANY SEASON"),
    ("The First Sunday after the Epiphany", "first-sunday-after-epiphany", "1st Sun after Epiphany", None),
    ("The Second Sunday after the Epiphany", "second-sunday-after-epiphany", "2nd Sun after Epiphany", None),
    ("The Third Sunday after the Epiphany", "third-sunday-after-epiphany", "3rd Sun after Epiphany", None),
    ("The Fourth Sunday after the Epiphany", "fourth-sunday-after-epiphany", "4th Sun after Epiphany", None),
    ("The Fifth Sunday after the Epiphany", "fifth-sunday-after-epiphany", "5th Sun after Epiphany", None),
    ("The Sixth Sunday after the Epiphany", "sixth-sunday-after-epiphany", "6th Sun after Epiphany", None),
    # Pre-Lent
    ("The Sunday called Septuagesima", "septuagesima", "Septuagesima", "PRE-LENTEN SEASON"),
    ("The Sunday called Sexagesima", "sexagesima", "Sexagesima", None),
    ("The Sunday called Quinquagesima", "quinquagesima", "Quinquagesima", None),
    # Lent
    ("The First Day of Lent, commonly called Ash-Wednesday", "ash-wednesday", "Ash Wednesday", "LENTEN SEASON"),
    ("The First Sunday in Lent", "first-sunday-in-lent", "1st Sunday in Lent", None),
    ("The Second Sunday in Lent", "second-sunday-in-lent", "2nd Sunday in Lent", None),
    ("The Third Sunday in Lent", "third-sunday-in-lent", "3rd Sunday in Lent", None),
    ("The Fourth Sunday in Lent", "fourth-sunday-in-lent", "4th Sunday in Lent", None),
    ("The Fifth Sunday in Lent", "fifth-sunday-in-lent", "5th Sunday in Lent", None),
    # Holy Week
    ("The Sunday next before Easter", "sunday-next-before-easter", "Sunday before Easter", "PASSIONTIDE & HOLY WEEK"),
    ("Monday before Easter", "monday-before-easter", "Monday before Easter", None),
    ("Tuesday before Easter", "tuesday-before-easter", "Tuesday before Easter", None),
    ("Wednesday before Easter", "wednesday-before-easter", "Wednesday before Easter", None),
    ("Thursday before Easter", "thursday-before-easter", "Thursday before Easter", None),
    ("Good Friday", "good-friday", "Good Friday", None),
    ("Easter Even", "easter-even", "Easter Even", None),
    # Eastertide
    ("Easter-Day", "easter-day", "Easter Day", "EASTERTIDE"),
    ("Monday in Easter-Week", "monday-in-easter-week", "Easter Monday", None),
    ("Tuesday in Easter-Week", "tuesday-in-easter-week", "Easter Tuesday", None),
    ("The First Sunday after Easter", "first-sunday-after-easter", "1st Sun after Easter", None),
    ("The Second Sunday after Easter", "second-sunday-after-easter", "2nd Sun after Easter", None),
    ("The Third Sunday after Easter", "third-sunday-after-easter", "3rd Sun after Easter", None),
    ("The Fourth Sunday after Easter", "fourth-sunday-after-easter", "4th Sun after Easter", None),
    ("The Fifth Sunday after Easter", "fifth-sunday-after-easter", "5th Sun after Easter", None),
    # Ascension
    ("The Ascension-day", "ascension-day", "Ascension Day", "ASCENSIONTIDE"),
    ("Sunday after Ascension-Day", "sunday-after-ascension-day", "Sunday after Ascension", None),
    # Whitsuntide
    ("Whit-Sunday", "whit-sunday", "Whit-Sunday", "WHITSUNTIDE"),
    ("Monday in Whitsun-Week", "monday-in-whitsun-week", "Whitsun Monday", None),
    ("Tuesday in Whitsun-Week", "tuesday-in-whitsun-week", "Whitsun Tuesday", None),
    # Trinity Season
    ("Trinity-Sunday", "trinity-sunday", "Trinity Sunday", "TRINITY SEASON"),
    ("The First Sunday after Trinity", "first-sunday-after-trinity", "1st Sun after Trinity", None),
    ("The Second Sunday after Trinity", "second-sunday-after-trinity", "2nd Sun after Trinity", None),
    ("The Third Sunday after Trinity", "third-sunday-after-trinity", "3rd Sun after Trinity", None),
    ("The Fourth Sunday after Trinity", "fourth-sunday-after-trinity", "4th Sun after Trinity", None),
    ("The Fifth Sunday after Trinity", "fifth-sunday-after-trinity", "5th Sun after Trinity", None),
    ("The Sixth Sunday after Trinity", "sixth-sunday-after-trinity", "6th Sun after Trinity", None),
    ("The Seventh Sunday after Trinity", "seventh-sunday-after-trinity", "7th Sun after Trinity", None),
    ("The Eighth Sunday after Trinity", "eighth-sunday-after-trinity", "8th Sun after Trinity", None),
    ("The Ninth Sunday after Trinity", "ninth-sunday-after-trinity", "9th Sun after Trinity", None),
    ("The Tenth Sunday after Trinity", "tenth-sunday-after-trinity", "10th Sun after Trinity", None),
    ("The Eleventh Sunday after Trinity", "eleventh-sunday-after-trinity", "11th Sun after Trinity", None),
    ("The Twelfth Sunday after Trinity", "twelfth-sunday-after-trinity", "12th Sun after Trinity", None),
    ("The Thirteenth Sunday after Trinity", "thirteenth-sunday-after-trinity", "13th Sun after Trinity", None),
    ("The Fourteenth Sunday after Trinity", "fourteenth-sunday-after-trinity", "14th Sun after Trinity", None),
    ("The Fifteenth Sunday after Trinity", "fifteenth-sunday-after-trinity", "15th Sun after Trinity", None),
    ("The Sixteenth Sunday after Trinity", "sixteenth-sunday-after-trinity", "16th Sun after Trinity", None),
    ("The Seventeenth Sunday after Trinity", "seventeenth-sunday-after-trinity", "17th Sun after Trinity", None),
    ("The Eighteenth Sunday after Trinity", "eighteenth-sunday-after-trinity", "18th Sun after Trinity", None),
    ("The Nineteenth Sunday after Trinity", "nineteenth-sunday-after-trinity", "19th Sun after Trinity", None),
    ("The Twentieth Sunday after Trinity", "twentieth-sunday-after-trinity", "20th Sun after Trinity", None),
    ("The Twenty-first Sunday after Trinity", "twenty-first-sunday-after-trinity", "21st Sun after Trinity", None),
    ("The Twenty-second Sunday after Trinity", "twenty-second-sunday-after-trinity", "22nd Sun after Trinity", None),
    ("The Twenty-third Sunday after Trinity", "twenty-third-sunday-after-trinity", "23rd Sun after Trinity", None),
    ("The Twenty-fourth Sunday after Trinity", "twenty-fourth-sunday-after-trinity", "24th Sun after Trinity", None),
    ("The Twenty-fifth Sunday after Trinity", "twenty-fifth-sunday-after-trinity", "25th Sun after Trinity", None),
    # Holy Days
    ("Saint Andrew's Day", "saint-andrews-day", "St. Andrew", "HOLY DAYS"),
    ("Saint Thomas the Apostle", "saint-thomas-the-apostle", "St. Thomas", None),
    ("The Conversion of Saint Paul", "conversion-of-saint-paul", "Conversion of St. Paul", None),
    ("The Purification of Saint Mary the Virgin", "purification-of-saint-mary", "Purification of St. Mary", None),
    ("Saint Matthias's Day", "saint-matthiass-day", "St. Matthias", None),
    ("The Annunciation of the blessed Virgin Mary", "annunciation-of-the-virgin-mary", "Annunciation of BVM", None),
    ("Saint Mark's Day", "saint-marks-day", "St. Mark", None),
    ("Saint Philip and Saint James's Day", "saint-philip-and-saint-jamess-day", "SS. Philip & James", None),
    ("Saint Barnabas the Apostle", "saint-barnabas-the-apostle", "St. Barnabas", None),
    ("Saint John Baptist's Day", "saint-john-baptists-day", "St. John Baptist", None),
    ("Saint Peter's Day", "saint-peters-day", "St. Peter", None),
    ("Saint James the Apostle", "saint-james-the-apostle", "St. James", None),
    ("Saint Bartholomew the Apostle", "saint-bartholomew-the-apostle", "St. Bartholomew", None),
    ("Saint Matthew the Apostle", "saint-matthew-the-apostle", "St. Matthew", None),
    ("Saint Michael and all Angels", "saint-michael-and-all-angels", "St. Michael & All Angels", None),
    ("Saint Luke the Evangelist", "saint-luke-the-evangelist", "St. Luke", None),
    ("Saint Simon and Saint Jude, Apostles", "saint-simon-and-saint-jude-apostles", "SS. Simon & Jude", None),
    ("All Saints' Day", "all-saints-day", "All Saints' Day", None),
]

last_idx = 0
matches = []
for title, slug, shortTitle, season in DAYS_1662:
    words = title.replace('-', ' ').replace(',', '').split()
    pattern = r'\s+'.join(re.escape(w) for w in words[:3])
    m = re.search(pattern, text[last_idx:], re.I)
    if not m:
        print(f"FAILED: {title} after offset {last_idx}")
    else:
        abs_start = last_idx + m.start()
        matches.append((abs_start, title, slug, shortTitle, season))
        last_idx = abs_start + len(m.group(0))

print(f"Sequential match: {len(matches)} of {len(DAYS_1662)}")
