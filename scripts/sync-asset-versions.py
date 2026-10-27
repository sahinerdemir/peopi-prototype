#!/usr/bin/env python3
import hashlib
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
index_file = root / "index.html"
html = index_file.read_text(encoding="utf-8")

def get_content_hash(rel_path: str) -> str:
    f = root / rel_path
    if not f.exists():
        raise FileNotFoundError(f"Asset not found: {f}")
    data = f.read_bytes()
    return hashlib.sha256(data).hexdigest()[:10]

# Pattern for local stylesheets
def replace_link(match):
    path = match.group(1)
    h = get_content_hash(path)
    return f'href="{path}?v={h}"'

html = re.sub(r'href="(css/[^"?]+\.css|peopi-motion\.css)(?:\?v=[^"]*)?"', replace_link, html)

# Pattern for local scripts
def replace_script(match):
    path = match.group(1)
    h = get_content_hash(path)
    return f'src="{path}?v={h}"'

html = re.sub(r'src="(js/[^"?]+\.js|peopi-motion\.js)(?:\?v=[^"]*)?"', replace_script, html)

index_file.write_text(html, encoding="utf-8")
print("Successfully synchronized asset content versions in index.html:")

for m in re.finditer(r'(?:href|src)="((?:css/[^"?]+\.css|js/[^"?]+\.js|peopi-motion\.(?:css|js))\?v=[a-f0-9]+)"', html):
    print(" ", m.group(1))
