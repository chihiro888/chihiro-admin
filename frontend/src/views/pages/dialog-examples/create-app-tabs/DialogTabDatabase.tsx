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

const TabDatabase = () => {
  const [value, setValue] = useState<string>('firebase')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <TextField fullWidth sx={{ mb: 4 }} label='Database Name' placeholder='sneat_database' />
      <Typography variant='h6' sx={{ mb: 4 }}>
        Select Database Engine
      </Typography>
      <Box sx={{ mb: 8 }}>
        <Box
          onClick={() => setValue('firebase')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='error' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bxl:firebase' />
            </CustomAvatar>
            <div>
              <Typography>Firebase</Typography>
              <Typography variant='caption'>Cloud Firestore</Typography>
            </div>
          </Box>
          <Radio value='firebase' onChange={handleChange} checked={value === 'firebase'} />
        </Box>
        <Box
          onClick={() => setValue('aws')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='warning' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bxl:aws' />
            </CustomAvatar>
            <div>
              <Typography>AWS</Typography>
              <Typography variant='caption'>Amazon Fast NoSQL Database</Typography>
            </div>
          </Box>
          <Radio value='aws' onChange={handleChange} checked={value === 'aws'} />
        </Box>
        <Box
          onClick={() => setValue('sql')}
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='info' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bx:data' />
            </CustomAvatar>
            <div>
              <Typography>MySQL</Typography>
              <Typography variant='caption'>Basic MySQL database</Typography>
            </div>
          </Box>
          <Radio value='sql' onChange={handleChange} checked={value === 'sql'} />
        </Box>
      </Box>
    </div>
  )
}

export default TabDatabase
