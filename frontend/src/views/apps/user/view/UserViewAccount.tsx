// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'

// ** Demo Component Imports
import UsersInvoiceListTable from 'src/views/apps/user/view/UsersInvoiceListTable'
import UsersProjectListTable from 'src/views/apps/user/view/UsersProjectListTable'

interface Props {
  invoiceData: InvoiceType[]
}

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginLeft: theme.spacing(0.75),
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    },
    '&:last-child': {
      minHeight: 60
    }
  }
}))

const UserViewOverview = ({ invoiceData }: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UsersProjectListTable />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='User Activity Timeline' />
          <CardContent>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      mb: 2,
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
                  <Typography sx={{ color: 'text.secondary' }}>
                    Create new invoices and send to Leona Watkins
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 15, height: 'auto' }}>
                      <img width={15} height={15} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
                    </Box>
                    <Typography sx={{ ml: 2, fontWeight: 700, color: 'text.secondary' }}>invoice.pdf</Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='warning' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      mb: 2,
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
                    <Avatar alt='Avatar' src='/images/avatars/3.png' sx={{ width: 38, height: 38, mr: 4 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 500 }}>Lester McCarthy (Client)</Typography>
                      <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                        CEO of ThemeSelection
                      </Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='info' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      mb: 2,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography sx={{ mr: 2, fontWeight: 500 }}>Create a new project for client</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      2 Days Ago
                    </Typography>
                  </Box>
                  <Typography sx={{ mb: 2, color: 'text.secondary' }}>5 team members in a project</Typography>
                  <AvatarGroup className='pull-up' sx={{ '& .MuiAvatar-root': { width: 38, height: 38 } }}>
                    <Tooltip title='Vinnie Mostowy'>
                      <Avatar src='/images/avatars/5.png' alt='Vinnie Mostowy' />
                    </Tooltip>
                    <Tooltip title='Marrie Patty'>
                      <Avatar src='/images/avatars/12.png' alt='Marrie Patty' />
                    </Tooltip>
                    <Tooltip title='Jimmy Jackson'>
                      <Avatar src='/images/avatars/9.png' alt='Jimmy Jackson' />
                    </Tooltip>
                    <Tooltip title='Kristine Gill'>
                      <Avatar src='/images/avatars/6.png' alt='Kristine Gill' />
                    </Tooltip>
                    <Tooltip title='Nelson Wilson'>
                      <Avatar src='/images/avatars/14.png' alt='Nelson Wilson' />
                    </Tooltip>
                  </AvatarGroup>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='success' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      mb: 2,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography sx={{ mr: 2, fontWeight: 500 }}>Design Review</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      5 Days ago
                    </Typography>
                  </Box>
                  <Typography variant='body2'>Weekly review of freshly prepared design for our new app.</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <UsersInvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default UserViewOverview
