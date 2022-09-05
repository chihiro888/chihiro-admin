/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../../app/modules/auth'
import { Languages } from './Languages'
import { toAbsoluteUrl } from '../../../helpers'
import { useIntl } from 'react-intl'

const HeaderUserMenu: FC = () => {
  // hooks
  const { currentUser, logout } = useAuth()
  const intl = useIntl()

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <img alt="Logo" src={toAbsoluteUrl('/media/custom/profile.png')} />
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.username}
              {currentUser?.isAdmin === 1 && currentUser?.isDeveloper === 0 ? (
                <>
                  <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                    Admin
                  </span>
                </>
              ) : (
                <></>
              )}
              {currentUser?.isDeveloper === 1 ? (
                <>
                  <span className="badge badge-light-info fw-bolder fs-8 px-2 py-1 ms-2">
                    Developer
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>
            <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.account}
            </a>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <Languages />

      <div className="menu-item px-5 my-1">
        <Link to="/account/settings/" className="menu-link px-5">
          {intl.formatMessage({ id: 'Account Settings' })}
        </Link>
      </div>

      <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          {intl.formatMessage({ id: 'Sign Out' })}
        </a>
      </div>
    </div>
  )
}

export { HeaderUserMenu }
