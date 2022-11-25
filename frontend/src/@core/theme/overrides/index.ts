// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Overrides Imports
import MuiCard from './card'
import MuiChip from './chip'
import MuiLink from './link'
import MuiList from './list'
import MuiMenu from './menu'
import MuiTabs from './tabs'
import MuiInput from './input'
import MuiPaper from './paper'
import MuiRadio from './radio'
import MuiTable from './table'
import MuiAlerts from './alerts'
import MuiButton from './button'
import MuiDialog from './dialog'
import MuiRating from './rating'
import MuiSelect from './select'
import MuiSlider from './slider'
import MuiAvatar from './avatars'
import MuiDivider from './divider'
import MuiPopover from './popover'
import MuiTooltip from './tooltip'
import MuiBackdrop from './backdrop'
import MuiCheckbox from './checkbox'
import MuiDataGrid from './dataGrid'
import MuiProgress from './progress'
import MuiSnackbar from './snackbar'
import MuiSwitches from './switches'
import MuiTimeline from './timeline'
import MuiAccordion from './accordion'
import MuiPagination from './pagination'
import MuiTypography from './typography'
import MuiAutocomplete from './autocomplete'
import MuiToggleButton from './toggleButton'

const Overrides = (theme: Theme, settings: Settings) => {
  const { skin } = settings

  const chip = MuiChip(theme)
  const list = MuiList(theme)
  const input = MuiInput(theme)
  const radio = MuiRadio(theme)
  const tables = MuiTable(theme)
  const alerts = MuiAlerts(theme)
  const button = MuiButton(theme)
  const rating = MuiRating(theme)
  const slider = MuiSlider(theme)
  const avatars = MuiAvatar(theme)
  const divider = MuiDivider(theme)
  const menu = MuiMenu(theme, skin)
  const tabs = MuiTabs(theme, skin)
  const tooltip = MuiTooltip(theme)
  const cards = MuiCard(theme, skin)
  const backdrop = MuiBackdrop(theme)
  const checkbox = MuiCheckbox(theme)
  const dataGrid = MuiDataGrid(theme)
  const progress = MuiProgress(theme)
  const switches = MuiSwitches(theme)
  const timeline = MuiTimeline(theme)
  const accordion = MuiAccordion(theme)
  const dialog = MuiDialog(theme, skin)
  const pagination = MuiPagination(theme)
  const popover = MuiPopover(theme, skin)
  const snackbar = MuiSnackbar(theme, skin)
  const autocomplete = MuiAutocomplete(theme, skin)

  return Object.assign(
    chip,
    list,
    menu,
    tabs,
    cards,
    input,
    radio,
    alerts,
    button,
    dialog,
    rating,
    slider,
    tables,
    avatars,
    divider,
    MuiLink,
    popover,
    tooltip,
    checkbox,
    backdrop,
    dataGrid,
    MuiPaper,
    progress,
    snackbar,
    switches,
    timeline,
    accordion,
    MuiSelect,
    pagination,
    autocomplete,
    MuiTypography,
    MuiToggleButton
  )
}

export default Overrides
