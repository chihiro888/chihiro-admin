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
      </Box>
    </>
  )
}

export default ActionManager
