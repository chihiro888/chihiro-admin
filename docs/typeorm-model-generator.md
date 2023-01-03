# typeorm-model-generator

- 테이블을 DDL로 선행 작성 후 엔티티를 자동으로 생성할 때 사용합니다.

# 메뉴얼

1. backend 디렉토리 하위에서 실행하십시오.
2. 생성된 엔티티들은 src/entities 디렉토리 하위에 배치하십시오.
3. nest.js 네이밍 컨벤션에 맞게 이름을 변경하십시오.
4. 각각의 엔티티 파일을 저장하여 prettier 포맷을 적용하십시오.

## 모듈 설치

```bash
yarn global add typeorm-model-generator
```

## 사용법

### 사용

```bash
typeorm-model-generator -h <호스트> -d <데이터베이스> -p <포트> -u <사용자명> -x '<비밀번호>' -e mysql -o .
```

### 예시

```bash
typeorm-model-generator -h localhost -d develop -p 3306 -u docker -x 'docker' -e mysql -o .
```

## 레퍼런스

- https://github.com/Kononnable/typeorm-model-generator
