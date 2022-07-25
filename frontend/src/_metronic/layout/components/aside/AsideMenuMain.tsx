/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { AsideMenuItem } from './AsideMenuItem'

/*
  icon (duotune)
  https://preview.keenthemes.com/metronic8/react/docs/docs/icons/duotune

  if you want to use font icon, change aside.menuIcon = 'font'
  - frontend/src/_metronic/layout/core/DefaultLayoutConfig.ts
*/

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      {/* Dashboard */}
      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      />

      {/* Develop */}
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Develop
          </span>
        </div>
      </div>
      <AsideMenuItem
        to="/develop/axios/"
        icon="/media/icons/duotune/communication/com006.svg"
        title={intl.formatMessage({ id: 'MENU.DEVELOP.AXIOS_SAMPLE' })}
      />
      <AsideMenuItem
        to="/develop/button/"
        icon="/media/icons/duotune/communication/com006.svg"
        title={intl.formatMessage({ id: 'MENU.DEVELOP.BUTTON_SAMPLE' })}
      />
      <AsideMenuItem
        to="/develop/reactState/"
        icon="/media/icons/duotune/communication/com006.svg"
        title={intl.formatMessage({ id: 'MENU.DEVELOP.REACT_STATE_SAMPLE' })}
      />
      <AsideMenuItem
        to="/develop/reduxState/"
        icon="/media/icons/duotune/communication/com006.svg"
        title={intl.formatMessage({ id: 'MENU.DEVELOP.REDUX_STATE_SAMPLE' })}
      />
      <AsideMenuItem
        to="/develop/toast/"
        icon="/media/icons/duotune/communication/com006.svg"
        title={intl.formatMessage({ id: 'MENU.DEVELOP.TOAST_SAMPLE' })}
      />

      {/* User */}
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            User
          </span>
        </div>
      </div>
      <AsideMenuItem
        to="/user/management/"
        icon="/media/icons/duotune/communication/com006.svg"
        title={intl.formatMessage({ id: 'MENU.USER.USER_MANAGEMENT' })}
      />

      {/* Query */}
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Query
          </span>
        </div>
      </div>
      <AsideMenuItem
        to="/query/execute/"
        icon="/media/icons/duotune/general/gen017.svg"
        title={intl.formatMessage({ id: 'MENU.QUERY.QUERY_EXECUTE' })}
      />
      <AsideMenuItem
        to="/query/history/"
        icon="/media/icons/duotune/general/gen013.svg"
        title={intl.formatMessage({ id: 'MENU.QUERY.QUERY_HISTORY' })}
      />
    </>
  )
}
