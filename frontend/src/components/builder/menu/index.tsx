// ** React Import
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { ReactSortable } from 'react-sortablejs'

import {
  deleteMenu,
  getMenuList,
  getMenuOrderList,
  updateMenu
} from 'src/apis/menu'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import {
  hOpenAddForm,
  hUpdateEditMenuContainer,
  reloadMenu
} from 'src/store/apps/menu'
import toast from 'react-hot-toast'
import AddForm from 'src/components/menu/dialog/add-form'
import PagePart from 'src/components/menu/part/page-part'
import SectionTitlePart from 'src/components/menu/part/section-title-part'
import MenuPart from 'src/components/menu/part/menu-part'
import { CircularProgress, FormControlLabel, Switch } from '@mui/material'

const TabMenuBuilder = (props: any) => {
  const { tabs } = props
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)

  const { activeTab, updateMenuIdList } = menu

  // ** State
  const [leftList, setLeftList] = useState([])
  const [rightList, setRightList] = useState([])
  const [isDeleteMode, setIsDeleteMode] = useState(false)

  // ** Handler
  const handleDeleteMenu = async (id: number) => {
    try {
      const params = { id: id }
      const { data: res } = await deleteMenu(params)
      if (res.statusCode === 200) {
        toast.success('정상적으로 삭제되었습니다.')
        handleLoadData()
      }
    } catch (err) {}
  }

  const handleClickSave = async () => {
    try {
      const params = {
        permission: activeTab,
        menuIdList: updateMenuIdList
      }

      const { data: res } = await updateMenu(params)
      if (res.statusCode === 200) {
        toast.success(res.message)
        dispatch(reloadMenu())
      }
    } catch (err) {
      //
    }
  }

  const handleLoadData = async () => {
    try {
      const { data: menuListRes } = await getMenuList()

      if (menuListRes.statusCode === 200) {
        const menuList = menuListRes.data.data

        const { data: menuOrderListRes } = await getMenuOrderList({
          permission: activeTab
        })
        if (menuOrderListRes.statusCode === 200) {
          const menuOrderList = menuOrderListRes.data
          const rightList = menuList.filter((menu) =>
            menuOrderList.map((orderList) => orderList.menuId).includes(menu.id)
          )
          rightList.sort((a, b) => {
            const aOrder = menuOrderList.find((order) => order.menuId === a.id)
            const bOrder = menuOrderList.find((order) => order.menuId === b.id)

            return aOrder.menuOrder - bOrder.menuOrder
          })
          const leftList = menuList.filter(
            (menu) => !rightList.map((list) => list.id).includes(menu.id)
          )

          setRightList(rightList)
          setLeftList(leftList)
        }
      }
    } catch (err) {
      console.log('err', err)
      //
    }
  }

  useEffect(() => {
    if (activeTab) {
      handleLoadData()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  useEffect(() => {
    // filter right list id
    const menuIdList = rightList.map((list) => list.id)
    dispatch(hUpdateEditMenuContainer(menuIdList))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rightList])

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        {/* 메뉴 추가 폼 */}
        <AddForm />

        {/* 페이지 파트 */}
        <PagePart />

        {/* 섹션 타이틀 파트 */}
        <SectionTitlePart handleLoadData={handleLoadData} />

        {/* 메뉴 파트 */}
        <MenuPart handleLoadData={handleLoadData} />

        <Card>
          {/* <CardHeader title={<CustomChip label={'공통 메뉴'} fontSize={15} color="red" />} /> */}
          <CardContent>
            <Grid container sx={{ mb: 3 }} justifyContent="space-between">
              <Grid item>
                <Typography variant="body1">공통 메뉴</Typography>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      color="error"
                      value={isDeleteMode}
                      onClick={() => setIsDeleteMode(!isDeleteMode)}
                    />
                  }
                  label="삭제 모드"
                />
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(hOpenAddForm())
                  }}
                  size="small"
                >
                  메뉴 생성
                </Button>
              </Grid>
            </Grid>

            <ReactSortable
              list={leftList}
              setList={setLeftList}
              animation={200}
              group={{
                name: 'U'
              }}
            >
              {leftList.map((data, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 20px',
                      mb: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(245, 245, 247, 0.7)'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 3,
                          mr: 4,
                          display: 'flex'
                        }}
                      >
                        <img src={'/images/icons/drag.png'} height="20" />
                      </Box>
                      <Box
                        sx={{
                          mr: 4,
                          minWidth: 45,
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        {data.type === 'menu' ? (
                          <Icon icon={data.icon} fontSize={20} />
                        ) : (
                          <Icon icon="mdi:horizontal-line" fontSize={20} />
                        )}
                      </Box>
                      <div>
                        <Typography sx={{ fontWeight: 500 }}>
                          {data.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: 'text.disabled' }}
                        >
                          {data.type === 'menu' ? '메뉴' : '섹션 타이틀'}
                        </Typography>
                      </div>
                    </Box>
                    {isDeleteMode ? (
                      <Button
                        onClick={() => handleDeleteMenu(data.id)}
                        color={'error'}
                      >
                        삭제
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Box>
                )
              })}
            </ReactSortable>
          </CardContent>
        </Card>
      </Grid>
      {/* Social Accounts Cards */}
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Grid container sx={{ mb: 3 }}>
              <Grid item xs={9}>
                <Typography variant="body1"> {tabs[activeTab]}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  sx={{ mr: 5 }}
                  onClick={handleClickSave}
                  size="small"
                  fullWidth
                >
                  저장
                </Button>
              </Grid>
            </Grid>

            <ReactSortable
              group={{
                name: 'U'
              }}
              list={rightList.map((x) => ({ ...x, chosen: true }))}
              setList={setRightList}
              animation={200}
            >
              {rightList.map((data, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 20px',
                      mb: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(245, 245, 247, 0.7)'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 3,
                          mr: 4,
                          display: 'flex'
                        }}
                      >
                        <img src={'/images/icons/drag.png'} height="20" />
                      </Box>
                      <Box
                        sx={{
                          mr: 4,
                          minWidth: 45,
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        {data.type === 'menu' ? (
                          <Icon icon={data.icon} fontSize={20} />
                        ) : (
                          <Icon icon="mdi:horizontal-line" fontSize={20} />
                        )}
                      </Box>
                      <div>
                        <Typography sx={{ fontWeight: 500 }}>
                          {data.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: 'text.disabled' }}
                        >
                          {data.type === 'menu' ? '메뉴' : '섹션 타이틀'}
                        </Typography>
                      </div>
                    </Box>
                  </Box>
                )
              })}
            </ReactSortable>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabMenuBuilder
