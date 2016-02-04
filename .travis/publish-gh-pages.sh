#!/bin/bash

VERSION=`node -e "console.log(require('./package.json').version)"`
TMP_GH_PAGES_DIR=.gh-pages-demo

# We only want to deploy to gh-pages from "master"
if [ "${TRAVIS_BRANCH}" != "master" ]
then
    echo "Skipping gh-pages publish for branch ${TRAVIS_BRANCH}"
    exit 0
fi

# TODO: is there a more optimal way to do this without a fresh clone/install?
git clone https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG} ${TMP_GH_PAGES_DIR} > /dev/null 2>&1
cd ${TMP_GH_PAGES_DIR}
npm install && bower install
ember github-pages:commit --message "Automated publication of demo for ${VERSION}"
git push origin gh-pages > /dev/null 2>&1
