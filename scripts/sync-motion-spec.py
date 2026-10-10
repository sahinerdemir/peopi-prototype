from pathlib import Path
import json
root = Path(__file__).resolve().parents[1]
p = root / "peopi-motion.js"
lines = p.read_text().splitlines()
for i, (name, file) in enumerate([("PEOPI_MOTION_TOKENS", "peopi-motion.tokens.json"), ("PEOPI_SCREEN_CONTRACTS", "peopi-screen-contracts.json")]):
    lines[i] = "const " + name + "=" + json.dumps(json.loads((root / file).read_text()), separators=(",", ":")) + ";"
p.write_text("\n".join(lines) + "\n")
