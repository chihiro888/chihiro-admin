// ** React Imports
import { Fragment, useState } from 'react'

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
  const [files, setFiles] = useState<File[]>([])

  // ** Hooks
  const theme = useTheme()
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: item.maxFileCount,
    maxSize: item.maxFileSizeBytes,
    accept: {
      'image/*': item.allowFileExt
    },
    onDrop: (acceptedFiles: File[]) => {
      
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
      handleChangeForm(item.key, acceptedFiles.map((file: File) => Object.assign(file)))


    },
    onDropRejected: () => {
      toast.error(`최대 ${item.maxFileCount}개의 파일과  ${formatBytes(item.maxFileSizeBytes)}까지 업로드하실 수 있습니다.`, {
        duration: 2000
      })
    }
  })

  const renderFilePreview = (file: FileProp) => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
    } else {
      return <Icon icon='bx:file' />
    }
  }

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)
    setFiles([...filtered])
    handleChangeForm(item.key, [...filtered])
  }

  const fileList = files.map((file: FileProp) => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {formatBytes(file.size)}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon='material-symbols:close' fontSize={20} color='rgba(50, 71, 92, 0.87)' />
      </IconButton>
    </ListItem>
  ))

//   const handleRemoveAllFiles = () => {
//     setFiles([])
//   }

  return (
    <Fragment>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
          <Img alt='Upload img' src={`/images/misc/upload-${theme.palette.mode}.png`} />
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
            <HeadingTypography variant='h6'>파일을 드롭다운 하거나 클릭하여 파일을 업로드 하십시오.</HeadingTypography>
            <Typography color='textSecondary'>허용되는 확장자 : <br/>{item.allowFileExt.join(' ')}</Typography>
            <Typography color='textSecondary'><br />최대 {item.maxFileCount}개의 파일과 {formatBytes(item.maxFileSizeBytes)}까지 업로드하실 수 있습니다.</Typography>
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
