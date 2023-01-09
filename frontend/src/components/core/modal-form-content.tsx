// ** Module
import { useState } from 'react'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'


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

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import dynamic from 'next/dynamic'
import CustomFileUploader from './custom-file-uploader'

const ModalFormContent = ({ formContent, handleChangeForm }) => {

	// Next js react draft Editor Window error
	// reference: https://github.com/jpuri/react-draft-wysiwyg/issues/893
	const Editor = dynamic(
		() => import('react-draft-wysiwyg').then(mod => mod.Editor),
		{ ssr: false })
		
  // ** State
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  // ** Handler
  // editor 수정 이벤트
  const onEditorStateChange = (key, data) => {
    const rawContentState = draftToHtml(convertToRaw(data.getCurrentContent()))
    setEditorState(data)
    handleChangeForm(key, rawContentState)
  }


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
                  {item.type === 'editor' ? (
                    <>
                      <Typography variant="subtitle1" sx={{ mb: 2 }}>
                        {item.label}
                      </Typography>
                      <EditorWrapper>
                        <Editor
                          editorState={editorState}
                          onEditorStateChange={(data) =>
                            onEditorStateChange(item.key, data)
                          }
                        />
                      </EditorWrapper>
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
                          <CustomFileUploader handleChangeForm={handleChangeForm} item={item} />
                        </Grid>
                      </DropzoneWrapper>
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
