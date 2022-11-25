// ** React Imports
import { useState, MouseEvent, ChangeEvent } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

// ** Type Imports
import { CustomRadioIconsData, CustomRadioIconsProps } from 'src/@core/components/custom-radio/types'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

interface IconType {
  icon: CustomRadioIconsProps['icon']
  iconProps: CustomRadioIconsProps['iconProps']
}

const data: CustomRadioIconsData[] = [
  {
    value: 'builder',
    isSelected: true,
    title: 'I am the Builder',
    content: (
      <Typography variant='body2' sx={{ textAlign: 'center' }}>
        List property as Builder, list your project and get highest reach.
      </Typography>
    )
  },
  {
    value: 'owner',
    title: 'I am the Owner',
    content: (
      <Typography variant='body2' sx={{ textAlign: 'center' }}>
        Submit property as an Individual. Lease, Rent or Sell at the best price.
      </Typography>
    )
  },
  {
    value: 'broker',
    title: 'I am the Broker',
    content: (
      <Typography variant='body2' sx={{ textAlign: 'center' }}>
        Earn highest commission by listing your clients properties at the best price.
      </Typography>
    )
  }
]

const StepPersonalDetails = () => {
  const initialIconSelected: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // ** States
  const [showValues, setShowValues] = useState<boolean>(false)
  const [selectedRadio, setSelectedRadio] = useState<string>(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons: IconType[] = [
    {
      icon: 'bx:building-house',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'bx:crown',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'bx:briefcase-alt',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    }
  ]

  const handleTogglePasswordView = () => {
    setShowValues(!showValues)
  }
  const handleMousePasswordView = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={5}>
      {data.map((item, index) => (
        <CustomRadioIcons
          key={index}
          data={data[index]}
          name='custom-radios'
          icon={icons[index].icon}
          selected={selectedRadio}
          gridProps={{ sm: 4, xs: 12 }}
          handleChange={handleRadioChange}
          iconProps={icons[index].iconProps}
        />
      ))}
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField label='First Name' placeholder='John' />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField label='Last Name' placeholder='Doe' />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Username' placeholder='john.doe' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Password'
              type={showValues ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleTogglePasswordView}
                      aria-label='toggle password visibility'
                      onMouseDown={handleMousePasswordView}
                    >
                      <Icon icon={showValues ? 'bx:show' : 'bx:hide'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type='email' label='Email' placeholder='john.doe@email.com' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Contact'
              placeholder='202 555 0111'
              InputProps={{
                startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StepPersonalDetails
