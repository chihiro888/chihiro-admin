// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Types
import { BlankLayoutProps } from './types'

// Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100vh',

  // For V1 Blank layout pages
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },

  // For V2 Blank layout pages
  '& .content-right': {
    display: 'flex',
    overflow: 'hidden',
    minHeight: '100vh',
    position: 'relative'
  }
}))

const MovieLayout = ({ children }: BlankLayoutProps) => {
  return (
    <BlankLayoutWrapper className="layout-wrapper">
      <Box
        className="app-content"
        sx={{ overflow: 'hidden', minHeight: '100vh', position: 'relative' }}
      >
        <video
          autoPlay
          loop
          muted
          width="750"
          height="500"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            zIndex: '-1000',
            overflow: 'hidden'
          }}
        >
          <source src="/video/main.mp4" type="video/mp4" />
        </video>
        {children}
      </Box>
    </BlankLayoutWrapper>
  )
}

export default MovieLayout
