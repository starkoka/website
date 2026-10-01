#!/usr/bin/env bash
set -euo pipefail
for path in / /works /timeline /contact /works/Hizk; do
    code=$(curl -sS --max-time 20 -o /dev/null -w '%{http_code}' "https://kokastar.dev$path")
    printf '%s %s\n' "$code" "$path"
    [[ "$code" == 200 ]]
done
headers=$(curl -sSI --max-time 20 https://kokastar.dev/)
printf '%s\n' "$headers"
! printf '%s' "$headers" | grep -Eiq 'x-powered-by:|Apache/|Ubuntu'
printf '%s' "$headers" | grep -qi 'strict-transport-security:'
printf '%s' "$headers" | grep -qi 'x-content-type-options: nosniff'
code=$(curl -sS --max-time 20 -o /dev/null -w '%{http_code}' https://kokastar.dev/.env)
[[ "$code" == 403 || "$code" == 404 ]]
code=$(curl -sS --max-time 20 -o /dev/null -w '%{http_code}' http://kokastar.dev/)
[[ "$code" == 301 || "$code" == 308 ]]
echo 'Public HTTPS, redirects and basic security checks passed.'
