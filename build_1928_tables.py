import json

# Define the 12 months for 1928 BCP Calendar
months_data = [
    {
        "name": "JANUARY",
        "days": 31,
        "start_letter": "A",
        "feasts": {
            1: "**The Circumcision of our Lord**",
            6: "**The Epiphany**",
            25: "**The Conversion of Saint Paul**"
        }
    },
    {
        "name": "FEBRUARY",
        "days": 28,
        "start_letter": "d",
        "leap_day": True,
        "feasts": {
            2: "**The Purification of the Blessed Virgin Mary**",
            24: "**Saint Matthias the Apostle**",
            29: "*(in Leap Year)*"
        }
    },
    {
        "name": "MARCH",
        "days": 31,
        "start_letter": "d",
        "golden_numbers": {
            21: "XIV",
            22: "III",
            24: "XI",
            26: "XIX",
            27: "VIII",
            29: "XVI",
            30: "V"
        },
        "feasts": {
            25: "**The Annunciation of the Blessed Virgin Mary**"
        }
    },
    {
        "name": "APRIL",
        "days": 30,
        "start_letter": "g",
        "golden_numbers": {
            1: "XIII",
            2: "II",
            4: "X",
            6: "XVIII",
            7: "VII",
            9: "XV",
            10: "IV",
            12: "XII",
            13: "I",
            15: "IX",
            16: "XVII",
            17: "VI"
        },
        "feasts": {
            25: "**Saint Mark the Evangelist**"
        }
    },
    {
        "name": "MAY",
        "days": 31,
        "start_letter": "b",
        "feasts": {
            1: "**Saint Philip and Saint James, Apostles**"
        }
    },
    {
        "name": "JUNE",
        "days": 30,
        "start_letter": "e",
        "feasts": {
            11: "**Saint Barnabas the Apostle**",
            24: "**The Nativity of Saint John Baptist**",
            29: "**Saint Peter the Apostle**"
        }
    },
    {
        "name": "JULY",
        "days": 31,
        "start_letter": "g",
        "feasts": {
            4: "**Independence Day**",
            25: "**Saint James the Apostle**"
        }
    },
    {
        "name": "AUGUST",
        "days": 31,
        "start_letter": "c",
        "feasts": {
            6: "**The Transfiguration of our Lord Jesus Christ**",
            24: "**Saint Bartholomew the Apostle**"
        }
    },
    {
        "name": "SEPTEMBER",
        "days": 30,
        "start_letter": "f",
        "feasts": {
            21: "**Saint Matthew, Apostle and Evangelist**",
            29: "**Saint Michael and all Angels**"
        }
    },
    {
        "name": "OCTOBER",
        "days": 31,
        "start_letter": "A",
        "feasts": {
            18: "**Saint Luke the Evangelist**",
            28: "**Saint Simon and Saint Jude, Apostles**"
        }
    },
    {
        "name": "NOVEMBER",
        "days": 30,
        "start_letter": "d",
        "feasts": {
            1: "**All Saints' Day**",
            30: "**Saint Andrew the Apostle**"
        },
        "note": "*In addition to the above, in November, the first Thursday (or, if any other day be appointed by the Civil Authority, then such day) shall be observed as a Day of Thanksgiving to Almighty God, for the Fruits of the Earth, and all other Blessings of his merciful Providence.*"
    },
    {
        "name": "DECEMBER",
        "days": 31,
        "start_letter": "f",
        "feasts": {
            21: "**Saint Thomas the Apostle**",
            25: "**The Nativity of our Lord Jesus Christ, or Christmas Day**",
            26: "**Saint Stephen, Deacon and Martyr**",
            27: "**Saint John, Apostle and Evangelist**",
            28: "**The Holy Innocents**"
        }
    }
]

letters = ["A", "b", "c", "d", "e", "f", "g"]

out = []
out.append("# THE CALENDAR")
out.append("### Together with Tables and Rules for the Movable and Immovable Feasts, and Tables for Finding Holy Days")
out.append("")
out.append("---")
out.append("")
out.append("## THE CALENDAR")
out.append("")

for m in months_data:
    name = m["name"]
    days_count = m["days"]
    has_primes = "golden_numbers" in m
    
    roman_days = "XXXI" if days_count == 31 else ("XXX" if days_count == 30 else "XXVIII")
    header_title = f"### {name} HATH {roman_days}. DAYS."
    if m.get("leap_day"):
        header_title = f"### {name} HATH XXVIII. DAYS, AND IN EVERY LEAP-YEAR XXIX. DAYS."
    
    out.append(header_title)
    out.append("")
    
    start_idx = letters.index(m["start_letter"])
    
    if has_primes:
        out.append("| Golden Number | Day | Letter | Feasts & Holy Days |")
        out.append("| :---: | :---: | :---: | :--- |")
        gn_dict = m["golden_numbers"]
        total_days = days_count + (1 if m.get("leap_day") else 0)
        for d in range(1, total_days + 1):
            letter = letters[(start_idx + d - 1) % 7]
            gn = gn_dict.get(d, "")
            feast = m["feasts"].get(d, "")
            out.append(f"| {gn} | {d} | {letter} | {feast} |")
    else:
        out.append("| Day | Letter | Feasts & Holy Days |")
        out.append("| :---: | :---: | :--- |")
        total_days = days_count + (1 if m.get("leap_day") else 0)
        for d in range(1, total_days + 1):
            letter = letters[(start_idx + d - 1) % 7]
            if d == 29 and m.get("leap_day"):
                letter = "d"
            feast = m["feasts"].get(d, "")
            out.append(f"| {d} | {letter} | {feast} |")
            
    if m.get("note"):
        out.append("")
        out.append(m["note"])
        
    out.append("")
    out.append("---")
    out.append("")

out.append("## TABLES AND RULES FOR THE MOVABLE AND IMMOVABLE FEASTS")
out.append("### Together with the Days of Fasting and Abstinence, through the Whole Year.")
out.append("")
out.append("### RULES TO KNOW WHEN THE MOVABLE FEASTS AND HOLY DAYS BEGIN")
out.append("")
out.append("EASTER DAY, on which the rest depend, is always the First Sunday after the Full Moon, which happens upon or next after the Twenty-first Day of March; and if the Full Moon happen upon a Sunday, Easter Day is the Sunday after.")
out.append("")
out.append("*But NOTE, That the Full Moon, for the purposes of these Rules and Tables, is the Fourteenth Day of a Lunar Month, reckoned according to an ancient Ecclesiastical computation, and not the real or Astronomical Full Moon.*")
out.append("")
out.append("| Moveable Feast | Relation to Easter |")
out.append("| :--- | :--- |")
out.append("| **Advent Sunday** | Always the nearest Sunday to the Feast of St. Andrew, whether before or after. |")
out.append("| **Septuagesima Sunday** | Nine Weeks before Easter. |")
out.append("| **Sexagesima Sunday** | Eight Weeks before Easter. |")
out.append("| **Quinquagesima Sunday** | Seven Weeks before Easter. |")
out.append("| **Quadragesima (First Sunday in Lent)** | Six Weeks before Easter. |")
out.append("| **Rogation Sunday** | Five Weeks after Easter. |")
out.append("| **Ascension Day** | Forty Days after Easter. |")
out.append("| **Whitsunday (Pentecost)** | Seven Weeks after Easter. |")
out.append("| **Trinity Sunday** | Eight Weeks after Easter. |")
out.append("")
out.append("---")
out.append("")
out.append("## A TABLE OF FEASTS")
out.append("### To be observed in this Church throughout the Year.")
out.append("")
out.append("All Sundays in the Year.")
out.append("")
out.append("| The Days of the Feasts of | | |")
out.append("| :--- | :--- | :--- |")
out.append("| The Circumcision of our Lord JESUS CHRIST | St. Philip and St. James, Apostles | All Saints |")
out.append("| The Epiphany | The Ascension of our Lord JESUS CHRIST | St. Andrew the Apostle |")
out.append("| The Conversion of St. Paul | St. Barnabas the Apostle | St. Thomas the Apostle |")
out.append("| The Purification of the Blessed Virgin | The Nativity of St. John Baptist | The NATIVITY of our LORD |")
out.append("| St. Matthias the Apostle | St. Peter the Apostle | St. Stephen, Deacon and Martyr |")
out.append("| The Annunciation of the Blessed Virgin | St. James the Apostle | St. John, Apostle and Evangelist |")
out.append("| St. Mark the Evangelist | The Transfiguration of our Lord | The Holy Innocents |")
out.append("| St. Bartholomew the Apostle | St. Matthew, Apostle and Evangelist | Monday & Tuesday in Easter Week |")
out.append("| St. Michael and all Angels | St. Luke the Evangelist | Monday & Tuesday in Whitsun Week |")
out.append("| St. Simon and St. Jude, Apostles | | |")
out.append("")
out.append("---")
out.append("")
out.append("## A TABLE OF FASTS")
out.append("")
out.append("* **Ash Wednesday**")
out.append("* **Good Friday**")
out.append("")
out.append("### OTHER DAYS OF FASTING")
out.append("On which the Church requires such a measure of abstinence as is more especially suited to extraordinary acts and exercises of devotion:")
out.append("")
out.append("I. **The Forty Days of Lent.**")
out.append("")
out.append("II. **The Ember Days at the Four Seasons**, being the Wednesday, Friday, and Saturday after the First Sunday in Lent, the Feast of Pentecost, September 14, and December 13.")
out.append("")
out.append("III. **All the Fridays in the Year**, except Christmas Day, and The Epiphany, or any Friday which may intervene between these Feasts.")
out.append("")
out.append("### DAYS OF SOLEMN SUPPLICATION")
out.append("**The three Rogation Days**, being the Monday, Tuesday, and Wednesday before Holy Thursday, or the Ascension of our Lord.")
out.append("")
out.append("---")
out.append("")
out.append("## TABLES OF PRECEDENCE")
out.append("")
out.append("| Order of Precedence | Days and Observances |")
out.append("| :--- | :--- |")
out.append("| **Primary Precedence**<br>*(The Holy Days following have precedence of any other Sunday or Holy Day)* | • The Sundays in Advent<br>• Christmas Day<br>• The Epiphany<br>• Septuagesima, Sexagesima, and Quinquagesima Sundays<br>• Ash Wednesday<br>• The Sundays in Lent<br>• All the days of Holy Week<br>• Easter Day, and the seven following days<br>• Rogation Sunday<br>• The Ascension Day, and the Sunday after Ascension Day<br>• Whitsunday, and the six following days<br>• Trinity Sunday |")
out.append("| **Secondary Precedence**<br>*(The following Holy Days have precedence of days not noted in the preceding table)* | • St. Stephen, Deacon and Martyr<br>• St. John, Apostle and Evangelist<br>• The Holy Innocents<br>• The Circumcision of Christ<br>• The Conversion of St. Paul<br>• The Purification of St. Mary the Virgin<br>• St. John Baptist<br>• All Feasts of Apostles or Evangelists<br>• The Transfiguration of Christ<br>• St. Michael and all Angels<br>• All Saints |")
out.append("")
out.append("*If any other Holy Day fall on any day noted in the Primary Table, the observance of such Holy Day shall be transferred to the first convenient open day.*")
out.append("")
out.append("*On these Holy Days the Collect, Epistle, and Gospel for the Feast shall be used; but on Sundays the Collect for the Feast shall be followed by the Collect for the Sunday.*")
out.append("")
out.append("---")
out.append("")
out.append("## A TABLE OF OCCASIONAL PROPERS")
out.append("### Of those Days or Occasions for which Collect, Epistle, and Gospel are provided in this Book and which, not being fixed days, do not appear in the Calendar:")
out.append("")
out.append("| Occasions | Occasions |")
out.append("| :--- | :--- |")
out.append("| • The Ember Days | • A Saint's Day |")
out.append("| • The Rogation Days | • Feast of the Dedication of a Church |")
out.append("| • Thanksgiving Day | • The Solemnization of Matrimony |")
out.append("| • The Burial of the Dead | |")
out.append("")
out.append("---")
out.append("")
out.append("## TABLES FOR FINDING HOLY DAYS")
out.append("")
out.append("### TO FIND THE DATE OF EASTER DAY")
out.append("THE Numbers prefixed to the several Days, in the Calendar, between the twenty-first Day of March and the eighteenth Day of April, both inclusive, denote the Days upon which those Full Moons do fall, which happen upon or next after the twenty-first Day of March, in those Years of which they are respectively the Golden Numbers; and the Sunday Letter next following any such Full Moon points out Easter Day for that Year. All which holds until the Year of our Lord 2199 inclusive.")
out.append("")
out.append("To find the Golden Number, or Prime, add 1 to the Year of our Lord, and then divide by 19; the Remainder, if any, is the Golden Number; but if nothing remain, then 19 is the Golden Number.")
out.append("")
out.append("---")
out.append("")
out.append("### A TABLE OF THE MOVABLE FEASTS")
out.append("#### According to the Several Days that Easter Can Possibly Fall Upon")
out.append("")
out.append("| Easter Day | Sundays after Epiphany | Septuagesima Sunday | First Day of Lent (Ash Wed.) | Ascension Day | Whitsunday (Pentecost) | Sundays after Trinity | Advent Sunday |")
out.append("| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |")

# Copy the 35 Easter rows
easter_rows = [
    ("March 22", "1", "Jan. 18", "Feb. 4", "April 30", "May 10", "27", "Nov. 29"),
    ("March 23", "1", "Jan. 19", "Feb. 5", "May 1", "May 11", "27", "Nov. 30"),
    ("March 24", "1", "Jan. 20", "Feb. 6", "May 2", "May 12", "27", "Dec. 1"),
    ("March 25", "2", "Jan. 21", "Feb. 7", "May 3", "May 13", "27", "Dec. 2"),
    ("March 26", "2", "Jan. 22", "Feb. 8", "May 4", "May 14", "27", "Dec. 3"),
    ("March 27", "2", "Jan. 23", "Feb. 9", "May 5", "May 15", "26", "Nov. 27"),
    ("March 28", "2", "Jan. 24", "Feb. 10", "May 6", "May 16", "26", "Nov. 28"),
    ("March 29", "2", "Jan. 25", "Feb. 11", "May 7", "May 17", "26", "Nov. 29"),
    ("March 30", "2", "Jan. 26", "Feb. 12", "May 8", "May 18", "26", "Nov. 30"),
    ("March 31", "2", "Jan. 27", "Feb. 13", "May 9", "May 19", "26", "Dec. 1"),
    ("April 1", "3", "Jan. 28", "Feb. 14", "May 10", "May 20", "26", "Dec. 2"),
    ("April 2", "3", "Jan. 29", "Feb. 15", "May 11", "May 21", "26", "Dec. 3"),
    ("April 3", "3", "Jan. 30", "Feb. 16", "May 12", "May 22", "25", "Nov. 27"),
    ("April 4", "3", "Jan. 31", "Feb. 17", "May 13", "May 23", "25", "Nov. 28"),
    ("April 5", "3", "Feb. 1", "Feb. 18", "May 14", "May 24", "25", "Nov. 29"),
    ("April 6", "3", "Feb. 2", "Feb. 19", "May 15", "May 25", "25", "Nov. 30"),
    ("April 7", "3", "Feb. 3", "Feb. 20", "May 16", "May 26", "25", "Dec. 1"),
    ("April 8", "4", "Feb. 4", "Feb. 21", "May 17", "May 27", "25", "Dec. 2"),
    ("April 9", "4", "Feb. 5", "Feb. 22", "May 18", "May 28", "25", "Dec. 3"),
    ("April 10", "4", "Feb. 6", "Feb. 23", "May 19", "May 29", "24", "Nov. 27"),
    ("April 11", "4", "Feb. 7", "Feb. 24", "May 20", "May 30", "24", "Nov. 28"),
    ("April 12", "4", "Feb. 8", "Feb. 25", "May 21", "May 31", "24", "Nov. 29"),
    ("April 13", "4", "Feb. 9", "Feb. 26", "May 22", "June 1", "24", "Nov. 30"),
    ("April 14", "4", "Feb. 10", "Feb. 27", "May 23", "June 2", "24", "Dec. 1"),
    ("April 15", "5", "Feb. 11", "Feb. 28", "May 24", "June 3", "24", "Dec. 2"),
    ("April 16", "5", "Feb. 12", "March 1", "May 25", "June 4", "24", "Dec. 3"),
    ("April 17", "5", "Feb. 13", "March 2", "May 26", "June 5", "23", "Nov. 27"),
    ("April 18", "5", "Feb. 14", "March 3", "May 27", "June 6", "23", "Nov. 28"),
    ("April 19", "5", "Feb. 15", "March 4", "May 28", "June 7", "23", "Nov. 29"),
    ("April 20", "5", "Feb. 16", "March 5", "May 29", "June 8", "23", "Nov. 30"),
    ("April 21", "5", "Feb. 17", "March 6", "May 30", "June 9", "23", "Dec. 1"),
    ("April 22", "6", "Feb. 18", "March 7", "May 31", "June 10", "23", "Dec. 2"),
    ("April 23", "6", "Feb. 19", "March 8", "June 1", "June 11", "23", "Dec. 3"),
    ("April 24", "6", "Feb. 20", "March 9", "June 2", "June 12", "22", "Nov. 27"),
    ("April 25", "6", "Feb. 21", "March 10", "June 3", "June 13", "22", "Nov. 28"),
]

for row in easter_rows:
    out.append(f"| **{row[0]}** | {row[1]} | {row[2]} | {row[3]} | {row[4]} | {row[5]} | {row[6]} | {row[7]} |")

out.append("")
out.append("*NOTE, That in a Bissextile or Leap-year, the number of Sundays after Epiphany will be the same as if Easter Day had fallen one Day later than it really does. And, for the same reason, one Day must, in every Leap-year, be added to the Day of the Month given by the Table for Septuagesima Sunday, and for the First Day of Lent: unless the Table gives some Day in the Month of March for it; for in that case, the Day given by the Table is the right Day.*")

full_content = "\n".join(out)

ts_file_content = f'''import {{ ServiceItem }} from '../types';

export const calendarAndTables1928: ServiceItem = {{
  id: 'calendar-and-tables-1928',
  slug: 'calendar-and-tables',
  title: 'The Calendar, Tables and Rules for Feasts and Fasts',
  shortTitle: 'The Calendar & Tables',
  category: 'Prefaces & Tables',
  isService: false,
  content: {json.dumps(full_content)}
}};
'''

with open('src/services/bcp1928/calendarAndTables1928.ts', 'w') as f:
    f.write(ts_file_content)

print('Successfully generated src/services/bcp1928/calendarAndTables1928.ts')
