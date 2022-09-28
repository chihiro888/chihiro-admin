# Change Logo

## 미니 로고 변경

아래의 로고파일을 교체합니다.

### 변경 대상

- 왼쪽 상단 로고
- 파비콘

```
/media/custom/logo.png
```

## 로그인 로고 변경

```
frontend/src/app/modules/auth/AuthPage.tsx
```

```javascript
{
  /* begin::Logo */
}
<Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: developIconAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }}
  isClickToPauseDisabled
  height={250}
  width={250}
/>;
{
  /* end::Logo */
}
```
