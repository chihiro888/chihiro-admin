// ** React Imports
import { useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

const CardPlanUpgrade = () => {
  // ** States
  const [cvc1, setCvc1] = useState<number | string>('')
  const [cvc2, setCvc2] = useState<number | string>('')

  // ** Hook & Var
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        sx={{ pt: 5, pb: 3 }}
        title='Upgrade Your Plan'
        action={
          <OptionsMenu
            options={['Add Cards', 'Edit Cards', 'Delete Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent>
        <Typography sx={{ mb: 5.5, color: 'text.secondary' }}>
          Please make the payment to start enjoying all the features of our premium plan.
        </Typography>

        <Box
          sx={{
            mb: 6.5,
            borderRadius: 1,
            color: 'text.primary',
            p: theme => theme.spacing(2.5, 3),
            border: theme => `1px solid ${theme.palette.primary.main}`
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar variant='rounded' sx={{ mr: 2.75 }} alt='briefcase' src='/images/cards/briefcase.png' />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: 'text.secondary' }}>Business</Typography>
                <Link href='/' sx={{ fontSize: '0.875rem' }} onClick={(e: SyntheticEvent) => e.preventDefault()}>
                  Upgrade Plan
                </Link>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography
                  variant='body2'
                  component='sup'
                  sx={{ mt: 0.75, lineHeight: 1.5, fontWeight: 500, alignSelf: 'flex-start' }}
                >
                  $
                </Typography>
                <Typography variant='h5' sx={{ mr: 0.5 }}>
                  2,124
                </Typography>
                <Typography variant='body2' component='sub' sx={{ mb: 0.5, lineHeight: 1.5, alignSelf: 'flex-end' }}>
                  /Year
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography variant='h6' sx={{ mb: 2 }}>
          Payment details
        </Typography>

        <Box sx={{ mb: 4.5, display: 'flex', alignItems: 'center' }}>
          <img width={42} height={30} alt='credit-card' src={`/images/cards/visa-${theme.palette.mode}.png`} />
          <Box
            sx={{
              ml: 2.5,
              flexGrow: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Visa Card</Typography>
              <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                8976 xxxx xxxx 3445
              </Typography>
            </Box>
            <TextField
              label='CVC'
              size='small'
              value={cvc1}
              type='number'
              sx={{ width: 80 }}
              onChange={e =>
                e.target.value.length > 3
                  ? setCvc1(parseInt(e.target.value.slice(0, 3)))
                  : setCvc1(parseInt(e.target.value))
              }
            />
          </Box>
        </Box>

        <Box sx={{ mb: 4.5, display: 'flex', alignItems: 'center' }}>
          <img width={42} height={30} alt='master-card' src={`/images/cards/mastercard-${theme.palette.mode}.png`} />
          <Box
            sx={{
              ml: 2.5,
              flexGrow: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Master card</Typography>
              <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                5633 xxxx xxxx 2345
              </Typography>
            </Box>
            <TextField
              label='CVC'
              size='small'
              value={cvc2}
              type='number'
              sx={{ width: 80 }}
              onChange={e =>
                e.target.value.length > 3
                  ? setCvc2(parseInt(e.target.value.slice(0, 3)))
                  : setCvc2(parseInt(e.target.value))
              }
            />
          </Box>
        </Box>

        <Link href='/' sx={{ fontWeight: 600 }} onClick={(e: SyntheticEvent) => e.preventDefault()}>
          Add Payment Method
        </Link>

        <FormControl fullWidth sx={{ mt: 4, mb: 5 }}>
          <TextField label='Email Address' placeholder='john.doe@email.com' size='small' />
        </FormControl>
        <Button fullWidth variant='contained'>
          Proceed to payment
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardPlanUpgrade
