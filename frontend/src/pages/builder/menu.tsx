import { Box, Card, CardContent, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HeaderContainer from 'src/components/core/header-container'
import { AppDispatch } from 'src/store'
import { setPageHeader } from 'src/store/apps/crud'
import { DndProvider, useDrag } from 'react-dnd'

const Page = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  useEffect(() => {
    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '메뉴 빌더',
        subTitle: '메뉴를 간단하게 빌딩할 수 있습니다.'
      })
    )
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move'
        }}
      >
        <Box sx={{ mt: 5 }}>
          <Typography variant="subtitle1">샘플</Typography>
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <TextField
                id="outlined-basic"
                label="sample"
                fullWidth
                size="small"
                // value={url}
                // onChange={(e) => setUrl(e.target.value)}
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="subtitle1">샘플</Typography>
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <TextField
                id="outlined-basic"
                label="sample"
                fullWidth
                size="small"
                // value={url}
                // onChange={(e) => setUrl(e.target.value)}
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="subtitle1">샘플</Typography>
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <TextField
                id="outlined-basic"
                label="sample"
                fullWidth
                size="small"
                // value={url}
                // onChange={(e) => setUrl(e.target.value)}
              />
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  )
}

export default Page
