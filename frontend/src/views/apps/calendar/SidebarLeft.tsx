// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { SidebarLeftType, CalendarFiltersType } from 'src/types/apps/calendarTypes'

const SidebarLeft = (props: SidebarLeftType) => {
  const {
    store,
    mdAbove,
    dispatch,
    calendarApi,
    calendarsColor,
    leftSidebarOpen,
    leftSidebarWidth,
    handleSelectEvent,
    handleAllCalendars,
    handleCalendarsUpdate,
    handleLeftSidebarToggle,
    handleAddEventSidebarToggle
  } = props

  const colorsArr = calendarsColor ? Object.entries(calendarsColor) : []

  const renderFilters = colorsArr.length
    ? colorsArr.map(([key, value]: string[]) => {
        return (
          <FormControlLabel
            key={key}
            label={key}
            sx={{ mb: -2, '& .MuiFormControlLabel-label': { color: 'text.secondary' } }}
            control={
              <Checkbox
                size='small'
                color={value as ThemeColor}
                checked={store.selectedCalendars.includes(key as CalendarFiltersType)}
                onChange={() => dispatch(handleCalendarsUpdate(key as CalendarFiltersType))}
              />
            }
          />
        )
      })
    : null

  const handleSidebarToggleSidebar = () => {
    handleAddEventSidebarToggle()
    dispatch(handleSelectEvent(null))
  }

  if (renderFilters) {
    return (
      <Drawer
        open={leftSidebarOpen}
        onClose={handleLeftSidebarToggle}
        variant={mdAbove ? 'permanent' : 'temporary'}
        ModalProps={{
          disablePortal: true,
          disableAutoFocus: true,
          disableScrollLock: true,
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: 2,
          display: 'block',
          position: mdAbove ? 'static' : 'absolute',
          '& .MuiDrawer-paper': {
            borderRadius: 1,
            boxShadow: 'none',
            width: leftSidebarWidth,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            zIndex: mdAbove ? '2' : 'drawer',
            position: mdAbove ? 'static' : 'absolute'
          },
          '& .MuiBackdrop-root': {
            borderRadius: 1,
            position: 'absolute'
          }
        }}
      >
        <Box sx={{ p: theme => theme.spacing(5.625, 6) }}>
          <Button
            fullWidth
            variant='contained'
            onClick={handleSidebarToggleSidebar}
            startIcon={<Icon icon='bx:plus' />}
            sx={{ '& svg': { fontSize: '1.125rem !important' } }}
          >
            Add Event
          </Button>
        </Box>
        <Divider sx={{ mt: '0 !important' }} />
        <Box sx={{ px: 4, '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' } }}>
          <DatePicker
            inline
            onChange={date => {
              calendarApi.gotoDate(date)
            }}
          />
        </Box>
        <Divider sx={{ m: '0 !important' }} />
        <Box sx={{ px: 6, display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography variant='body2' sx={{ mt: 7, mb: 4, color: 'text.primary', textTransform: 'uppercase' }}>
            Filter
          </Typography>
          <FormControlLabel
            label='View All'
            sx={{ mb: -2, '& .MuiFormControlLabel-label': { color: 'text.secondary' } }}
            control={
              <Checkbox
                size='small'
                checked={store.selectedCalendars.length === colorsArr.length}
                onChange={e => dispatch(handleAllCalendars(e.target.checked))}
              />
            }
          />
          {renderFilters}
        </Box>
      </Drawer>
    )
  } else {
    return null
  }
}

export default SidebarLeft
