// ** React Imports
import { SyntheticEvent } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import { FaqType } from 'src/@fake-db/types'

interface Props {
  activeTab: string
  data: { faqData: FaqType }
  handleChange: (event: SyntheticEvent, newValue: string) => void
}

// Styled TabList component
const MuiBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}))

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  '& .MuiTabs-flexContainer': {
    flexDirection: 'column'
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    minHeight: 40,
    minWidth: 280,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    '& svg': {
      marginBottom: 0,
      marginRight: theme.spacing(2)
    },
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const Faqs = ({ data, activeTab, handleChange }: Props) => {
  // ** Hooks
  const theme = useTheme()

  const renderTabContent = () => {
    return Object.values(data.faqData).map(tab => {
      return (
        <TabPanel
          key={tab.id}
          value={tab.id}
          sx={{ p: 0, border: 0, width: '100%', boxShadow: 0, backgroundColor: 'transparent' }}
        >
          <Box key={tab.id}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ height: 42, width: 42 }}>
                <Icon icon={tab.icon} fontSize={28} />
              </CustomAvatar>
              <Box sx={{ ml: 4 }}>
                <Typography variant='h5'>{tab.title}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{tab.subtitle}</Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              {tab.qandA.map((item, index) => {
                return (
                  <Accordion key={item.id}>
                    <AccordionSummary expandIcon={<Icon icon='bx:chevron-down' />}>
                      <Typography sx={{ fontWeight: '500' }}>{`Q${index + 1}: ${item.question}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ color: 'text.secondary' }}>{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </Box>
          </Box>
        </TabPanel>
      )
    })
  }

  const renderTabs = () => {
    if (data !== null) {
      return Object.values(data.faqData).map(tab => {
        if (tab.qandA.length) {
          return <Tab key={tab.id} value={tab.id} label={tab.title} icon={<Icon icon={tab.icon} fontSize={20} />} />
        } else {
          return null
        }
      })
    } else {
      return null
    }
  }

  return (
    <MuiBox>
      <TabContext value={activeTab}>
        <Box sx={{ mr: [0, 0, 6], mb: [6, 6, 0], display: 'flex', flexDirection: 'column' }}>
          <TabList onChange={handleChange}>{renderTabs()}</TabList>
          <Box sx={{ mt: 12, '& img': { maxWidth: '100%' }, display: { xs: 'none', md: 'block' } }}>
            <img
              width='200'
              alt='illustration'
              src={`/images/pages/sitting-girl-with-laptop-${theme.palette.mode}.png`}
            />
          </Box>
        </Box>
        {renderTabContent()}
      </TabContext>
    </MuiBox>
  )
}

export default Faqs
