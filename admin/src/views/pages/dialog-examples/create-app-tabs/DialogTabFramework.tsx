// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Avatar Component
import CustomAvatar from 'src/@core/components/mui/avatar'

const TabFramework = () => {
  const [value, setValue] = useState<string>('react')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <Typography variant='h6' sx={{ mb: 4 }}>
        Select Framework
      </Typography>
      <Box sx={{ mb: 8 }}>
        <Box
          onClick={() => setValue('react')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='info' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bxl:react' />
            </CustomAvatar>
            <div>
              <Typography>React Native</Typography>
              <Typography variant='caption'>Create truly native apps</Typography>
            </div>
          </Box>
          <Radio value='react' onChange={handleChange} checked={value === 'react'} />
        </Box>

        <Box
          onClick={() => setValue('angular')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='error' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bxl:angular' />
            </CustomAvatar>
            <div>
              <Typography>Angular</Typography>
              <Typography variant='caption'>Most suited for your application</Typography>
            </div>
          </Box>
          <Radio value='angular' onChange={handleChange} checked={value === 'angular'} />
        </Box>
        <Box
          onClick={() => setValue('vuejs')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='success' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='bxl:vuejs' />
            </CustomAvatar>
            <div>
              <Typography>Vue</Typography>
              <Typography variant='caption'>Progressive Framework</Typography>
            </div>
          </Box>
          <Radio value='vuejs' onChange={handleChange} checked={value === 'vuejs'} />
        </Box>
        <Box
          onClick={() => setValue('laravel')}
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='warning' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Icon icon='mdi:laravel' />
            </CustomAvatar>
            <div>
              <Typography>Laravel</Typography>
              <Typography variant='caption'>PHP web frameworks</Typography>
            </div>
          </Box>
          <Radio value='laravel' onChange={handleChange} checked={value === 'laravel'} />
        </Box>
      </Box>
    </div>
  )
}

export default TabFramework
