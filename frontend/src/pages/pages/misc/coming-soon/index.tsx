// ** React Imports
import { ReactNode, SyntheticEvent } from 'react'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
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

const ComingSoon = () => {
  // ** Hooks
  const theme = useTheme()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h4'>We are launching soon</Typography>
          <Typography sx={{ mt: 2, mb: 6, color: 'text.secondary' }}>
            Our website is opening soon. Please register to get notified when it′s ready!
          </Typography>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TextField
                autoFocus
                size='small'
                type='email'
                placeholder='Enter your email'
                sx={{ '& .MuiInputBase-root': { backgroundColor: 'background.paper' } }}
              />
              <Button type='submit' variant='contained' sx={{ ml: 2 }}>
                Notify
              </Button>
            </Box>
          </form>
        </BoxWrapper>
        <Img
          width='500'
          alt='coming-soon-illustration'
          src={`/images/pages/boy-with-rocket-${theme.palette.mode}.png`}
        />
      </Box>
    </Box>
  )
}

ComingSoon.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ComingSoon
