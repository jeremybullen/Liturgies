import json

man_degrees = [
    "Grandmother",
    "Grandfather's Wife",
    "Wife's Grandmother",
    "Father's Sister",
    "Mother's Sister",
    "Father's Brother's Wife",
    "Mother's Brother's Wife",
    "Wife's Father's Sister",
    "Wife's Mother's Sister",
    "Mother",
    "Step-Mother",
    "Wife's Mother",
    "Daughter",
    "Wife's Daughter",
    "Son's Wife",
    "Sister",
    "Wife's Sister",
    "Brother's Wife",
    "Son's Daughter",
    "Daughter's Daughter",
    "Son's Son's Wife",
    "Daughter's Son's Wife",
    "Wife's Son's Daughter",
    "Wife's Daughter's Daughter",
    "Brother's Daughter",
    "Sister's Daughter",
    "Brother's Son's Wife",
    "Sister's Son's Wife",
    "Wife's Brother's Daughter",
    "Wife's Sister's Daughter",
]

woman_degrees = [
    "Grandfather",
    "Grandmother's Husband",
    "Husband's Grandfather",
    "Father's Brother",
    "Mother's Brother",
    "Father's Sister's Husband",
    "Mother's Sister's Husband",
    "Husband's Father's Brother",
    "Husband's Mother's Brother",
    "Father",
    "Step-Father",
    "Husband's Father",
    "Son",
    "Husband's Son",
    "Daughter's Husband",
    "Brother",
    "Husband's Brother",
    "Sister's Husband",
    "Son's Son",
    "Daughter's Son",
    "Son's Daughter's Husband",
    "Daughter's Daughter's Husband",
    "Husband's Son's Son",
    "Husband's Daughter's Son",
    "Brother's Son",
    "Sister's Son",
    "Brother's Daughter's Husband",
    "Sister's Daughter's Husband",
    "Husband's Brother's Son",
    "Husband's Sister's Son",
]

lines = [
    "# A TABLE OF KINDRED AND AFFINITY,",
    "## Wherein Whosoever are Related are Forbidden in Scripture and Our Laws to Marry Together.",
    "",
    "---",
    "",
    "| No. | A Man may not marry his | A Woman may not marry with her |",
    "| :---: | :--- | :--- |",
]

for i in range(30):
    lines.append(f"| {i+1} | {man_degrees[i]} | {woman_degrees[i]} |")

lines.append("")
lines.append("*The End.*")

md_content = "\n".join(lines)

ts_content = f'''import {{ ServiceItem }} from './types';

/**
 * A Table of Kindred and Affinity (1563 / 1662)
 * The 1662 Book of Common Prayer (Church of England)
 */
export const tableOfKindredAndAffinity1662: ServiceItem = {{
  id: 'table-of-kindred-and-affinity-1662',
  slug: 'kindred-and-affinity',
  title: 'A Table of Kindred and Affinity',
  shortTitle: 'Kindred & Affinity',
  category: 'Prefaces & Tables',
  isService: false,
  content: {json.dumps(md_content.strip())}
}};
'''

with open("src/services/kindredAndAffinity1662.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Created src/services/kindredAndAffinity1662.ts")
