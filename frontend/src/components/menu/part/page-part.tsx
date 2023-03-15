import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hClosePagePart, updateMenuPartForm } from 'src/store/apps/menu'

// ** Icon Imports
import { useEffect, useState } from 'react'
import { getPageList } from 'src/apis/builder'

const PagePart = () => {
  // ** state
  const [pages, setPages] = useState([])

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)
  const { openPagePart } = menu

  const handleClickPage = (key: string, value: string, id: number) => {
    dispatch(updateMenuPartForm({ key, value }))
    dispatch(updateMenuPartForm({ key: 'pageId', value: id }))
    dispatch(hClosePagePart())
  }

  const initData = async () => {
    try {
      const params = { page: 1, url: '' }
      const { data: res } = await getPageList(params)
      if (res.statusCode === 200) {
        setPages(res.data.data)
      }
    } catch (err) {
      //
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <Dialog open={openPagePart}>
        <CustomDialogTitle
          title="페이지 선택"
          onClose={() => {
            dispatch(hClosePagePart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          {pages.map((page: any, idx: number) => (
            <Card
              key={idx}
              sx={{
                border: 0,
                boxShadow: 0,
                color: 'common.white',
                backgroundColor: 'primary.main',
                mb: 5,
                cursor: 'pointer'
              }}
              onClick={() => handleClickPage('page', page.title, page.id)}
            >
              <CardContent>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'common.white',
                    '& svg': { mr: 2.5 }
                  }}
                >
                  {page.url}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'common.white',
                    '& svg': { mr: 2.5 }
                  }}
                >
                  {page.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PagePart
