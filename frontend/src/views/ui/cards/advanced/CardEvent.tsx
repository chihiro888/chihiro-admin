// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const CardEvent = () => {
  return (
    <Card>
      <CardHeader
        title='Olivia Shared Event'
        subheader='07 Sep 2020 at 10:30 AM'
        sx={{ py: 5, alignItems: 'flex-start' }}
        titleTypographyProps={{ variant: 'h5' }}
        subheaderTypographyProps={{ variant: 'body1', sx: { color: 'text.disabled' } }}
        avatar={<Avatar src='/images/avatars/20.png' sx={{ mt: 1.5, width: 42, height: 42 }} />}
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Edit', 'Delete']} />}
      />
      <CardMedia height={180} component='img' image='/images/cards/event.png' />
      <CardContent sx={{ position: 'relative', pt: theme => `${theme.spacing(8)} !important` }}>
        <Box
          sx={{
            py: 1.5,
            px: 2.5,
            top: -30,
            width: 48,
            boxShadow: 4,
            borderRadius: 1,
            position: 'absolute',
            alignItems: 'center',
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <Typography variant='h6' sx={{ lineHeight: 1.3 }}>
            {new Date().getDate()}
          </Typography>
          <Typography variant='body2' sx={{ mt: -0.5, lineHeight: 1.3, fontWeight: 'bold', color: 'primary.main' }}>
            {new Date().toLocaleString('default', { month: 'short' })}
          </Typography>
        </Box>
        <Typography variant='h6' sx={{ mb: 1.25 }}>
          How To Excel In A Technical…
        </Typography>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <CustomChip rounded size='small' skin='light' color='primary' label='Technical' sx={{ mr: 3 }} />
          <CustomChip rounded size='small' skin='light' color='primary' label='Account' sx={{ mr: 3 }} />
          <CustomChip rounded size='small' skin='light' color='primary' label='Excel' />
        </Box>
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <AvatarGroup className='pull-up'>
            <Tooltip title='Howard Lloyd'>
              <Avatar alt='Howard Lloyd' src='/images/avatars/5.png' sx={{ width: 34, height: 34 }} />
            </Tooltip>
            <Tooltip title='Katie Lane'>
              <Avatar alt='Katie Lane' src='/images/avatars/12.png' sx={{ width: 34, height: 34 }} />
            </Tooltip>
            <Tooltip title='Alice Cobb'>
              <Avatar alt='Alice Cobb' src='/images/avatars/6.png' sx={{ width: 34, height: 34 }} />
            </Tooltip>
            <Tooltip title='Sara Stone'>
              <Avatar alt='Sara Stone' src='/images/avatars/10.png' sx={{ width: 34, height: 34 }} />
            </Tooltip>
          </AvatarGroup>
          <Button variant='contained'>Join Now</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'text.disabled' } }}>
              <Icon icon='bx:heart' />
              <Typography sx={{ color: 'text.disabled' }}>236</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'text.disabled' } }}>
              <Icon icon='bx:message' />
              <Typography sx={{ color: 'text.disabled' }}>12</Typography>
            </Box>
          </Box>
          <OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Download', 'Delete']} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardEvent
