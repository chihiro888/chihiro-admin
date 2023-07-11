// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Table = (theme: Theme) => {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[0],
          borderTopColor: theme.palette.divider
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          '& .MuiTableCell-head': {
            fontSize: '0.75rem',
            letterSpacing: '1px'
          }
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-body': {
            letterSpacing: '0.25px',
            color: theme.palette.text.secondary,
            '&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)': {
              paddingTop: theme.spacing(3.5),
              paddingBottom: theme.spacing(3.5)
            }
          }
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head:not(.MuiTableCell-paddingCheckbox):first-child, & .MuiTableCell-root:not(.MuiTableCell-paddingCheckbox):first-child ':
            {
              paddingLeft: theme.spacing(6)
            },
          '& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child': {
            paddingRight: theme.spacing(6)
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${theme.palette.divider}`
        },
        paddingCheckbox: {
          paddingLeft: theme.spacing(3.25)
        },
        stickyHeader: {
          backgroundColor: theme.palette.customColors.tableHeaderBg
        }
      }
    }
  }
}

export default Table
