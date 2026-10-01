#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
export PATH=/home/kokastar/.local/share/kokastar-runtime/node-v22.23.3-linux-x64/bin:$PATH
export NEXT_TELEMETRY_DISABLED=1
npm ci
npm audit
npm run check:content
npm run lint
npm run build
mkdir -p .next/standalone/public .next/standalone/.next/static
cp -a .next/static/. .next/standalone/.next/static/
# Publish tracked assets only, excluding local scratch files.
python3 - <<'PY'
from pathlib import Path
import shutil, subprocess
for name in subprocess.check_output(['git', 'ls-files', '-z', 'public']).decode().split('\0'):
    if name:
        target = Path('.next/standalone') / name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(name, target)
PY
