import json

# ==============================================================================
# 1. SUNDAYS PROPER LESSONS (Pages 1 - 3)
# ==============================================================================
SUNDAYS_1662 = [
    # Advent
    ("Advent 1", "Isa. 1", "—", "Isa. 2", "—"),
    ("Advent 2", "5", "—", "24", "—"),
    ("Advent 3", "25", "—", "26", "—"),
    ("Advent 4", "30", "—", "32", "—"),
    # After Christmas
    ("1st Sunday after Christmas", "37", "—", "38", "—"),
    ("2nd Sunday after Christmas", "41", "—", "43", "—"),
    # After Epiphany
    ("1st Sunday after Epiphany", "44", "—", "46", "—"),
    ("2nd Sunday after Epiphany", "51", "—", "53", "—"),
    ("3rd Sunday after Epiphany", "55", "—", "56", "—"),
    ("4th Sunday after Epiphany", "57", "—", "58", "—"),
    ("5th Sunday after Epiphany", "59", "—", "64", "—"),
    ("6th Sunday after Epiphany", "65", "—", "66", "—"),
    # Pre-Lent
    ("Septuagesima", "Gen. 1", "—", "Gen. 2", "—"),
    ("Sexagesima", "3", "—", "6", "—"),
    ("Quinquagesima", "9:1–19", "—", "12", "—"),
    # Lent
    ("1st Sunday in Lent", "19:1–29", "—", "22", "—"),
    ("2nd Sunday in Lent", "27", "—", "34", "—"),
    ("3rd Sunday in Lent", "39", "—", "42", "—"),
    ("4th Sunday in Lent", "Gen. 43", "—", "Gen. 45", "—"),
    ("5th Sunday in Lent", "Exod. 3", "—", "Exod. 5", "—"),
    ("6th Sunday in Lent (Palm Sunday)", "9", "Matt. 26", "10", "Heb. 5:1–10"),
    # Easter Day
    ("Easter Day", "12", "Rom. 6", "14", "Acts 2:22–47"),
    # After Easter
    ("1st Sunday after Easter", "Num. 16", "—", "Num. 22", "—"),
    ("2nd Sunday after Easter", "23–24", "—", "25", "—"),
    ("3rd Sunday after Easter", "Deut. 4", "—", "Deut. 5", "—"),
    ("4th Sunday after Easter", "6", "—", "7", "—"),
    ("5th Sunday after Easter", "8", "—", "9", "—"),
    # Ascension & Whitsunday
    ("Sunday after Ascension", "12", "—", "13", "—"),
    ("Whitsunday", "16:1–17", "Acts 10:34–48", "Isa. 11", "Acts 19:1–20"),
    ("Trinity Sunday", "Gen. 1", "Matt. 3", "Gen. 18", "1 John 5"),
    # After Trinity
    ("1st Sunday after Trinity", "Josh. 10", "—", "Josh. 23", "—"),
    ("2nd Sunday after Trinity", "Judg. 4", "—", "Judg. 5", "—"),
    ("3rd Sunday after Trinity", "1 Sam. 2", "—", "1 Sam. 3", "—"),
    ("4th Sunday after Trinity", "12", "—", "13", "—"),
    ("5th Sunday after Trinity", "15", "—", "17", "—"),
    ("6th Sunday after Trinity", "2 Sam. 12", "—", "2 Sam. 19", "—"),
    ("7th Sunday after Trinity", "21", "—", "24", "—"),
    ("8th Sunday after Trinity", "1 Kgs. 13", "—", "1 Kgs. 17", "—"),
    ("9th Sunday after Trinity", "18", "—", "19", "—"),
    ("10th Sunday after Trinity", "21", "—", "22", "—"),
    ("11th Sunday after Trinity", "2 Kgs. 5", "—", "2 Kgs. 9", "—"),
    ("12th Sunday after Trinity", "10", "—", "18", "—"),
    ("13th Sunday after Trinity", "19", "—", "23", "—"),
    ("14th Sunday after Trinity", "Jer. 5", "—", "Jer. 22", "—"),
    ("15th Sunday after Trinity", "35", "—", "36", "—"),
    ("16th Sunday after Trinity", "Ezek. 2", "—", "Ezek. 13", "—"),
    ("17th Sunday after Trinity", "Ezek. 14", "—", "Ezek. 18", "—"),
    ("18th Sunday after Trinity", "20", "—", "24", "—"),
    ("19th Sunday after Trinity", "Dan. 3", "—", "Dan. 6", "—"),
    ("20th Sunday after Trinity", "Joel 2", "—", "Mic. 6", "—"),
    ("21st Sunday after Trinity", "Hab. 2", "—", "Prov. 1", "—"),
    ("22nd Sunday after Trinity", "Prov. 2", "—", "3", "—"),
    ("23rd Sunday after Trinity", "11", "—", "12", "—"),
    ("24th Sunday after Trinity", "13", "—", "14", "—"),
    ("25th Sunday after Trinity", "15", "—", "16", "—"),
    ("26th Sunday after Trinity", "17", "—", "19", "—"),
]

# ==============================================================================
# 2. HOLY DAYS PROPER LESSONS (Pages 3 - 5)
# ==============================================================================
HOLY_DAYS_1662 = [
    # Day, Mattins 1, Mattins 2, Evensong 1, Evensong 2
    ("St. Andrew", "Prov. 20", "—", "Prov. 21", "—"),
    ("St. Thomas the Apostle", "Prov. 23", "—", "Prov. 24", "—"),
    ("Nativity of Christ (Christmas Day)", "Isa. 9:1–7", "Luke 2:1–14", "Isa. 7:10–16", "Titus 3:4–8"),
    ("St. Stephen", "Prov. 28", "Acts 6:8–7:29", "Eccl. 4", "Acts 7:30–54"),
    ("St. John the Evangelist", "Eccl. 5", "Rev. 1", "Eccl. 6", "Rev. 22"),
    ("Innocents' Day", "Jer. 31:1–17", "—", "Wis. 1", "—"),
    ("Circumcision", "Gen. 17", "Rom. 2", "Deut. 10:12–22", "Col. 2"),
    ("Epiphany", "Isa. 60", "Luke 3:1–22", "Isa. 49", "John 2:1–11"),
    ("Conversion of St. Paul", "Wis. 5", "Acts 22:1–21", "Wis. 6", "Acts 26"),
    ("Purification of the V. Mary", "Wis. 9", "—", "Wis. 12", "—"),
    ("St. Matthias", "Wis. 19", "—", "Sir. 1", "—"),
    ("Annunciation of our Lady", "Sir. 2", "—", "Sir. 3", "—"),
    ("Wednesday before Easter", "Hos. 13", "John 11:45–57", "Hos. 14", "—"),
    ("Thursday before Easter", "Dan. 9", "John 13", "Jer. 31", "—"),
    ("Good Friday", "Gen. 22:1–19", "John 18", "Isa. 53", "1 Pet. 2"),
    ("Easter Even", "Zech. 9", "Luke 23:50–56", "Exod. 13", "Heb. 4"),
    ("Monday in Easter Week", "Exod. 16", "Matt. 28", "Exod. 17", "Acts 3"),
    ("Tuesday in Easter Week", "Exod. 20", "Luke 24:1–12", "Exod. 32", "1 Cor. 15"),
    ("St. Mark", "Sir. 4", "—", "Sir. 5", "—"),
    ("St. Philip and St. James", "Sir. 7", "John 1:43–51", "Sir. 9", "—"),
    ("Ascension Day", "Deut. 10", "Luke 24:44–53", "2 Kgs. 2", "Eph. 4:1–16"),
    ("Monday in Whitsun Week", "Gen. 11:1–9", "1 Cor. 12", "Num. 11:16–29", "1 Cor. 14:1–25"),
    ("Tuesday in Whitsun Week", "1 Sam. 19:18–24", "1 Thess. 5:12–23", "Deut. 30", "1 John 4:1–13"),
    ("St. Barnabas", "Sir. 10", "Acts 14", "Sir. 12", "Acts 15:1–35"),
    ("St. John the Baptist", "Mal. 3", "Matt. 3", "Mal. 4", "Matt. 14:1–12"),
    ("St. Peter", "Sir. 15", "Acts 3", "Sir. 19", "Acts 4"),
    ("St. James", "Sir. 21", "—", "Sir. 22", "—"),
    ("St. Bartholomew", "Sir. 24", "—", "Sir. 29", "—"),
    ("St. Matthew", "Sir. 35", "—", "Sir. 38", "—"),
    ("St. Michael", "Gen. 32", "Acts 12:1–19", "Dan. 10:5–21", "Jude 6–15"),
    ("St. Luke", "Sir. 51", "—", "Job 1", "—"),
    ("St. Simon and St. Jude", "Job 24–25", "—", "Job 42", "—"),
    ("All Saints", "Wis. 3:1–9", "Heb. 11:32–12:6", "Wis. 5:1–16", "Rev. 19:1–16"),
]

# ==============================================================================
# 3. PROPER PSALMS ON CERTAIN DAYS (Page 5)
# ==============================================================================
PROPER_PSALMS_1662 = [
    ("Christmas Day", "19, 45, 85", "89, 110, 132"),
    ("Ash Wednesday", "6, 32, 38", "102, 130, 143"),
    ("Good Friday", "22, 40, 54", "69, 88"),
    ("Easter Day", "2, 57, 111", "113, 114, 118"),
    ("Ascension Day", "8, 15, 21", "24, 47, 108"),
    ("Whitsunday", "48, 68", "104, 145"),
]

print("Sunday lessons count:", len(SUNDAYS_1662))
print("Holy Days lessons count:", len(HOLY_DAYS_1662))
print("Proper Psalms count:", len(PROPER_PSALMS_1662))
