// ** MUI Import
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

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

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineLeft = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
              Get on the flight
            </Typography>
            <Typography variant='caption'>Wednesday</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            <span>Charles de Gaulle Airport, Paris</span> <Icon icon='bx:right-arrow-alt' fontSize={20} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption'>6:30 AM</Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={28} height={28} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
            <Typography variant='subtitle2' sx={{ ml: 2, fontWeight: 600 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
              Interview Schedule
            </Typography>
            <Typography variant='caption'>6th October</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ my: theme => `${theme.spacing(3)} !important` }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar src='/images/avatars/2.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='bx:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='bx:phone-call' fontSize={20} />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='warning' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
            <ImgShoe width='85' height='85' alt='Shoe img' src='/images/misc/shoe.jpeg' />
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography
                  variant='body2'
                  sx={{ mr: 2, fontWeight: 600, color: 'text.primary', mt: { sm: 0, xs: 2 } }}
                >
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography
                  variant='caption'
                  sx={{
                    mb: {
                      sm: 0,
                      xs: 2
                    }
                  }}
                >
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2, color: 'text.primary' }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </Box>
            <Box sx={{ mr: 2 }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>
                Price
              </Typography>
              <Typography variant='caption'>$375.00</Typography>
            </Box>
            <div>
              <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
              Design Review
            </Typography>
            <Typography variant='caption'>4th October</Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 2, color: 'text.primary' }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
            <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineLeft
