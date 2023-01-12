// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Component Imports
import { useEffect, useState } from 'react'
import Congratulations from 'src/components/congratulations'
import CardStatsVertical from 'src/components/card-stats-vertical'
import {
  getAdminCount,
  getImageCount,
  getLoginHistoryCount,
  getSettingCount
} from 'src/apis/dashboard'
import produce from 'immer'
import { useDispatch, useSelector } from 'react-redux'

// ** Redux
import { initDashboard, setDashboardList } from 'src/store/apps/crud'
import { RootState } from 'src/store'

const Home = () => {
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const dashboardList = crud.dashboardList

  useEffect(() => {
    // NOTE 대쉬보드 리스트
    dispatch(
      setDashboardList([
        {
          type: 'count',
          key: 'admin',
          image: '/images/custom/admin.png',
          title: '관리자',
          value: {
            total: 0,
            today: 0,
            diff: 0
          },
          loadAPI: getAdminCount
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
          },
          loadAPI: getLoginHistoryCount
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
          },
          loadAPI: getImageCount
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
          },
          loadAPI: getSettingCount
        }
      ])
    )
  }, [])

  useEffect(() => {
      initData()
  }, [dashboardList.length])

  const initData = () => {
    dashboardList.map( async (item) => {
      const { data: res } = await item.loadAPI()
      dispatch(initDashboard({ item, res }))
    })
  }

  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} lg={12} sx={{ order: -1 }}>
            <Congratulations />
          </Grid>
          {dashboardList.map((item, idx) => {
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
