// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TabContext from '@mui/lab/TabContext'

// ** Demo Tabs Imports
import TabMenuBuilder from 'src/components/builder/menu'
import { getGlobalList } from 'src/apis/global'
import { Box, Tab } from '@mui/material'
import { hSetActiveTab } from 'src/store/apps/menu'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { TabList } from '@mui/lab'

const MenuContainer = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)
  const { activeTab } = menu

  // ** State
  const [tabs, setTabs] = useState<any>([])

  const initData = async () => {
    try {
      const { data: res } = await getGlobalList()
      if (res.statusCode === 200) {
        const role = JSON.parse(
          res.data.filter((global) => global.key === 'role')[0].value
        )
        setTabs(role)
      }
    } catch (err) {
      //
    }
  }
  useEffect(() => {
    dispatch(hSetActiveTab('U'))
    initData()
  }, [])

  // ** handler
  const handleTabChange = (tab) => {
    dispatch(hSetActiveTab(tab))
  }

  return (
    <>
      {/* 헤더 컨테이너 */}

      <Grid container spacing={6} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TabContext value={activeTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList aria-label="lab API tabs example">
                    <Tab
                      label="사용자"
                      value="U"
                      onClick={() => handleTabChange('U')}
                    />
                    <Tab
                      label="관리자"
                      value="A"
                      onClick={() => handleTabChange('A')}
                    />
                    <Tab
                      label="시스템 관리자"
                      value="SA"
                      onClick={() => handleTabChange('SA')}
                    />
                  </TabList>
                </Box>
              </TabContext>
            </Grid>

            <Grid item xs={12}>
              <TabMenuBuilder tabs={tabs} />
            </Grid>
          </Grid>
          {/* </TabContext> */}
        </Grid>
      </Grid>
    </>
  )
}

export default MenuContainer
