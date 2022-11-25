// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Backdrop from '@mui/material/Backdrop'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CardActionRefresh = () => {
  // ** State
  const [reload, setReload] = useState<boolean>(false)

  const handleBackDrop = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  return (
    <Card sx={{ position: 'relative' }}>
      <CardHeader
        title='Refresh Content'
        action={
          <IconButton
            size='small'
            aria-label='collapse'
            sx={{ color: 'text.secondary' }}
            onClick={() => handleBackDrop()}
          >
            <Icon icon='bx:rotate-left' fontSize={20} />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='body2'>
          You can specifically add refresh action using <code>actionRefresh</code> prop Click on{' '}
          <Box component='span' sx={{ verticalAlign: 'top' }}>
            <Icon icon='bx:rotate-left' fontSize={20} />
          </Box>{' '}
          icon to see it in action
        </Typography>
      </CardContent>

      <Backdrop
        open={reload}
        sx={{
          position: 'absolute',
          color: theme => theme.palette.common.white,
          zIndex: theme => theme.zIndex.mobileStepper - 1
        }}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Card>
  )
}

export default CardActionRefresh
