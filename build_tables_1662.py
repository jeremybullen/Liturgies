import json

# Generate tableOfLessons1662.ts and calendarAndTables1662.ts

print("Writing tableOfLessons1662.ts...")

# ------------------------------------------------------------------------------
# 1. tableOfLessons1662.ts
# ------------------------------------------------------------------------------

content_tol = """# PROPER LESSONS
## To be read at Morning and Evening Prayer, on the Sundays, and other Holy-days throughout the Year.

---

## LESSONS PROPER FOR SUNDAYS.

| Sundays / Season | Mattins: 1st Lesson | Mattins: 2nd Lesson | Evensong: 1st Lesson | Evensong: 2nd Lesson / Alternative |
| :--- | :--- | :--- | :--- | :--- |
| **Sundays of Advent** | | | | |
| The First | Isaiah 1 | | Isaiah 2 | or Isaiah 4. v. 2 |
| The Second | Isaiah 5 | | Isaiah 11. to v. 11 | or Isaiah 24 |
| The Third | Isaiah 25 | | Isaiah 26 | or Isaiah 28. v. 5 to v. 19 |
| The Fourth | Isaiah 30. to v. 27 | | Isaiah 32 | or Isaiah 33. v. 2 to v. 23 |
| **Sundays after Christmas** | | | | |
| The First | Isaiah 35 | | Isaiah 38 | or Isaiah 40 |
| The Second | Isaiah 42 | | Isaiah 43 | or Isaiah 44 |
| **Sundays after Epiphany** | | | | |
| The First | Isaiah 51 | | Isaiah 52. v. 13 & 53 | or Isaiah 54 |
| The Second | Isaiah 55 | | Isaiah 57 | or Isaiah 61 |
| The Third | Isaiah 62 | | Isaiah 65 | or Isaiah 66 |
| The Fourth | Job 27 | | Job 28 | or Job 29 |
| The Fifth | Prov. 1 | | Prov. 3 | or Prov. 8 |
| The Sixth | Prov. 9 | | Prov. 11 | or Prov. 15 |
| **Septuagesima** | Gen. 1 & 2. to v. 4 | Rev. 21. to v. 9 | Gen. 2. v. 4 or Job 38 | Rev. 21. v. 9 to 22. v. 6 |
| **Sexagesima** | Gen. 3 | | Gen. 6 | or Gen. 8 |
| **Quinquagesima** | Gen. 9. to v. 20 | | Gen. 12 | or Gen. 13 |
| **Sundays in Lent** | | | | |
| The First | Gen. 19. v. 12 to v. 30 | | Gen. 22. to v. 20 | or Gen. 23 |
| The Second | Gen. 27. to v. 41 | | Gen. 28 | or Gen. 32 |
| The Third | Gen. 37 | | Gen. 39 | or Gen. 40 |
| The Fourth | Gen. 42 | | Gen. 43 | or Gen. 45 |
| The Fifth | Exod. 3 | | Exod. 5 | or Exod. 6. to v. 14 |
| The Sixth (Palm Sunday) | Exod. 9 | Matt. 26 | Exod. 10 or Exod. 11 | Luke 19. v. 28 or Luke 20. v. 9 to v. 21 |
| **Easter-Day** | Exod. 12. to v. 29 | Rev. 1. v. 10 to v. 19 | Exod. 12. v. 29 or Exod. 14 | John 20. v. 11 to v. 19 or Rev. 5 |
| **Sundays after Easter** | | | | |
| The First (Low Sunday) | Numb. 16. to v. 36 | 1 Cor. 15. to v. 29 | Numb. 16. v. 36 or Numb. 17. to v. 12 | John 20. v. 24 to v. 30 |
| The Second | Numb. 20. to v. 14 | | Numb. 20. v. 14 to 21. v. 10 | or Numb. 21. v. 10 |
| The Third | Numb. 22 | | Numb. 23 | or Numb. 24 |
| The Fourth | Deut. 4. to v. 23 | | Deut. 4. v. 23 to v. 41 | or Deut. 5 |
| The Fifth (Rogation Sunday) | Deut. 6 | | Deut. 9 | or Deut. 10 |
| **Sunday after Ascension-Day** | Deut. 30 | | Deut. 34 | or Joshua 1 |
| **Whit-Sunday** | Deut. 16. to v. 18 | Rom. 8. to v. 18 | Isaiah 11 or Ezek. 36. v. 25 | Gal. 5. v. 16 or Acts 18. v. 24 to 19. v. 21 |
| **Trinity Sunday** | Isaiah 6. to v. 11 | Rev. 1. to v. 9 | Gen. 18 or Gen. 1 & 2. to v. 4 | Eph. 4. to v. 17 or Matt. 3 |
| **Sundays after Trinity** | | | | |
| The First | Josh. 3. v. 7 to 4. v. 15 | | Josh. 5. v. 13 to 6. v. 21 | or Josh. 24 |
| The Second | Judges 4 | | Judges 5 | or Judges 6. v. 11 |
| The Third | 1 Sam. 2. to v. 27 | | 1 Sam. 3 | or 1 Sam. 4. to v. 19 |
| The Fourth | 1 Sam. 12 | | 1 Sam. 13 | or Ruth 1 |
| The Fifth | 1 Sam. 15. to v. 24 | | 1 Sam. 16 | or 1 Sam. 17 |
| The Sixth | 2 Sam. 1 | | 2 Sam. 12. to v. 24 | or 2 Sam. 18 |
| The Seventh | 1 Chron. 21 | | 1 Chron. 22 | or 1 Chron. 28. to v. 21 |
| The Eighth | 1 Chron. 29. v. 9 to v. 29 | | 2 Chron. 1 | or 1 Kings 3 |
| The Ninth | 1 Kings 10. to v. 25 | | 1 Kings 11. to v. 15 | or 1 Kings 11. v. 26 |
| The Tenth | 1 Kings 12 | | 1 Kings 13 | or 1 Kings 17 |
| The Eleventh | 1 Kings 18 | | 1 Kings 19 | or 1 Kings 21 |
| The Twelfth | 1 Kings 22. to v. 41 | | 2 Kings 2. to v. 16 | or 2 Kings 4. v. 8 to v. 38 |
| The Thirteenth | 2 Kings 5 | | 2 Kings 6. to v. 24 | or 2 Kings 7 |
| The Fourteenth | 2 Kings 9 | | 2 Kings 10. to v. 32 | or 2 Kings 13 |
| The Fifteenth | 2 Kings 18 | | 2 Kings 19 | or 2 Kings 23. to v. 31 |
| The Sixteenth | 2 Chron. 36 | | Nehem. 1 & 2. to v. 9 | or Nehem. 8 |
| The Seventeenth | Jerem. 5 | | Jerem. 22 | or Jerem. 35 |
| The Eighteenth | Jerem. 36 | | Ezek. 2 | or Ezek. 13. to v. 17 |
| The Nineteenth | Ezek. 14 | | Ezek. 18 | or Ezek. 24. v. 15 |
| The Twentieth | Ezek. 34 | | Ezek. 37 | or Daniel 1 |
| The Twenty-first | Daniel 3 | | Daniel 4 | or Daniel 5 |
| The Twenty-second | Daniel 6 | | Daniel 7. v. 9 | or Daniel 12 |
| The Twenty-third | Hosea 14 | | Joel 2. v. 21 | or Joel 3. v. 9 |
| The Twenty-fourth | Amos 5 | | Amos 9 | or Micah 4 & 5. to v. 8 |
| The Twenty-fifth | Micah 6 | | Micah 7 | or Habak. 3 |
| The Twenty-sixth | Habak. 2 | | Zeph. 3 | or Zechar. 3 & 4 |
| The Twenty-seventh | Eccles. 11 & 12 | | Haggai 2. to v. 10 | or Malachi 3 & 4 |

*Note.—That the Lessons appointed in the above Table for the Twenty-seventh Sunday after Trinity shall always be read on the Sunday next before Advent.*

---

## LESSONS PROPER FOR HOLY-DAYS.

| Holy-Days | Mattins: 1st Lesson | Mattins: 2nd Lesson | Evensong: 1st Lesson | Evensong: 2nd Lesson |
| :--- | :--- | :--- | :--- | :--- |
| **St. Andrew** | Isaiah 54 | John 1. v. 35 to v. 43 | Isaiah 65. to v. 17 | John 12. v. 20 to v. 42 |
| **St. Thomas** | Job 42. to v. 7 | John 20. v. 19 to v. 24 | Isaiah 35 | John 14. to v. 8 |
| **Nativity of Christ** | Isaiah 9. to v. 8 | Luke 2. to v. 15 | Isaiah 7. v. 10 to v. 17 | Titus 3. v. 4 to v. 9 |
| **St. Stephen** | Genesis 4. to v. 11 | Acts 6 | 2 Chron. 24. v. 15 to v. 23 | Acts 8. to v. 9 |
| **St. John Evangelist** | Exodus 33. v. 9 | John 13. v. 23 to v. 36 | Isaiah 6 | Revelation 1 |
| **Innocents' Day** | Jeremiah 31. to v. 18 | | Baruch 4. v. 21 to v. 31 | |
| **Circumcision** | Genesis 17. v. 9 | Romans 2. v. 17 | Deuter. 10. v. 12 | Colossians 2. v. 8 to v. 18 |
| **Epiphany** | Isaiah 60 | Luke 3. v. 15 to v. 23 | Isaiah 49. v. 13 to v. 24 | John 2. to v. 12 |
| **Conversion of St. Paul** | Isaiah 49. to v. 13 | Galatians 1. v. 11 | Jeremiah 1. to v. 11 | Acts 26. to v. 21 |
| **Purification of the Virgin Mary** | Exodus 13. to v. 17 | | Haggai 2. to v. 10 | |
| **St. Matthias** | 1 Sam. 2. v. 27 to v. 36 | | Isaiah 22. v. 15 | |
| **Annunciation of our Lady** | Genesis 3. to v. 16 | | Isaiah 52. v. 7 to v. 13 | |
| **Ash-Wednesday** | Isaiah 58. to v. 13 | Mark 2. v. 13 to v. 23 | Jonah 3 | Heb. 12. v. 3 to v. 18 |
| **Monday before Easter** | Lamen. 1. to v. 15 | John 14. to v. 15 | Lamen. 2. v. 13 | John 14. v. 15 |
| **Tuesday before Easter** | Lamen. 3. to v. 34 | John 15. to v. 14 | Lamen. 3. v. 34 | John 15. v. 14 |
| **Wednesday before Easter** | Lamen. 4. to v. 21 | John 16. to v. 16 | Daniel 9. v. 20 | John 16. v. 16 |
| **Thursday before Easter** | Hosea 13. to v. 15 | John 17 | Hosea 14 | John 13. to v. 36 |
| **Good Friday** | Genesis 22. to v. 20 | John 18 | Isaiah 52. v. 13 & 53 | 1 Peter 2 |
| **Easter-Even** | Zechariah 9 | Luke 23. v. 50 | Hosea 5. v. 8 to 6. v. 4 | Romans 6. to v. 14 |
| **Monday in Easter-Week** | Exodus 15. to v. 22 | Luke 24. to v. 13 | Canticles 2. v. 10 | Matt. 28. to v. 10 |
| **Tuesday in Easter-Week** | 2 Kings 13. v. 14 to v. 22 | John 21. to v. 15 | Ezekiel 37. to v. 15 | John 21. v. 15 |
| **St. Mark** | Isaiah 62. v. 6 | | Ezekiel 1. to v. 15 | |
| **St. Philip and St. James** | Isaiah 61 | John 1. v. 43 | Zechariah 4 | |
| **Ascension-Day** | Daniel 7. v. 9 to v. 15 | Luke 24. v. 44 | 2 Kings 2. to v. 16 | Hebrews 4 |
| **Monday in Whitsun-Week** | Genesis 11. to v. 10 | 1 Cor. 12. to v. 14 | Num. 11. v. 16 to v. 31 | 1 Cor. 12. v. 27 & 13 |
| **Tuesday in Whitsun-Week** | Joel 2. v. 21 | 1 Thess. 5. v. 12 to v. 24 | Micah 4. to v. 8 | 1 John 4. to v. 14 |
| **St. Barnabas** | Deut. 33. to v. 12 | Acts 4. v. 31 | Nahum 1 | Acts 14. v. 8 |
| **St. John Baptist** | Malachi 3. to v. 7 | Matthew 3 | Malachi 4 | Matthew 14. to v. 13 |
| **St. Peter** | Ezekiel 3. v. 4 to v. 15 | John 21. v. 15 to v. 23 | Zechariah 3 | Acts 4. v. 8 to v. 23 |
| **St. James** | 2 Kings 1. to v. 16 | Luke 9. v. 51 to v. 57 | Jer. 26. v. 8 to v. 16 | |
| **St. Bartholomew** | Gen. 28. v. 10 to v. 18 | | Deut. 18. v. 15 | |
| **St. Matthew** | 1 Kings 19. v. 15 | | 1 Chron. 29. to v. 20 | |
| **St. Michael** | Genesis 32 | Acts 12. v. 5 to v. 18 | Daniel 10. v. 4 | Rev. 14. v. 14 |
| **St. Luke** | Isaiah 55 | | Eccles. 38. to v. 15 | |
| **St. Simon and St. Jude** | Isaiah 28. v. 9 to v. 17 | | Jer. 3. v. 12 to v. 19 | |
| **All Saints** | Wisdom 3. to v. 10 | Heb. 11. v. 33 & 12. to v. 7 | Wisdom 5. to v. 17 | Rev. 19. to v. 17 |

---

## PROPER PSALMS ON CERTAIN DAYS.

| Certain Days | Mattins | Evensong |
| :--- | :--- | :--- |
| **Christmas-Day** | Psalm 19, 45, 85 | Psalm 89, 110, 132 |
| **Ash-Wednesday** | Psalm 6, 32, 38 | Psalm 102, 130, 143 |
| **Good Friday** | Psalm 22, 40, 54 | Psalm 69, 88 |
| **Easter-Day** | Psalm 2, 57, 111 | Psalm 113, 114, 118 |
| **Ascension-Day** | Psalm 8, 15, 21 | Psalm 24, 47, 108 |
| **Whit-Sunday** | Psalm 48, 68 | Psalm 104, 145 |

---

## THE CALENDAR, WITH THE TABLE OF LESSONS.

### JANUARY HATH XXXI. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | A | **Circumcision.** | Genesis 17. v. 9 | Romans 2. v. 17 | Deuter. 10. v. 12 | Colossians 2. v. 8 to v. 18 |
| 2 | b | | Gen. i. to v. 20 | Matth. i. v. 18 | Genesis i. v. 20 to ii. v. 4 | Acts i. |
| 3 | c | | ii. v. 4 | ii. | ii. to v. 22 | ii. to v. 22 |
| 4 | d | | iii. v. 20 to iv. v. 16 | iii. | iv. v. 16 | iii. |
| 5 | e | | v. to v. 28 | iv. to v. 23 | v. v. 28 to vi. v. 9 | iv. to v. 32 |
| 6 | f | **Epiphany.** | Isaiah 60 | Luke 3. v. 15 to v. 23 | Isaiah 49. v. 13 to v. 24 | John 2. to v. 12 |
| 7 | g | | Genesis vi. v. 9 | iv. v. 23 to v. v. 13 | vii. | iv. v. 32 to v. v. 17 |
| 8 | A | Lucian, P. & M. | Genesis viii. | v. v. 13 to v. 33 | ix. to v. 20 | v. v. 17 |
| 9 | b | | xi. to v. 10 | v. v. 33 | xii. | vi. |
| 10 | c | | xiii. | vi. to v. 19 | xiv. | vii. to v. 35 |
| 11 | d | | xv. | vi. v. 19 to vii. v. 7 | xvi. | vii. v. 35 to viii. v. 5 |
| 12 | e | | xvii. to v. 23 | vii. v. 7 | xviii. to v. 17 | viii. v. 5 to v. 26 |
| 13 | f | Hilary, B. & C. | Gen. xviii. v. 17 | viii. to v. 18 | xix. v. 12 to v. 30 | viii. v. 26 |
| 14 | g | | xx. | viii. v. 18 | xxi. to v. 22 | ix. to v. 18 |
| 15 | A | | xxi. v. 33 to xxii. v. 20 | ix. to v. 18 | xxiii. | ix. v. 18 |
| 16 | b | | xxiv. to v. 29 | ix. v. 18 | xxiv. v. 29 to v. 52 | ix. v. 23 |
| 17 | c | | xxiv. v. 52 | x. to v. 24 | xxv. v. 5 to v. 19 | x. to v. 24 |
| 18 | d | Prisca, V. & M. | Gen. xxv. v. 19 | x. v. 24 | xxvi. to v. 18 | x. v. 24 |
| 19 | e | | xxvi. v. 18 | xi. | xxvii. to v. 30 | xi. |
| 20 | f | Fabian, B. & M. | Gen. xxvii. v. 30 | xii. to v. 22 | xxviii. | xii. |
| 21 | g | Agnes, V. & M. | Gen. xxix. to v. 21 | xii. v. 22 | xxxi. to v. 25 | xiii. to v. 26 |
| 22 | A | Vincent, D. & M. | Gen. xxxi. v. 36 | xiii. to v. 24 | xxxii. to v. 22 | xiii. v. 26 |
| 23 | b | | xxxii. v. 22 | xiii. v. 24 to v. 53 | xxxiii. | xiv. |
| 24 | c | | xxxv. to v. 21 | xiii. v. 53 to xiv. v. 13 | xxxvii. to v. 12 | xv. to v. 30 |
| 25 | d | **Conversion of St. Paul.** | Isaiah 49. to v. 13 | Galatians 1. v. 11 | Jeremiah 1. to v. 11 | Acts 26. to v. 21 |
| 26 | e | | Genesis xxxvii. v. 12 | xiv. v. 13 | xxxix. | xv. v. 30 to xvi. v. 16 |
| 27 | f | | xl. | xv. to v. 21 | xli. to v. 17 | xvi. v. 16 |
| 28 | g | | xli. v. 17 to v. 53 | xv. v. 21 | xli. v. 53 to xlii. v. 25 | xvii. to v. 16 |
| 29 | A | | xlii. v. 25 | xvi. to v. 24 | xliii. to v. 25 | xvii. v. 16 |
| 30 | b | | xliii. v. 25 to xliv. v. 14 | xvi. v. 24 to xvii. v. 14 | xliv. v. 14 | xviii. to v. 24 |
| 31 | c | | xlv. to v. 25 | xvii. v. 14 | xlv. v. 25 to xlvi. v. 8 | xviii. v. 24 to xix. v. 21 |

---

### FEBRUARY HATH XXVIII. DAYS, AND IN EVERY LEAP-YEAR XXIX. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | d | *Fast.* | Gen. xlvi. v. 26 to xlvii. v. 13 | Matthew xviii. to v. 21 | Gen. xlvii. v. 13 | Acts xix. v. 21 |
| 2 | e | **Purif. V. Mary.** | Exodus 13. to v. 17 | | Haggai 2. to v. 10 | |
| 3 | f | Blasius, B. & M. | Genesis xlviii. | xviii. v. 21 to xix. v. 3 | xlix. | xx. to v. 17 |
| 4 | g | | l. | xix. v. 3 to v. 27 | Exodus i. | xx. v. 17 |
| 5 | A | Agatha, V. & M. | Exodus ii. | xix. v. 27 to xx. v. 17 | iii. | xxi. to v. 17 |
| 6 | b | | iv. to v. 24 | xx. v. 17 | iv. v. 27 to v. v. 15 | xxi. v. 17 to v. 37 |
| 7 | c | | v. v. 15 to vi. v. 14 | xxi. to v. 23 | vi. v. 28 to vii. v. 14 | xxi. v. 37 to xxii. v. 23 |
| 8 | d | | vii. v. 14 | xxi. v. 23 | viii. to v. 20 | xxii. v. 23 to xxiii. v. 12 |
| 9 | e | | viii. v. 20 to ix. v. 13 | xxii. to v. 15 | ix. v. 13 | xxiii. v. 12 |
| 10 | f | | x. to v. 21 | xxii. v. 15 to v. 41 | x. v. 21 & xi. | xxiv. |
| 11 | g | | xii. to v. 21 | xxii. v. 41 to xxiii. v. 13 | xii. v. 21 to v. 43 | xxv. |
| 12 | A | | xii. v. 43 to xiii. v. 17 | xxiii. v. 13 | xiii. v. 17 to xiv. v. 10 | xxvi. |
| 13 | b | | xiv. v. 10 | xxiv. to v. 29 | xv. to v. 22 | xxvii. to v. 18 |
| 14 | c | Valentine, Bp. | Exod. xv. v. 22 to xvi. v. 11 | xxiv. v. 29 | xvi. v. 11 | xxvii. v. 18 |
| 15 | d | | xvii. | xxv. to v. 31 | xviii. | xxviii. to v. 17 |
| 16 | e | | xix. | xxv. v. 31 | xx. to v. 22 | xxviii. v. 17 |
| 17 | f | | xxi. to v. 18 | xxvi. to v. 31 | xxii. v. 21 to xxiii. v. 10 | Romans i. |
| 18 | g | | xxiii. v. 14 | xxvi. v. 31 to v. 57 | xxiv. | ii. to v. 17 |
| 19 | A | | xxv. to v. 23 | xxvi. v. 57 | xxviii. to v. 13 | ii. v. 17 |
| 20 | b | | xxviii. v. 29 to v. 42 | xxvii. to v. 27 | xxix. v. 35 to xxx. v. 11 | iii. |
| 21 | c | | xxxi. | xxvii. v. 27 to v. 57 | xxxii. to v. 15 | iv. |
| 22 | d | | xxxii. v. 15 | xxvii. v. 57 | xxxiii. to v. 12 | v. |
| 23 | e | *Fast.* | xxxiii. v. 12 to xxxiv. v. 10 | xxviii. | xxxiv. v. 10 to v. 27 | vi. |
| 24 | f | **St. Matthias, Ap.** | 1 Sam. 2. v. 27 to v. 36 | Mark i. to v. 21 | Isaiah 22. v. 15 | Romans vii. |
| 25 | g | | Exodus xxxiv. v. 27 | i. v. 21 | xxxv. v. 29 to xxxvi. v. 8 | viii. to v. 18 |
| 26 | A | | xxxix. v. 30 | ii. to v. 23 | xl. to v. 17 | viii. v. 18 |
| 27 | b | | xl. v. 17 | ii. v. 23 to iii. v. 13 | Levit. ix. v. 22 to x. v. 12 | ix. to v. 19 |
| 28 | c | | Lev. xiv. to v. 23 | iii. v. 13 | xvi. to v. 23 | ix. v. 19 |
| 29 | | *(Leap-Year)* | xix. to v. 19 | iv. to v. 35 | xix. v. 30 to xx. v. 9 | xii. |

---

### MARCH HATH XXXI. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | d | David, Abp. | Lev. xxv. to v. 18 | Mark iv. v. 35 to v. v. 21 | Lev. xxv. v. 18 to v. 44 | Romans xi. to v. 25 |
| 2 | e | Chad, Bp. | Lev. xxvi. to v. 21 | v. v. 21 | xxvi. v. 21 | xi. v. 25 |
| 3 | f | | Numbers vi. | vi. to v. 14 | Num. ix. v. 15 to x. v. 11 | xii. |
| 4 | g | | x. v. 11 | vi. v. 14 to v. 30 | xi. to v. 24 | xiii. |
| 5 | A | | xi. v. 24 | vi. v. 30 | xii. | xiv. & xv. to v. 8 |
| 6 | b | | xiii. v. 17 | vii. to v. 24 | xiv. to v. 26 | xv. v. 8 |
| 7 | c | Perpetua, M. | Num. xiv. v. 26 | vii. v. 24 to viii. v. 10 | xvi. to v. 23 | xvi. |
| 8 | d | | xvi. v. 23 | viii. v. 10 to ix. v. 2 | xvii. | 1 Cor. i. to v. 26 |
| 9 | e | | xx. to v. 14 | ix. v. 2 to v. 30 | xx. v. 14 | i. v. 26 & ii. |
| 10 | f | | xxi. to v. 10 | ix. v. 30 | xxi. v. 10 to v. 32 | iii. |
| 11 | g | | xxii. to v. 22 | x. to v. 32 | xxii. v. 22 | iv. to v. 18 |
| 12 | A | Gregory, M. B. | Numbers xxiii. | x. v. 32 | xxiv. | iv. v. 18 & v. |
| 13 | b | | xxv. | xi. to v. 27 | xxvii. v. 12 | vi. |
| 14 | c | | Deut. i. to v. 19 | xi. v. 27 to xii. v. 13 | Deuter. i. v. 19 | vii. to v. 25 |
| 15 | d | | ii. to v. 26 | xii. v. 13 to v. 35 | ii. v. 26 to iii. v. 18 | vii. v. 25 |
| 16 | e | | iii. v. 18 | xii. v. 35 to xiii. v. 14 | iv. to v. 25 | viii. |
| 17 | f | | iv. v. 25 to v. 41 | xiii. v. 14 | v. to v. 22 | ix. |
| 18 | g | Edward, King. | Deut. v. v. 22 | xiv. to v. 27 | vi. | x. & xi. v. 1 |
| 19 | A | | vii. to v. 12 | xiv. v. 27 to v. 53 | vii. v. 12 | xi. v. 2 to v. 17 |
| 20 | b | | viii. | xiv. v. 53 | x. v. 8 | xi. v. 17 |
| 21 | c | Benedict, Abb. | Deut. xi. to v. 18 | xv. to v. 42 | xi. v. 18 | xii. to v. 28 |
| 22 | d | | xv. to v. 16 | xv. v. 42 & xvi. | xvii. v. 8 | xii. v. 28 & xiii. |
| 23 | e | | xviii. v. 9 | Luke i. to v. 26 | xxiv. v. 5 | xiv. to v. 20 |
| 24 | f | *Fast.* | xxvi. | i. v. 26 to v. 46 | xxvii. | xiv. v. 20 |
| 25 | g | **Annun. V. Mary.** | Genesis 3. to v. 16 | i. v. 46 | Isaiah 52. v. 7 to v. 13 | 1 Cor. xv. to v. 35 |
| 26 | A | | Deut. xxviii. to v. 15 | ii. to v. 21 | xxviii. v. 15 to v. 47 | xv. v. 35 |
| 27 | b | | xxviii. v. 47 | ii. v. 21 | xxix. v. 9 | xvi. |
| 28 | c | | xxx. | iii. to v. 23 | xxxi. to v. 14 | 2 Cor. i. to v. 23 |
| 29 | d | | xxxi. v. 14 to v. 30 | iv. to v. 16 | xxxi. v. 30 to xxxii. v. 44 | i. v. 23 to ii. v. 14 |
| 30 | e | | xxxii. v. 44 | iv. v. 16 | xxxiii. | ii. v. 14 & iii. |
| 31 | f | | xxxiv. | v. to v. 17 | Joshua i. | iv. |

---

### APRIL HATH XXX. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | g | | Joshua ii. | Luke v. v. 17 | Joshua iii. | 2 Corinth. v. |
| 2 | A | | iv. | vi. to v. 20 | v. | vi. & vii. v. 1 |
| 3 | b | Richard, Bp. | Joshua vi. | vi. v. 20 | vii. | vii. v. 2 |
| 4 | c | St. Ambrose, B. | Joshua ix. v. 3 | vii. to v. 24 | x. to v. 16 | viii. |
| 5 | d | | xxi. v. 43 to xxii. v. 11 | vii. v. 24 | xxii. v. 11 | ix. |
| 6 | e | | xxiii. | viii. to v. 26 | xxiv. | x. |
| 7 | f | | Judges ii. | viii. v. 26 | Judges iv. | xi. to v. 30 |
| 8 | g | | v. | ix. to v. 28 | vi. to v. 24 | xi. v. 30 to xii. v. 14 |
| 9 | A | | vi. v. 24 | ix. v. 28 to v. 51 | vii. | xii. v. 14 & xiii. |
| 10 | b | | viii. v. 32 to ix. v. 25 | ix. v. 51 to x. v. 17 | x. | Galatians i. |
| 11 | c | | xi. to v. 29 | x. v. 17 | xi. v. 29 | ii. |
| 12 | d | | xiii. | xi. to v. 29 | xiv. | iii. |
| 13 | e | | xv. | xi. v. 29 | xvi. | iv. to v. 21 |
| 14 | f | | Ruth i. | xii. to v. 35 | Ruth ii. | iv. v. 21 to v. v. 13 |
| 15 | g | | iii. | xii. v. 35 | iv. | v. v. 13 |
| 16 | A | | 1 Samuel i. | xiii. to v. 18 | 1 Samuel ii. to v. 21 | vi. |
| 17 | b | | ii. v. 21 | xiii. v. 18 | iii. | Ephesians i. |
| 18 | c | | iv. | xiv. to v. 25 | v. | ii. |
| 19 | d | Alphege, Abp. | 1 Samuel vi. | xiv. v. 25 to xv. v. 11 | vii. | iii. |
| 20 | e | | viii. | xv. v. 11 | ix. | iv. to v. 25 |
| 21 | f | | x. | xvi. | xi. | iv. v. 25 to v. v. 22 |
| 22 | g | | xii. | xvii. to v. 20 | xiii. | v. v. 22 to vi. v. 10 |
| 23 | A | St. George, M. | 1 Samuel xiv. to v. 24 | xvii. v. 20 | xiv. v. 24 to v. 47 | vi. v. 10 |
| 24 | b | | xv. | xviii. to v. 31 | xvi. | Philippians i. |
| 25 | c | **St. Mark, Evan.** | Isaiah 62. v. 6 | xviii. v. 31 to xix. v. 11 | Ezekiel 1. to v. 15 | ii. |
| 26 | d | | 1 Sam. xvii. to v. 31 | xix. v. 11 to v. 28 | xvii. v. 31 to v. 55 | iii. |
| 27 | e | | xvii. v. 55 to xviii. v. 17 | xix. v. 28 | xix. | iv. |
| 28 | f | | xx. to v. 18 | xx. to v. 27 | xx. v. 18 | Colos. i. to v. 21 |
| 29 | g | | xxi. | xx. v. 27 to xxi. v. 5 | xxii. | i. v. 21 to ii. v. 8 |
| 30 | A | | xxiii. | xxi. v. 5 | xxiv. & xxv. v. 1 | ii. v. 8 |

---

### MAY HATH XXXI. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | b | **St. Philip & St. James.** | Isaiah 61 | John 1. v. 43 | Zechariah 4 | Colos. iii. to v. 18 |
| 2 | c | | 1 Sam. xxvi. | Luke xxii. to v. 31 | 1 Sam. xxviii. v. 3 | iii. v. 18 to iv. v. 7 |
| 3 | d | Inven. of Cross. | | | | |
| | | | 1 Samuel xxxi. | xxii. v. 31 to v. 54 | 2 Samuel i. | iv. v. 7 |
| 4 | e | | 2 Sam. iii. v. 17 | xxii. v. 54 | iv. | 1 Thess. i. |
| 5 | f | | vi. | xxiii. to v. 26 | vii. to v. 18 | ii. |
| 6 | g | St. John E. ante Port. Lat. | 2 Sam. vii. v. 18 | xxiii. v. 26 to v. 50 | ix. | iii. |
| 7 | A | | xi. | xxiii. v. 50 to xxiv. v. 13 | xii. to v. 24 | iv. |
| 8 | b | | xiii. v. 38 to xiv. v. 26 | xxiv. v. 13 | xv. to v. 16 | v. |
| 9 | c | | xv. v. 16 | John i. to v. 29 | xvi. to v. 15 | 2 Thess. i. |
| 10 | d | | xvi. v. 15 to xvii. v. 24 | i. v. 29 | xvii. v. 24 to xviii. v. 18 | ii. |
| 11 | e | | xviii. v. 18 | ii. | xix. to v. 24 | iii. |
| 12 | f | | xix. v. 24 | iii. to v. 22 | xxi. to v. 15 | 1 Tim. i. to v. 18 |
| 13 | g | | xxiii. to v. 24 | iii. v. 22 | xxiv. | i. v. 18 & ii. |
| 14 | A | | 1 Kin. i. to v. 28 | iv. to v. 31 | 1 Kings i. v. 28 to v. 49 | iii. |
| 15 | b | | 1 Chr. xxix. v. 10 | iv. v. 31 | iii. | iv. |
| 16 | c | | 1 Kings iv. v. 20 | v. to v. 24 | v. | v. |
| 17 | d | | vi. to v. 15 | v. v. 24 | vii. to v. 22 | vi. |
| 18 | e | | viii. v. 22 to v. 54 | vi. to v. 22 | viii. v. 54 to ix. v. 10 | 2 Tim. i. |
| 19 | f | Dunstan, A. C. | 1 Kings x. | vi. v. 22 to v. 41 | xi. to v. 26 | ii. |
| 20 | g | | xi. v. 26 | vi. v. 41 | xii. to v. 25 | iii. |
| 21 | A | | xii. v. 25 to xiii. v. 11 | vii. to v. 25 | xiii. v. 11 | iv. |
| 22 | b | | xiv. to v. 21 | vii. v. 25 | xvii. | Titus i. |
| 23 | c | | xvi. v. 8 | viii. to v. 31 | xviii. v. 17 | ii. |
| 24 | d | | xviii. to v. 17 | viii. v. 31 | xix. | iii. |
| 25 | e | | xix. | ix. to v. 39 | xxi. | Philemon. |
| 26 | f | Augustin, Abp. | 1 Kings xxii. to v. 41 | ix. v. 39 to x. v. 22 | 2 Kings i. | Hebrews i. |
| 27 | g | Ven. Bede, Pr. | 2 Kings ii. | x. v. 22 | iv. v. 8 | ii. & iii. to v. 7 |
| 28 | A | | v. | xi. to v. 17 | vi. to v. 24 | iii. v. 7 to iv. v. 14 |
| 29 | b | | vi. v. 24 | xi. v. 17 to v. 47 | vii. | iv. v. 14 & v. |
| 30 | c | | viii. to v. 16 | xi. v. 47 to xii. v. 20 | ix. | vi. |
| 31 | d | | x. to v. 18 | xii. v. 20 | x. v. 18 | vii. |

---

### JUNE HATH XXX. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | e | Nicomede, P. | 2 Kings xiii. | John xiii. to v. 21 | 2 Kings xvii. to v. 24 | Hebrews viii. |
| 2 | f | | xvii. v. 24 | xiii. v. 21 | 2 Chron. xii. | ix. |
| 3 | g | | 2 Chron. xiii. | xiv. | xiv. | x. to v. 19 |
| 4 | A | | xv. | xv. | xvi. & xvii. to v. 14 | x. v. 19 |
| 5 | b | Boniface, Bp. | 2 Chron. xix. | xvi. to v. 16 | xx. to v. 31 | xi. to v. 17 |
| 6 | c | | xx. v. 31 & xxi. | xvi. v. 16 | xxii. | xi. v. 17 |
| 7 | d | | xxiii. | xvii. | xxiv. | xii. |
| 8 | e | | xxv. | xviii. to v. 28 | xxvi. & xxvii. | xiii. |
| 9 | f | | xxviii. | xviii. v. 28 | 2 Kings xviii. to v. 9 | James i. |
| 10 | g | | xxix. v. 3 to v. 21 | xix. to v. 25 | 2 Chron. xxx. & xxxi. v. 1 | ii. |
| 11 | A | **St. Barnabas, Ap.** | Deut. 33. to v. 12 | Acts 4. v. 31 | Nahum 1 | Acts 14. v. 8 |
| 12 | b | | 2 Kin. xviii. v. 13 | xix. v. 25 | 2 Kin. xix. to v. 20 | iii. |
| 13 | c | | xix. v. 20 | xx. to v. 19 | xx. | iv. |
| 14 | d | | Isaiah xxxviii. v. 9 to v. 21 | xx. v. 19 | 2 Chron. xxxiii. | v. |
| 15 | e | | 2 Kings xxii. | xxi. | 2 Kin. xxiii. to v. 21 | 1 Peter i. to v. 22 |
| 16 | f | | xxiii. v. 21 to xxiv. v. 8 | Acts i. | xxiv. v. 8 to xxv. v. 8 | i. v. 22 to ii. v. 11 |
| 17 | g | S. Alban, M. | 2 Kings xxv. v. 8 | ii. to v. 22 | Ezra i. & iii. | ii. v. 11 to iii. v. 8 |
| 18 | A | | Ezra iv. | ii. v. 22 | v. | iii. v. 8 to iv. v. 7 |
| 19 | b | | vii. | iii. | viii. v. 15 | iv. v. 7 |
| 20 | c | Tr. of K. Edw. | Ezra ix. | iv. to v. 32 | x. to v. 20 | v. |
| 21 | d | | Nehemiah i. | iv. v. 32 to v. v. 17 | Nehemiah ii. | 2 Peter i. |
| 22 | e | | iv. | v. v. 17 | v. | ii. |
| 23 | f | *Fast.* | Neh. vi. & vii. to v. 5 | vi. | vii. v. 73 & viii. | iii. |
| 24 | g | **St. John Baptist.** | Malachi 3. to v. 7 | Matthew 3 | Malachi 4 | Matthew 14. to v. 13 |
| 25 | A | | Neh. xiii. to v. 15 | Acts vii. to v. 35 | xiii. v. 15 | 1 John i. |
| 26 | b | | Esther i. | vii. v. 35 to viii. v. 5 | Esther ii. v. 15 & iii. | ii. to v. 15 |
| 27 | c | | iv. | viii. v. 5 to v. 26 | v. | ii. v. 15 |
| 28 | d | *Fast.* | vi. | viii. v. 26 | vii. | iii. to v. 16 |
| 29 | e | **St. Peter, Apos.** | Ezekiel 3. v. 4 to v. 15 | John 21. v. 15 to v. 23 | Zechariah 3 | Acts 4. v. 8 to v. 23 |
| 30 | f | | Job i. | Acts ix. to v. 23 | Job ii. | 1 John iii. v. 16 to iv. v. 7 |

---

### JULY HATH XXXI. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | g | | Job iii. | Acts ix. v. 23 | Job iv. | 1 John iv. v. 7 |
| 2 | A | Visit. of V. M. | Job v. | x. to v. 24 | vi. | v. |
| 3 | b | | vii. | x. v. 24 | ix. | 2 John. |
| 4 | c | Tr. of St. Mart. | Job x. | xi. | xi. | 3 John. |
| 5 | d | | xii. | xii. | xiii. | Jude. |
| 6 | e | | xiv. | xiii. to v. 26 | xvi. | Matthew i. v. 18 |
| 7 | f | | xvii. | xiii. v. 26 | xix. | ii. |
| 8 | g | | xxi. | xiv. | xxii. v. 12 to v. 29 | iii. |
| 9 | A | | xxiii. | xv. to v. 30 | xxiv. | iv. to v. 23 |
| 10 | b | | xxv. & xxvi. | xv. v. 30 to xvi. v. 16 | xxvii. | iv. v. 23 to v. v. 13 |
| 11 | c | | xxviii. | xvi. v. 16 | xxix. & xxx. v. 1 | v. v. 13 to v. 33 |
| 12 | d | | xxx. v. 12 to v. 27 | xvii. to v. 16 | xxxi. v. 13 | v. v. 33 |
| 13 | e | | xxxii. | xvii. v. 16 | xxxviii. to v. 39 | vi. to v. 19 |
| 14 | f | | xxxviii. v. 39 & xxxix. | xviii. to v. 24 | xl. | vi. v. 19 to vii. v. 7 |
| 15 | g | Swithun, Bp. | Job xli. | xviii. v. 24 to xix. v. 21 | xlii. | vii. v. 7 |
| 16 | A | | Prov. i. to v. 20 | xix. v. 21 | Prov. i. v. 20 | viii. to v. 18 |
| 17 | b | | ii. | xx. to v. 17 | iii. to v. 27 | viii. v. 18 |
| 18 | c | | iii. v. 27 to iv. v. 20 | xx. v. 17 | iv. v. 20 to v. v. 15 | ix. to v. 18 |
| 19 | d | | v. v. 15 | xxi. to v. 17 | vi. to v. 20 | ix. v. 18 |
| 20 | e | Marg. V. & M. | Prov. vii. | xxi. v. 17 to v. 37 | viii. | x. to v. 24 |
| 21 | f | | ix. | xxi. v. 37 to xxii. v. 23 | x. v. 16 | x. v. 24 |
| 22 | g | St. Mary Magd. | Prov. xi. to v. 15 | xxii. v. 23 to xxiii. v. 12 | xi. v. 15 | xi. |
| 23 | A | | xii. v. 10 | xxiii. v. 12 | xiii. | xii. to v. 22 |
| 24 | b | *Fast.* | xiv. v. 9 to v. 28 | xxiv. | xiv. v. 28 to xv. v. 18 | xii. v. 22 |
| 25 | c | **St. James, Apos.** | 2 Kings 1. to v. 16 | Luke 9. v. 51 to v. 57 | Jer. 26. v. 8 to v. 16 | xiii. to v. 24 |
| 26 | d | St. Anne. | Prov. xv. v. 18 | xxv. | xvi. to v. 20 | xiii. v. 24 to v. 53 |
| 27 | e | | xvi. v. 31 to xvii. v. 18 | xxvi. | xviii. v. 10 | xiii. v. 53 to xiv. v. 13 |
| 28 | f | | xix. v. 13 | xxvii. | xx. to v. 23 | xiv. v. 13 |
| 29 | g | | xxi. to v. 17 | xxviii. to v. 17 | xxii. to v. 17 | xv. to v. 21 |
| 30 | A | | xxiii. v. 10 | xxviii. v. 17 | xxiv. v. 21 | xv. v. 21 |
| 31 | b | | xxv. | Romans i. | xxvi. to v. 21 | xvi. to v. 24 |

---

### AUGUST HATH XXXI. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | c | Lammas Day. | Prov. xxvii. to v. 23 | Rom. ii. to v. 17 | Prov. xxviii. to v. 15 | Matth. xvi. v. 24 to xvii. v. 14 |
| 2 | d | | xxx. to v. 18 | ii. v. 17 | xxxi. v. 10 | xvii. v. 14 |
| 3 | e | | Eccles. i. | iii. | Eccles. ii. to v. 12 | xviii. to v. 21 |
| 4 | f | | iii. | iv. | iv. | xviii. v. 21 to xix. v. 3 |
| 5 | g | | v. | v. | vi. | xix. v. 3 to v. 27 |
| 6 | A | Transfigurat. | Eccles. vii. | vi. | viii. | xix. v. 27 to xx. v. 17 |
| 7 | b | Name of JESUS. | Eccles. ix. | vii. | xi. | xx. v. 17 |
| 8 | c | | xii. | viii. to v. 18 | Jerem. i. | xxi. to v. 23 |
| 9 | d | | Jer. ii. to v. 14 | viii. v. 18 | v. to v. 19 | xxi. v. 23 |
| 10 | e | St. Lawrence. | Jerem. v. v. 19 | ix. to v. 19 | vi. to v. 22 | xxii. to v. 15 |
| 11 | f | | vii. to v. 17 | ix. v. 19 | viii. v. 4 | xxii. v. 15 to v. 41 |
| 12 | g | | ix. to v. 17 | x. | xiii. v. 8 to v. 24 | xxii. v. 41 to xxiii. v. 13 |
| 13 | A | | xv. | xi. to v. 25 | xvii. to v. 19 | xxiii. v. 13 |
| 14 | b | | xviii. to v. 18 | xi. v. 25 | xix. | xxiv. to v. 29 |
| 15 | c | | xxi. | xii. | xxii. to v. 13 | xxiv. v. 29 |
| 16 | d | | xxii. v. 13 | xiii. | xxiii. to v. 16 | xxv. to v. 31 |
| 17 | e | | xxiv. | xiv. & xv. to v. 8 | xxv. to v. 15 | xxv. v. 31 |
| 18 | f | | xxvi. | xv. v. 8 | xxviii. | xxvi. to v. 31 |
| 19 | g | | xxix. v. 4 to v. 20 | xvi. | xxx. | xxvi. v. 31 to v. 57 |
| 20 | A | | xxxi. to v. 15 | 1 Cor. i. to v. 26 | xxxi. v. 15 to v. 38 | xxvi. v. 57 |
| 21 | b | | xxxiii. to v. 14 | i. v. 26 & ii. | xxxiii. v. 14 | xxvii. to v. 27 |
| 22 | c | | xxxv. | iii. | xxxvi. to v. 14 | xxvii. v. 27 to v. 57 |
| 23 | d | *Fast.* | xxxvi. v. 14 | iv. to v. 18 | xxxviii. to v. 14 | xxvii. v. 57 |
| 24 | e | **S. Bartholomew, A.** | Gen. 28. v. 10 to v. 18 | iv. v. 18 & v. | Deut. 18. v. 15 | xxviii. |
| 25 | f | | Jerem. xxxviii. v. 14 | vi. | xxxix. | Mark i. to v. 21 |
| 26 | g | | l. to v. 21 | vii. to v. 25 | li. v. 54 | i. v. 21 |
| 27 | A | | Ezek. i. to v. 15 | vii. v. 25 | Ezek. i. v. 15 | ii. to v. 23 |
| 28 | b | S. Augustin, B. | Ezekiel ii. | viii. | iii. to v. 15 | ii. v. 23 to iii. v. 13 |
| 29 | c | Beheading of St. John Bapt. | Ezekiel iii. v. 15 | ix. | viii. | iii. v. 13 |
| 30 | d | | ix. | x. & xi. v. 1 | xi. v. 14 | iv. to v. 35 |
| 31 | e | | xii. v. 17 | xi. v. 2 to v. 17 | xiii. to v. 17 | iv. v. 35 to v. v. 21 |

---

### SEPTEMBER HATH XXX. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | f | Giles, Abbot. | Ezek. xiii. v. 17 | 1 Corin. xi. v. 17 | Ezek. xiv. to v. 12 | Mark v. v. 21 |
| 2 | g | | xiv. v. 12 | xii. to v. 28 | xvi. v. 44 | vi. to v. 14 |
| 3 | A | | xviii. to v. 19 | xii. v. 28 & xiii. | xviii. v. 19 | vi. v. 14 to v. 30 |
| 4 | b | | xx. to v. 18 | xiv. to v. 20 | xx. v. 18 to v. 33 | vi. v. 30 |
| 5 | c | | xx. v. 33 to v. 44 | xiv. v. 20 | xxii. v. 23 | vii. to v. 24 |
| 6 | d | | xxiv. v. 15 | xv. to v. 35 | xxvi. | vii. v. 24 to viii. v. 10 |
| 7 | e | Evurtius, Bp. | Ezek. xxvii. to v. 26 | xv. v. 35 | xxvii. v. 26 | viii. v. 10 to ix. v. 2 |
| 8 | f | Nat. of V. Mary. | Ez. xxviii. to v. 20 | xvi. | xxxi. | ix. v. 2 to v. 30 |
| 9 | g | | xxxii. to v. 17 | 2 Cor. i. to v. 23 | xxxiii. to v. 21 | ix. v. 30 |
| 10 | A | | xxxiii. v. 21 | i. v. 23 to ii. v. 14 | xxxiv. to v. 17 | x. to v. 32 |
| 11 | b | | xxxiv. v. 17 | ii. v. 14 & iii. | xxxvi. v. 16 to v. 33 | x. v. 32 |
| 12 | c | | xxxvii. to v. 15 | iv. | xxxvii. v. 15 | xi. to v. 27 |
| 13 | d | | xlvii. to v. 13 | v. | Daniel i. | xi. v. 27 to xii. v. 13 |
| 14 | e | Holy-Cross Day. | Dan. ii. to v. 24 | vi. & vii. v. 1 | ii. v. 24 | xii. v. 13 to v. 35 |
| 15 | f | | iii. | vii. v. 2 | iv. to v. 19 | xii. v. 35 to xiii. v. 14 |
| 16 | g | | iv. v. 19 | viii. | v. to v. 17 | xiii. v. 14 |
| 17 | A | Lambert, Bp. | Dan. v. v. 17 | ix. | vi. | xiv. to v. 27 |
| 18 | b | | vii. to v. 15 | x. | vii. v. 15 | xiv. v. 27 to v. 53 |
| 19 | c | | ix. to v. 20 | xi. to v. 30 | ix. v. 20 | xiv. v. 53 |
| 20 | d | *Fast.* | Dan. x. to v. 20 | xi. v. 30 to xii. v. 14 | xii. | xv. to v. 42 |
| 21 | e | **St. Matthew, Ap.** | 1 Kings 19. v. 15 | xii. v. 14 & xiii. | 1 Chron. 29. to v. 20 | xv. v. 42 & xvi. |
| 22 | f | | Hosea ii. v. 14 | Galatians i. | Hosea iv. to v. 13 | Luke i. to v. 26 |
| 23 | g | | v. v. 8 to vi. v. 7 | ii. | vii. v. 8 | i. v. 26 to v. 57 |
| 24 | A | | viii. | iii. | ix. | i. v. 57 |
| 25 | b | | x. | iv. to v. 21 | xi. & xii. to v. 7 | ii. to v. 21 |
| 26 | c | S. Cyprian, Abp. | Hos. xiii. to v. 15 | iv. v. 21 to v. v. 13 | xiv. | ii. v. 21 |
| 27 | d | | Joel i. | v. v. 13 | Joel ii. to v. 15 | iii. to v. 23 |
| 28 | e | | ii. v. 15 to v. 28 | vi. | ii. v. 28 to iii. v. 9 | iv. to v. 16 |
| 29 | f | **St. Michael & All Angels.** | Genesis 32 | Acts 12. v. 5 to v. 18 | Daniel 10. v. 4 | Rev. 14. v. 14 |
| 30 | g | St. Jerom. | Joel iii. v. 9 | Ephesians i. | Amos i. & ii. to v. 4 | iv. v. 16 |

---

### OCTOBER HATH XXXI. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | A | Remigius, Bp. | Amos ii. v. 4 to iii. v. 9 | Ephesians ii. | Amos iv. v. 4 | Luke v. to v. 17 |
| 2 | b | | v. to v. 18 | iii. | v. v. 18 to vi. v. 9 | v. v. 17 |
| 3 | c | | vii. | iv. to v. 25 | viii. | vi. to v. 20 |
| 4 | d | | ix. | iv. v. 25 to v. v. 22 | Obadiah. | vi. v. 20 |
| 5 | e | | Jonah i. | v. v. 22 to vi. v. 10 | Jonah ii. | vii. to v. 24 |
| 6 | f | Faith, V. & M. | Jonah iii. | vi. v. 10 | iv. | vii. v. 24 |
| 7 | g | | Micah i. to v. 10 | Philippians i. | Micah ii. | viii. to v. 26 |
| 8 | A | | iii. | ii. | iv. | viii. v. 26 |
| 9 | b | St. Denys, Bp. | Micah v. | iii. | vi. | ix. to v. 28 |
| 10 | c | | vii. | iv. | Nahum i. | ix. v. 28 to v. 51 |
| 11 | d | | Nahum ii. | Colos. i. to v. 21 | iii. | ix. v. 51 to x. v. 17 |
| 12 | e | | Habakkuk i. | i. v. 21 to ii. v. 8 | Habakkuk ii. | x. v. 17 |
| 13 | f | Trans. K. Edw. | Habakkuk iii. | ii. v. 8 | Zeph. i. to v. 14 | xi. to v. 29 |
| 14 | g | | Zeph. i. v. 14 to ii. v. 4 | iii. to v. 18 | ii. v. 4 | xi. v. 29 |
| 15 | A | | iii. | iii. v. 18 & iv. | Haggai i. | xii. to v. 35 |
| 16 | b | | Hag. ii. to v. 10 | 1 Thess. i. | ii. v. 10 | xii. v. 35 |
| 17 | c | Etheldreda, V. | Zech. i. to v. 18 | ii. | Zech. i. v. 18 & ii. | xiii. to v. 18 |
| 18 | d | **St. Luke, Evan.** | Isaiah 55 | iii. | Eccles. 38. to v. 15 | xiii. v. 18 |
| 19 | e | | Zechariah iii. | iv. | iv. | xiv. to v. 25 |
| 20 | f | | v. | v. | vi. | xiv. v. 25 to xv. v. 11 |
| 21 | g | | vii. | 2 Thess. i. | viii. to v. 14 | xv. v. 11 |
| 22 | A | | viii. v. 14 | ii. | ix. v. 9 | xvi. |
| 23 | b | | x. | iii. | xi. | xvii. to v. 20 |
| 24 | c | | xii. | 1 Tim. i. to v. 18 | xiii. | xvii. v. 20 |
| 25 | d | Crispin, Mart. | Zechariah xiv. | i. v. 18 & ii. | Malachi i. | xviii. to v. 31 |
| 26 | e | | Malachi ii. | iii. | iii. to v. 13 | xviii. v. 31 to xix. v. 11 |
| 27 | f | *Fast.* | iii. v. 13 & iv. | iv. | Wisdom i. | xix. v. 11 to v. 28 |
| 28 | g | **St. Simon & St. Jude.** | Isaiah 28. v. 9 to v. 17 | v. | Jer. 3. v. 12 to v. 19 | xix. v. 28 |
| 29 | A | | Wisdom ii. | vi. | iv. to v. 7 | xx. to v. 27 |
| 30 | b | | vi. to v. 22 | 2 Tim. i. | vi. v. 22 to vii. v. 15 | xx. v. 27 to xxi. v. 5 |
| 31 | c | *Fast.* | Wisd. vii. v. 15 | ii. | viii. to v. 19 | xxi. v. 5 |

---

### NOVEMBER HATH XXX. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | d | **All Saints' Day.** | Wisdom 3. to v. 10 | Heb. 11. v. 33 & 12. to v. 7 | Wisdom 5. to v. 17 | Rev. 19. to v. 17 |
| 2 | e | | Wisdom ix. | 2 Tim. iii. | Wisd. xi. to v. 15 | Luke xxii. to v. 31 |
| 3 | f | | xi. v. 15 to xii. v. 3 | iv. | xvii. | xxii. v. 31 to v. 54 |
| 4 | g | | Ecclus. i. to v. 14 | Titus i. | Ecclus. ii. | xxii. v. 54 |
| 5 | A | Papists' Conspiracy. | Eccl. iii. v. 17 to v. 30 | Titus ii. | Ecclus. iv. v. 10 | Luke xxiii. to v. 26 |
| 6 | b | Leonard, Conf. | Ecclus. v. | iii. | vii. v. 27 | xxiii. v. 26 to v. 50 |
| 7 | c | | x. to v. 18 | Philemon. | xiv. to v. 20 | xxiii. v. 50 to xxiv. v. 13 |
| 8 | d | | xv. v. 9 | Hebrews i. | xvi. v. 17 | xxiv. to v. 13 |
| 9 | e | | xviii. to v. 15 | ii. & iii. to v. 7 | xviii. v. 15 | John i. to v. 29 |
| 10 | f | | xix. v. 13 | iii. v. 7 to iv. v. 14 | xxii. v. 6 to v. 24 | i. v. 29 |
| 11 | g | St. Martin, Bp. | Eccl. xxiv. to v. 24 | iv. v. 14 & v. | xxiv. v. 24 | ii. |
| 12 | A | | xxxiii. v. 7 to v. 23 | vi. | xxxiv. v. 15 | iii. to v. 22 |
| 13 | b | Britius, Bp. | Ecclus. xxxv. | vii. | xxxvii. v. 8 to v. 19 | iii. v. 22 |
| 14 | c | | xxxix. to v. 13 | viii. | xxxix. v. 13 | iv. to v. 31 |
| 15 | d | Machutus, Bp. | Eccl. xli. to v. 14 | ix. | xlii. v. 15 | iv. v. 31 |
| 16 | e | | xliv. to v. 16 | x. to v. 19 | l. to v. 25 | v. to v. 24 |
| 17 | f | Hugh, Bishop. | Ecclus. li. to v. 10 | x. v. 19 | Bar. iv. to v. 21 | v. v. 24 |
| 18 | g | | Baruch iv. v. 36 & v. | xi. to v. 17 | Isaiah i. to v. 21 | vi. to v. 22 |
| 19 | A | | Isaiah i. v. 21 | xi. v. 17 | ii. | vi. v. 22 to v. 41 |
| 20 | b | Edmund, K. | Isai. iii. to v. 10 | xii. | iv. v. 2 | vi. v. 41 |
| 21 | c | | v. to v. 18 | xiii. | v. v. 18 | vii. to v. 25 |
| 22 | d | Cecilia, V. & M. | Isaiah vi. | James i. | vii. to v. 17 | vii. v. 25 |
| 23 | e | S. Clement, Bp. | Isaiah viii. v. 5 to v. 18 | ii. | viii. v. 18 to ix. v. 8 | viii. to v. 31 |
| 24 | f | | ix. v. 8 to x. v. 5 | iii. | x. v. 5 to v. 20 | viii. v. 31 |
| 25 | g | Catherine, V. | Isaiah x. v. 20 | iv. | xi. to v. 10 | ix. to v. 39 |
| 26 | A | | xi. to v. 10 | v. | xii. | ix. v. 39 to x. v. 22 |
| 27 | b | | xiii. | 1 Pet. i. to v. 22 | xiv. to v. 24 | x. v. 22 |
| 28 | c | | xvii. | i. v. 22 to ii. v. 11 | xviii. | xi. to v. 17 |
| 29 | d | *Fast.* | Isai. xix. to v. 16 | ii. v. 11 to iii. v. 8 | xix. v. 16 | xi. v. 17 to v. 47 |
| 30 | e | **St. Andrew, Ap.** | Isaiah 54 | John 1. v. 35 to v. 43 | Isaiah 65. to v. 17 | John 12. v. 20 to v. 42 |

---

### DECEMBER HATH XXXI. DAYS.

| Day | Letter | Commemoration / Holy Day | Morning: First Lesson | Morning: Second Lesson | Evening: First Lesson | Evening: Second Lesson |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | f | | Isaiah xxi. to v. 13 | 1 Peter iii. v. 8 to iv. v. 7 | Isaiah xxii. to v. 15 | John xi. v. 47 to xii. v. 20 |
| 2 | g | | xxii. v. 15 | iv. v. 7 | xxiii. | xii. v. 20 |
| 3 | A | | xxiv. | v. | xxv. | xiii. to v. 21 |
| 4 | b | | xxvi. to v. 20 | 2 Peter i. | xxvi. v. 20 & xxvii. | xiii. v. 21 |
| 5 | c | | xxviii. to v. 14 | ii. | xxviii. v. 14 | xiv. |
| 6 | d | Nicolas, Bp. | Isa. xxix. to v. 9 | iii. | xxix. v. 9 | xv. |
| 7 | e | | xxx. to v. 18 | 1 John i. | xxx. v. 18 | xvi. to v. 16 |
| 8 | f | Concept. V. M. | Isaiah xxxi. | ii. to v. 15 | xxxii. | xvi. v. 16 |
| 9 | g | | xxxiii. | ii. v. 15 | xxxiv. | xvii. |
| 10 | A | | xxxv. | iii. to v. 16 | xl. to v. 12 | xviii. to v. 28 |
| 11 | b | | xl. v. 12 | iii. v. 16 to iv. v. 7 | xli. to v. 17 | xviii. v. 28 |
| 12 | c | | xli. v. 17 | iv. v. 7 | xlii. to v. 18 | xix. to v. 25 |
| 13 | d | Lucy, V. & M. | Isa. xlii. v. 18 to xliii. v. 8 | v. | xliii. v. 8 | xix. v. 25 |
| 14 | e | | xliv. to v. 21 | 2 John. | xliv. v. 21 to xlv. v. 8 | xx. to v. 19 |
| 15 | f | | xlv. v. 8 | 3 John. | xlvi. | xx. v. 19 |
| 16 | g | O Sapientia. | Isaiah xlvii. | Jude. | xlviii. | xxi. |
| 17 | A | | xlix. to v. 13 | Revelation i. | xlix. v. 13 | Rev. ii. to v. 18 |
| 18 | b | | l. | ii. v. 18 to iii. v. 7 | li. to v. 9 | iii. v. 7 |
| 19 | c | | li. v. 9 | iv. | lii. to v. 13 | v. |
| 20 | d | *Fast.* | lii. v. 13 & liii. | vi. | liv. | vii. |
| 21 | e | **St. Thomas, Ap.** | Job 42. to v. 7 | John 20. v. 19 to v. 24 | Isaiah 35 | John 14. to v. 8 |
| 22 | f | | Isaiah lv. | Revelation viii. | lvi. | Revelation x. |
| 23 | g | | lvii. | xi. | lviii. | xii. |
| 24 | A | *Fast.* | lix. | xiv. | lx. | xv. |
| 25 | b | **Christmas-Day.** | Isaiah 9. to v. 8 | Luke 2. to v. 15 | Isaiah 7. v. 10 to v. 17 | Titus 3. v. 4 to v. 9 |
| 26 | c | **St. Stephen, M.** | Genesis 4. to v. 11 | Acts 6 | 2 Chron. 24. v. 15 to v. 23 | Acts 8. to v. 9 |
| 27 | d | **St. John, Evan.** | Exodus 33. v. 9 | John 13. v. 23 to v. 36 | Isaiah 6 | Revelation 1 |
| 28 | e | **Innocents' Day.** | Jeremiah 31. to v. 18 | xvi. | Baruch 4. v. 21 to v. 31 | xviii. |
| 29 | f | | Isaiah lxi. | xix. to v. 11 | lxii. | xix. v. 11 |
| 30 | g | | lxiii. | xx. | lxiv. & lxv. to v. 8 | xxi. to v. 15 |
| 31 | A | Silvester, Bp. | Isaiah lxv. v. 8 | xxi. v. 15 to xxii. v. 6 | lxvi. | xxii. v. 6 |
"""

ts_tol = f'''import {{ ServiceItem }} from './types';

/**
 * The Tables of Proper Lessons and Daily Calendar of Lessons
 * The 1662 Book of Common Prayer (Church of England)
 */
export const tableOfLessons1662: ServiceItem = {{
  id: 'table-of-lessons-1662',
  slug: 'table-of-lessons',
  title: 'Tables of Proper Lessons and Daily Calendar',
  shortTitle: 'Tables of Lessons & Calendar',
  category: 'Prefaces & Tables',
  isService: false,
  content: {json.dumps(content_tol.strip())}
}};
'''

with open("src/services/tableOfLessons1662.ts", "w", encoding="utf-8") as f:
    f.write(ts_tol)

print("Saved src/services/tableOfLessons1662.ts")

# ------------------------------------------------------------------------------
# 2. calendarAndTables1662.ts
# ------------------------------------------------------------------------------

content_cat = """# TABLES AND RULES
## For the Moveable and Immoveable Feasts; Together with the Days of Fasting and Abstinence, through the Whole Year.

---

## RULES TO KNOW WHEN THE MOVEABLE FEASTS AND HOLY-DAYS BEGIN.

*EASTER-DAY* (on which the rest depend) is always the First Sunday after the Full Moon which happens upon, or next after the Twenty-first Day of March; and if the Full Moon happens upon a Sunday, Easter-Day is the Sunday after.

*Advent-Sunday* is always the nearest Sunday to the Feast of St. Andrew, whether before or after.

| Feast | Sunday is | Relation to Easter |
| :--- | :--- | :--- |
| **Septuagesima** | Nine Weeks | before Easter. |
| **Sexagesima** | Eight Weeks | before Easter. |
| **Quinquagesima** | Seven Weeks | before Easter. |
| **Quadragesima** | Six Weeks | before Easter. |
| **Rogation-Sunday** | Five Weeks | after Easter. |
| **Ascension-Day** | Forty Days | after Easter. |
| **Whit-Sunday** | Seven Weeks | after Easter. |
| **Trinity-Sunday** | Eight Weeks | after Easter. |

---

## A TABLE OF ALL THE FEASTS
### That are to be observed in the Church of England throughout the Year.

All Sundays in the Year.

The Days of the Feasts of:
* The Circumcision of our Lord JESUS CHRIST.
* The Epiphany.
* The Conversion of St. Paul.
* The Purification of the Blessed Virgin.
* St. Matthias the Apostle.
* The Annunciation of the Blessed Virgin.
* St. Mark the Evangelist.
* St. Philip and St. James the Apostles.
* The Ascension of our Lord JESUS CHRIST.
* St. Barnabas.
* The Nativity of St. John Baptist.
* St. Peter the Apostle.
* St. James the Apostle.
* St. Bartholomew the Apostle.
* St. Matthew the Apostle.
* St. Michael and all Angels.
* St. Luke the Evangelist.
* St. Simon and St. Jude the Apostles.
* All Saints.
* St. Andrew the Apostle.
* St. Thomas the Apostle.
* The NATIVITY of Our LORD.
* St. Stephen the Martyr.
* St. John the Evangelist.
* The Holy Innocents.

Monday and Tuesday in Easter-Week.
Monday and Tuesday in Whitsun-Week.

---

## A TABLE OF THE VIGILS, FASTS, AND DAYS OF ABSTINENCE,
### To be observed in the Year.

The Evens or Vigils before:
* The Nativity of our Lord.
* The Purification of the Blessed Virgin Mary.
* The Annunciation of the Blessed Virgin.
* Easter-Day.
* Ascension-Day.
* Pentecost.
* St. Matthias.
* St. John Baptist.
* St. Peter.
* St. James.
* St. Bartholomew.
* St. Matthew.
* St. Simon and St. Jude.
* St. Andrew.
* St. Thomas.
* All Saints.

*NOTE, That if any of these Feast-Days fall upon a Monday, then the Vigil or Fast-Day shall be kept upon the Saturday, and not upon the Sunday next before it.*

---

## DAYS OF FASTING, OR ABSTINENCE.

I. **The Forty Days of Lent.**

II. **The Ember-Days at the Four Seasons**, being the Wednesday, Friday, and Saturday after:
1. The First Sunday in Lent.
2. The Feast of Pentecost.
3. September 14.
4. December 13.

III. **The Three Rogation-Days**, being the Monday, Tuesday, and Wednesday before Holy-Thursday, or the Ascension of our LORD.

IV. **All the Fridays in the Year**, except CHRISTMAS-DAY.

---

## A SOLEMN DAY,
### For which a particular Service is appointed.

The Accession Day, being the Day on which the Reigning Sovereign began their happy Reign.

---

## A TABLE TO FIND EASTER-DAY,
### From the Present Time till the Year 2199 inclusive, according to the foregoing Calendar.

| Golden Number | Day of the Month | Sunday Letter |
| :--- | :--- | :--- |
| XIV | March 21 | C |
| III | March 22 | D |
| | March 23 | E |
| XI | March 24 | F |
| | March 25 | G |
| XIX | March 26 | A |
| VIII | March 27 | B |
| | March 28 | C |
| XVI | March 29 | D |
| V | March 30 | E |
| | March 31 | F |
| XIII | April 1 | G |
| II | April 2 | A |
| | April 3 | B |
| X | April 4 | C |
| | April 5 | D |
| XVIII | April 6 | E |
| VII | April 7 | F |
| | April 8 | G |
| XV | April 9 | A |
| IV | April 10 | B |
| | April 11 | C |
| XII | April 12 | D |
| I | April 13 | E |
| | April 14 | F |
| IX | April 15 | G |
| XVII | April 16 | A |
| VI | April 17 | B |
| | April 18 | C |
| | April 19 | D |
| | April 20 | E |
| | April 21 | F |
| | April 22 | G |
| | April 23 | A |
| | April 24 | B |
| | April 25 | C |

THIS Table contains so much of the Calendar as is necessary for the determining of Easter; to find which, look for the Golden Number of the year in the first column of the Table, against which stands the day of the Paschal Full Moon; then look in the third column for the Sunday Letter, next after the day of the Full Moon, and the day of the Month standing against that Sunday Letter is Easter-Day. If the Full Moon happens upon a Sunday, then (according to the first rule) the next Sunday after is Easter-Day.

To find the Golden Number, or Prime, add one to the year of our Lord, and then divide by 19; the remainder, if any, is the Golden Number; but if nothing remaineth, then 19 is the Golden Number.

To find the Dominical or Sunday Letter, according to the Calendar, until the year 2099 inclusive, add to the year of our Lord its fourth part, omitting fractions; and also the number 6: Divide the sum by 7; and if there is no remainder, then A is the Sunday Letter: But if any number remaineth, then the Letter standing against that number in the small annexed Table is the Sunday Letter.

| Remainder | Sunday Letter |
| :--- | :--- |
| 0 | A |
| 1 | G |
| 2 | F |
| 3 | E |
| 4 | D |
| 5 | C |
| 6 | B |

For the next following Century, that is, from the year 2100 till the year 2199 inclusive, add to the current year its fourth part, and also the number 5, and then divide by 7, and proceed as in the last Rule.

NOTE, That in all Bissextile or Leap-Years, the Letter found, as above, will be the Sunday Letter from the intercalated day exclusive, to the end of the year.

---

## ANOTHER TABLE TO FIND EASTER
### Till the Year 2199 inclusive.

| Golden Num. | A | B | C | D | E | F | G |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **I** | April 16 | 17 | 18 | 19 | 20 | 14 | 15 |
| **II** | April 9 | 3 | 4 | 5 | 6 | 7 | 8 |
| **III** | March 26 | 27 | 28 | 29 | 23 | 24 | 25 |
| **IV** | April 16 | 17 | 11 | 12 | 13 | 14 | 15 |
| **V** | April 2 | 3 | 4 | 5 | 6 | Mar. 31 | Apr. 1 |
| **VI** | April 23 | 24 | 25 | 19 | 20 | 21 | 22 |
| **VII** | April 9 | 10 | 11 | 12 | 13 | 14 | 8 |
| **VIII** | April 2 | 3 | Mar. 28 | 29 | 30 | 31 | Apr. 1 |
| **IX** | April 23 | 24 | 18 | 19 | 20 | 21 | 22 |
| **X** | April 9 | 10 | 11 | 5 | 6 | 7 | 8 |
| **XI** | March 26 | 27 | 28 | 29 | 30 | 31 | 25 |
| **XII** | April 16 | 17 | 18 | 19 | 13 | 14 | 15 |
| **XIII** | April 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| **XIV** | March 26 | 27 | 28 | 22 | 23 | 24 | 25 |
| **XV** | April 16 | 10 | 11 | 12 | 13 | 14 | 15 |
| **XVI** | April 2 | 3 | 4 | 5 | Mar. 30 | 31 | Apr. 1 |
| **XVII** | April 23 | 24 | 18 | 19 | 20 | 21 | 22 |
| **XVIII** | April 9 | 10 | 11 | 12 | 13 | 7 | 8 |
| **XIX** | April 2 | Mar. 27 | 28 | 29 | 30 | 31 | Apr. 1 |

TO make use of the preceding Table, find the Sunday Letter for the Year in the uppermost Line, and the Golden Number, or Prime, in the Column of Golden Numbers, and against the Prime, in the same Line under the Sunday Letter you have the Day of the Month on which Easter falleth that Year. But note that the Name of the Month is set on the Left Hand, or just with the Figure, and followed, not as in other Tables, by Descent, but Collateral.

---

## A TABLE OF THE MOVEABLE FEASTS,
### According to the several Days that Easter can possibly fall upon.

| Easter Day | Sundays after Epiphany | Septuagesima Sunday | The First Day of Lent | Rogation Sunday | Ascension Day | Whit-Sunday | Sundays after Trinity | Advent Sunday |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Mar. 22** | One | Jan. 18 | Feb. 4 | April 26 | April 30 | May 10 | 27 | Nov. 29 |
| **Mar. 23** | One | Jan. 19 | Feb. 5 | April 27 | May 1 | May 11 | 27 | Nov. 30 |
| **Mar. 24** | One | Jan. 20 | Feb. 6 | April 28 | May 2 | May 12 | 27 | Dec. 1 |
| **Mar. 25** | Two | Jan. 21 | Feb. 7 | April 29 | May 3 | May 13 | 27 | Dec. 2 |
| **Mar. 26** | Two | Jan. 22 | Feb. 8 | April 30 | May 4 | May 14 | 27 | Dec. 3 |
| **Mar. 27** | Two | Jan. 23 | Feb. 9 | May 1 | May 5 | May 15 | 26 | Nov. 27 |
| **Mar. 28** | Two | Jan. 24 | Feb. 10 | May 2 | May 6 | May 16 | 26 | Nov. 28 |
| **Mar. 29** | Two | Jan. 25 | Feb. 11 | May 3 | May 7 | May 17 | 26 | Nov. 29 |
| **Mar. 30** | Two | Jan. 26 | Feb. 12 | May 4 | May 8 | May 18 | 26 | Nov. 30 |
| **Mar. 31** | Two | Jan. 27 | Feb. 13 | May 5 | May 9 | May 19 | 26 | Dec. 1 |
| **April 1** | Three | Jan. 28 | Feb. 14 | May 6 | May 10 | May 20 | 26 | Dec. 2 |
| **April 2** | Three | Jan. 29 | Feb. 15 | May 7 | May 11 | May 21 | 26 | Dec. 3 |
| **April 3** | Three | Jan. 30 | Feb. 16 | May 8 | May 12 | May 22 | 25 | Nov. 27 |
| **April 4** | Three | Jan. 31 | Feb. 17 | May 9 | May 13 | May 23 | 25 | Nov. 28 |
| **April 5** | Three | Feb. 1 | Feb. 18 | May 10 | May 14 | May 24 | 25 | Nov. 29 |
| **April 6** | Three | Feb. 2 | Feb. 19 | May 11 | May 15 | May 25 | 25 | Nov. 30 |
| **April 7** | Three | Feb. 3 | Feb. 20 | May 12 | May 16 | May 26 | 25 | Dec. 1 |
| **April 8** | Four | Feb. 4 | Feb. 21 | May 13 | May 17 | May 27 | 25 | Dec. 2 |
| **April 9** | Four | Feb. 5 | Feb. 22 | May 14 | May 18 | May 28 | 25 | Dec. 3 |
| **April 10** | Four | Feb. 6 | Feb. 23 | May 15 | May 19 | May 29 | 24 | Nov. 27 |
| **April 11** | Four | Feb. 7 | Feb. 24 | May 16 | May 20 | May 30 | 24 | Nov. 28 |
| **April 12** | Four | Feb. 8 | Feb. 25 | May 17 | May 21 | May 31 | 24 | Nov. 29 |
| **April 13** | Four | Feb. 9 | Feb. 26 | May 18 | May 22 | June 1 | 24 | Nov. 30 |
| **April 14** | Four | Feb. 10 | Feb. 27 | May 19 | May 23 | June 2 | 24 | Dec. 1 |
| **April 15** | Five | Feb. 11 | Feb. 28 | May 20 | May 24 | June 3 | 24 | Dec. 2 |
| **April 16** | Five | Feb. 12 | Mar. 1 | May 21 | May 25 | June 4 | 24 | Dec. 3 |
| **April 17** | Five | Feb. 13 | Mar. 2 | May 22 | May 26 | June 5 | 23 | Nov. 27 |
| **April 18** | Five | Feb. 14 | Mar. 3 | May 23 | May 27 | June 6 | 23 | Nov. 28 |
| **April 19** | Five | Feb. 15 | Mar. 4 | May 24 | May 28 | June 7 | 23 | Nov. 29 |
| **April 20** | Five | Feb. 16 | Mar. 5 | May 25 | May 29 | June 8 | 23 | Nov. 30 |
| **April 21** | Five | Feb. 17 | Mar. 6 | May 26 | May 30 | June 9 | 23 | Dec. 1 |
| **April 22** | Six | Feb. 18 | Mar. 7 | May 27 | May 31 | June 10 | 23 | Dec. 2 |
| **April 23** | Six | Feb. 19 | Mar. 8 | May 28 | June 1 | June 11 | 23 | Dec. 3 |
| **April 24** | Six | Feb. 20 | Mar. 9 | May 29 | June 2 | June 12 | 22 | Nov. 27 |
| **April 25** | Six | Feb. 21 | Mar. 10 | May 30 | June 3 | June 13 | 22 | Nov. 28 |

*Note, that in a Bissextile or Leap-Year, the number of Sundays after Epiphany will be the same, as if Easter-Day had fallen One Day later than it really does. And for the same Reason, One Day must, in every Leap-Year, be added to the Day of the Month given by the Table for Septuagesima Sunday: And the like must be done for the First Day of Lent (commonly called Ash-Wednesday) unless the Table gives some Day in the Month of March for it; for in that Case, the Day given by the Table is the right Day.*

---

## TABLE TO FIND EASTER-DAY,
### From the Year 2200, to the Year 2299 inclusive.

| Golden Numbers | Days of the Month | Sunday Letters |
| :--- | :--- | :--- |
| | March 21 | C |
| VI | March 22 | D |
| | March 23 | E |
| XIV | March 24 | F |
| III | March 25 | G |
| | March 26 | A |
| XI | March 27 | B |
| | March 28 | C |
| XIX | March 29 | D |
| VIII | March 30 | E |
| | March 31 | F |
| XVI | April 1 | G |
| V | April 2 | A |
| | April 3 | B |
| XIII | April 4 | C |
| II | April 5 | D |
| | April 6 | E |
| X | April 7 | F |
| | April 8 | G |
| XVIII | April 9 | A |
| VII | April 10 | B |
| | April 11 | C |
| XV | April 12 | D |
| IV | April 13 | E |
| | April 14 | F |
| XII | April 15 | G |
| I | April 16 | A |
| | April 17 | B |
| IX | April 18 | C |
| XVII | April 19 | D |
| | April 20 | E |
| | April 21 | F |
| | April 22 | G |
| | April 23 | A |
| | April 24 | B |
| | April 25 | C |

THE Golden Numbers in the foregoing Calendar will point out the Days of the Paschal Full Moons, till the Year of our Lord 2200; at which Time, in order that the Ecclesiastical Full Moons may fall nearly on the same Days with the real Full Moons, the Golden Numbers must be removed to different Days of the Calendar, as is done in the annexed Table, which contains so much of the Calendar then to be used, as is necessary for finding the Paschal Full Moons, and the Feast of Easter, from the Year 2200, to the Year 2299 inclusive. This Table is to be made use of, in all respects, as the First Table before inserted, for finding Easter till the Year 2199.

---

## GENERAL TABLES
### For Finding the Dominical or Sunday Letter, and the Places of the Golden Numbers in the Calendar.

### TABLE I.

| 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **B** | **C** | **D** | **E** | **F** | **G** | **A** |
| | | | 1600 | 1700 | 1800 | |
| 1900 · 2000 | 2100 | 2200 | 2300 · 2400 | 2500 | 2600 | 2700 · 2800 |
| 2900 | 3000 | 3100 · 3200 | 3300 | 3400 | 3500 · 3600 | 3700 |
| 3800 | 3900 · 4000 | 4100 | 4200 | 4300 · 4400 | 4500 | 4600 |
| 4700 · 4800 | 4900 | 5000 | 5100 · 5200 | 5300 | 5400 | 5500 · 5600 |
| 5700 | 5800 | 5900 · 6000 | 6100 | 6200 | 6300 · 6400 | 6500 |
| 6600 | 6700 · 6800 | 6900 | 7000 | 7100 · 7200 | 7300 | 7400 |
| 7500 · 7600 | 7700 | 7800 | 7900 · 8000 | 8100 | 8200 | 8300 · 8400 |
| 8500 | &c. | | | | | |

To find the Dominical or Sunday Letter for any given Year of our Lord, add to the Year its Fourth Part, omitting Fractions, and also the Number, which in Table I. standeth at the Top of the Column wherein the Number of Hundreds contained in that given Year is found: Divide the Sum by 7, and if there is no Remainder, then A is the Sunday Letter: but if any Number remaineth, then the Letter, which standeth under that Number at the Top of the Table, is the Sunday Letter.

### TABLE II.

| | I. Years of our Lord | II. | III. | | I. Years of our Lord | II. | III. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **B** | 1600 | 0 | **B** | | 5200 | 15 | |
| | 1700 | 1 | | | 5300 | 16 | |
| | 1800 | 1 | | | 5400 | 17 | |
| | 1900 | 2 | | | 5500 | 17 | |
| **B** | 2000 | 2 | **B** | **B** | 5600 | 17 | |
| | 2100 | 3 | | | 5700 | 18 | |
| | 2200 | 4 | | | 5800 | 18 | |
| | 2300 | 4 | | | 5900 | 19 | |
| **B** | 2400 | 4 | **B** | | 6000 | 19 | |
| | 2500 | 5 | | | 6100 | 19 | |
| | 2600 | 5 | | | 6200 | 20 | |
| | 2700 | 6 | | | 6300 | 21 | |
| **B** | 2800 | 6 | **B** | **B** | 6400 | 20 | |
| | 2900 | 6 | | | 6500 | 21 | |
| | 3000 | 7 | | | 6600 | 22 | |
| | 3100 | 7 | | | 6700 | 23 | |
| **B** | 3200 | 7 | **B** | **B** | 6800 | 22 | |
| | 3300 | 8 | | | 6900 | 23 | |
| | 3400 | 8 | | | 7000 | 24 | |
| | 3500 | 9 | | | 7100 | 24 | |
| **B** | 3600 | 9 | **B** | **B** | 7200 | 24 | |
| | 3700 | 10 | | | 7300 | 25 | |
| | 3800 | 10 | | | 7400 | 25 | |
| | 3900 | 10 | | | 7500 | 26 | |
| **B** | 4000 | 10 | **B** | **B** | 7600 | 26 | |
| | 4100 | 11 | | | 7700 | 26 | |
| | 4200 | 12 | | | 7800 | 27 | |
| | 4300 | 12 | | | 7900 | 28 | |
| **B** | 4400 | 12 | **B** | **B** | 8000 | 27 | |
| | 4500 | 13 | | | 8100 | 28 | |
| | 4600 | 13 | | | 8200 | 29 | |
| | 4700 | 14 | | | 8300 | 29 | |
| **B** | 4800 | 14 | **B** | **B** | 8400 | 29 | |
| | 4900 | 14 | | | 8500 | 0 | |
| | 5000 | 15 | | | &c. | | |
| | 5100 | 16 | | | | | |

To find the Month and Days of the Month to which the Golden Numbers ought to be prefixed in the Calendar, in any given Year of our Lord, consisting of entire Hundred Years, and in all the intermediate Years betwixt that and the next Hundredth Year following, look in the Second Column of Table II. for the given Year consisting of entire Hundreds, and Note the Number or Cypher which stands against it in the Third Column; then, in Table III. look for the same Number in the Column under any given Golden Number, which when you have found, guide your Eye Side-ways to the Left Hand, and in the First Column you will find the Month and Day to which that Golden Number ought to be prefixed in the Calendar, during that period of One Hundred Years.

The Letter B prefixed to certain Hundredth Years in Table II. denotes those Years which are still to be accounted Bissextile or Leap-Years in the New Calendar; whereas all the other Hundredth Years are to be accounted only common Years.
"""

ts_cat = f'''import {{ ServiceItem }} from './types';

/**
 * Tables and Rules for the Moveable and Immoveable Feasts
 * The 1662 Book of Common Prayer (Church of England)
 */
export const calendarAndTables1662: ServiceItem = {{
  id: 'calendar-and-tables-1662',
  slug: 'calendar-and-tables',
  title: 'Tables and Rules for Feasts, Fasts, and Easter',
  shortTitle: 'Feasts, Fasts & Easter Tables',
  category: 'Prefaces & Tables',
  isService: false,
  content: {json.dumps(content_cat.strip())}
}};
'''

with open("src/services/calendarAndTables1662.ts", "w", encoding="utf-8") as f:
    f.write(ts_cat)

print("Saved src/services/calendarAndTables1662.ts")
