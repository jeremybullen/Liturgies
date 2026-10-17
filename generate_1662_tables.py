import json

# ==============================================================================
# PART 1: PROPER LESSONS & DAILY CALENDAR (tableOfLessons1662.ts)
# ==============================================================================

SUNDAYS_LESSONS = [
    # Advent
    ("The First Sunday in Advent", "Isaiah 1", "", "Isaiah 2", "or Isaiah 4. v. 2"),
    ("The Second Sunday in Advent", "Isaiah 5", "", "Isaiah 11. to v. 11", "or Isaiah 24"),
    ("The Third Sunday in Advent", "Isaiah 25", "", "Isaiah 26", "or Isaiah 28. v. 5 to v. 19"),
    ("The Fourth Sunday in Advent", "Isaiah 30. to v. 27", "", "Isaiah 32", "or Isaiah 33. v. 2 to v. 23"),
    # Christmas
    ("The First Sunday after Christmas", "Isaiah 35", "", "Isaiah 38", "or Isaiah 40"),
    ("The Second Sunday after Christmas", "Isaiah 42", "", "Isaiah 43", "or Isaiah 44"),
    # Epiphany
    ("The First Sunday after Epiphany", "Isaiah 51", "", "Isaiah 52. v. 13 & 53", "or Isaiah 54"),
    ("The Second Sunday after Epiphany", "Isaiah 55", "", "Isaiah 57", "or Isaiah 61"),
    ("The Third Sunday after Epiphany", "Isaiah 62", "", "Isaiah 65", "or Isaiah 66"),
    ("The Fourth Sunday after Epiphany", "Job 27", "", "Job 28", "or Job 29"),
    ("The Fifth Sunday after Epiphany", "Prov. 1", "", "Prov. 3", "or Prov. 8"),
    ("The Sixth Sunday after Epiphany", "Prov. 9", "", "Prov. 11", "or Prov. 15"),
    # Pre-Lent
    ("Septuagesima", "Gen. 1 & 2. to v. 4", "Rev. 21. to v. 9", "Gen. 2. v. 4", "or Job 38 (2nd: Rev. 21. v. 9 to 22. v. 6)"),
    ("Sexagesima", "Gen. 3", "", "Gen. 6", "or Gen. 8"),
    ("Quinquagesima", "Gen. 9. to v. 20", "", "Gen. 12", "or Gen. 13"),
    # Lent
    ("The First Sunday in Lent", "Gen. 19. v. 12 to v. 30", "", "Gen. 22. to v. 20", "or Gen. 23"),
    ("The Second Sunday in Lent", "Gen. 27. to v. 41", "", "Gen. 28", "or Gen. 32"),
    ("The Third Sunday in Lent", "Gen. 37", "", "Gen. 39", "or Gen. 40"),
    ("The Fourth Sunday in Lent", "Gen. 42", "", "Gen. 43", "or Gen. 45"),
    ("The Fifth Sunday in Lent", "Exod. 3", "", "Exod. 5", "or Exod. 6. to v. 14"),
    ("The Sixth Sunday in Lent (Palm Sunday)", "Exod. 9", "Matt. 26", "Exod. 10 or Exod. 11", "Luke 19. v. 28 or Luke 20. v. 9 to v. 21"),
    # Easter
    ("Easter-Day", "Exod. 12. to v. 29", "Rev. 1. v. 10 to v. 19", "Exod. 12. v. 29 or Exod. 14", "John 20. v. 11 to v. 19 or Rev. 5"),
    ("The First Sunday after Easter (Low Sunday)", "Numb. 16. to v. 36", "1 Cor. 15. to v. 29", "Numb. 16. v. 36 or Numb. 17. to v. 12", "John 20. v. 24 to v. 30"),
    ("The Second Sunday after Easter", "Numb. 20. to v. 14", "", "Numb. 20. v. 14 to 21. v. 10", "or Numb. 21. v. 10"),
    ("The Third Sunday after Easter", "Numb. 22", "", "Numb. 23", "or Numb. 24"),
    ("The Fourth Sunday after Easter", "Deut. 4. to v. 23", "", "Deut. 4. v. 23 to v. 41", "or Deut. 5"),
    ("The Fifth Sunday after Easter (Rogation Sunday)", "Deut. 6", "", "Deut. 9", "or Deut. 10"),
    # Ascension
    ("Sunday after Ascension-Day", "Deut. 30", "", "Deut. 34", "or Joshua 1"),
    # Whitsun
    ("Whit-Sunday", "Deut. 16. to v. 18", "Rom. 8. to v. 18", "Isaiah 11 or Ezek. 36. v. 25", "Gal. 5. v. 16 or Acts 18. v. 24 to 19. v. 21"),
    # Trinity
    ("Trinity Sunday", "Isaiah 6. to v. 11", "Rev. 1. to v. 9", "Gen. 18 or Gen. 1 & 2. to v. 4", "Eph. 4. to v. 17 or Matt. 3"),
    # Sundays after Trinity
    ("The First Sunday after Trinity", "Josh. 3. v. 7 to 4. v. 15", "", "Josh. 5. v. 13 to 6. v. 21", "or Josh. 24"),
    ("The Second Sunday after Trinity", "Judges 4", "", "Judges 5", "or Judges 6. v. 11"),
    ("The Third Sunday after Trinity", "1 Sam. 2. to v. 27", "", "1 Sam. 3", "or 1 Sam. 4. to v. 19"),
    ("The Fourth Sunday after Trinity", "1 Sam. 12", "", "1 Sam. 13", "or Ruth 1"),
    ("The Fifth Sunday after Trinity", "1 Sam. 15. to v. 24", "", "1 Sam. 16", "or 1 Sam. 17"),
    ("The Sixth Sunday after Trinity", "2 Sam. 1", "", "2 Sam. 12. to v. 24", "or 2 Sam. 18"),
    ("The Seventh Sunday after Trinity", "1 Chron. 21", "", "1 Chron. 22", "or 1 Chron. 28. to v. 21"),
    ("The Eighth Sunday after Trinity", "1 Chron. 29. v. 9 to v. 29", "", "2 Chron. 1", "or 1 Kings 3"),
    ("The Ninth Sunday after Trinity", "1 Kings 10. to v. 25", "", "1 Kings 11. to v. 15", "or 1 Kings 11. v. 26"),
    ("The Tenth Sunday after Trinity", "1 Kings 12", "", "1 Kings 13", "or 1 Kings 17"),
    ("The Eleventh Sunday after Trinity", "1 Kings 18", "", "1 Kings 19", "or 1 Kings 21"),
    ("The Twelfth Sunday after Trinity", "1 Kings 22. to v. 41", "", "2 Kings 2. to v. 16", "or 2 Kings 4. v. 8 to v. 38"),
    ("The Thirteenth Sunday after Trinity", "2 Kings 5", "", "2 Kings 6. to v. 24", "or 2 Kings 7"),
    ("The Fourteenth Sunday after Trinity", "2 Kings 9", "", "2 Kings 10. to v. 32", "or 2 Kings 13"),
    ("The Fifteenth Sunday after Trinity", "2 Kings 18", "", "2 Kings 19", "or 2 Kings 23. to v. 31"),
    ("The Sixteenth Sunday after Trinity", "2 Chron. 36", "", "Nehem. 1 & 2. to v. 9", "or Nehem. 8"),
    ("The Seventeenth Sunday after Trinity", "Jerem. 5", "", "Jerem. 22", "or Jerem. 35"),
    ("The Eighteenth Sunday after Trinity", "Jerem. 36", "", "Ezek. 2", "or Ezek. 13. to v. 17"),
    ("The Nineteenth Sunday after Trinity", "Ezek. 14", "", "Ezek. 18", "or Ezek. 24. v. 15"),
    ("The Twentieth Sunday after Trinity", "Ezek. 34", "", "Ezek. 37", "or Daniel 1"),
    ("The Twenty-first Sunday after Trinity", "Daniel 3", "", "Daniel 4", "or Daniel 5"),
    ("The Twenty-second Sunday after Trinity", "Daniel 6", "", "Daniel 7. v. 9", "or Daniel 12"),
    ("The Twenty-third Sunday after Trinity", "Hosea 14", "", "Joel 2. v. 21", "or Joel 3. v. 9"),
    ("The Twenty-fourth Sunday after Trinity", "Amos 5", "", "Amos 9", "or Micah 4 & 5. to v. 8"),
    ("The Twenty-fifth Sunday after Trinity", "Micah 6", "", "Micah 7", "or Habak. 3"),
    ("The Twenty-sixth Sunday after Trinity", "Habak. 2", "", "Zeph. 3", "or Zechar. 3 & 4"),
    ("The Twenty-seventh Sunday after Trinity", "Eccles. 11 & 12", "", "Haggai 2. to v. 10", "or Malachi 3 & 4"),
]

HOLY_DAYS_LESSONS = [
    ("St. Andrew", "Isaiah 54", "John 1. v. 35 to v. 43", "Isaiah 65. to v. 17", "John 12. v. 20 to v. 42"),
    ("St. Thomas", "Job 42. to v. 7", "John 20. v. 19 to v. 24", "Isaiah 35", "John 14. to v. 8"),
    ("Nativity of Christ (Christmas-Day)", "Isaiah 9. to v. 8", "Luke 2. to v. 15", "Isaiah 7. v. 10 to v. 17", "Titus 3. v. 4 to v. 9"),
    ("St. Stephen", "Genesis 4. to v. 11", "Acts 6", "2 Chron. 24. v. 15 to v. 23", "Acts 8. to v. 9"),
    ("St. John Evangelist", "Exodus 33. v. 9", "John 13. v. 23 to v. 36", "Isaiah 6", "Revelation 1"),
    ("Innocents' Day", "Jeremiah 31. to v. 18", "", "Baruch 4. v. 21 to v. 31", ""),
    ("Circumcision", "Genesis 17. v. 9", "Romans 2. v. 17", "Deuter. 10. v. 12", "Colossians 2. v. 8 to v. 18"),
    ("Epiphany", "Isaiah 60", "Luke 3. v. 15 to v. 23", "Isaiah 49. v. 13 to v. 24", "John 2. to v. 12"),
    ("Conversion of St. Paul", "Isaiah 49. to v. 13", "Galatians 1. v. 11", "Jeremiah 1. to v. 11", "Acts 26. to v. 21"),
    ("Purification of the Virgin Mary", "Exodus 13. to v. 17", "", "Haggai 2. to v. 10", ""),
    ("St. Matthias", "1 Sam. 2. v. 27 to v. 36", "", "Isaiah 22. v. 15", ""),
    ("Annunciation of our Lady", "Genesis 3. to v. 16", "", "Isaiah 52. v. 7 to v. 13", ""),
    ("Ash-Wednesday", "Isaiah 58. to v. 13", "Mark 2. v. 13 to v. 23", "Jonah 3", "Heb. 12. v. 3 to v. 18"),
    ("Monday before Easter", "Lamen. 1. to v. 15", "John 14. to v. 15", "Lamen. 2. v. 13", "John 14. v. 15"),
    ("Tuesday before Easter", "Lamen. 3. to v. 34", "John 15. to v. 14", "Lamen. 3. v. 34", "John 15. v. 14"),
    ("Wednesday before Easter", "Lamen. 4. to v. 21", "John 16. to v. 16", "Daniel 9. v. 20", "John 16. v. 16"),
    ("Thursday before Easter", "Hosea 13. to v. 15", "John 17", "Hosea 14", "John 13. to v. 36"),
    ("Good Friday", "Genesis 22. to v. 20", "John 18", "Isaiah 52. v. 13 & 53", "1 Peter 2"),
    ("Easter-Even", "Zechariah 9", "Luke 23. v. 50", "Hosea 5. v. 8 to 6. v. 4", "Romans 6. to v. 14"),
    ("Monday in Easter-Week", "Exodus 15. to v. 22", "Luke 24. to v. 13", "Canticles 2. v. 10", "Matt. 28. to v. 10"),
    ("Tuesday in Easter-Week", "2 Kings 13. v. 14 to v. 22", "John 21. to v. 15", "Ezekiel 37. to v. 15", "John 21. v. 15"),
    ("St. Mark", "Isaiah 62. v. 6", "", "Ezekiel 1. to v. 15", ""),
    ("St. Philip and St. James", "Isaiah 61", "John 1. v. 43", "Zechariah 4", ""),
    ("Ascension-Day", "Daniel 7. v. 9 to v. 15", "Luke 24. v. 44", "2 Kings 2. to v. 16", "Hebrews 4"),
    ("Monday in Whitsun-Week", "Genesis 11. to v. 10", "1 Cor. 12. to v. 14", "Num. 11. v. 16 to v. 31", "1 Cor. 12. v. 27 & 13"),
    ("Tuesday in Whitsun-Week", "Joel 2. v. 21", "1 Thess. 5. v. 12 to v. 24", "Micah 4. to v. 8", "1 John 4. to v. 14"),
    ("St. Barnabas", "Deut. 33. to v. 12", "Acts 4. v. 31", "Nahum 1", "Acts 14. v. 8"),
    ("St. John Baptist", "Malachi 3. to v. 7", "Matthew 3", "Malachi 4", "Matthew 14. to v. 13"),
    ("St. Peter", "Ezekiel 3. v. 4 to v. 15", "John 21. v. 15 to v. 23", "Zechariah 3", "Acts 4. v. 8 to v. 23"),
    ("St. James", "2 Kings 1. to v. 16", "Luke 9. v. 51 to v. 57", "Jer. 26. v. 8 to v. 16", ""),
    ("St. Bartholomew", "Gen. 28. v. 10 to v. 18", "", "Deut. 18. v. 15", ""),
    ("St. Matthew", "1 Kings 19. v. 15", "", "1 Chron. 29. to v. 20", ""),
    ("St. Michael", "Genesis 32", "Acts 12. v. 5 to v. 18", "Daniel 10. v. 4", "Rev. 14. v. 14"),
    ("St. Luke", "Isaiah 55", "", "Eccles. 38. to v. 15", ""),
    ("St. Simon and St. Jude", "Isaiah 28. v. 9 to v. 17", "", "Jer. 3. v. 12 to v. 19", ""),
    ("All Saints", "Wisdom 3. to v. 10", "Heb. 11. v. 33 & 12. to v. 7", "Wisdom 5. to v. 17", "Rev. 19. to v. 17"),
]

PROPER_PSALMS = [
    ("Christmas-Day", "Psalm 19, 45, 85", "Psalm 89, 110, 132"),
    ("Ash-Wednesday", "Psalm 6, 32, 38", "Psalm 102, 130, 143"),
    ("Good Friday", "Psalm 22, 40, 54", "Psalm 69, 88"),
    ("Easter-Day", "Psalm 2, 57, 111", "Psalm 113, 114, 118"),
    ("Ascension-Day", "Psalm 8, 15, 21", "Psalm 24, 47, 108"),
    ("Whit-Sunday", "Psalm 48, 68", "Psalm 104, 145"),
]

print("Part 1 base tables ready.")
