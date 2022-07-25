import { createRoot } from 'react-dom/client'
import axios from 'axios'
import { Chart, registerables } from 'chart.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { MetronicI18nProvider } from './_metronic/i18n/Metronici18n'

import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'

import { AppRoutes } from './app/routing/AppRoutes'
import { AuthProvider, setupAxios } from './app/modules/auth'

// redux
import { Provider } from 'react-redux'
import { store } from './app/store'

setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MetronicI18nProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </MetronicI18nProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}
