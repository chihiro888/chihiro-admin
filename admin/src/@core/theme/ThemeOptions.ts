// ** MUI Theme Provider
import { deepmerge } from '@mui/utils'
import { ThemeOptions } from '@mui/material'

// ** User Theme Options
import UserThemeOptions from 'src/layouts/UserThemeOptions'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'

const themeOptions = (settings: Settings): ThemeOptions => {
  // ** Vars
  const { skin, mode, direction, themeColor } = settings

  // ** Create New object before removing user component overrides and typography objects from userThemeOptions
  const userThemeConfig: any = Object.assign({}, UserThemeOptions())

  const userFontFamily = userThemeConfig.typography?.fontFamily

  // ** Remove component overrides and typography objects from userThemeOptions
  delete userThemeConfig.components
  delete userThemeConfig.typography

  // ** Typography 수정
  const typographyConfig = {
    h1: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    h2: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    h3: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    h4: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    h5: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    h6: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    body1: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    body2: {
      fontSize: '12px'
      // 추가적인 스타일 속성 설정 가능
    },
    subtitle1: {
      fontSize: '14px'
      // 추가적인 스타일 속성 설정 가능
    },
    subtitle2: {
      fontSize: '12px'
      // 추가적인 스타일 속성 설정 가능
    }
  }

  const mergedThemeConfig = deepmerge(
    {
      direction,
      palette: palette(mode === 'semi-dark' ? 'light' : mode, skin),
      typography: {
        fontFamily:
          userFontFamily ||
          [
            'Public Sans',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(','),
        ...typographyConfig // 수정한 typography 설정 적용
      },
      shadows: shadows(mode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 0
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      }
    },
    userThemeConfig
  )

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette[themeColor]
      }
    }
  })
}

export default themeOptions
