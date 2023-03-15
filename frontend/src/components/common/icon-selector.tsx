import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseIconSelector,
  setIconList,
  setIconText,
  setSelectedIcon
} from 'src/store/apps/icon'
import CustomDialogTitle from '../custom-dialog-title'
import Icon from 'src/@core/components/icon'
import CustomLottie from '../custom-lottie'
import * as iconLottie from 'src/lottie/icon.json'

const IconSelector = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const icon = useSelector((state: RootState) => state.icon)
  const { openIconSelector, iconList, iconText } = icon

  const handleClickSearch = async () => {
    try {
      const { data: res } = await axios.get(
        `https://api.iconify.design/search?query=${iconText}&limit=100`
      )
      dispatch(setIconList(res.icons))
    } catch (e) {
      //
    }
  }

  const handleSelectIcon = (icon: string) => {
    // 아이콘 선택
    dispatch(setSelectedIcon(icon))

    // 모달 닫기
    dispatch(hCloseIconSelector())
  }

  return (
    <>
      {/* 액션 폼 편집 */}
      <Dialog open={openIconSelector}>
        <CustomDialogTitle
          title="아이콘 선택"
          onClose={() => {
            dispatch(hCloseIconSelector())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <TextField
                label="아이콘"
                fullWidth
                size="small"
                value={iconText}
                onChange={(e) => {
                  dispatch(setIconText(e.target.value))
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="outlined" onClick={handleClickSearch}>
                검색
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }}>
            {iconList.length === 0 && (
              <CustomLottie data={iconLottie} text="" />
            )}
            {iconList.map((icon, idx) => {
              return (
                <Box
                  key={idx}
                  sx={{
                    border: 0,
                    boxShadow: 0,
                    color: '#707070',
                    backgroundColor: '#f6f6f8',
                    mb: 1,
                    p: 2,
                    borderRadius: 1,
                    cursor: 'pointer'
                  }}
                  onClick={() => handleSelectIcon(icon)}
                >
                  <Grid container spacing={2}>
                    <Grid item>
                      <Icon icon={icon} />
                    </Grid>
                    <Grid item>{icon}</Grid>
                  </Grid>
                </Box>
              )
            })}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default IconSelector
