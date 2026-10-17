import json, re

with open("build_tables_1662.py") as f:
    text = f.read()

# Extract content_cat from build_tables_1662.py
m = re.search(r'content_cat\s*=\s*"""(.*?)"""', text, re.DOTALL)
if not m:
    print("Could not find content_cat")
    exit(1)

content_cat = m.group(1)

# Remove the Solemn Day / Accession Day section
content_cat = re.sub(
    r'---\s*\n\s*## A SOLEMN DAY,.*?(?=---\s*\n\s*## A TABLE TO FIND EASTER-DAY)',
    '',
    content_cat,
    flags=re.DOTALL
)

# Update ANOTHER TABLE TO FIND EASTER to match image 2 exactly
another_table_image2 = """## ANOTHER TABLE TO FIND EASTER
### Till the Year 2199 inclusive.

| Golden Num. | A | B | C | D | E | F | G |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **I** | April 16 | 17 | 18 | 19 | 20 | 14 | 15 |
| **II** | April 9 | 10 | 4 | 5 | 6 | 7 | 8 |
| **III** | March 26 | 27 | 28 | 29 | 23 | 24 | 25 |
| **IV** | April 16 | 17 | 11 | 12 | 13 | 14 | 15 |
| **V** | April 2 | 3 | 4 | 5 | 6 | 7 | 1 |
| **VI** | April 23 | 24 | 25 | 19 | 20 | 21 | 22 |
| **VII** | April 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| **VIII** | April 2 | 3 | 4 | Mar. 29 | 30 | 31 | Apr. 1 |
| **IX** | April 23 | 17 | 18 | 19 | 20 | 21 | 22 |
| **X** | April 9 | 10 | 11 | 12 | 6 | 7 | 8 |
| **XI** | March 26 | 27 | 28 | 29 | 30 | 31 | Apr. 1 |
| **XII** | April 16 | 17 | 18 | 19 | 13 | 14 | 15 |
| **XIII** | April 9 | 3 | 4 | 5 | 6 | 7 | 8 |
| **XIV** | March 26 | 27 | 28 | 29 | 23 | 24 | 25 |
| **XV** | April 16 | 17 | 11 | 12 | 13 | 14 | 15 |
| **XVI** | April 2 | 3 | 4 | 5 | 6 | Mar. 31 | Apr. 1 |
| **XVII** | April 23 | 24 | 18 | 19 | 20 | 21 | 22 |
| **XVIII** | April 9 | 10 | 11 | 12 | 13 | 14 | 8 |
| **XIX** | April 2 | 3 | Mar. 28 | 29 | 30 | 31 | Apr. 1 |

TO make use of the preceding Table, find the Sunday Letter for the Year in the uppermost Line, and the Golden Number, or Prime, in the Column of Golden Numbers, and against the Prime, in the same Line under the Sunday Letter you have the Day of the Month on which Easter falleth that Year. But note that the Name of the Month is set on the Left Hand, or just with the Figure, and followeth not, as in other Tables, by Descent, but Collateral."""

content_cat = re.sub(
    r'## ANOTHER TABLE TO FIND EASTER\s*\n\s*### Till the Year 2199 inclusive\..*?(?=---\s*\n\s*## A TABLE OF THE MOVEABLE FEASTS)',
    another_table_image2 + "\n\n",
    content_cat,
    flags=re.DOTALL
)

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

print("Updated src/services/calendarAndTables1662.ts!")
