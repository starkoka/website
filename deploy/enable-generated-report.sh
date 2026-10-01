#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
[[ $EUID -eq 0 ]] || { echo 'Run with sudo bash deploy/enable-generated-report.sh'; exit 1; }
test -f public/kosenRBKN-HPDiff.html
test -e /etc/apache2/sites-enabled/kokastar.conf
stamp=$(date -u +%Y%m%dT%H%M%SZ)
backup=/var/backups/kokastar/generated-report-$stamp
install -d -m 700 "$backup"
cp -a /etc/apache2/sites-available/kokastar.conf "$backup/"
for path in /etc/systemd/system/var-www-kokastar-generated.mount /etc/systemd/system/var-www-kokastar_generated.mount /etc/systemd/system/apache2.service.d/generated-assets.conf; do
    if test -e "$path"; then cp -a "$path" "$backup/"; fi
done
# Remove the failed legacy unit whose name did not match systemd's path escaping.
if test -e /etc/systemd/system/var-www-kokastar-generated.mount; then
    systemctl disable var-www-kokastar-generated.mount
    unlink /etc/systemd/system/var-www-kokastar-generated.mount
fi
install -d -m 755 /var/www/kokastar_generated /etc/systemd/system/apache2.service.d
install -m 644 deploy/var-www-kokastar_generated.mount /etc/systemd/system/var-www-kokastar_generated.mount
install -m 644 deploy/generated-assets-apache.conf /etc/systemd/system/apache2.service.d/generated-assets.conf
systemctl daemon-reload
systemctl enable --now var-www-kokastar_generated.mount
# The mount exposes only a read-only view; the generator keeps its writable path.
runuser -u www-data -- test -r /var/www/kokastar_generated/kosenRBKN-HPDiff.html
install -m 644 deploy/kokastar.conf /etc/apache2/sites-available/kokastar.conf
if ! apache2ctl configtest; then
    cp -a "$backup/kokastar.conf" /etc/apache2/sites-available/kokastar.conf
    echo 'Configuration check failed; the previous vhost has been restored.' >&2
    exit 1
fi
systemctl reload apache2
report=$(mktemp)
trap 'rm -- "$report"' EXIT
curl --fail --silent --show-error --resolve kokastar.dev:443:127.0.0.1 https://kokastar.dev/kosenRBKN-HPDiff.html -o "$report"
cmp public/kosenRBKN-HPDiff.html "$report"
echo "Report enabled. Backup: $backup"
