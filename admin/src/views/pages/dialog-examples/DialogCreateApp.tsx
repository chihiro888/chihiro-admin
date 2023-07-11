// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hook Imports
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Tab Content Imports
import DialogTabDetails from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabDetails'
import DialogTabBilling from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabBilling'
import DialogTabDatabase from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabDatabase'
import DialogTabFramework from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabFramework'

interface TabLabelProps {
  title: string
  active: boolean
  subtitle: string
  icon: ReactElement
}

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const TabLabel = (props: TabLabelProps) => {
  const { icon, title, subtitle, active } = props

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            ...(active
              ? { color: 'common.white', backgroundColor: 'primary.main' }
              : { backgroundColor: 'action.selected' })
          }}
        >
          {icon}
        </Avatar>
        <Box sx={{ textAlign: 'left' }}>
          <Typography>{title}</Typography>
          <Typography variant='caption' sx={{ textTransform: 'none' }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

const tabsArr = ['detailsTab', 'frameworkTab', 'DatabaseTab', 'paymentTab', 'submitTab']

const DialogCreateApp = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>('detailsTab')

  // ** Hook
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Var
  const { direction } = settings

  const handleClose = () => {
    setShow(false)
    setActiveTab('detailsTab')
  }

  const nextArrow = direction === 'ltr' ? 'bx:right-arrow-alt' : 'bx:left-arrow-alt'
  const previousArrow = direction === 'ltr' ? 'bx:left-arrow-alt' : 'bx:right-arrow-alt'

  const renderTabFooter = () => {
    const prevTab = tabsArr[tabsArr.indexOf(activeTab) - 1]
    const nextTab = tabsArr[tabsArr.indexOf(activeTab) + 1]

    return (
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant='outlined'
          color='secondary'
          disabled={activeTab === 'detailsTab'}
          onClick={() => setActiveTab(prevTab)}
          startIcon={<Icon icon={previousArrow} />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={activeTab === 'submitTab' ? 'success' : 'primary'}
          endIcon={<Icon icon={activeTab === 'submitTab' ? 'bx:check' : nextArrow} />}
          onClick={() => {
            if (activeTab !== 'submitTab') {
              setActiveTab(nextTab)
            } else {
              handleClose()
            }
          }}
        >
          {activeTab === 'submitTab' ? 'Submit' : 'Next'}
        </Button>
      </Box>
    )
  }

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
        <Icon icon='bx:cube' fontSize='2rem' />
        <Typography variant='h6' sx={{ mb: 4 }}>
          Create App
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Provide application data with this form to create the app dialog popup example, easy to use in any page.
        </Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <Dialog
        fullWidth
        open={show}
        scroll='body'
        maxWidth='md'
        onClose={handleClose}
        onBackdropClick={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent
          sx={{
            pt: { xs: 8, sm: 12.5 },
            pr: { xs: 5, sm: 12 },
            pb: { xs: 5, sm: 9.5 },
            pl: { xs: 4, sm: 11 },
            position: 'relative'
          }}
        >
          <IconButton size='small' onClick={handleClose} sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
            <Icon icon='bx:x' />
          </IconButton>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3 }}>
              Create App
            </Typography>
            <Typography variant='body2'>Provide data with this form to create your app.</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
            <TabContext value={activeTab}>
              <TabList
                orientation='vertical'
                onChange={(e, newValue: string) => setActiveTab(newValue)}
                sx={{
                  border: 0,
                  minWidth: 200,
                  '& .MuiTabs-indicator': { display: 'none' },
                  '& .MuiTabs-flexContainer': {
                    alignItems: 'flex-start',
                    '& .MuiTab-root': {
                      width: '100%',
                      alignItems: 'flex-start'
                    }
                  }
                }}
              >
                <Tab
                  disableRipple
                  value='detailsTab'
                  label={
                    <TabLabel
                      title='Details'
                      subtitle='Enter Details'
                      active={activeTab === 'detailsTab'}
                      icon={<Icon icon='bx:file' />}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value='frameworkTab'
                  label={
                    <TabLabel
                      title='Frameworks'
                      icon={<Icon icon='bx:cube' />}
                      subtitle='Select Framework'
                      active={activeTab === 'frameworkTab'}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value='DatabaseTab'
                  label={
                    <TabLabel
                      title='Database'
                      active={activeTab === 'DatabaseTab'}
                      subtitle='Select Database'
                      icon={<Icon icon='bx:data' />}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value='paymentTab'
                  label={
                    <TabLabel
                      title='Billing'
                      active={activeTab === 'paymentTab'}
                      subtitle='Payment details'
                      icon={<Icon icon='bx:credit-card' />}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value='submitTab'
                  label={
                    <TabLabel
                      title='Submit'
                      subtitle='Submit'
                      icon={<Icon icon='bx:check' />}
                      active={activeTab === 'submitTab'}
                    />
                  }
                />
              </TabList>
              <TabPanel
                value='detailsTab'
                sx={{ border: 0, boxShadow: 0, width: '100%', backgroundColor: 'transparent' }}
              >
                <DialogTabDetails />
                {renderTabFooter()}
              </TabPanel>
              <TabPanel
                value='frameworkTab'
                sx={{ border: 0, boxShadow: 0, width: '100%', backgroundColor: 'transparent' }}
              >
                <DialogTabFramework />
                {renderTabFooter()}
              </TabPanel>
              <TabPanel
                value='DatabaseTab'
                sx={{ border: 0, boxShadow: 0, width: '100%', backgroundColor: 'transparent' }}
              >
                <DialogTabDatabase />
                {renderTabFooter()}
              </TabPanel>
              <TabPanel
                value='paymentTab'
                sx={{ border: 0, boxShadow: 0, width: '100%', backgroundColor: 'transparent' }}
              >
                <DialogTabBilling />
                {renderTabFooter()}
              </TabPanel>
              <TabPanel
                value='submitTab'
                sx={{ border: 0, boxShadow: 0, width: '100%', backgroundColor: 'transparent' }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    Submit 🥳
                  </Typography>
                  <Typography variant='body2' sx={{ mb: 6 }}>
                    Submit to kickstart your project.
                  </Typography>

                  <img width={200} alt='submit-img' src={`/images/cards/illustration-john-${theme.palette.mode}.png`} />
                </Box>
                {renderTabFooter()}
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default DialogCreateApp
