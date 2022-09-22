git pull
yarn install
yarn build
sudo cp -r ~/project/chihiro-develop-ket/frontend/build/* /usr/share/nginx/html/
sudo service nginx restart
