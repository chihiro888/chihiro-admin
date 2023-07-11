// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing: '0.3px',
          padding: theme.spacing(1.875, 3),
          '&:not(.MuiButtonGroup-grouped)': {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-1px)'
            }
          }
        },
        contained: {
          boxShadow: theme.shadows[3],
          padding: theme.spacing(1.875, 4)
        },
        containedPrimary: {
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.primary.main,
              0.4
            )}`
          }
        },
        containedSecondary: {
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.secondary.main,
              0.4
            )}`
          }
        },
        containedSuccess: {
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.success.main,
              0.4
            )}`
          }
        },
        containedError: {
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
          }
        },
        containedWarning: {
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.warning.main,
              0.4
            )}`
          }
        },
        containedInfo: {
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.info.main, 0.4)}`
          }
        },
        outlined: {
          padding: theme.spacing(1.625, 4)
        },
        sizeSmall: {
          borderRadius: 4,
          padding: theme.spacing(1, 3.5),
          '&.MuiButton-contained': {
            padding: theme.spacing(1, 3.5)
          },
          '&.MuiButton-outlined': {
            padding: theme.spacing(0.75, 3.5)
          }
        },
        sizeLarge: {
          // borderRadius: 8,
          padding: theme.spacing(2.125, 6),
          '&.MuiButton-contained': {
            padding: theme.spacing(2.125, 6)
          },
          '&.MuiButton-outlined': {
            padding: theme.spacing(1.875, 6)
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          '&.MuiFab-success:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.success.main,
              0.4
            )}`
          },
          '&.Mui-error:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
          },
          '&.MuiFab-warning:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.warning.main,
              0.4
            )}`
          },
          '&.MuiFab-info:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.info.main, 0.4)}`
          }
        },
        primary: {
          '&:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.primary.main,
              0.4
            )}`
          }
        },
        secondary: {
          '&:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(
              theme.palette.secondary.main,
              0.4
            )}`
          }
        }
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          '& .MuiButton-contained': {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            '&.MuiButton-containedPrimary:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(
                theme.palette.primary.main,
                0.4
              )}`
            },
            '&.MuiButton-containedSecondary:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(
                theme.palette.secondary.main,
                0.4
              )}`
            },
            '&.MuiButton-containedSuccess:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(
                theme.palette.success.main,
                0.4
              )}`
            },
            '&.MuiButton-containedError:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(
                theme.palette.error.main,
                0.4
              )}`
            },
            '&.MuiButton-containedWarning:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(
                theme.palette.warning.main,
                0.4
              )}`
            },
            '&.MuiButton-containedInfo:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(
                theme.palette.info.main,
                0.4
              )}`
            }
          }
        }
      }
    }
  }
}

export default Button
