#!/bin/sh
# vim:sw=4:ts=4:et
set -e

if [ "${1}" = "node" ]; then
    npm install
    npm run start -- --host 0.0.0.0 --disable-host-check --poll 500
fi
if [ "${1}" = "build" ]; then
    npm install
    npm run build
fi

exec "$@"
