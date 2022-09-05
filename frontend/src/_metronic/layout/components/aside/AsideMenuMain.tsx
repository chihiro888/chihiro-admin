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
      {/* <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Dashboard
          </span>
        </div>
      </div>
      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      /> */}

      {/* Develop */}
      {process.env.REACT_APP_NAME === 'development' ? (
        <>
          <div className="menu-item">
            <div className="menu-content pt-8 pb-2">
              <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                Develop Sample
              </span>
            </div>
          </div>
          <AsideMenuItem
            to="/develop/template/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.TEMPLATE_SAMPLE' })}
          />
          <AsideMenuItem
            to="/develop/axios/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.AXIOS_SAMPLE' })}
          />
          <AsideMenuItem
            to="/develop/button/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.BUTTON_SAMPLE' })}
          />
          <AsideMenuItem
            to="/develop/reactState/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({
              id: 'MENU.DEVELOP.REACT_STATE_SAMPLE'
            })}
          />
          <AsideMenuItem
            to="/develop/reduxState/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({
              id: 'MENU.DEVELOP.REDUX_STATE_SAMPLE'
            })}
          />
          <AsideMenuItem
            to="/develop/toast/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.TOAST_SAMPLE' })}
          />
          <AsideMenuItem
            to="/develop/lottie/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.LOTTIE_SAMPLE' })}
          />
          <AsideMenuItem
            to="/develop/modal/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.MODAL_SAMPLE' })}
          />
          <AsideMenuItem
            to="/develop/bignumber/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.BIGNUMBER_SAMPLE' })}
          />
          <AsideMenuItem
            to="/develop/pagination/"
            icon="/media/icons/duotune/general/gen029.svg"
            title={intl.formatMessage({ id: 'MENU.DEVELOP.PAGINATION_SAMPLE' })}
          />

          <div className="menu-item">
            <div className="menu-content pt-8 pb-2">
              <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                Develop
              </span>
            </div>
          </div>
          <AsideMenuItem
            to="/user/management/"
            icon="/media/icons/duotune/communication/com006.svg"
            title={intl.formatMessage({ id: 'MENU.USER.USER_MANAGEMENT' })}
          />
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
      ) : (
        <></>
      )}
    </>
  )
}
