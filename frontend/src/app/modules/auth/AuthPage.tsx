/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { SignIn } from './components/SignIn'

const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-body')
    return () => {
      document.body.classList.remove('bg-body')
    }
  }, [])

  return (
    <div
      className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
      style={{
        backgroundImage: `url(${toAbsoluteUrl(
          '/media/illustrations/sketchy-1/14.png'
        )})`
      }}
    >
      {/* begin::Content */}
      <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        {/* begin::Logo */}
        <a href="#" className="mb-12">
          <img
            alt="Logo"
            src={toAbsoluteUrl('/media/custom/mysql.png')}
            className="h-80px"
          />
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="signIn" element={<SignIn />} />
      <Route index element={<SignIn />} />
    </Route>
  </Routes>
)

export { AuthPage }
