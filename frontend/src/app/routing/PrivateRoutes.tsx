import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import { QueryExecuteWrapper } from '../pages/query-execute/QueryExecuteWrapper'
import { QueryExecuteHistoryWrapper } from '../pages/query-execute-history/QueryExecuteHistoryWrapper'
import { UserWrapper } from '../pages/user-management/UserWrapper'

/*
  react-route-dom v6
  https://reactrouter.com/docs/en/v6/getting-started/overview

  example
  dashboard  (x)
  dashboard/ (o)
*/
const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />

        {/* Pages */}
        <Route path="dashboard/" element={<DashboardWrapper />} />
        <Route path="userManagement/" element={<UserWrapper />} />
        <Route path="queryExecute/" element={<QueryExecuteWrapper />} />
        <Route
          path="queryExecuteHistory/"
          element={<QueryExecuteHistoryWrapper />}
        />

        {/* Lazy Modules */}
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />

        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor
    },
    barThickness: 1,
    shadowBlur: 5
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
