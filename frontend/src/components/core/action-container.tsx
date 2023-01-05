import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import DeleteConfirmModal from './delete-confirm-modal'
import EditModal from './edit-modal'
import DetailModal from './\bdetail-modal'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const ActionContainer = ({ id }) => {
  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const actionForm = crud.actionForm

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState([])
  const [load, setLoad] = useState()
  const [update, setUpdate] = useState()

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
          onClick={() => {
            setOpenDetailModal(true)
            handleRowOptionsClose()
          }}
          sx={{ '& svg': { mr: 2 } }}
        >
          <Icon icon="bx:show" fontSize={20} />
          상세
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
        {actionForm.map((item, idx) => {
          return (
            <>
              <MenuItem
                key={idx}
                onClick={() => {
                  // setTitle(item.label)
                  // setContent(item.content)
                  // setLoad(item.load)
                  // setUpdate(() => item.update)
                  // setOpenEditModal(true)
                  // handleRowOptionsClose()
                }}
                sx={{ '& svg': { mr: 2 } }}
              >
                <Icon icon={item.icon} fontSize={20} />
                {item.label}
              </MenuItem>
            </>
          )
        })}
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
        title={title}
        content={content}
        setContent={setContent}
        update={update}
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
