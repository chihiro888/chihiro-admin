// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Progress = (theme: Theme) => {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 12,
          borderRadius: 10,
          backgroundColor: theme.palette.customColors.trackBg
        },
        bar: {
          borderRadius: 10
        }
      }
    }
  }
}

export default Progress
