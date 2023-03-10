// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TabContext from '@mui/lab/TabContext'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Tabs Imports
import TabMenuBuilder from 'src/components/builder/menu'
import { getGlobalList } from 'src/apis/global'
import { Button } from '@mui/material'
import { hOpenAddForm, setClearData } from 'src/store/apps/menu'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'

const MenuContainer = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** State
  const [tabs, setTabs] = useState<any>([])
  const [activeTab, setActiveTab] = useState<string>('U')
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    initData()
  }, [])

  // ** handler

  const handleTabChange = (e) => {
    setActiveTab(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      {/* 헤더 컨테이너 */}

      {/*  */}

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TabContext value={activeTab}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                {Object.keys(tabs).map((tab) => (
                  <>
                    {tab === activeTab ? (
                      <Button
                        variant="contained"
                        value={tab}
                        startIcon={<Icon icon="bx:user" />}
                        sx={{ mr: 5 }}
                        onClick={handleTabChange}
                      >
                        {tabs[tab]}
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        color="secondary"
                        value={tab}
                        startIcon={<Icon icon="bx:user" />}
                        sx={{ mr: 5 }}
                        onClick={handleTabChange}
                      >
                        {tabs[tab]}
                      </Button>
                    )}
                  </>
                ))}
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'right' }}>
                <Button
                  variant="contained"
                  sx={{ mr: 5 }}
                  onClick={() => {
                    dispatch(hOpenAddForm())
                  }}
                >
                  메뉴 생성
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TabMenuBuilder />
              </Grid>
            </Grid>
          </TabContext>
        </Grid>
      </Grid>
    </>
  )
}

export default MenuContainer
