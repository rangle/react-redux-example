#!/bin/bash

set -e

# CWD to *script's* directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

# up to project root
cd ..

gpg --passphrase ${CLUSTERNATOR_SHARED_KEY} --output ./clusternator.tar.gz --decrypt ./clusternator.tar.gz.asc
tar xfz ./clusternator.tar.gz
rm ./clusternator.tar.gz
