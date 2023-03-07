// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: '빌더'
    },
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
      sectionTitle: '설정'
    },
    {
      title: '설정',
      icon: 'mdi:gear',
      path: '/settings'
    },
    {
      sectionTitle: '대시보드'
    },
    {
      title: '대시보드',
      icon: 'bx:home',
      path: '/home'
    },
    {
      sectionTitle: '관리자'
    },
    {
      title: '관리자 관리',
      icon: 'material-symbols:person',
      path: '/admin'
    },
    {
      title: '로그인 이력',
      icon: 'mdi:account-clock',
      path: '/admin/history'
    },
    {
      sectionTitle: '이미지'
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
    }
  ]
}

export default navigation
