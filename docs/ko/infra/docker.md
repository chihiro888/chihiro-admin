# docker

- 로컬 데이터베이스 구축 시 사용합니다.

## 컨테이너 생성

```bash
cd infra
```

```bash
docker-compose up
```

## 동작원리

<img src="/docs/image/docker.png" width="500"/>

infra/ddl 아래의 SQL이 자동으로 실행되어 DDL 및 초기데이터가 작성된 상태로 컨테이너가 생성됩니다.
