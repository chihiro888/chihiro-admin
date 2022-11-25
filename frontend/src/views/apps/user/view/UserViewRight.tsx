// ** React Imports
import { SyntheticEvent, useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components Imports
import UserViewBilling from 'src/views/apps/user/view/UserViewBilling'
import UserViewAccount from 'src/views/apps/user/view/UserViewAccount'
import UserViewSecurity from 'src/views/apps/user/view/UserViewSecurity'
import UserViewConnection from 'src/views/apps/user/view/UserViewConnection'
import UserViewNotification from 'src/views/apps/user/view/UserViewNotification'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'

interface Props {
  tab: string
  invoiceData: InvoiceType[]
}

//  ** Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  marginBottom: theme.spacing(6),
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 40,
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const UserViewRight = ({ tab, invoiceData }: Props) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // ** Hooks
  const router = useRouter()
  const hideText = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true)
    setActiveTab(value)
    router
      .push({
        pathname: `/apps/user/view/${value.toLowerCase()}`
      })
      .then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  useEffect(() => {
    if (invoiceData) {
      setIsLoading(false)
    }
  }, [invoiceData])

  return activeTab ? (
    <TabContext value={activeTab}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
      >
        <Tab
          value='account'
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
              <Icon icon='bx:user' />
              {!hideText && 'Account'}
            </Box>
          }
        />
        <Tab
          value='security'
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
              <Icon icon='bx:lock-alt' />
              {!hideText && 'Security'}
            </Box>
          }
        />
        <Tab
          value='billing-plan'
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
              <Icon icon='bx:detail' />
              {!hideText && 'Billing & Plans'}
            </Box>
          }
        />
        <Tab
          value='notification'
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
              <Icon icon='bx:bell' />
              {!hideText && 'Notifications'}
            </Box>
          }
        />
        <Tab
          value='connection'
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
              <Icon icon='bx:link-alt' />
              {!hideText && 'Connections'}
            </Box>
          }
        />
      </TabList>
      <Box sx={{ '& .MuiTabPanel-root': { p: 0, border: 0, boxShadow: 0, backgroundColor: 'transparent' } }}>
        {isLoading ? (
          <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          <>
            <TabPanel value='account'>
              <UserViewAccount invoiceData={invoiceData} />
            </TabPanel>
            <TabPanel value='security'>
              <UserViewSecurity />
            </TabPanel>
            <TabPanel value='billing-plan'>
              <UserViewBilling />
            </TabPanel>
            <TabPanel value='notification'>
              <UserViewNotification />
            </TabPanel>
            <TabPanel value='connection'>
              <UserViewConnection />
            </TabPanel>
          </>
        )}
      </Box>
    </TabContext>
  ) : (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <CircularProgress sx={{ mb: 4 }} />
      <Typography>Loading...</Typography>
    </Box>
  )
}

export default UserViewRight
