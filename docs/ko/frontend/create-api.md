# Create API

아래의 파일에 디렉토리 및 파일을 작성해주십시오.

```
frontend/src/api
```

## 작성 규칙

- backend/src/api 하위 디렉토리와 동일하게 디렉토리를 작성해주십시오.
- 파일명은 "index.ts" 로 작성해주십시오.
- 함수명은 컨트롤러 함수명과 동일하게 작성해주십시오.

## 템플릿

```
import axios from 'axios'
import { CommonResponse } from '../../common/interface'

const rootURL = '/api/develop/'

export const sample = (params: object) => {
  const url = `${rootURL}sample`
  const response = axios.get<CommonResponse>(url, { params: params })
  return response
}

export const sample = (params: object) => {
  const url = `${rootURL}sample`
  const response = axios.post<CommonResponse>(url, params)
  return response
}

export const sample = (params: object) => {
  const url = `${rootURL}sample`
  const response = axios.put<CommonResponse>(url, params)
  return response
}

export const sample = (params: object) => {
  const url = `${rootURL}sample`
  const response = axios.delete<CommonResponse>(url, { params: params })
  return response
}
```

## 사용법

```
import { useState } from 'react'
import { changePasswordAPI } from '../../../api/user'
import { useThemeMode } from '../../../_metronic/partials'
import { Theme, toast } from 'react-toastify'
import { useIntl } from 'react-intl'
```

```
// hooks
const intl = useIntl()
const { mode } = useThemeMode()
```

```
// state
const [isDisabled, setIsDisabled] = useState(false)
```

```
try {
    setIsDisabled(true)
    try {
      const params = {
        oldPassword,
        newPassword,
        confirmNewPassword
      }
      const { data: response } = await changePasswordAPI(params)
      if (response.statusCode === 200) {
        toast.info(intl.formatMessage({ id: response.message }), {
          theme: mode as Theme
        })
        setIsDisabled(false)
      }
    } catch (error) {
      toast.warning(intl.formatMessage({ id: error.response.data.message }), {
        theme: mode as Theme
      })
      setIsDisabled(false)
    }
  }
```

# 레퍼런스

- https://github.com/axios/axios
- https://axios-http.com/docs/example
