import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hClosePartSelector,
  hOpenDefaultPart,
  hOpenLinePart,
  hOpenSelectPart,
  hOpenTextareaPart,
  hOpenUploadPart
} from 'src/store/apps/page'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useEffect, useState } from 'react'

const PartSelector = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openPartSelector, partType } = page

  // ** State
  const searchPartList = [
    {
      type: 'text',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    },
    {
      type: 'select',
      icon: 'mdi:alpha-s-box-outline',
      title: 'Select Box'
    },
    {
      type: 'date',
      icon: 'system-uicons:calendar-date',
      title: 'Date Picker'
    }
  ]

  const addPartList = [
    {
      type: 'text',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    },
    {
      type: 'number',
      icon: 'mdi:number-1-circle-outline',
      title: 'Number Field'
    },
    {
      type: 'textarea',
      icon: 'bi:textarea-t',
      title: 'Text Area'
    },
    {
      type: 'password',
      icon: 'mdi:password',
      title: 'Password Field'
    },
    {
      type: 'upload',
      icon: 'material-symbols:upload-file-sharp',
      title: 'Upload'
    },
    {
      type: 'editor',
      icon: 'material-symbols:edit-document-outline',
      title: 'Editor'
    },
    {
      type: 'select',
      icon: 'mdi:alpha-s-box-outline',
      title: 'Select Box'
    },
    {
      type: 'line',
      icon: 'material-symbols:line-end',
      title: 'Line'
    }
  ]

  const detailPartList = [
    {
      type: 'text',
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    }
  ]

  const [partList, setPartList] = useState([])

  // 파츠 목록 초기화
  useEffect(() => {
    if (partType === 'add') setPartList(addPartList)
    else if (partType === 'search') setPartList(searchPartList)
    else if (partType === 'detail') setPartList(detailPartList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partType])

  return (
    <>
      <Dialog open={openPartSelector}>
        <CustomDialogTitle
          title="부품 선택"
          onClose={() => {
            dispatch(hClosePartSelector())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          {partList.map((part, index) => {
            return (
              <>
                <Card
                  key={index}
                  onClick={() => {
                    const defaultCondition =
                      part.type === 'text' ||
                      part.type === 'number' ||
                      part.type === 'password' ||
                      part.type === 'editor' ||
                      part.type === 'text' ||
                      part.type === 'date'
                    const lineCondition = part.type === 'line'
                    const selectCondition = part.type === 'select'
                    const uploadCondition = part.type === 'upload'
                    const textareaCondition = part.type === 'textarea'

                    if (defaultCondition) {
                      dispatch(hOpenDefaultPart())
                    } else if (lineCondition) {
                      dispatch(hOpenLinePart())
                    } else if (selectCondition) {
                      dispatch(hOpenSelectPart())
                    } else if (uploadCondition) {
                      dispatch(hOpenUploadPart())
                    } else if (textareaCondition) {
                      dispatch(hOpenTextareaPart())
                    }
                  }}
                  sx={{
                    border: 0,
                    boxShadow: 0,
                    color: 'common.white',
                    backgroundColor: 'primary.main',
                    mb: 5,
                    cursor: 'pointer'
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'common.white',
                        '& svg': { mr: 2.5 }
                      }}
                    >
                      <Icon icon={part.icon} />
                      {part.title}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            )
          })}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PartSelector
