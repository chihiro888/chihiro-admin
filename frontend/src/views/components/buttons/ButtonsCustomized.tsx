// ** MUI Imports
import { brown } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// Styled component for a custom button
const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: brown[500],
  color: theme.palette.getContrastText(brown[500]),
  '&:not(.Mui-disabled)': {
    boxShadow: `0 2px 4px 0 ${hexToRGBA(brown[500], 0.4)} !important`
  },
  '&:hover': {
    backgroundColor: brown[700],
    transform: 'none !important'
  }
}))

// Styled component for a Bootstrap button
const BootstrapButton = styled(Button)({
  fontSize: 16,
  lineHeight: 1.5,
  border: '1px solid',
  padding: '6px 12px',
  textTransform: 'none',
  borderColor: '#0063cc',
  backgroundColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:not(.Mui-disabled)': {
    boxShadow: 'none !important'
  },
  '&:hover': {
    boxShadow: 'none',
    borderColor: '#0062cc',
    backgroundColor: '#0069d9',
    transform: 'none !important'
  },
  '&:active': {
    boxShadow: 'none',
    borderColor: '#005cbf',
    backgroundColor: '#0062cc'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5) !important'
  }
})

const ButtonsCustomized = () => {
  return (
    <div className='demo-space-x'>
      <CustomButton variant='contained'>Custom Color</CustomButton>
      <BootstrapButton variant='contained' disableRipple>
        Bootstrap
      </BootstrapButton>
    </div>
  )
}

export default ButtonsCustomized
