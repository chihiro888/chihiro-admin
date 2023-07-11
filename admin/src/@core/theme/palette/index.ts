// ** Type Imports
import { PaletteMode } from '@mui/material'
import { Skin } from 'src/@core/layouts/types'

const DefaultPalette = (mode: PaletteMode, skin: Skin) => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = '50, 71, 92'
  const darkColor = '219, 219, 235'
  const darkPaperBgColor = '#2B2C40'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor
    } else if (skin === 'bordered' && mode === 'dark') {
      return darkPaperBgColor
    } else if (mode === 'light') {
      return '#F5F5F9'
    } else return '#232333'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      lightPaperBg: whiteColor,
      darkPaperBg: darkPaperBgColor,
      bodyBg: mode === 'light' ? '#F5F5F9' : '#232333', // Same as palette.background.default but doesn't consider bordered skin
      trackBg: mode === 'light' ? '#EBEEF0' : '#444463',
      tooltipBg: mode === 'light' ? '#233446' : '#6b6c9d',
      tableHeaderBg: mode === 'light' ? '#F3F4F6' : '#353649'
    },
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      light: '#8082FF',
      main: '#696CFF',
      dark: '#6062E8',
      contrastText: whiteColor
    },
    secondary: {
      light: '#97A2B1',
      main: '#8592A3',
      dark: '#798594',
      contrastText: whiteColor
    },
    error: {
      light: '#FF5B3F',
      main: '#FF3E1D',
      dark: '#E8381A',
      contrastText: whiteColor
    },
    warning: {
      light: '#FFB826',
      main: '#FFAB00',
      dark: '#E89C00',
      contrastText: whiteColor
    },
    info: {
      light: '#29CCEF',
      main: '#03C3EC',
      dark: '#03B1D7',
      contrastText: whiteColor
    },
    success: {
      light: '#86E255',
      main: '#71DD37',
      dark: '#67C932',
      contrastText: whiteColor
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? whiteColor : darkPaperBgColor,
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette
