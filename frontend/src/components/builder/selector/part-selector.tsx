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
import { closePartSelector } from 'src/store/apps/page'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useState } from 'react'

const PartSelector = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openPartSelector } = page

  // ** State
  const searchPartList = [
    {
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    },
    {
      icon: 'mdi:alpha-s-box-outline',
      title: 'Select Box'
    },
    {
      icon: 'system-uicons:calendar-date',
      title: 'Date Picker'
    }
  ]

  const addPartList = [
    {
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    },
    {
      icon: 'mdi:number-1-circle-outline',
      title: 'Number Field'
    },
    {
      icon: 'bi:textarea-t',
      title: 'Text Area'
    },
    {
      icon: 'mdi:password',
      title: 'Password Field'
    },
    {
      icon: 'material-symbols:upload-file-sharp',
      title: 'Upload'
    },
    {
      icon: 'material-symbols:edit-document-outline',
      title: 'Editor'
    },
    {
      icon: 'mdi:alpha-s-box-outline',
      title: 'Select Box'
    },
    {
      icon: 'material-symbols:line-end',
      title: 'Line'
    }
  ]

  const detailPartList = [
    {
      icon: 'mdi:alpha-t-box-outline',
      title: 'Text Field'
    }
  ]

  const [partList, setPartList] = useState(addPartList)

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openPartSelector}>
        <CustomDialogTitle
          title="부품 선택"
          onClose={() => {
            dispatch(closePartSelector())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          {partList.map((part, index) => {
            return (
              <>
                <Card
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
