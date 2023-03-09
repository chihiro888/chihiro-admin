import { Box, Button } from '@mui/material'
import ActionItem from '../item/action-item'

const ActionManager = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 10 }}>
        <Button variant="contained" color="primary">
          추가
        </Button>
      </Box>

      <Box>
        <ActionItem
          icon="bx:user-circle"
          label="프로필 변경"
          loadAPI="getUserDetail"
          updateAPI="updateUserProfile"
        />

        <ActionItem
          icon="bx:user-circle"
          label="자기소개 변경"
          loadAPI="getUserDetail"
          updateAPI="updateUserIntro"
        />

        <ActionItem
          icon="bx:pencil"
          label="비밀번호 변경"
          loadAPI="null"
          updateAPI="updateUserPassword"
        />

        <ActionItem
          icon="bx:pencil"
          label="사용자명 변경"
          loadAPI="getUserDetail"
          updateAPI="updateUserUsername"
        />

        <ActionItem
          icon="bx:pencil"
          label="권한 변경"
          loadAPI="getUserDetail"
          updateAPI="updateUserRole"
        />
      </Box>
    </>
  )
}

export default ActionManager
