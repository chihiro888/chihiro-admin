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
      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      />
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Apps
          </span>
        </div>
      </div>
      <AsideMenuItem
        to="/userManagement/"
        icon="/media/icons/duotune/communication/com006.svg"
        title="User Management"
      />
      <AsideMenuItem
        to="/queryExecute/"
        icon="/media/icons/duotune/general/gen017.svg"
        title="Query Execute"
      />
      <AsideMenuItem
        to="/queryExecuteHistory/"
        icon="/media/icons/duotune/general/gen013.svg"
        title="Query Execute History"
      />
    </>
  )
}
