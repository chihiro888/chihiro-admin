# Change URL After Login

로그인 이후에 URL 변경하는 방법

```
frontend/src/app/routing/PrivateRoutes.tsx
```

```
{/* Redirect to Dashboard after success login/registartion */}
<Route path="auth/*" element={<Navigate to="/query/execute/" />} />
```

아래의 URL을 변경해주십시오.

```
"/query/execute/"
```
