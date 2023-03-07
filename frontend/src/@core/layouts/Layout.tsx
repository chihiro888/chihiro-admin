// ** React Import
import { useEffect, useRef } from 'react'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Layout Components
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'
import { getAppInfo } from 'src/apis/global'
import { AppDispatch } from 'src/store'
import { useDispatch } from 'react-redux'
import { setAppInfo } from 'src/store/apps/app'

const Layout = (props: LayoutProps) => {
  // ** Props
  const { hidden, children, settings, saveSettings } = props

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Ref
  const isCollapsed = useRef(settings.navCollapsed)

  const initData = async () => {
    try {
      const { data: res } = await getAppInfo()
      if (res.statusCode === 200) {
        dispatch(setAppInfo(res.data))
      }
    } catch (err) {
      //
    }
  }

  useEffect(() => {
    initData()
  }, [])

  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: 'vertical' })
        isCollapsed.current = true
      } else {
        // if (settings.layout === 'horizontal') {
        //   saveSettings({ ...settings, layout: 'vertical' })
        // }
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({
          ...settings,
          navCollapsed: true,
          layout: settings.lastLayout
        })
        isCollapsed.current = false
      } else {
        if (settings.lastLayout !== settings.layout) {
          saveSettings({ ...settings, layout: settings.lastLayout })
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])

  if (settings.layout === 'horizontal') {
    return <HorizontalLayout {...props}>{children}</HorizontalLayout>
  }

  return <VerticalLayout {...props}>{children}</VerticalLayout>
}

export default Layout
