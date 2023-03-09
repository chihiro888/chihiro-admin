import { Button, Dialog, DialogContent } from '@mui/material'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import Icon from 'src/@core/components/icon'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const TableHeader = () => {
  // Redux
  const page = useSelector((state: RootState) => state.page)
  const openTableHeader = page.openTableHeader

  return (
    <>
      {/* 테이블 헤더 편집 */}
      <Dialog aria-labelledby="simple-dialog-title" open={openTableHeader}>
        <CustomDialogTitle
          title="테이블 헤더 편집"
          // onClose={handleClickCloseTableHeader}
          onClose={() => {
            //
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          {/* {tableHeader.map((item, idx) => {
            return (
              <Grid container spacing={1} sx={{ mb: 2 }} key={idx}>
                <Grid item xs={9}>
                  <TextField
                    id="outlined-basic"
                    label=""
                    size="small"
                    fullWidth
                    value={item}
                    onChange={(e) => {
                      const copyArr = [...tableHeader]
                      copyArr[idx] = e.target.value
                      setTableHeader(copyArr)
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      const copyArr = [...tableHeader]

                      // 유효성
                      if (copyArr.length === 1) {
                        toast.error('테이블 헤더는 최소 1개 이상이어야 합니다.')

                        return false
                      }

                      // 요소 삭제
                      copyArr.splice(idx, 1)
                      setTableHeader(copyArr)
                    }}
                  >
                    <Icon icon="material-symbols:delete-forever-outline"></Icon>
                  </Button>
                </Grid>
              </Grid>
            )
          })} */}

          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 3 }}
            // onClick={() => {
            //   setTableHeader([...tableHeader, ''])
            // }}
          >
            <Icon icon="material-symbols:add"></Icon>
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 3 }}
            // onClick={() => {
            //   // 유효성
            //   for (let i = 0; i < tableHeader.length; i++) {
            //     const item = tableHeader[i]
            //     if (item === '') {
            //       // 알림
            //       toast.error('테이블 헤더는 빈 값이 될 수 없습니다.')

            //       return false
            //     }
            //   }

            //   // 모달 닫기
            //   handleClickCloseTableHeader()

            //   // 알림
            //   toast.success('테이블 헤더가 저장되었습니다.')
            // }}
          >
            저장
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TableHeader
