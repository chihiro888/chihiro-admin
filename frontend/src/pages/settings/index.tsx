import produce from 'immer'

import {
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Stack,
  TextField
} from '@mui/material'
import PageHeader from 'src/@core/components/page-header'
import { useEffect, useState, Fragment } from 'react'

import moment from 'moment'
import DATE from 'src/common/constants/date'
import Switch from '@mui/material/Switch'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import {
  createGlobal,
  deleteGlobal,
  getGlobalList,
  saveGlobal
} from 'src/apis/global'
import CustomCloseButton from '../../components/custom-close-button'

const Settings = () => {
  // ** Hooks
  const { t } = useTranslation()

  // ** State
  const [deleteMode, setDeleteMode] = useState(false)
  const [globalList, setGlobalList] = useState<any>([])

  const [openAdd, setOpenAdd] = useState<boolean>(false)
  const [openSave, setOpenSave] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)

  const [addData, setAddData] = useState({
    key: '',
    value: '',
    memo: ''
  })
  const [deleteKey, setDeleteKey] = useState('')

  // ** Handler
  const handleClickOpenAdd = () => setOpenAdd(true)
  const handleCloseAdd = () => setOpenAdd(false)

  const handleClickOpenSave = () => setOpenSave(true)
  const handleCloseSave = () => setOpenSave(false)

  const handleClickOpenDelete = (key: string) => {
    setDeleteKey(key)
    setOpenDelete(true)
  }
  const handleCloseDelete = () => setOpenDelete(false)

  const handleChangeGlobalList = (
    dataKey: string,
    columnKey: string,
    e: any
  ) => {
    const nextState = produce(globalList, (draftState: string | any[]) => {
      for (let i = 0; i < draftState.length; i++) {
        const global = draftState[i]
        if (global.key === dataKey) {
          global[columnKey] = e.target.value
        }
      }
    })
    setGlobalList(nextState)
  }

  const handleChangeAddData = (key: string, e: any) => {
    if (key === 'key') {
      setAddData({ ...addData, key: e.target.value })
    } else if (key === 'value') {
      setAddData({ ...addData, value: e.target.value })
    } else if (key === 'memo') {
      setAddData({ ...addData, memo: e.target.value })
    }
  }

  const handleClickAdd = async () => {
    try {
      const params = {
        key: addData.key,
        value: addData.value,
        memo: addData.memo
      }
      const { data: res } = await createGlobal(params)
      if (res.statusCode === 200) {
        toast.success(t(res.message))
        handleCloseAdd()
        initData()
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  const handleClickSave = async () => {
    try {
      const params = {
        globalList: globalList
      }
      const { data: res } = await saveGlobal(params)
      if (res.statusCode === 200) {
        toast.success(t(res.message))
        handleCloseSave()
        initData()
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  const handleClickDelete = async () => {
    try {
      const params = {
        key: deleteKey
      }
      const { data: res } = await deleteGlobal(params)
      if (res.statusCode === 200) {
        toast.success(t(res.message))
        handleCloseDelete()
        initData()
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  const initData = async () => {
    try {
      const { data: res } = await getGlobalList()
      if (res.statusCode === 200) {
        setGlobalList(res.data)
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
      <PageHeader
        title={<Typography variant="h5">설정</Typography>}
        subtitle={
          <Typography variant="body2">
            API Key 및 전역 설정을 관리할 수 있습니다.
          </Typography>
        }
      />

      <Stack sx={{ mt: 5 }} textAlign="right">
        <div>
          <FormControlLabel
            control={
              <Switch
                color="error"
                onChange={(e) => {
                  setDeleteMode(e.target.checked)
                }}
              />
            }
            label="삭제모드"
          />
          <Button
            variant="contained"
            sx={{ mr: 3 }}
            color="secondary"
            onClick={handleClickOpenAdd}
          >
            추가
          </Button>
          <Button variant="contained" onClick={handleClickOpenSave}>
            저장
          </Button>
        </div>
      </Stack>

      {globalList.length === 0 ? (
        <>
          <Stack textAlign={'center'} sx={{ mt: 5 }}>
            <Card>
              <CardContent>
                <Typography>데이터가 존재하지 않습니다.</Typography>
              </CardContent>
            </Card>
          </Stack>
        </>
      ) : (
        <></>
      )}

      {globalList.map((item: any, idx: number) => {
        return (
          <>
            <Stack sx={{ mt: 5 }} key={idx}>
              <Card>
                <CardContent>
                  <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={4}>
                      <TextField
                        label="키"
                        size="small"
                        fullWidth
                        value={item?.key}
                        disabled
                        onChange={(e) =>
                          handleChangeGlobalList(item?.key, 'key', e)
                        }
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        label="값"
                        size="small"
                        fullWidth
                        value={item?.value}
                        onChange={(e) =>
                          handleChangeGlobalList(item?.key, 'value', e)
                        }
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        label="메모"
                        size="small"
                        fullWidth
                        value={item?.memo}
                        onChange={(e) =>
                          handleChangeGlobalList(item?.key, 'memo', e)
                        }
                      />
                    </Grid>
                  </Grid>
                  <Stack sx={{ mt: 3 }} textAlign="left">
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          생성일자 :{' '}
                          {item?.createdAt
                            ? moment(item?.createdAt).format(DATE.DATETIME)
                            : '생성 이력이 존재하지 않습니다.'}
                        </Typography>
                        <Typography variant="body2">
                          수정일자 :{' '}
                          {item?.updatedAt
                            ? moment(item?.updatedAt).format(DATE.DATETIME)
                            : '수정 이력이 존재하지 않습니다.'}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        {deleteMode ? (
                          <>
                            <Stack textAlign={'right'} sx={{ mt: 2 }}>
                              <div>
                                <Button
                                  variant="contained"
                                  sx={{ ml: 3, mr: 3 }}
                                  size="small"
                                  color="error"
                                  onClick={() =>
                                    handleClickOpenDelete(item?.key)
                                  }
                                >
                                  삭제
                                </Button>
                              </div>
                            </Stack>
                          </>
                        ) : (
                          <></>
                        )}
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </>
        )
      })}

      <Fragment>
        <Dialog
          open={openAdd}
          onClose={handleCloseAdd}
          aria-labelledby="customized-dialog-title"
          sx={{ '& .MuiPaper-root': { overflow: 'visible' } }}
        >
          <DialogTitle
            id="customized-dialog-title"
            sx={{ position: 'relative' }}
          >
            <Typography variant="h6" component="span">
              전역 데이터 추가
            </Typography>
            <CustomCloseButton
              size="small"
              aria-label="close"
              onClick={handleCloseAdd}
            >
              <Icon icon="bx:x" />
            </CustomCloseButton>
          </DialogTitle>
          <DialogContent>
            <Stack>
              <TextField
                id="outlined-basic"
                label="키"
                size="small"
                onChange={(e) => handleChangeAddData('key', e)}
                value={addData.key}
              />
            </Stack>
            <Stack sx={{ mt: 5 }}>
              <TextField
                id="outlined-basic"
                label="값"
                size="small"
                onChange={(e) => handleChangeAddData('value', e)}
                value={addData.value}
              />
            </Stack>
            <Stack sx={{ mt: 5 }}>
              <TextField
                id="outlined-basic"
                label="메모"
                size="small"
                onChange={(e) => handleChangeAddData('memo', e)}
                value={addData.memo}
              />
            </Stack>
            <Stack sx={{ mt: 3 }}>
              <Typography variant="body2">
                추가 버튼 클릭 시 데이터베이스에 바로 반영됩니다.
              </Typography>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClickAdd}>
              추가
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>

      <Fragment>
        <Dialog
          open={openSave}
          onClose={handleCloseSave}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">저장</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              현재 내용으로 저장하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseSave}
            >
              취소
            </Button>
            <Button variant="contained" onClick={handleClickSave}>
              저장
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>

      <Fragment>
        <Dialog
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">삭제</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              전역 데이터를 삭제하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseDelete}
            >
              취소
            </Button>
            <Button
              variant="contained"
              onClick={handleClickDelete}
              color="error"
            >
              삭제
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </>
  )
}

export default Settings
