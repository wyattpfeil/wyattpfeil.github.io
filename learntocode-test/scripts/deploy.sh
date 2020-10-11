#!/usr/bin/env sh

URL=http://wyattpfeil.com/learntocode
SRC_DIR=/Users/brianpfeil/Dropbox/learntocode/

rsync -avz --exclude='.git/' -e ssh $SRC_DIR root@brianpfeil.com:/var/www/wyattpfeil-ghost/content/learntocode-test/

curl $URL >/dev/null