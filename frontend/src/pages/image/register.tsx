// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled /*, useTheme*/ } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField
} from '@mui/material'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

// ** Local components Imports
import PageHeader from 'src/@core/components/page-header'
import { upload } from 'src/apis/image'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import CustomLottie from 'src/components/custom-lottie'
import * as uploadLottie from 'src/lottie/upload.json'

interface FileProp {
  name: string
  type: string
  size: number
}

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  width: 300,
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(15.75)
  },
  [theme.breakpoints.down('md')]: {
    width: 250,
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 200
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const List = () => {
  // ** State
  const [files, setFiles] = useState<File[]>([])
  const [memo, setMemo] = useState('')

  // ** Hook
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

  const img = files.map((file: FileProp) => (
    <img
      key={file.name}
      alt={file.name}
      className="single-file-image"
      src={URL.createObjectURL(file as any)}
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
  ))

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
              <Box
                {...getRootProps({ className: 'dropzone' })}
                sx={files.length ? { minHeight: 241 } : {}}
              >
                <input {...getInputProps()} />
                {files.length ? (
                  <Box
                    sx={{
                      height: 241,
                      display: 'flex',
                      flexDirection: ['column', 'column', 'row'],
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {img}
                  </Box>
                ) : (
                  <Box>
                    <CustomLottie data={uploadLottie} text="" />
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
