# auth

## 인증 동작원리

<img src="/docs/image/auth.png" width="700"/>

## 커스텀

```
/api/auth/getUserBySession
```

위 URL의 반환값을 아래의 interface와 동기화해주십시오.

```
frontend/src/app/modules/auth/core/_models.ts
```

```
export interface UserModel {
  id: number
  account: string
  password: string | undefined
  username: string
  isAdmin: number
  isDeveloper: number
  signInAt: string | null
  signOutAt: string | null
  createdAt: string | null
  updatedAt: string | null
  deletedAt: string | null
}
```

## useAuth

```
const { currentUser } = useAuth()
```

위 hooks에서 로그인 시점에 저장된 데이터를 사용할 수 있습니다.

### 예시

```
if (currentUser.isAdmin === 1) {
    console.log("I'm Admin")
}
```
