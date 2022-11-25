// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginTop: theme.spacing(12),
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    maxWidth: '100%'
  }
}))

const UnderMaintenance = () => {
  // ** Hooks
  const theme = useTheme()

  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h4'>Under Maintenance!</Typography>
          <Typography sx={{ mt: 2, mb: 6, color: 'text.secondary' }}>
            Sorry for the inconvenience but we're performing some maintenance at the moment
          </Typography>
          <Link passHref href='/'>
            <Button component='a' variant='contained'>
              Back to Home
            </Button>
          </Link>
        </BoxWrapper>
        <Img
          width='500'
          alt='under-maintenance-illustration'
          src={`/images/pages/girl-doing-yoga-${theme.palette.mode}.png`}
        />
      </Box>
    </Box>
  )
}

UnderMaintenance.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default UnderMaintenance
