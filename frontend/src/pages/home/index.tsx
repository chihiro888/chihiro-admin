// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Component Imports
import { useEffect, useState } from 'react'
import Congratulations from 'src/pages/components/dashboard/Congratulations'
import CardStatsVertical from 'src/pages/components/dashboard/CardStatsVertical'
// import { data } from 'src/apis/dashboard'

interface DashboardInterface {
  fileCount: number
  globalCount: number
}

const Home = () => {
  // ** State
  const [dashboard, setDashboard] = useState<DashboardInterface>({
    fileCount: 0,
    globalCount: 0
  })

  const initData = async () => {
    // const { data: res } = await data()
    // if (res.statusCode === 200) {
    //   setDashboard(res.data)
    // }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12} lg={8} sx={{ order: -1 }}>
            <Congratulations />
          </Grid>
          {/* <Grid item xs={12} md={12} lg={4} sx={{ order: -1 }}>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6} lg={6}>
                <CardStatsVertical
                  topTitle="Image"
                  title="이미지"
                  stats={dashboard?.fileCount}
                  trendNumber={28.14}
                  avatarSrc="/images/custom/picture.png"
                />
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <CardStatsVertical
                  topTitle="Key-Value"
                  title="키-값"
                  stats={dashboard?.globalCount}
                  trendNumber={28.14}
                  avatarSrc="/images/custom/data.png"
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </ApexChartWrapper>
    </>
  )
}

export default Home
