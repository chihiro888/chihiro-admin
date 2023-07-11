// ** Module
import { useEffect } from 'react'

// ** Mui
import Grid from '@mui/material/Grid'
import DialogContentText from '@mui/material/DialogContentText'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// ** Component Import

import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import CustomFileUploader from './custom-file-uploader'
import { initEditForm } from 'src/store/apps/crud'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import React from 'react'
import ToastEditor from 'src/@core/components/tui-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Chip, Divider } from '@mui/material'

const ModalFormContent = ({ formContent, handleChangeForm }) => {
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)

  const actionId = crud.actionId
  const loadAPI = crud.loadAPI

  // ** Handler
  // editor 수정 이벤트
  const onEditorChange = (key, value) => {
    handleChangeForm(key, value)
  }

  // 폼 데이터 로드
  const initData = async () => {
    const params = { id: actionId }
    try {
      const { data: res } = await loadAPI(params)
      const data = res.data
      dispatch(initEditForm(data))
    } catch (err) {
      console.log('err =>', err)
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <DialogContentText id="alert-dialog-description">
        {formContent.map((item, idx) => {
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
                        fullWidth
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  {item.type === 'textarea' ? (
                    <>
                      <TextField
                        id="outlined-basic"
                        label={item.label}
                        value={item.value}
                        multiline
                        rows={item.rows}
                        onChange={(e) =>
                          handleChangeForm(item.key, e.target.value)
                        }
                        fullWidth
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  {item.type === 'number' ? (
                    <>
                      <TextField
                        id="outlined-number"
                        type="number"
                        InputLabelProps={{
                          shrink: true
                        }}
                        label={item.label}
                        value={item.value}
                        onChange={(e) =>
                          handleChangeForm(item.key, e.target.value)
                        }
                        fullWidth
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
                        fullWidth
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  {item.type === 'select' ? (
                    <>
                      <FormControl style={{ width: '100%' }}>
                        <InputLabel id={item.label}>{item.label}</InputLabel>
                        <Select
                          label={item.label}
                          value={item.value}
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
                  {item.type === 'editor' ? (
                    <>
                      <Typography variant="subtitle1" sx={{ mb: 2 }}>
                        {item.label}
                      </Typography>
                      <ToastEditor
                        initialValue={item.value}
                        onChange={(value) => onEditorChange(item.key, value)}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  {item.type === 'upload' ? (
                    <>
                      <Typography variant="subtitle1" sx={{ mb: 2 }}>
                        {item.label}
                      </Typography>
                      <DropzoneWrapper>
                        <Grid item xs={12}>
                          <CustomFileUploader
                            handleChangeForm={handleChangeForm}
                            item={item}
                          />
                        </Grid>
                      </DropzoneWrapper>
                    </>
                  ) : (
                    <></>
                  )}
                  {item.type === 'line' ? (
                    <>
                      <Divider sx={item.sx}>
                        {item.chip ? (
                          <Chip
                            label={item.label}
                            color="primary"
                            style={{ fontSize: 16, fontWeight: 'bold' }}
                          />
                        ) : (
                          <Typography
                            style={{ fontSize: 16, fontWeight: 'bold' }}
                          >
                            {item.label}
                          </Typography>
                        )}
                      </Divider>
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
    </>
  )
}

export default ModalFormContent
