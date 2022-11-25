#!/bin/bash

git pull
yarn install
yarn build
yarn load:yaml
pm2 restart ecosystem.config.js --env production --time
