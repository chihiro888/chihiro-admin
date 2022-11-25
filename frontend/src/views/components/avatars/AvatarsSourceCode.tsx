export const AvatarsGroupedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const AvatarsGrouped = () => {
  return (
    <div className='demo-space-y'>
      <AvatarGroup max={4}>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </AvatarGroup>
      <AvatarGroup max={4} sx={{ justifyContent: 'center' }}>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </AvatarGroup>
      <AvatarGroup max={4} sx={{ justifyContent: 'flex-start' }}>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </AvatarGroup>
    </div>
  )
}

export default AvatarsGrouped
`}</code>
  </pre>
)

export const AvatarsGroupedPullUpWithTooltipJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import AvatarGroup from '@mui/material/AvatarGroup'

const AvatarsGroupedPullUpWithTooltip = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Tooltip title='Olivia Sparks'>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
      </Tooltip>
      <Tooltip title='Howard Lloyd'>
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
      </Tooltip>
      <Tooltip title='Hallie Richards'>
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
      </Tooltip>
      <Tooltip title='Alice Cobb'>
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
      </Tooltip>
      <Tooltip title='Jeffery Warner'>
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </Tooltip>
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUpWithTooltip
`}</code>
  </pre>
)

export const AvatarsIconJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const AvatarsIcon = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <Avatar>
        <Icon icon='bx:folder' />
      </Avatar>
      <CustomAvatar color='success'>
        <Icon icon='bx:refresh' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='info'>
        <Icon icon='bx:check-circle' />
      </CustomAvatar>
    </Box>
  )
}

export default AvatarsIcon
`}</code>
  </pre>
)

export const AvatarsImageJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const AvatarsImage = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
    </Box>
  )
}

export default AvatarsImage
`}</code>
  </pre>
)

export const AvatarsGroupedPullUpJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const AvatarsGroupedPullUp = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUp
`}</code>
  </pre>
)

export const AvatarsVariantsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const AvatarsVariants = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <CustomAvatar variant='square'>
        <Icon icon='bx:bell' />
      </CustomAvatar>
      <CustomAvatar color='success' variant='rounded'>
        <Icon icon='bx:save' />
      </CustomAvatar>
      <CustomAvatar skin='light' variant='square'>
        <Icon icon='bx:bell' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='success' variant='rounded'>
        <Icon icon='bx:save' />
      </CustomAvatar>
    </Box>
  )
}

export default AvatarsVariants
`}</code>
  </pre>
)

export const AvatarsLetterJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import MuiAvatar from '@mui/material/Avatar'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const AvatarsLetter = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <MuiAvatar>H</MuiAvatar>
      <CustomAvatar>N</CustomAvatar>
      <CustomAvatar skin='light' color='error'>
        OP
      </CustomAvatar>
      <CustomAvatar skin='light-static' color='error'>
        AB
      </CustomAvatar>
    </Box>
  )
}

export default AvatarsLetter
`}</code>
  </pre>
)

export const AvatarsSizesJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const AvatarsSizes = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt='Victor Anderson' sx={{ width: 25, height: 25 }} src='/images/avatars/3.png' />
      <Avatar alt='Victor Anderson' src='/images/avatars/3.png' />
      <Avatar alt='Victor Anderson' sx={{ width: 56, height: 56 }} src='/images/avatars/3.png' />
    </Box>
  )
}

export default AvatarsSizes
`}</code>
  </pre>
)

export const AvatarsWithBadgeJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

// Styled component for badge content area
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: 0 0 0 2px {theme.palette.background.paper}
}))

const AvatarsWithBadge = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <Badge
        overlap='circular'
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar alt='Marie Garza' src='/images/avatars/2.png' />
      </Badge>
      <Badge
        overlap='circular'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        badgeContent={
          <Avatar
            alt='Marie Garza'
            src='/images/avatars/2.png'
            sx={{ width: 22, height: 22, border: theme => 2px solid {theme.palette.background.paper} }}
          />
        }
      >
        <Avatar alt='Olivia Sparks' src='/images/avatars/4.png' />
      </Badge>
    </Box>
  )
}

export default AvatarsWithBadge
`}</code>
  </pre>
)

export const AvatarsGroupedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const AvatarsGrouped = () => {
  return (
    <div className='demo-space-y'>
      <AvatarGroup max={4}>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </AvatarGroup>
      <AvatarGroup max={4} sx={{ justifyContent: 'center' }}>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </AvatarGroup>
      <AvatarGroup max={4} sx={{ justifyContent: 'flex-start' }}>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </AvatarGroup>
    </div>
  )
}

export default AvatarsGrouped
`}</code>
  </pre>
)

export const AvatarsGroupedPullUpWithTooltipTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import AvatarGroup from '@mui/material/AvatarGroup'

const AvatarsGroupedPullUpWithTooltip = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Tooltip title='Olivia Sparks'>
        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
      </Tooltip>
      <Tooltip title='Howard Lloyd'>
        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
      </Tooltip>
      <Tooltip title='Hallie Richards'>
        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
      </Tooltip>
      <Tooltip title='Alice Cobb'>
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
      </Tooltip>
      <Tooltip title='Jeffery Warner'>
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </Tooltip>
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUpWithTooltip
`}</code>
  </pre>
)

export const AvatarsIconTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const AvatarsIcon = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <Avatar>
        <Icon icon='bx:folder' />
      </Avatar>
      <CustomAvatar color='success'>
        <Icon icon='bx:refresh' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='info'>
        <Icon icon='bx:check-circle' />
      </CustomAvatar>
    </Box>
  )
}

export default AvatarsIcon
`}</code>
  </pre>
)

export const AvatarsGroupedPullUpTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const AvatarsGroupedPullUp = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUp
`}</code>
  </pre>
)

export const AvatarsImageTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const AvatarsImage = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
    </Box>
  )
}

export default AvatarsImage
`}</code>
  </pre>
)

export const AvatarsLetterTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import MuiAvatar from '@mui/material/Avatar'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const AvatarsLetter = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <MuiAvatar>H</MuiAvatar>
      <CustomAvatar>N</CustomAvatar>
      <CustomAvatar skin='light' color='error'>
        OP
      </CustomAvatar>
      <CustomAvatar skin='light-static' color='error'>
        AB
      </CustomAvatar>
    </Box>
  )
}

export default AvatarsLetter
`}</code>
  </pre>
)

export const AvatarsVariantsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const AvatarsVariants = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <CustomAvatar variant='square'>
        <Icon icon='bx:bell' />
      </CustomAvatar>
      <CustomAvatar color='success' variant='rounded'>
        <Icon icon='bx:save' />
      </CustomAvatar>
      <CustomAvatar skin='light' variant='square'>
        <Icon icon='bx:bell' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='success' variant='rounded'>
        <Icon icon='bx:save' />
      </CustomAvatar>
    </Box>
  )
}

export default AvatarsVariants
`}</code>
  </pre>
)

export const AvatarsWithBadgeTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

// Styled component for badge content area
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: 0 0 0 2px {theme.palette.background.paper}
}))

const AvatarsWithBadge = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <Badge
        overlap='circular'
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar alt='Marie Garza' src='/images/avatars/2.png' />
      </Badge>
      <Badge
        overlap='circular'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        badgeContent={
          <Avatar
            alt='Marie Garza'
            src='/images/avatars/2.png'
            sx={{ width: 22, height: 22, border: theme => 2px solid {theme.palette.background.paper} }}
          />
        }
      >
        <Avatar alt='Olivia Sparks' src='/images/avatars/4.png' />
      </Badge>
    </Box>
  )
}

export default AvatarsWithBadge
`}</code>
  </pre>
)

export const AvatarsSizesTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const AvatarsSizes = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt='Victor Anderson' sx={{ width: 25, height: 25 }} src='/images/avatars/3.png' />
      <Avatar alt='Victor Anderson' src='/images/avatars/3.png' />
      <Avatar alt='Victor Anderson' sx={{ width: 56, height: 56 }} src='/images/avatars/3.png' />
    </Box>
  )
}

export default AvatarsSizes
`}</code>
  </pre>
)
