#!/bin/sh
set -eu
/usr/sbin/apache2ctl configtest
/bin/systemctl reload apache2
