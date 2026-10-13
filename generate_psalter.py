import re, json

# Read the raw text supplied in the prompt
with open('raw_psalter.txt', 'r') as f:
    raw = f.read()

# Let's inspect headings
lines = raw.split('\n')
print(f"Total lines: {len(lines)}")
