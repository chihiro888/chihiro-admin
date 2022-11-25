// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Custom Components Import
import OptionsMenu from 'src/@core/components/option-menu'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const AnalyticsActivityTimeline = () => {
  return (
    <Card>
      <CardHeader
        title='Activity Timeline'
        action={
          <OptionsMenu
            iconButtonProps={{ size: 'small' }}
            options={['Share timeline', 'Suggest edits', 'Report bug']}
          />
        }
      />
      <CardContent sx={{ pb: theme => `${theme.spacing(3.75)} !important` }}>
        <Timeline sx={{ my: 0, py: 0 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(6)} !important` }}>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>12 Invoices have been paid</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  12 min ago
                </Typography>
              </Box>
              <Typography sx={{ mb: 2.5, color: 'text.secondary' }}>Invoices have been paid to the company</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img width={24} height={24} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
                <Typography sx={{ ml: 3, fontWeight: 500 }}>Invoices.pdf</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='warning' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(6)} !important` }}>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Client Meeting</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  45 min ago
                </Typography>
              </Box>
              <Typography sx={{ mb: 2, color: 'text.secondary' }}>Project meeting with john @10:15am</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='/images/avatars/3.png' sx={{ mr: 2.25, width: 38, height: 38 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500 }}>Steven Nash (Client)</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>CEO of ThemeSelection</Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ minHeight: 0 }}>
            <TimelineSeparator>
              <TimelineDot color='info' />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0 }}>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Create a new project for client</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  2 days ago
                </Typography>
              </Box>
              <Typography sx={{ mb: 2, color: 'text.secondary' }}>5 team members in a project</Typography>
              <AvatarGroup className='pull-up'>
                <Tooltip title='Howard Lloyd'>
                  <Avatar alt='Howard Lloyd' src='/images/avatars/5.png' sx={{ width: 34, height: 34 }} />
                </Tooltip>
                <Tooltip title='Katie Lane'>
                  <Avatar alt='Katie Lane' src='/images/avatars/12.png' sx={{ width: 34, height: 34 }} />
                </Tooltip>
                <Tooltip title='George Allen'>
                  <Avatar alt='George Allen' src='/images/avatars/9.png' sx={{ width: 34, height: 34 }} />
                </Tooltip>
                <Tooltip title='Alice Cobb'>
                  <Avatar alt='Alice Cobb' src='/images/avatars/6.png' sx={{ width: 34, height: 34 }} />
                </Tooltip>
                <Tooltip title='Jeffery Warner'>
                  <Avatar alt='Jeffery Warner' src='/images/avatars/14.png' sx={{ width: 34, height: 34 }} />
                </Tooltip>
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default AnalyticsActivityTimeline
