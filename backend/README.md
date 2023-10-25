# Deployment Manual
> Ubuntu 22.04 LTS를 기반으로 작성되었습니다.

### install [node.js] or [npm] or [nvm] or [yarn] or [pm2] or [pm2 log rotate]
```
sudo apt update

# install node.js
sudo apt -y install nodejs

# isntall npm
sudo apt -y install npm

# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# shell apply
source ~/.bashrc

# node.js install 18.18.2
nvm install v18.18.2

# pm2 install
npm install pm2 -g

# yarn install
npm install -g yarn

# pm2 log rotate
pm2 install pm2-logrotate
```

### install mysql 8.0
```
#!/usr/bin/env bash

password="qwer1234"

echo PURGE | sudo debconf-communicate mysql-community-server
sudo apt purge mysql-client mysql-server

sudo debconf-set-selections <<< "mysql-community-server mysql-community-server/root-pass password $password"
sudo debconf-set-selections <<< "mysql-community-server mysql-community-server/re-root-pass password $password"
sudo debconf-set-selections <<< "mysql-community-server mysql-server/default-auth-override select Use Legacy Authentication Method (Retain MySQL 5.x Compatibility)"

sudo apt install -y dirmngr
sudo apt-key adv --keyserver pool.sks-keyservers.net --recv-keys 5072E1F5
echo "deb http://repo.mysql.com/apt/ubuntu $(lsb_release -sc) mysql-8.0" | sudo tee /etc/apt/sources.list.d/mysql80.list
sudo apt-get update

export DEBIAN_FRONTEND="noninteractive" 
sudo apt-get -y install mysql-server
```

### mysql create user, database
```
CREATE DATABASE [DB_NAME];

create user [계정]@'%' identified by '비밀번호' ;
grant all privileges on DB이름.* to 계정ID@'%' with grant option;
ALTER USER [계정]@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
flush privileges;

CREATE DATABASE main;

create user [계정]@'%' identified by '비밀번호' ;
grant all privileges on [계정].* to [계정]@'%' with grant option;
ALTER USER [계정]@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
flush privileges;
```

### install nginx
```
sudo apt-get -y install nginx

# 아이피를 받아오는 기능이 있는 경우 설치
sudo apt install libnginx-mod-http-geoip
```

### cloudflare IP forward
```
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 104.16.0.0/13;
set_real_ip_from 104.24.0.0/14;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 131.0.72.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 2400:cb00::/32;
set_real_ip_from 2606:4700::/32;
set_real_ip_from 2803:f800::/32;
set_real_ip_from 2405:b500::/32;
set_real_ip_from 2405:8100::/32;
set_real_ip_from 2c0f:f248::/32;
set_real_ip_from 2a06:98c0::/29;

#use any of the following two

#real_ip_header CF-Connecting-IP;
real_ip_header X-Forwarded-For;
```

### /etc/nginx/geoip.conf
```
# GeoIP database path
geoip_country /usr/share/GeoIP/GeoIPv6.dat;

# country whitelist examplu
map $geoip_country_code $allowed_country {
    default yes;
}
```

### /etc/nginx/sites-available/conf
```
server {
    server_name  서버주소.com www.서버주소.com;

    # location = /robots.txt { return 200 "User-agent: *\nDisallow: /\n"; }

    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
    }

    location /api {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://localhost:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Ip-Country $geoip_country_code;
    }

   location /api/swagger-ui-init.js {
        allow [스웨거 접속 허용 IP];
        deny all;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://localhost:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

   location /api/swagger-ui-standalone-preset.js {
        allow [스웨거 접속 허용 IP];
        deny all;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://localhost:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    location /api/swagger-ui-bundle.js {
        allow [스웨거 접속 허용 IP];
        deny all;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://localhost:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

### SSL apply
```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx
```

### server environment variable set up
```
cp backend/src/configuration/development.yaml backend/src/configuration/production.yaml
vi backend/src/configuration/production.yaml # 서버 접속 정보를 수정합니다.
```
```
# backend/src/configuration/production.yaml

http:
  port: 9001

# session store 'database' or 'redis'
session_store: 'database'

db:
  host: 'production_db_host'
  port: 3306
  username: 'production_username'
  password: 'production_password'
  database: 'pruduction_database'
  session:
    secretKey: 'bdff7681-167e-42ae-ae53-304b5ff468b0' # uuid

redis:
  host: 'production_redis_host'
  port: 6379

```

### run Web Application Server
backend/deploy_prod.bash
```
#!/bin/bash
git pull
yarn install
yarn build
yarn load:yaml
pm2 restart ecosystem.config.js --env production --time
```

# Development Manual

기본 메뉴얼 : https://chihiro888.gitbook.io/chihiro-admin/

Version info
- node.js v18.18.2
- yarn 4.0.0
- mysql 8.0

## vscode typescript set up

> `yarn version 4.0.0 PnP mode`를 사용중이므로, typescript를 올바르게 적용하기 위해 에디터 설정이 필요합니다.

### 1. **install packages**

  ```
  cd backend
  yarn install
  ```

### 2. **TS intellisense set up**
- Enter `Cmd + shift + p` or `Ctrl + shift + p`, open "Typescript version select"
<p align="center">
    <img src="https://github.com/chihiro888/chihiro-admin/assets/48134435/d0275777-5d22-4a40-ad4e-57f7e21dcb44"/>
</p>

- select `use workspace version`
<p align="center">
    <img src="https://github.com/chihiro888/chihiro-admin/assets/48134435/4a731253-cc74-42cf-bfbb-836489de4ba8"/>
</p>


### 3. **install ZipFS**
<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs">
    <img src="https://github.com/chihiro888/chihiro-admin/assets/48134435/4d98124f-1ac7-4401-8049-11c979156fa5"/>
  </a>
</p>



## DDL and Entities set up
참조 : https://chihiro888.gitbook.io/chihiro-admin/develop/ddl-entity

Windows 환경은 `git bash` 환경에서 적용 가능합니다.

1. `docker/ddl/1_init_ddl.sql` 수정
2. `bash start_dev.bash`
3. `cd backend` `bash update_entity.bash`

<br/>

# Reference

[Nest Repository](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Docs](https://docs.nestjs.com) Official document.


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## License

Nest is [MIT licensed](LICENSE).
