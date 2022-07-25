import { toast } from 'react-toastify'
import { useThemeMode } from '../../_metronic/partials'

const toastInfo = () => {
  const { mode } = useThemeMode()
  toast.info('Wow so easy!', { theme: 'dark' })
}

const toastSuccess = () => {
  //
}

const toastWarning = () => {
  //
}

const toastError = () => {
  //
}
