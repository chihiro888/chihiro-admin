import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

// ** Styled close button
const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: '3rem',
  borderRadius: 8,
  right: '1.5rem',
  position: 'absolute',
  padding: theme.spacing(1.5),
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(-6),
  transition: 'all .23s ease .1s',
  transform: 'translate(23px, -25px)',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translate(20px, -20px)',
    backgroundColor: theme.palette.background.paper
  }
}))

export default CustomCloseButton
