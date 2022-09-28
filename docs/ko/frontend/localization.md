# Localization

## 추가

영어

```
frontend/src/_metronic/i18n/messages/en.json
```

일본어

```
frontend/src/_metronic/i18n/messages/ja.json
```

한국어

```
frontend/src/_metronic/i18n/messages/ko.json
```

## 사용법

```
import { useIntl } from 'react-intl'
```

```
const intl = useIntl()
```

```
{intl.formatMessage({ id: "key" });}
```

## 언어추가

```
frontend/src/_metronic/partials/layout/header-menus/Languages.tsx
```

## 레퍼런스

파파고

- https://papago.naver.com/

구글 번역기

- https://translate.google.com/
