// ** React Imports
import { useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import { formatBytes } from 'src/utils'
import toast from 'react-hot-toast'

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

const CustomFileUploaderSingle = ({ maxFileSizeBytes, allowFileExt }) => {
  // ** State
  const [files, setFiles] = useState<File[]>([])

  // ** Hook
  const theme = useTheme()
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: maxFileSizeBytes,
    accept: {
      'image/*': allowFileExt
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    },
    onDropRejected: () => {
      toast.error(
        ` ${formatBytes(maxFileSizeBytes)}까지 업로드하실 수 있습니다.`,
        {
          duration: 2000
        }
      )
    }
  })

  const handleLinkClick = (event: SyntheticEvent) => {
    event.preventDefault()
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
    <Box
      {...getRootProps({ className: 'dropzone' })}
      sx={acceptedFiles.length ? { height: 450 } : {}}
    >
      <input {...getInputProps()} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          alignItems: 'center'
        }}
      >
        <Img
          alt="Upload img"
          src={`/images/misc/upload-${theme.palette.mode}.png`}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: ['center', 'center', 'inherit']
          }}
        >
          <HeadingTypography variant="h6">
            파일을 드롭다운 하거나 클릭하여 파일을 업로드 하십시오.
          </HeadingTypography>
          <Typography color="textSecondary">
            허용되는 확장자 : <br />
            {allowFileExt.join(' ')}
          </Typography>
          <Typography color="textSecondary">
            <br />
            파일은 최대 {formatBytes(maxFileSizeBytes)}까지 업로드하실 수
            있습니다.
          </Typography>
        </Box>
      </Box>
      {files.length ? img : null}
    </Box>
  )
}

export default CustomFileUploaderSingle
