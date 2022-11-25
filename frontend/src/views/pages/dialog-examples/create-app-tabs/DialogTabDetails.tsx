// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Avatar Component
import CustomAvatar from 'src/@core/components/mui/avatar'

const TabDetails = () => {
  const [value, setValue] = useState<string>('ecommerce')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <TextField fullWidth sx={{ mb: 4 }} label='Application Name' placeholder='Sneat Admin' />
      <Typography variant='h6' sx={{ mb: 4 }}>
        Category
      </Typography>
      <Box sx={{ mb: 8 }}>
        <Box
          onClick={() => setValue('crm')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='info' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bx:briefcase' />
            </CustomAvatar>
            <div>
              <Typography>CRM Application</Typography>
              <Typography variant='caption'>Scales with any business</Typography>
            </div>
          </Box>
          <Radio value='crm' onChange={handleChange} checked={value === 'crm'} />
        </Box>
        <Box
          onClick={() => setValue('ecommerce')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='success' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bx:cart' />
            </CustomAvatar>
            <div>
              <Typography>Ecommerce Platforms</Typography>
              <Typography variant='caption'>Grow Your Business With App</Typography>
            </div>
          </Box>
          <Radio value='ecommerce' onChange={handleChange} checked={value === 'ecommerce'} />
        </Box>
        <Box
          onClick={() => setValue('learning')}
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='error' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bx:award' />
            </CustomAvatar>
            <div>
              <Typography>Online Learning platform</Typography>
              <Typography variant='caption'>Start learning today</Typography>
            </div>
          </Box>
          <Radio value='learning' onChange={handleChange} checked={value === 'learning'} />
        </Box>
      </Box>
    </div>
  )
}

export default TabDetails
