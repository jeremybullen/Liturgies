import json, re

with open('collects1662_pages.json') as f:
    pages = json.load(f)

# Page 1 is preface info. Pages 2..109 are propers.
raw_pages = []
for idx, p in enumerate(pages[1:], 2):
    t = p['text']
    # Replace ligatures and long s
    t = t.replace('ſ', 's').replace('\ue000', 'ct').replace('\ue001', 'st').replace('\ue002', 'st')
    lines = t.split('\n')
    # If page > 2, line 0 is the running header
    if idx > 2:
        # Check if first line is running header (usually uppercase day name)
        header_candidate = lines[0].strip()
        lines = lines[1:]
    raw_pages.append('\n'.join(lines))

full_raw = '\n'.join(raw_pages)

# Normalize tabs and multiple spaces
full_raw = re.sub(r'[ \t]+', ' ', full_raw)

print("Full raw length:", len(full_raw))
print("Sample first 1000 chars:")
print(full_raw[:1000])

