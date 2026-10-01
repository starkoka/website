#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
[[ $EUID -eq 0 ]] || { echo 'Run with sudo bash deploy/finish-tls.sh'; exit 1; }
systemctl is-active --quiet kokastar.service
curl --fail --silent --show-error http://127.0.0.1:3000/ -o /dev/null
# Prevent the scheduled renewal from competing with this migration.
# systemctl stop waits for the service to exit and release its own locks.
systemctl stop certbot.timer
trap 'systemctl start certbot.timer' EXIT
systemctl stop certbot.service
if pgrep -x certbot >/dev/null; then
    echo 'Another manually started Certbot is running. Wait for it to finish, then retry.' >&2
    exit 1
fi
# Migrate standalone renewal to webroot without stopping Apache.
certbot certonly --webroot -w /var/www/kokastar-acme --cert-name kokastar.dev -d kokastar.dev --force-renewal --non-interactive
install -d /etc/letsencrypt/renewal-hooks/deploy
install -m 755 deploy/reload-apache.sh /etc/letsencrypt/renewal-hooks/deploy/kokastar-apache
install -m 644 deploy/kokastar.conf /etc/apache2/sites-available/kokastar.conf
a2dissite kokastar-bootstrap
a2ensite kokastar
apache2ctl configtest
systemctl reload apache2
curl --fail --silent --show-error --resolve kokastar.dev:443:127.0.0.1 https://kokastar.dev/ -o /dev/null
certbot renew --cert-name kokastar.dev --dry-run
systemctl enable certbot.timer
echo 'Origin ready. Set Cloudflare SSL/TLS to Full (strict), then run bash deploy/verify.sh.'
