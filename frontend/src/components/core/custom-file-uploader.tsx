// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { formatBytes } from 'src/utils'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'
import { useDropzone } from 'react-dropzone'
import { upload } from 'src/apis/image'
import CustomLottie from '../custom/custom-lottie'
import * as uploadLottie from 'src/lottie/upload.json'

interface FileProp {
  name: string
  type: string
  size: number
}

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  width: 200,
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

const CustomFileUploader = ({ handleChangeForm, item }) => {
  // ** State
  const [files, setFiles] = useState([])

  // ** Hooks
  const theme = useTheme()

  const initData = () => {
    setFiles(item.value)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (item.value[0]?.id) {
      setFiles(item.value)
      handleChangeForm(
        item.key,
        item.value.map((file) => file.id)
      )
    }
  }, [item.value])

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: item.maxFileCount,
    maxSize: item.maxFileSizeBytes,
    accept: {
      'image/*': item.allowFileExt
    },
    onDrop: async (acceptedFiles: File[]) => {
      const formData = new FormData()

      for (const file of acceptedFiles) {
        formData.append('files', file)
      }
      const { data: res } = await upload(formData)

      setFiles(res.data)
      handleChangeForm(
        item.key,
        res.data.map((file) => file.id)
      )
    },
    onDropRejected: () => {
      toast.error(
        `최대 ${item.maxFileCount}개의 파일과  ${formatBytes(
          item.maxFileSizeBytes
        )}까지 업로드하실 수 있습니다.`,
        {
          duration: 2000
        }
      )
    }
  })

  const renderFilePreview = (file) => {
    if (
      file.extension == 'png' ||
      file.extension == 'jpg' ||
      file.extension == 'gif'
    ) {
      return <img width={38} height={38} src={file.url} />
    } else {
      return <Icon icon="bx:file" />
    }
  }

  const handleRemoveFile = (file) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i) => i.rawName !== file.rawName)
    setFiles([...filtered])
    handleChangeForm(
      item.key,
      filtered.map((file) => file.id)
    )
  }

  const fileList = files.map((file) => (
    <ListItem key={file.name}>
      <div className="file-details">
        <div className="file-preview">{renderFilePreview(file)}</div>
        <div>
          <Typography className="file-name">{file.rawName}</Typography>
          <Typography className="file-size" variant="body2">
            {formatBytes(file.size)}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon
          icon="material-symbols:close"
          fontSize={20}
          color="rgba(50, 71, 92, 0.87)"
        />
      </IconButton>
    </ListItem>
  ))

  return (
    <Fragment>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Box>
          <CustomLottie data={uploadLottie} text="" />
          <Box textAlign={'center'} sx={{ mt: 3 }}>
            <Typography variant="subtitle1">파일 업로드</Typography>
            <Typography variant="subtitle2">
              파일을 드래그 하거나 컴포넌트를 클릭한 후 파일 탐색기를 열어 파일
              업로드
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              허용되는 확장자 : {item.allowFileExt.join(' ')}
            </Typography>
            <Typography variant="subtitle2">
              최대 {item.maxFileCount}개의 파일과{' '}
              {formatBytes(item.maxFileSizeBytes)}까지 업로드하실 수 있습니다.
            </Typography>
          </Box>
        </Box>
      </div>
      {files.length ? (
        <Fragment>
          <List>{fileList}</List>
        </Fragment>
      ) : null}
    </Fragment>
  )
}

export default CustomFileUploader
