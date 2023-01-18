# Chihiro Admin

- Node.js 16.16.0 을 요구합니다.
- Docker Engine 1.13.0+ 을 요구합니다.

## 시작하기

### 인프라

```bash
bash start_dev.bash
```

#### 데이터베이스 접속정보

| key           | value     |
| ------------- | --------- |
| host          | localhost |
| port          | 3306      |
| database      | develop   |
| root user     | root      |
| root password | root      |
| user          | docker    |
| password      | docker    |

#### 이미지서버

http://localhost:7000

### 백엔드

```bash
cd backend
```

```bash
yarn install
```

Run And Debug -> "debug NestJS" 클릭

- 환경변수를 변경하여 실행하고싶을 경우 ".vscode/launch.json" 을 수정해주세요. (default: local)
- 명령어는 아래를 참고해주세요.

```bash
# if local in MAC
yarn start:local

# if development in MAC
yarn start:dev

# if production in MAC
yarn start:prod
```

```bash
# if local in Windows
yarn start:local_win

# if development in Windows
yarn start:dev_win

# if production in Windows
yarn start:prod_win
```

http://localhost:9000/api

### 프론트엔드

```bash
cd frontend
```

```bash
yarn install
```

```bash
yarn dev
```

http://localhost:3000/

## Document

- 준비중입니다.

## License

https://themeselection.com/item/sneat-mui-react-nextjs-admin-template/
