// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Component Imports
import { useEffect, useState } from 'react'
import Congratulations from 'src/components/Congratulations'
import CardStatsVertical from 'src/components/card-stats-vertical'
import {
  getAdminCount,
  getImageCount,
  getLoginHistoryCount,
  getSettingCount
} from 'src/apis/dashboard'
import produce from 'immer'

const Home = () => {
  // ** State
  const [dashboard, setDashboard] = useState([
    {
      type: 'count',
      key: 'admin',
      image: '/images/custom/admin.png',
      title: '관리자',
      value: {
        total: 0,
        today: 0,
        diff: 0
      }
    },
    {
      type: 'count',
      key: 'loginHistory',
      image: '/images/custom/login-history.png',
      title: '로그인 이력',
      value: {
        total: 0,
        today: 0,
        diff: 0
      }
    },
    {
      type: 'count',
      key: 'image',
      image: '/images/custom/image.png',
      title: '이미지',
      value: {
        total: 0,
        today: 0,
        diff: 0
      }
    },
    {
      type: 'count',
      key: 'setting',
      image: '/images/custom/setting.png',
      title: '설정',
      value: {
        total: 0,
        today: 0,
        diff: 0
      }
    }
  ])

  const initData = async () => {
    // TODO 리팩토링 필요
    const { data: adminCountRes } = await getAdminCount()
    const { data: loginHistoryCountRes } = await getLoginHistoryCount()
    const { data: imageCountRes } = await getImageCount()
    const { data: settingCountRes } = await getSettingCount()

    const nextState = produce(dashboard, (draftState) => {
      for (let i = 0; i < draftState.length; i++) {
        const item = draftState[i]
        if (item.key === 'admin') {
          item.value = adminCountRes.data
        } else if (item.key === 'loginHistory') {
          item.value = loginHistoryCountRes.data
        } else if (item.key === 'image') {
          item.value = imageCountRes.data
        } else if (item.key === 'setting') {
          item.value = settingCountRes.data
        }
      }
    })
    setDashboard(nextState)
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} lg={12} sx={{ order: -1 }}>
            <Congratulations />
          </Grid>
          {dashboard.map((item, idx) => {
            return (
              <>
                {item.type === 'count' ? (
                  <Grid key={idx} item xs={6} md={6} lg={2} sx={{ order: -1 }}>
                    <CardStatsVertical
                      image={item.image}
                      title={item.title}
                      total={item.value.total}
                      today={item.value.today}
                      diff={item.value.diff}
                    />
                  </Grid>
                ) : (
                  <></>
                )}
              </>
            )
          })}
        </Grid>
      </ApexChartWrapper>
    </>
  )
}

export default Home
