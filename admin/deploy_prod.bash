#!/bin/bash

git pull
yarn install
yarn build
pm2 delete frontend
pm2 start yarn --name frontend -- start --time
