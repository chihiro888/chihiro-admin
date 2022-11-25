// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: 'bx:home-circle',
      title: 'Dashboards',
      children: [
        {
          icon: 'bx:pie-chart-alt-2',
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          icon: 'bx:shape-circle',
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          icon: 'bx:analyse',
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      icon: 'bx:customize',
      title: 'Apps',
      children: [
        {
          title: 'Email',
          icon: 'bx:envelope',
          path: '/apps/email'
        },
        {
          title: 'Chat',
          icon: 'bx:message',
          path: '/apps/chat'
        },
        {
          title: 'Calendar',
          icon: 'bx:calendar',
          path: '/apps/calendar'
        },
        {
          title: 'Invoice',
          icon: 'bx:food-menu',
          children: [
            {
              title: 'List',
              path: '/apps/invoice/list'
            },
            {
              title: 'Preview',
              path: '/apps/invoice/preview'
            },
            {
              title: 'Edit',
              path: '/apps/invoice/edit'
            },
            {
              title: 'Add',
              path: '/apps/invoice/add'
            }
          ]
        },
        {
          title: 'User',
          icon: 'bx:user',
          children: [
            {
              title: 'List',
              path: '/apps/user/list'
            },
            {
              title: 'View',
              children: [
                {
                  title: 'Account',
                  path: '/apps/user/view/account'
                },
                {
                  title: 'Security',
                  path: '/apps/user/view/security'
                },
                {
                  title: 'Billing & Plans',
                  path: '/apps/user/view/billing-plan'
                },
                {
                  title: 'Notifications',
                  path: '/apps/user/view/notification'
                },
                {
                  title: 'Connection',
                  path: '/apps/user/view/connection'
                }
              ]
            }
          ]
        },
        {
          title: 'Roles & Permissions',
          icon: 'bx:check-shield',
          children: [
            {
              title: 'Roles',
              path: '/apps/roles'
            },
            {
              title: 'Permissions',
              path: '/apps/permissions'
            }
          ]
        }
      ]
    },
    {
      icon: 'bx:palette',
      title: 'UI',
      children: [
        {
          title: 'Typography',
          icon: 'bx:text',
          path: '/ui/typography'
        },
        {
          title: 'Icons',
          path: '/ui/icons',
          icon: 'bx:crown'
        },
        {
          
          title: 'Cards',
          icon: 'bx:collection',
          children: [
            {
              title: 'Basic',
              path: '/ui/cards/basic'
            },
            {
              title: 'Advanced',
              path: '/ui/cards/advanced'
            },
            {
              title: 'Statistics',
              path: '/ui/cards/statistics'
            },
            {
              title: 'Widgets',
              path: '/ui/cards/widgets'
            },
            {
              title: 'Gamification',
              path: '/ui/cards/gamification'
            },
            {
              title: 'Actions',
              path: '/ui/cards/actions'
            }
          ]
        },
        {
          title: 'Components',
          icon: 'bx:box',
          children: [
            {
              title: 'Accordion',
              path: '/components/accordion'
            },
            {
              title: 'Alerts',
              path: '/components/alerts'
            },
            {
              title: 'Avatars',
              path: '/components/avatars'
            },
            {
              title: 'Badges',
              path: '/components/badges'
            },
            {
              title: 'Buttons',
              path: '/components/buttons'
            },
            {
              title: 'Button Group',
              path: '/components/button-group'
            },
            {
              title: 'Chips',
              path: '/components/chips'
            },
            {
              title: 'Dialogs',
              path: '/components/dialogs'
            },
            {
              title: 'List',
              path: '/components/list'
            },
            {
              title: 'Menu',
              path: '/components/menu'
            },
            {
              title: 'Pagination',
              path: '/components/pagination'
            },
            {
              title: 'Ratings',
              path: '/components/ratings'
            },
            {
              title: 'Snackbar',
              path: '/components/snackbar'
            },
            {
              title: 'Swiper',
              path: '/components/swiper'
            },
            {
              title: 'Tabs',
              path: '/components/tabs'
            },
            {
              title: 'Timeline',
              path: '/components/timeline'
            },
            {
              title: 'Toasts',
              path: '/components/toast'
            },
            {
              title: 'Tree View',
              path: '/components/tree-view'
            },
            {
              title: 'More',
              path: '/components/more'
            },
          ]
        }
      ]
    },
    {
      icon: 'bx:collection',
      title: 'Pages',
      children: [
        {
          title: 'User Profile',
          icon: 'bx:user-circle',
          children: [
            {
              title: 'Profile',
              path: '/pages/user-profile/profile'
            },
            {
              title: 'Teams',
              path: '/pages/user-profile/teams'
            },
            {
              title: 'Projects',
              path: '/pages/user-profile/projects'
            },
            {
              title: 'Connections',
              path: '/pages/user-profile/connections'
            }
          ]
        },
        {
          icon: 'bx:cog',
          title: 'Account Settings',
          children: [
            {
              title: 'Account',
              path: '/pages/account-settings/account'
            },
            {
              title: 'Security',
              path: '/pages/account-settings/security'
            },
            {
              title: 'Billing & Plans',
              path: '/pages/account-settings/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/pages/account-settings/notifications'
            },

            {
              title: 'Connections',
              path: '/pages/account-settings/connections'
            }
          ]
        },
        {
          title: 'FAQ',
          path: '/pages/faq',
          icon: 'bx:help-circle'
        },
        {
          title: 'Help Center',
          icon: 'bx:buoy',
          path: '/pages/help-center'
        },
        {
          title: 'Pricing',
          icon: 'bx:diamond',
          path: '/pages/pricing'
        },
        {
          title: 'Miscellaneous',
          icon: 'bx:shape-circle',
          children: [
            {
              openInNewTab: true,
              title: 'Coming Soon',
              path: '/pages/misc/coming-soon'
            },
            {
              openInNewTab: true,
              title: 'Under Maintenance',
              path: '/pages/misc/under-maintenance'
            },
            {
              openInNewTab: true,
              title: 'Page Not Found - 404',
              path: '/pages/misc/404-not-found'
            },
            {
              openInNewTab: true,
              title: 'Not Authorized - 401',
              path: '/pages/misc/401-not-authorized'
            },
            {
              openInNewTab: true,
              title: 'Server Error - 500',
              path: '/pages/misc/500-server-error'
            }
          ]
        },
        {
          title: 'Auth Pages',
          icon: 'bx:lock-open-alt',
          children: [
            {
              title: 'Login',
              children: [
                {
                  openInNewTab: true,
                  title: 'Login v1',
                  path: '/pages/auth/login-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Login v2',
                  path: '/pages/auth/login-v2'
                },
                {
                  openInNewTab: true,
                  title: 'Login With AppBar',
                  path: '/pages/auth/login-with-appbar'
                }
              ]
            },
            {
              title: 'Register',
              children: [
                {
                  openInNewTab: true,
                  title: 'Register v1',
                  path: '/pages/auth/register-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Register v2',
                  path: '/pages/auth/register-v2'
                },
                {
                  openInNewTab: true,
                  title: 'Register Multi-Steps',
                  path: '/pages/auth/register-multi-steps'
                }
              ]
            },
            {
              title: 'Verify Email',
              children: [
                {
                  openInNewTab: true,
                  title: 'Verify Email v1',
                  path: '/pages/auth/verify-email-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Verify Email v2',
                  path: '/pages/auth/verify-email-v2'
                }
              ]
            },
            {
              title: 'Forgot Password',
              children: [
                {
                  openInNewTab: true,
                  title: 'Forgot Password v1',
                  path: '/pages/auth/forgot-password-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Forgot Password v2',
                  path: '/pages/auth/forgot-password-v2'
                }
              ]
            },
            {
              title: 'Reset Password',
              children: [
                {
                  openInNewTab: true,
                  title: 'Reset Password v1',
                  path: '/pages/auth/reset-password-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Reset Password v2',
                  path: '/pages/auth/reset-password-v2'
                }
              ]
            },
            {
              title: 'Two Steps',
              children: [
                {
                  openInNewTab: true,
                  title: 'Two Steps v1',
                  path: '/pages/auth/two-steps-v1'
                },
                {
                  openInNewTab: true,
                  title: 'Two Steps v2',
                  path: '/pages/auth/two-steps-v2'
                }
              ]
            }
          ]
        },
        {
          title: 'Wizard Examples',
          icon: 'bx:spreadsheet',
          children: [
            {
              title: 'Checkout',
              path: '/pages/wizard-examples/checkout'
            },
            {
              title: 'Property Listing',
              path: '/pages/wizard-examples/property-listing'
            },
            {
              title: 'Create Deal',
              path: '/pages/wizard-examples/create-deal'
            }
          ]
        },
        {
          icon: 'bx:window-open',
          title: 'Dialog Examples',
          path: '/pages/dialog-examples'
        }
      ]
    },
    {
      icon: 'bx:grid-alt',
      title: 'Forms & Tables',
      children: [
        {
          title: 'Form Elements',
          icon: 'bx:detail',
          children: [
            {
              title: 'Text Field',
              path: '/forms/form-elements/text-field'
            },
            {
              title: 'Select',
              path: '/forms/form-elements/select'
            },
            {
              title: 'Checkbox',
              path: '/forms/form-elements/checkbox'
            },
            {
              title: 'Radio',
              path: '/forms/form-elements/radio'
            },
            {
              title: 'Custom Inputs',
              path: '/forms/form-elements/custom-inputs'
            },
            {
              title: 'Textarea',
              path: '/forms/form-elements/textarea'
            },
            {
              title: 'Autocomplete',
              path: '/forms/form-elements/autocomplete'
            },
            {
              title: 'Date Pickers',
              path: '/forms/form-elements/pickers'
            },
            {
              title: 'Switch',
              path: '/forms/form-elements/switch'
            },
            {
              title: 'File Uploader',
              path: '/forms/form-elements/file-uploader'
            },
            {
              title: 'Editor',
              path: '/forms/form-elements/editor'
            },
            {
              title: 'Slider',
              path: '/forms/form-elements/slider'
            },
            {
              title: 'Input Mask',
              path: '/forms/form-elements/input-mask'
            },
          ]
        },
        {
          icon: 'bx:detail',
          title: 'Form Layouts',
          path: '/forms/form-layouts'
        },
        {
          title: 'Form Validation',
          path: '/forms/form-validation',
          icon: 'bx:list-check'
        },
        {
          title: 'Form Wizard',
          path: '/forms/form-wizard',
          icon: 'bx:carousel'
        },
        {
          title: 'Table',
          icon: 'bx:table',
          path: '/tables/mui'
        },
        {
          title: 'Mui DataGrid',
          icon: 'bx:grid',
          path: '/tables/data-grid'
        }
      ]
    },
    {
      title: 'Charts',
      icon: 'bx:bar-chart-square',
      children: [
        {
          title: 'Apex',
          icon: 'bx:line-chart',
          path: '/charts/apex-charts'
        },
        {
          title: 'Recharts',
          icon: 'bx:bar-chart',
          path: '/charts/recharts'
        },
        {
          title: 'ChartJS',
          path: '/charts/chartjs',
          icon: 'bx:pie-chart-alt'
        }
      ]
    },
    {
      title: 'Others',
      icon: 'bx:dots-horizontal-rounded',
      children: [
        {
          path: '/acl',
          action: 'read',
          subject: 'acl-page',
          icon: 'bx:shield',
          title: 'Access Control'
        },
        {
          title: 'Menu Levels',
          icon: 'bx:menu',
          children: [
            {
              title: 'Menu Level 2.1'
            },
            {
              title: 'Menu Level 2.2',
              children: [
                {
                  title: 'Menu Level 3.1'
                },
                {
                  title: 'Menu Level 3.2'
                }
              ]
            }
          ]
        },
        {
          title: 'Disabled Menu',
          icon: 'bx:block',
          disabled: true
        },
        {
          title: 'Raise Support',
          icon: 'bx:support',
          externalLink: true,
          openInNewTab: true,
          path: 'https://themeselection.com/support'
        },
        {
          title: 'Documentation',
          icon: 'bx:file',
          externalLink: true,
          openInNewTab: true,
          path: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/documentation/'
        }
      ]
    }
  ]
}

export default navigation
