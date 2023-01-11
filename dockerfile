FROM ubuntu:22.04

# 카카오 레포지토리로 변경
RUN sed -i 's@archive.ubuntu.com@mirror.kakao.com@g' /etc/apt/sources.list

# 의존 모듈 설치
RUN apt update
RUN apt -y install vim
RUN apt -y install curl
RUN apt -y install nodejs
RUN apt -y install npm

# nvm 설치 후 node 16.16.0 설치 후 적용
RUN touch $HOME/.bashrc
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash \
    && . $HOME/.bashrc \
    && nvm install v16.16.0 \
    && nvm use 16.16.0

# pm2 및 yarn 설치
RUN npm install -g pm2 
RUN npm install -g yarn

# nginx 설치
RUN apt-get -y install nginx

# nginx 복사
COPY ./docker/nginx/nginx-app.conf /etc/nginx/sites-available/default

# 프로젝트 복사
COPY ./backend /usr/src/app/backend
COPY ./frontend /usr/src/app/frontend

# 작업 디렉토리 변경
WORKDIR /usr/src/app

# 노드 모듈 삭제
RUN rm -rf backend/node_modules
RUN rm -rf frontend/node_modules
