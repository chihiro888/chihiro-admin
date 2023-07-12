// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Box
} from '@mui/material'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

// ** Local components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Apis
import { upload } from 'src/apis/image'

// ** Lottie
import CustomLottie from 'src/components/custom/custom-lottie'
import * as uploadLottie from 'src/lottie/upload.json'

// ** Utils
import { formatBytes } from 'src/utils'

interface FileProp {
  name: string
  type: string
  size: number
}

const List = () => {
  // ** State
  const [files, setFiles] = useState<File[]>([])
  const [memo, setMemo] = useState('')

  // ** Hooks
  const { t } = useTranslation()
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  // ** Handler
  const handleClickSend = async () => {
    try {
      const formData = new FormData()
      formData.append('note', memo)
      formData.append('files', files[0])
      const { data: res } = await upload(formData)
      if (res.statusCode === 200) {
        toast.success(t(res.message))
        setMemo('')
        setFiles([])
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  return (
    <>
      <PageHeader
        title={<Typography variant="h5">이미지 등록</Typography>}
        subtitle={
          <Typography variant="body2">이미지를 등록할 수 있습니다.</Typography>
        }
      />

      <Card sx={{ mt: 5 }}>
        <CardContent>
          <Grid>
            <CardContent>
              <Box {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {files.length ? (
                  <Box sx={{}}>
                    {files.map((file: FileProp, idx: number) => {
                      return (
                        <Box key={idx}>
                          <Grid container spacing={5}>
                            <Grid item xs={12} md={6} textAlign="center">
                              <img
                                key={file.name}
                                alt={file.name}
                                className="single-file-image"
                                src={URL.createObjectURL(file as any)}
                                style={{ height: '150px' }}
                              />
                            </Grid>
                            <Grid item xs={12} md={6} textAlign="center">
                              <Typography variant="body2">파일명</Typography>
                              <Typography>{file.name}</Typography>
                              <Typography variant="body2" sx={{ mt: 2 }}>
                                파일타입
                              </Typography>
                              <Typography>{file.type}</Typography>
                              <Typography variant="body2" sx={{ mt: 2 }}>
                                파일크기
                              </Typography>
                              <Typography>{formatBytes(file.size)}</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      )
                    })}
                  </Box>
                ) : (
                  <Box>
                    <CustomLottie
                      data={uploadLottie}
                      text=""
                      width={100}
                      height={100}
                    />
                    <Box textAlign={'center'} sx={{ mt: 3 }}>
                      <Typography variant="subtitle1">파일 업로드</Typography>
                      <Typography variant="subtitle2">
                        파일을 드래그 하거나 컴포넌트를 클릭한 후 파일 탐색기를
                        열어 파일 업로드
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mt: 5 }}>
        <CardContent>
          <Box>
            <TextField
              id="outlined-basic"
              label="메모"
              value={memo}
              onChange={(e) => {
                setMemo(e.target.value)
              }}
              fullWidth
            />
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ mt: 5 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Grid item>
            <Button variant="contained" onClick={handleClickSend}>
              등록
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default List
