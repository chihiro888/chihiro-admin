// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { AppBarSearchType } from 'src/@fake-db/types'

const searchData: AppBarSearchType[] = [
  {
    id: 1,
    url: '/dashboards/analytics',
    icon: 'bx:line-chart',
    title: 'Analytics Dashboard',
    category: 'dashboards'
  },
  {
    id: 2,
    url: '/dashboards/crm',
    icon: 'bx:pie-chart-alt',
    title: 'CRM Dashboard',
    category: 'dashboards'
  },
  {
    id: 3,
    url: '/dashboards/ecommerce',
    icon: 'bx:cart',
    title: 'eCommerce Dashboard',
    category: 'dashboards'
  },
  {
    id: 4,
    url: '/apps/email',
    icon: 'bx:envelope',
    title: 'Email',
    category: 'appsPages'
  },
  {
    id: 5,
    url: '/apps/chat',
    icon: 'bx:message',
    title: 'Chat',
    category: 'appsPages'
  },
  {
    id: 6,
    url: '/apps/calendar',
    icon: 'bx:calendar',
    title: 'Calendar',
    category: 'appsPages'
  },
  {
    id: 7,
    url: '/apps/invoice/list',
    icon: 'bx:list-ol',
    title: 'Invoice List',
    category: 'appsPages'
  },
  {
    id: 8,
    url: '/apps/invoice/preview',
    icon: 'bx:file',
    title: 'Invoice Preview',
    category: 'appsPages'
  },
  {
    id: 9,
    url: '/apps/invoice/edit',
    icon: 'bx:edit',
    title: 'Invoice Edit',
    category: 'appsPages'
  },
  {
    id: 10,
    url: '/apps/invoice/add',
    icon: 'bx:book-add',
    title: 'Invoice Add',
    category: 'appsPages'
  },
  {
    id: 11,
    url: '/apps/user/list',
    icon: 'bx:group',
    title: 'User List',
    category: 'appsPages'
  },
  {
    id: 12,
    url: '/apps/user/view/account',
    icon: 'bx:user',
    title: 'User View - Account',
    category: 'appsPages'
  },
  {
    id: 13,
    url: '/apps/user/view/security',
    icon: 'bx:lock-open-alt',
    title: 'User View - Security',
    category: 'appsPages'
  },
  {
    id: 14,
    url: '/apps/user/view/billing-plan',
    icon: 'bx:dollar',
    title: 'User View - Billing & Plans',
    category: 'appsPages'
  },
  {
    id: 15,
    url: '/apps/user/view/notification',
    icon: 'bx:bell',
    title: 'User View - Notification',
    category: 'appsPages'
  },
  {
    id: 16,
    url: '/apps/user/view/connection',
    icon: 'bx:link',
    title: 'User View - Connection',
    category: 'appsPages'
  },
  {
    id: 17,
    url: '/apps/roles',
    icon: 'bx:shield',
    title: 'Roles',
    category: 'appsPages'
  },
  {
    id: 18,
    url: '/apps/permissions',
    icon: 'bx:lock-alt',
    title: 'Permissions',
    category: 'appsPages'
  },
  {
    id: 19,
    url: '/pages/user-profile/profile',
    icon: 'bx:user-circle',
    title: 'User Profile',
    category: 'appsPages'
  },
  {
    id: 20,
    url: '/pages/user-profile/teams',
    icon: 'bx:group',
    title: 'User Profile - Teams',
    category: 'appsPages'
  },
  {
    id: 21,
    url: '/pages/user-profile/projects',
    icon: 'bx:grid-alt',
    title: 'User Profile - Projects',
    category: 'appsPages'
  },
  {
    id: 22,
    url: '/pages/user-profile/connections',
    icon: 'bx:link',
    title: 'User Profile - Connections',
    category: 'appsPages'
  },
  {
    id: 23,
    url: '/pages/account-settings/account',
    icon: 'bx:cog',
    title: 'Account Settings',
    category: 'appsPages'
  },
  {
    id: 24,
    url: '/pages/account-settings/security',
    icon: 'bx:lock-open-alt',
    title: 'Account Settings - Security',
    category: 'appsPages'
  },
  {
    id: 25,
    url: '/pages/account-settings/billing-plan',
    icon: 'bx:dollar',
    title: 'Account Settings - Billing & Plans',
    category: 'appsPages'
  },
  {
    id: 26,
    url: '/pages/account-settings/notifications',
    icon: 'bx:bell',
    title: 'Account Settings - Notifications',
    category: 'appsPages'
  },
  {
    id: 27,
    url: '/pages/account-settings/connections',
    icon: 'bx:link',
    title: 'Account Settings - Connections',
    category: 'appsPages'
  },
  {
    id: 28,
    url: '/pages/faq',
    icon: 'bx:help-circle',
    title: 'FAQ',
    category: 'appsPages'
  },
  {
    id: 29,
    url: '/pages/help-center',
    icon: 'bx:help-circle',
    title: 'Help Center',
    category: 'appsPages'
  },
  {
    id: 30,
    url: '/pages/pricing',
    icon: 'bx:dollar',
    title: 'Pricing',
    category: 'appsPages'
  },
  {
    id: 31,
    url: '/pages/misc/coming-soon',
    icon: 'bx:time',
    title: 'Coming Soon',
    category: 'appsPages'
  },
  {
    id: 32,
    url: '/pages/misc/under-maintenance',
    icon: 'bx:cog',
    title: 'Under Maintenance',
    category: 'appsPages'
  },
  {
    id: 33,
    url: '/pages/misc/404-not-found',
    icon: 'bx:error-circle',
    title: 'Page Not Found - 404',
    category: 'appsPages'
  },
  {
    id: 34,
    url: '/pages/misc/401-not-authorized',
    icon: 'bx:user-x',
    title: 'Not Authorized - 401',
    category: 'appsPages'
  },
  {
    id: 35,
    url: '/pages/misc/500-server-error',
    icon: 'bx:error-alt',
    title: 'Server Error - 500',
    category: 'appsPages'
  },
  {
    id: 36,
    url: '/pages/auth/login-v1',
    icon: 'bx:log-in',
    title: 'Login V1',
    category: 'appsPages'
  },
  {
    id: 37,
    url: '/pages/auth/login-v2',
    icon: 'bx:log-in',
    title: 'Login V2',
    category: 'appsPages'
  },
  {
    id: 38,
    url: '/pages/auth/login-with-appbar',
    icon: 'bx:log-in',
    title: 'Login With AppBar',
    category: 'appsPages'
  },
  {
    id: 39,
    url: '/pages/auth/register-v1',
    icon: 'bx:user-plus',
    title: 'Register V1',
    category: 'appsPages'
  },
  {
    id: 40,
    url: '/pages/auth/register-v2',
    icon: 'bx:user-plus',
    title: 'Register V2',
    category: 'appsPages'
  },
  {
    id: 41,
    url: '/pages/auth/register-multi-steps',
    icon: 'bx:user-plus',
    title: 'Register Multi-Steps',
    category: 'appsPages'
  },
  {
    id: 42,
    icon: 'bx:envelope',
    category: 'appsPages',
    title: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1'
  },
  {
    id: 43,
    icon: 'bx:envelope',
    category: 'appsPages',
    title: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2'
  },
  {
    id: 44,
    url: '/pages/auth/forgot-password-v1',
    icon: 'bx:question-mark',
    title: 'Forgot Password V1',
    category: 'appsPages'
  },
  {
    id: 45,
    url: '/pages/auth/forgot-password-v2',
    icon: 'bx:question-mark',
    title: 'Forgot Password V2',
    category: 'appsPages'
  },
  {
    id: 46,
    url: '/pages/auth/reset-password-v1',
    icon: 'bx:help-circle',
    title: 'Reset Password V1',
    category: 'appsPages'
  },
  {
    id: 47,
    url: '/pages/auth/reset-password-v2',
    icon: 'bx:help-circle',
    title: 'Reset Password V2',
    category: 'appsPages'
  },
  {
    id: 48,
    icon: 'bx:question-mark',
    category: 'appsPages',
    title: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1'
  },
  {
    id: 49,
    icon: 'bx:question-mark',
    category: 'appsPages',
    title: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2'
  },
  {
    id: 50,
    icon: 'bx:cart',
    category: 'appsPages',
    title: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout'
  },
  {
    id: 51,
    category: 'appsPages',
    icon: 'bx:building',
    title: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing'
  },
  {
    id: 52,
    icon: 'bx:gift',
    category: 'appsPages',
    title: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal'
  },
  {
    id: 53,
    url: '/pages/dialog-examples',
    icon: 'bx:window-open',
    title: 'Dialog Examples',
    category: 'appsPages'
  },
  {
    id: 54,
    url: '/ui/typography',
    icon: 'bx:text',
    title: 'Typography',
    category: 'userInterface'
  },
  {
    id: 55,
    url: '/ui/icons',
    icon: 'bx:crown',
    title: 'Icons',
    category: 'userInterface'
  },
  {
    id: 56,
    url: '/ui/cards/basic',
    icon: 'bx:rectangle',
    title: 'Card Basic',
    category: 'userInterface'
  },
  {
    id: 57,
    url: '/ui/cards/advanced',
    icon: 'bx:collection',
    title: 'Card Advanced',
    category: 'userInterface'
  },
  {
    id: 58,
    url: '/ui/cards/statistics',
    icon: 'bx:bar-chart-square',
    title: 'Card Statistics',
    category: 'userInterface'
  },
  {
    id: 59,
    url: '/ui/cards/widgets',
    icon: 'bx:bar-chart-square',
    title: 'Card Widgets',
    category: 'userInterface'
  },
  {
    id: 60,
    url: '/ui/cards/gamification',
    icon: 'bx:collection',
    title: 'Card Gamification',
    category: 'userInterface'
  },
  {
    id: 61,
    url: '/ui/cards/actions',
    icon: 'bx:mouse-alt',
    title: 'Card Actions',
    category: 'userInterface'
  },
  {
    id: 62,
    url: '/components/accordion',
    icon: 'bx:exit-fullscreen',
    title: 'Accordion',
    category: 'userInterface'
  },
  {
    id: 63,
    url: '/components/alerts',
    icon: 'bx:error-circle',
    title: 'Alerts',
    category: 'userInterface'
  },
  {
    id: 64,
    url: '/components/avatars',
    icon: 'bx:user-circle',
    title: 'Avatars',
    category: 'userInterface'
  },
  {
    id: 65,
    url: '/components/badges',
    icon: 'bx:square-rounded',
    title: 'Badges',
    category: 'userInterface'
  },
  {
    id: 66,
    url: '/components/buttons',
    icon: 'bx:plus-circle',
    title: 'Buttons',
    category: 'userInterface'
  },
  {
    id: 67,
    url: '/components/button-group',
    icon: 'bx:collection',
    title: 'Button Group',
    category: 'userInterface'
  },
  {
    id: 68,
    url: '/components/chips',
    icon: 'bx:rectangle',
    title: 'Chips',
    category: 'userInterface'
  },
  {
    id: 69,
    url: '/components/dialogs',
    icon: 'bx:collection',
    title: 'Dialogs',
    category: 'userInterface'
  },
  {
    id: 70,
    url: '/components/list',
    icon: 'bx:list-ul',
    title: 'List',
    category: 'userInterface'
  },
  {
    id: 71,
    url: '/components/menu',
    icon: 'bx:menu',
    title: 'Menu',
    category: 'userInterface'
  },
  {
    id: 72,
    url: '/components/pagination',
    icon: 'bx:last-page',
    title: 'Pagination',
    category: 'userInterface'
  },
  {
    id: 73,
    url: '/components/ratings',
    icon: 'bx:star',
    title: 'Ratings',
    category: 'userInterface'
  },
  {
    id: 74,
    url: '/components/snackbar',
    icon: 'bx:message-dots',
    title: 'Snackbar',
    category: 'userInterface'
  },
  {
    id: 75,
    url: '/components/swiper',
    icon: 'bx:carousel',
    title: 'Swiper',
    category: 'userInterface'
  },
  {
    id: 76,
    url: '/components/tabs',
    icon: 'bx:server',
    title: 'Tabs',
    category: 'userInterface'
  },
  {
    id: 77,
    url: '/components/timeline',
    icon: 'bx:objects-horizontal-left',
    title: 'Timeline',
    category: 'userInterface'
  },
  {
    id: 78,
    url: '/components/toast',
    icon: 'bx:bell',
    title: 'Toast',
    category: 'userInterface'
  },
  {
    id: 79,
    url: '/components/tree-view',
    icon: 'bx:git-merge',
    title: 'Tree View',
    category: 'userInterface'
  },
  {
    id: 80,
    url: '/components/more',
    icon: 'bx:plus',
    title: 'More Components',
    category: 'userInterface'
  },
  {
    id: 81,
    url: '/forms/form-elements/text-field',
    icon: 'bx:rectangle',
    title: 'TextField',
    category: 'formsTables'
  },
  {
    id: 82,
    url: '/forms/form-elements/select',
    icon: 'bx:rectangle',
    title: 'Select',
    category: 'formsTables'
  },
  {
    id: 83,
    url: '/forms/form-elements/checkbox',
    icon: 'bx:check-square',
    title: 'Checkbox',
    category: 'formsTables'
  },
  {
    id: 84,
    url: '/forms/form-elements/radio',
    icon: 'bx:radio-circle-marked',
    title: 'Radio',
    category: 'formsTables'
  },
  {
    id: 85,
    icon: 'bx:check-circle',
    title: 'Custom Inputs',
    category: 'formsTables',
    url: '/forms/form-elements/custom-inputs'
  },
  {
    id: 86,
    url: '/forms/form-elements/textarea',
    icon: 'bx:rectangle',
    title: 'Textarea',
    category: 'formsTables'
  },
  {
    id: 87,
    url: '/forms/form-elements/autocomplete',
    icon: 'bx:rectangle',
    title: 'Autocomplete',
    category: 'formsTables'
  },
  {
    id: 88,
    url: '/forms/form-elements/pickers',
    icon: 'bx:calendar',
    title: 'Date Pickers',
    category: 'formsTables'
  },
  {
    id: 89,
    url: '/forms/form-elements/switch',
    icon: 'bx:toggle-right',
    title: 'Switch',
    category: 'formsTables'
  },
  {
    id: 90,
    url: '/forms/form-elements/file-uploader',
    icon: 'bx:upload',
    title: 'File Uploader',
    category: 'formsTables'
  },
  {
    id: 91,
    url: '/forms/form-elements/editor',
    icon: 'bx:edit',
    title: 'Editor',
    category: 'formsTables'
  },
  {
    id: 92,
    url: '/forms/form-elements/slider',
    icon: 'bx:slider-alt',
    title: 'Slider',
    category: 'formsTables'
  },
  {
    id: 93,
    url: '/forms/form-elements/input-mask',
    icon: 'bx:rectangle',
    title: 'Input Mask',
    category: 'formsTables'
  },
  {
    id: 94,
    url: '/forms/form-layouts',
    icon: 'bx:cube',
    title: 'Form Layouts',
    category: 'formsTables'
  },
  {
    id: 95,
    url: '/forms/form-validation',
    icon: 'bx:check-circle',
    title: 'Form Validation',
    category: 'formsTables'
  },
  {
    id: 96,
    url: '/forms/form-wizard',
    icon: 'bx:dots-horizontal-rounded',
    title: 'Form Wizard',
    category: 'formsTables'
  },
  {
    id: 97,
    url: '/tables/mui',
    icon: 'bx:table',
    title: 'Table',
    category: 'formsTables'
  },
  {
    id: 98,
    url: '/tables/data-grid',
    icon: 'bx:grid-alt',
    title: 'Mui DataGrid',
    category: 'formsTables'
  },
  {
    id: 99,
    url: '/charts/apex-charts',
    icon: 'bx:line-chart',
    title: 'Apex Charts',
    category: 'chartsMisc'
  },
  {
    id: 100,
    url: '/charts/recharts',
    icon: 'bx:bar-chart',
    title: 'Recharts',
    category: 'chartsMisc'
  },
  {
    id: 101,
    url: '/charts/chartjs',
    icon: 'bx:pie-chart-alt',
    title: 'ChartJS',
    category: 'chartsMisc'
  },
  {
    id: 102,
    url: '/acl',
    icon: 'bx:shield',
    title: 'Access Control (ACL)',
    category: 'chartsMisc'
  }
]

// ** GET Search Data
mock.onGet('/app-bar/search').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const exactData: { [k: string]: AppBarSearchType[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: []
  }

  const includeData: { [k: string]: AppBarSearchType[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: []
  }

  searchData.forEach(obj => {
    const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
    if (isMatched && exactData[obj.category].length < 5) {
      exactData[obj.category].push(obj)
    }
  })

  searchData.forEach(obj => {
    const isMatched =
      !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)
    if (isMatched && includeData[obj.category].length < 5) {
      includeData[obj.category].push(obj)
    }
  })

  const categoriesCheck: string[] = []

  Object.keys(exactData).forEach(category => {
    if (exactData[category].length > 0) {
      categoriesCheck.push(category)
    }
  })
  if (categoriesCheck.length === 0) {
    Object.keys(includeData).forEach(category => {
      if (includeData[category].length > 0) {
        categoriesCheck.push(category)
      }
    })
  }

  const resultsLength = categoriesCheck.length === 1 ? 5 : 3

  return [
    200,
    [
      ...exactData.dashboards.concat(includeData.dashboards).slice(0, resultsLength),
      ...exactData.appsPages.concat(includeData.appsPages).slice(0, resultsLength),
      ...exactData.userInterface.concat(includeData.userInterface).slice(0, resultsLength),
      ...exactData.formsTables.concat(includeData.formsTables).slice(0, resultsLength),
      ...exactData.chartsMisc.concat(includeData.chartsMisc).slice(0, resultsLength)
    ]
  ]
})
