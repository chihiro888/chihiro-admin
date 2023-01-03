// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
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
      sectionTitle: '설정'
    },
    {
      title: '설정',
      icon: 'mdi:gear',
      path: '/settings'
    }
  ]
}

export default navigation
