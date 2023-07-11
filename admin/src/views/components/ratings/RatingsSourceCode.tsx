export const RatingsHalfJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RatingsHalf = () => {
  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Half Ratings</Typography>
        <Rating defaultValue={2.5} precision={0.5} name='half-rating' />
      </Box>
      <div>
        <Typography sx={{ fontWeight: 500 }}>Read only</Typography>
        <Rating readOnly defaultValue={2.5} precision={0.5} name='read-only' />
      </div>
    </div>
  )
}

export default RatingsHalf
`}</code>
  </pre>
)

export const RatingsBasicJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RatingsBasic = () => {
  // ** State
  const [value, setValue] = useState(2)

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Controlled</Typography>
        <Rating value={value} name='simple-controlled' onChange={(event, newValue) => setValue(newValue)} />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Read only</Typography>
        <Rating readOnly value={value} name='read-only' />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Disabled</Typography>
        <Rating disabled value={value} name='disabled' />
      </Box>
      <div>
        <Typography sx={{ fontWeight: 500 }}>No rating given</Typography>
        <Rating value={null} name='no-value' />
      </div>
    </div>
  )
}

export default RatingsBasic
`}</code>
  </pre>
)

export const RatingsSizesJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

const RatingsSizes = () => {
  return (
    <Box className='demo-space-y' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Rating defaultValue={2} name='size-small' size='small' />
      <Rating defaultValue={2} name='size-medium' />
      <Rating defaultValue={2} name='size-large' size='large' />
    </Box>
  )
}

export default RatingsSizes
`}</code>
  </pre>
)

export const RatingsCustomizedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const customIcons = {
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

const IconContainer = props => {
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
`}</code>
  </pre>
)

export const RatingsHoverFeedbackJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

const RatingsHoverFeedback = () => {
  // ** States
  const [hover, setHover] = useState(-1)
  const [value, setValue] = useState(2)

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
        value={value}
        precision={0.5}
        name='hover-feedback'
        sx={{ mr: 4 }}
        onChange={(event, newValue) => setValue(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
      />
      {value !== null && <Typography>{labels[hover !== -1 ? hover : value]}</Typography>}
    </Box>
  )
}

export default RatingsHoverFeedback
`}</code>
  </pre>
)

export const RatingsHalfTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RatingsHalf = () => {
  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Half Ratings</Typography>
        <Rating defaultValue={2.5} precision={0.5} name='half-rating' />
      </Box>
      <div>
        <Typography sx={{ fontWeight: 500 }}>Read only</Typography>
        <Rating readOnly defaultValue={2.5} precision={0.5} name='read-only' />
      </div>
    </div>
  )
}

export default RatingsHalf
`}</code>
  </pre>
)

export const RatingsBasicTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RatingsBasic = () => {
  // ** State
  const [value, setValue] = useState<number | null>(2)

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Controlled</Typography>
        <Rating value={value} name='simple-controlled' onChange={(event, newValue) => setValue(newValue)} />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Read only</Typography>
        <Rating readOnly value={value} name='read-only' />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 500 }}>Disabled</Typography>
        <Rating disabled value={value} name='disabled' />
      </Box>
      <div>
        <Typography sx={{ fontWeight: 500 }}>No rating given</Typography>
        <Rating value={null} name='no-value' />
      </div>
    </div>
  )
}

export default RatingsBasic
`}</code>
  </pre>
)

export const RatingsCustomizedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
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
`}</code>
  </pre>
)

export const RatingsHoverFeedbackTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

const RatingsHoverFeedback = () => {
  // ** States
  const [hover, setHover] = useState<number>(-1)
  const [value, setValue] = useState<number | null>(2)

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
        value={value}
        precision={0.5}
        name='hover-feedback'
        sx={{ mr: 4 }}
        onChange={(event, newValue) => setValue(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
      />
      {value !== null && <Typography>{labels[hover !== -1 ? hover : value]}</Typography>}
    </Box>
  )
}

export default RatingsHoverFeedback
`}</code>
  </pre>
)

export const RatingsSizesTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

const RatingsSizes = () => {
  return (
    <Box className='demo-space-y' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Rating defaultValue={2} name='size-small' size='small' />
      <Rating defaultValue={2} name='size-medium' />
      <Rating defaultValue={2} name='size-large' size='large' />
    </Box>
  )
}

export default RatingsSizes
`}</code>
  </pre>
)
