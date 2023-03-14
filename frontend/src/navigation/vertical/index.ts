import { getMenu } from './../../apis/menu/index'
// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { createMenu } from 'src/apis/menu'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { reloadMenu } from 'src/store/apps/menu'
import { useAuth } from 'src/hooks/useAuth'

const navigation = (): VerticalNavItemsType => {
  // ** Hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const auth = useAuth()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const menu = useSelector((state: RootState) => state.menu)
  const { menuList } = menu

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defaultSystemAdminMenu = [
    {
      title: '메뉴 빌더',
      icon: 'ri:node-tree',
      path: '/builder/menu'
    },
    {
      title: '페이지 빌더',
      icon: 'material-symbols:insert-page-break-outline',
      path: '/builder/page'
    },
    {
      title: '이미지 등록',
      icon: 'material-symbols:upload-file-outline',
      path: '/image/register'
    },
    {
      title: '이미지 관리',
      icon: 'material-symbols:image-outline',
      path: '/image/list'
    },
    {
      title: '설정',
      icon: 'mdi:gear',
      path: '/settings'
    }
  ]

  const handleLoadMenu = async () => {
    dispatch(reloadMenu())
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handleLoadMenu()
  }, [])

  // ** Menu list
  if (auth.user?.role === 'SA') {
    return [...defaultSystemAdminMenu, ...menuList]
  } else {
    return menuList
  }
}

export default navigation
