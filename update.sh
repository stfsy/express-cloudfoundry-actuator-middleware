#!/bin/bash

git checkout master
npm outdated
npm update
npm test
git add *package*
git commit -m "feat: update dependencies"
git push origin master
git checkout dev || true
git rebase master