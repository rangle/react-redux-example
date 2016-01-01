#!/bin/bash

IMAGE="rafkhan/"${CIRCLE_PROJECT_REPONAME}:pr-${CIRCLE_PR_NUMBER}

export IMAGE

set -e

# CWD to *script's* directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

# up to project root
cd ..

# Remove private folder
rm -rf ./.private

docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} -e ${DOCKER_EMAIL}
docker build -t ${IMAGE} ./
docker push ${IMAGE}

echo "Built ${IMAGE}"
