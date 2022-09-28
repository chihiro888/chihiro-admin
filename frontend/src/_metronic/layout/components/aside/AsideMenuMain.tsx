/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import { useIntl } from 'react-intl'
import MenuLabel from '../../../../app/components/MenuLabel'
import { AsideMenuItem } from './AsideMenuItem'

/*
  icon (duotune)
  https://preview.keenthemes.com/metronic8/react/docs/docs/icons/duotune
*/

export function AsideMenuMain() {
  // hooks
  const intl = useIntl()

  // state - Develop Sample Menu
  const [developSampleMenu] = useState([
    {
      to: '/develop/template/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.TEMPLATE_SAMPLE' })
    },
    {
      to: '/develop/axios/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.AXIOS_SAMPLE' })
    },
    {
      to: '/develop/button/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.BUTTON_SAMPLE' })
    },
    {
      to: '/develop/reactState/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.REACT_STATE_SAMPLE' })
    },
    {
      to: '/develop/reduxState/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.REDUX_STATE_SAMPLE' })
    },
    {
      to: '/develop/toast/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.TOAST_SAMPLE' })
    },
    {
      to: '/develop/lottie/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.LOTTIE_SAMPLE' })
    },
    {
      to: '/develop/modal/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.MODAL_SAMPLE' })
    },
    {
      to: '/develop/bignumber/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.BIGNUMBER_SAMPLE' })
    },
    {
      to: '/develop/pagination/',
      icon: '/media/icons/duotune/general/gen029.svg',
      title: intl.formatMessage({ id: 'MENU.DEVELOP.PAGINATION_SAMPLE' })
    }
  ])

  // state - Develop Menu
  const [developMenu] = useState([
    {
      to: '/user/management/',
      icon: '/media/icons/duotune/communication/com006.svg',
      title: intl.formatMessage({ id: 'MENU.USER.USER_MANAGEMENT' })
    },
    {
      to: '/query/execute/',
      icon: '/media/icons/duotune/general/gen017.svg',
      title: intl.formatMessage({ id: 'MENU.QUERY.QUERY_EXECUTE' })
    },
    {
      to: '/query/history/',
      icon: '/media/icons/duotune/general/gen013.svg',
      title: intl.formatMessage({ id: 'MENU.QUERY.QUERY_HISTORY' })
    }
  ])

  return (
    <>
      {/* Develop */}
      {process.env.REACT_APP_NAME === 'development' ? (
        <>
          <MenuLabel title={'Develop Sample'} />
          {developSampleMenu.map((data, idx) => (
            <AsideMenuItem
              key={idx}
              to={data.to}
              icon={data.icon}
              title={data.title}
            />
          ))}

          <MenuLabel title={'Develop'} />
          {developMenu.map((data, idx) => (
            <AsideMenuItem
              key={idx}
              to={data.to}
              icon={data.icon}
              title={data.title}
            />
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  )
}
