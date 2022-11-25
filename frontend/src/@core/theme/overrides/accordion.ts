// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

const Accordion = (theme: Theme) => {
  // Hook & Var
  const { settings } = useSettings()
  const { skin } = settings

  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: theme.spacing(2.5, 0),
          '&:before': { display: 'none' },
          borderRadius: theme.shape.borderRadius,
          transition: 'box-shadow .35s ease, margin .35s ease',
          boxShadow: theme.shadows[skin === 'bordered' ? 0 : 3],
          ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          '&.Mui-disabled': {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
          },
          '&.Mui-expanded': {
            margin: theme.spacing(2.5, 0),
            boxShadow: theme.shadows[skin === 'bordered' ? 0 : 4]
          },
          '& .MuiCollapse-root': {
            minHeight: 'unset !important',
            transition: 'height .35s ease !important',
            '&.MuiCollapse-entered': {
              height: 'auto !important'
            }
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 'inherit',
          padding: `0 ${theme.spacing(4.5)}`,
          '& + .MuiCollapse-root': {
            '& .MuiAccordionDetails-root:first-child': {
              paddingTop: 0
            }
          },
          '&.Mui-expanded': {
            minHeight: 'unset',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            '& .MuiAccordionSummary-content': {
              margin: theme.spacing(3, 0)
            }
          },
          '& .MuiTypography-root': {
            fontWeight: 500
          }
        },
        content: {
          margin: theme.spacing(3, 0)
        },
        expandIconWrapper: {
          color: theme.palette.text.primary
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '& + .MuiAccordionDetails-root': {
            paddingTop: 0
          }
        }
      }
    }
  }
}

export default Accordion
