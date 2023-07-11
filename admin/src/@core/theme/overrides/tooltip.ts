// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Tooltip = (theme: Theme) => {
  return {
    MuiTooltip: {
      defaultProps: {
        arrow: true
      },
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
          fontWeight: 400,
          fontSize: '.875rem',
          padding: theme.spacing(1, 2.8),
          backgroundColor: theme.palette.customColors.tooltipBg
        },
        arrow: {
          color: theme.palette.customColors.tooltipBg
        }
      }
    }
  }
}

export default Tooltip
