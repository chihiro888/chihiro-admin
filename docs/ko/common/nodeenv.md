# nodeenv

- 로컬환경에서 node.js 버전을 자유롭게 변경할 수 있습니다.
- 모듈은 생성된 가상환경 내에서 통합 관리됩니다.

## MAC에서 설치하는 방법

```bash
brew install nodeenv
```

## nodeenv 생성

```bash
nodeenv --node=16.16.0 nenv
```

## nodeenv 적용

```bash
. nenv/bin/activate
```

## yarn 설치

```bash
npm install -g yarn
```

## 레퍼런스

https://github.com/ekalinin/nodeenv
