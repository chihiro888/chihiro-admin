// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Type Import
import { Skin } from 'src/@core/layouts/types'

const Menu = (theme: Theme, skin: Skin) => {
  const boxShadow = () => {
    if (skin === 'bordered') {
      return theme.shadows[0]
    } else if (theme.palette.mode === 'light') {
      return theme.shadows[8]
    } else return theme.shadows[9]
  }

  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenu-paper': {
            boxShadow: boxShadow(),
            ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` })
          }
        },
        list: {
          padding: theme.spacing(1.25, 0)
        },
        paper: {
          marginTop: theme.spacing(1)
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2, 5),
          '&.Mui-selected': {
            color: theme.palette.primary.main
          }
        }
      }
    }
  }
}

export default Menu
