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
      formData.append('file', files[0])
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
          <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardContent
              sx={{ border: '2px dashed grey', borderRadius: 3, width: '100%' }}
            >
              <Box
                {...getRootProps({ className: 'dropzone' })}
                sx={files.length ? { minHeight: 450 } : {}}
              >
                <input {...getInputProps()} />
                {files.length ? (
                  img
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: ['column', 'column', 'row'],
                      alignItems: 'center',
                      justifyContent: 'center',
                      pt: 5,
                      pb: 5
                    }}
                  >
                    <Img alt="Upload img" src="/images/misc/upload-light.png" />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: ['center', 'center', 'inherit']
                      }}
                    >
                      <HeadingTypography variant="h5">
                        파일을 드래그 또는 클릭하여 업로드 하세요.
                      </HeadingTypography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          '& a': {
                            color: 'primary.main',
                            textDecoration: 'none'
                          }
                        }}
                      >
                        드래그 또는 클릭하여 파일 탐색기를 열어 파일 찾기
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Grid>
          <Stack sx={{ mt: 5 }}>
            <TextField
              id="outlined-basic"
              label="메모"
              value={memo}
              onChange={(e) => {
                setMemo(e.target.value)
              }}
              fullWidth
            />
          </Stack>
        </CardContent>
      </Card>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          sx={{ pt: 3 }}
        >
          <Grid item>
            <Button variant="contained" onClick={handleClickSend}>
              등록
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default List
