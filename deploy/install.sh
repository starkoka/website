#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
[[ $EUID -eq 0 ]] || { echo 'Run with sudo bash deploy/install.sh'; exit 1; }
test -f .next/standalone/server.js
test -f .next/standalone/.next/BUILD_ID
runtime=/home/kokastar/.local/share/kokastar-runtime/node-v22.23.3-linux-x64
test -x "$runtime/bin/node"
stamp=$(date -u +%Y%m%dT%H%M%SZ)
backup=/var/backups/kokastar/$stamp
install -d -m 700 "$backup"
cp -a /etc/apache2 "$backup/apache2"
cp -a /etc/letsencrypt "$backup/letsencrypt"
if test -e /etc/systemd/system/kokastar.service; then
    cp -a /etc/systemd/system/kokastar.service "$backup/"
fi
if test -L /srv/kokastar/current; then
    readlink -f /srv/kokastar/current > "$backup/previous-release"
fi
echo "Backup: $backup"
apt-get update
apt-get install --only-upgrade -y apache2 apache2-bin apache2-data apache2-utils openssl libssl3
apt-get install -y certbot rsync
if ! id kokastar-web >/dev/null 2>&1; then
    useradd --system --home-dir /nonexistent --shell /usr/sbin/nologin kokastar-web
fi
install -d /opt/kokastar-node
rsync -a --delete "$runtime/" /opt/kokastar-node/
chown -R root:root /opt/kokastar-node
release=/srv/kokastar/releases/$stamp
install -d "$release"
rsync -a .next/standalone/ "$release/"
chown -R root:root "$release"
chmod -R go-w "$release"
install -d -o kokastar-web -g kokastar-web "$release/.next/cache"
chown -R kokastar-web:kokastar-web "$release/.next/cache"
ln -s "$release" /srv/kokastar/current.new
mv -Tf /srv/kokastar/current.new /srv/kokastar/current
install -m 644 deploy/kokastar.service /etc/systemd/system/kokastar.service
systemctl daemon-reload
systemctl enable --now kokastar.service
systemctl restart kokastar.service
for attempt in {1..30}; do
    if curl --fail --silent http://127.0.0.1:3000/ -o /dev/null; then break; fi
    sleep 1
done
curl --fail --silent http://127.0.0.1:3000/ -o /dev/null
install -d -m 755 /var/www/kokastar-acme/.well-known/acme-challenge
install -m 644 deploy/security.conf /etc/apache2/conf-available/security.conf
install -m 644 deploy/bootstrap.conf /etc/apache2/sites-available/kokastar-bootstrap.conf
a2enmod headers rewrite ssl proxy proxy_http
a2dismod -f autoindex status
a2disconf revers_proxy serve-cgi-bin
a2dissite 000-default
a2ensite kokastar-bootstrap
apache2ctl configtest
systemctl reload apache2
bash deploy/finish-tls.sh
if test -f public/kosenRBKN-HPDiff.html; then
    bash deploy/enable-generated-report.sh
fi
echo "Backup: $backup"
