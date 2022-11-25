// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating, { IconContainerProps } from '@mui/material/Rating'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface CustomIcons {
  [index: string]: { icon: string; label: string }
}

const customIcons: CustomIcons = {
  1: {
    label: 'Very Dissatisfied',
    icon: 'bx:sad'
  },
  2: {
    label: 'Neutral',
    icon: 'bx:confused'
  },
  3: {
    label: 'Satisfied',
    icon: 'bx:happy'
  },
  4: {
    label: 'Very Satisfied',
    icon: 'bx:happy-heart-eyes'
  }
}

const IconContainer = (props: IconContainerProps) => {
  const { value } = props

  return (
    <span {...props}>
      <Icon icon={customIcons[value].icon} />
    </span>
  )
}

const RatingsCustomized = () => {
  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Custom empty icon</Typography>
        <Rating name='customized-empty' defaultValue={2} precision={0.5} emptyIcon={<Icon icon='bx:star' />} />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Custom icon and color</Typography>
        <Rating
          precision={0.5}
          defaultValue={3}
          name='customized-color'
          sx={{ color: 'error.main' }}
          icon={<Icon icon='bxs:heart' />}
          emptyIcon={<Icon icon='bxs:heart' />}
        />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>10 stars</Typography>
        <Rating name='customized-10' defaultValue={7} max={10} />
      </Box>
      <div>
        <Typography sx={{ fontWeight: 500 }}>Custom icon set</Typography>
        <Rating name='customized-icons' defaultValue={2} max={4} IconContainerComponent={IconContainer} />
      </div>
    </div>
  )
}

export default RatingsCustomized
