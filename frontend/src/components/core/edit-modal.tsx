import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import EditConfirmModal from './edit-confirm-modal'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import produce from 'immer'

const EditModal = ({
  openEditModal,
  setOpenEditModal,
  title,
  content,
  setContent,
  update
}) => {
  // ** State
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)

  // ** Handler
  // 확인 모달 열기
  const handleClickOpenConfirmModal = () => setOpenConfirmModal(true)

  // 확인 모달 닫기
  const handleClickCloseConfirmModal = () => setOpenConfirmModal(false)

  // 폼 데이터 변경
  const handleChangeForm = (key: string, value: string) => {
    const nextState = produce(content, (draftState) => {
      draftState.map((item) => {
        if (item.key === key) {
          item.value = value
        }
      })
    })
    setContent(nextState)
  }

  return (
    <>
      <Dialog
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content.map((item, idx) => {
              return (
                <>
                  <Stack key={idx} sx={{ mb: 3 }}>
                    <div>
                      {item.type === 'text' ? (
                        <>
                          <TextField
                            id="outlined-basic"
                            label={item.label}
                            value={item.value}
                            onChange={(e) =>
                              handleChangeForm(item.key, e.target.value)
                            }
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {item.type === 'password' ? (
                        <>
                          <TextField
                            id="outlined-basic"
                            type="password"
                            label={item.label}
                            value={item.value}
                            onChange={(e) =>
                              handleChangeForm(item.key, e.target.value)
                            }
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {item.type === 'select' ? (
                        <>
                          <FormControl style={{ width: '100%' }}>
                            <InputLabel id={item.label}>
                              {item.label}
                            </InputLabel>
                            <Select
                              label={item.label}
                              defaultValue=""
                              id={item.label}
                              labelId={item.label}
                              style={{ width: '100%' }}
                              onChange={(e) =>
                                handleChangeForm(item.key, e.target.value)
                              }
                            >
                              {item.list.map((item, idx) => {
                                return (
                                  <MenuItem key={idx} value={item.value}>
                                    {item.label}
                                  </MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Stack>
                </>
              )
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setOpenEditModal(false)
            }}
          >
            취소
          </Button>
          <Button variant="contained" onClick={() => update()}>
            수정
          </Button>
        </DialogActions>
      </Dialog>

      <EditConfirmModal
        openConfirmModal={openConfirmModal}
        handleClickCloseConfirmModal={handleClickCloseConfirmModal}
      />
    </>
  )
}

export default EditModal
