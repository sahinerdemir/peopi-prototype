from pathlib import Path
import json
import subprocess
root = Path(__file__).resolve().parents[1]
p = root / "peopi-motion.js"
lines = p.read_text().splitlines()
for i, (name, file) in enumerate([("PEOPI_MOTION_TOKENS", "peopi-motion.tokens.json"), ("PEOPI_SCREEN_CONTRACTS", "peopi-screen-contracts.json")]):
    lines[i] = "const " + name + "=" + json.dumps(json.loads((root / file).read_text()), separators=(",", ":")) + ";"
p.write_text("\n".join(lines) + "\n")

# Automatically synchronize asset content versions
sync_assets = root / "scripts" / "sync-asset-versions.py"
if sync_assets.exists():
    subprocess.run(["python3", str(sync_assets)], check=True)

