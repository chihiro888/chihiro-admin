/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon="bi-app-indicator"
      />
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Apps
          </span>
        </div>
      </div>
      <AsideMenuItem
        to="#"
        icon="/media/icons/duotune/general/gen051.svg"
        title="Query Execute"
        fontIcon="bi-layers"
      />
      <AsideMenuItem
        to="#"
        icon="/media/icons/duotune/general/gen051.svg"
        title="Query Execute History"
        fontIcon="bi-layers"
      />
    </>
  )
}
