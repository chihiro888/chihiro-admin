// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Type Imports
import { CardStatsType } from 'src/@fake-db/types'

const cardStatsData: CardStatsType = {
  statsHorizontal: [
    {
      stats: '58,352',
      trendNumber: 29,
      title: 'Session',
      avatarIcon: 'bx:trending-up',
      subtitle: 'Last week analytics '
    },
    {
      trendNumber: 18,
      stats: '28m 14s',
      avatarColor: 'info',
      title: 'Time On Site',
      avatarIcon: 'bx:time-five',
      subtitle: 'Last day analytics '
    },
    {
      stats: '62%',
      trendNumber: 14,
      trend: 'negative',
      title: 'Bounce Rate',
      avatarColor: 'error',
      avatarIcon: 'bx:pie-chart-alt',
      subtitle: 'Last week analytics '
    },
    {
      title: 'Users',
      stats: '18,472',
      trendNumber: 42,
      avatarColor: 'success',
      avatarIcon: 'bx:user',
      subtitle: 'Last year analytics '
    }
  ],
  statsVertical: [
    {
      stats: '$14,854',
      trendNumber: 28.14,
      title: 'Transactions',
      avatarSrc: '/images/cards/stats-vertical-card.png'
    },
    {
      title: 'Order',
      stats: '$1,286',
      trend: 'negative',
      trendNumber: 13.24,
      avatarSrc: '/images/cards/stats-vertical-cube.png'
    },
    {
      title: 'Profit',
      stats: '$12,638',
      trendNumber: 72.8,
      avatarSrc: '/images/cards/stats-vertical-chart.png'
    },
    {
      stats: '$2,468',
      trend: 'negative',
      title: 'Payments',
      trendNumber: 14.82,
      avatarSrc: '/images/cards/stats-vertical-paypal.png'
    },
    {
      stats: '$42,389',
      title: 'Revenue',
      trendNumber: 52.18,
      avatarSrc: '/images/cards/stats-vertical-desktop.png'
    },
    {
      title: 'Sales',
      stats: '$4,679',
      trendNumber: 28.14,
      avatarSrc: '/images/cards/stats-vertical-wallet.png'
    }
  ],
  statsTarget: [
    {
      stats: '8,642',
      trendNumber: 29,
      title: 'Total Sales',
      avatarIcon: 'bx:trending-up',
      subtitle: '12% of target',
      buttonText: 'Today',
      buttonOptions: ['Yesterday', 'Last Week', 'Last Month']
    },
    {
      stats: '$1,271',
      trendNumber: 23,
      trend: 'negative',
      avatarColor: 'info',
      title: 'Referral Income',
      subtitle: '34% of target',
      avatarIcon: 'bx:dollar',
      buttonText: 'Today',
      buttonOptions: ['Yesterday', 'Last Week', 'Last Month']
    },
    {
      stats: '24,680',
      trendNumber: 42,
      title: 'Customers',
      avatarColor: 'success',
      subtitle: '29% of target',
      avatarIcon: 'bx:user',
      buttonText: 'Today',
      buttonOptions: ['Yesterday', 'Last Week', 'Last Month']
    },
    {
      stats: '1,862',
      trendNumber: 82,
      avatarColor: 'warning',
      title: 'Orders Received',
      subtitle: '47% of target',
      avatarIcon: 'bx-archive',
      buttonText: 'Today',
      buttonOptions: ['Yesterday', 'Last Week', 'Last Month']
    }
  ]
}

mock.onGet('/cards/statistics').reply(() => {
  return [200, cardStatsData]
})
