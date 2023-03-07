// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: '시스템관리'
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
      sectionTitle: '사용자'
    },
    {
      title: '사용자 관리',
      icon: 'material-symbols:person',
      path: '/admin'
    },
    {
      title: '로그인 이력',
      icon: 'mdi:account-clock',
      path: '/admin/history'
    }
  ]
}

export default navigation
