import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import DeleteConfirmModal from './delete-confirm-modal'
import EditModal from './edit-modal'
import DetailModal from './\bdetail-modal'

const ActionContainer = ({ id }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const rowOptionsOpen = Boolean(anchorEl)

  // 상세 모달
  const [openDetailModal, setOpenDetailModal] = useState<boolean>(false)

  // 삭제 모달
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] =
    useState<boolean>(false)

  // 수정 모달
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)

  // ** Handler
  // 액션 컨트롤
  const handleRowOptionsClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // 액션 닫기
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <Icon icon="bx:dots-vertical-rounded" />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component="a"
          sx={{ '& svg': { mr: 2 } }}
          onClick={() => {
            setOpenDetailModal(true)
            handleRowOptionsClose()
          }}
        >
          <Icon icon="bx:show" fontSize={20} />
          상세
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenEditModal(true)
            handleRowOptionsClose()
          }}
          sx={{ '& svg': { mr: 2 } }}
        >
          <Icon icon="bx:pencil" fontSize={20} />
          수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenDeleteConfirmModal(true)
            handleRowOptionsClose()
          }}
          sx={{ '& svg': { mr: 2 } }}
        >
          <Icon icon="bx:trash-alt" fontSize={20} />
          삭제
        </MenuItem>
      </Menu>

      {/* 상세 모달 */}
      <DetailModal
        openDetailModal={openDetailModal}
        setOpenDetailModal={setOpenDetailModal}
      />

      {/* 수정 모달 */}
      <EditModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />

      {/* 삭제 확인 모달 */}
      <DeleteConfirmModal
        openDeleteConfirmModal={openDeleteConfirmModal}
        setOpenDeleteConfirmModal={setOpenDeleteConfirmModal}
      />
    </>
  )
}

export default ActionContainer
