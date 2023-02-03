import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import DeleteConfirmModal from './delete-confirm-modal'
import EditModal from './edit-modal'
import DetailModal from './detail-modal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import produce from 'immer'
import {
  setActionForm,
  setActionId,
  setDetailForm,
  setUpdateAPI
} from 'src/store/apps/crud'

const ActionContainer = ({ id, detailAction, deleteAction }) => {
  // ** Hooks
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const actionList = crud.actionList
  const detailForm = crud.detailForm
  const detailAPI = crud.detailAPI

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const rowOptionsOpen = Boolean(anchorEl)

  // 수정 모달 제목
  const [title, setTitle] = useState('')

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

  // 상세 열기
  const handleClickDetail = async () => {
    // 상세 API 호출
    const params = {
      id
    }
    const { data: res } = await detailAPI(params)
    const data = res.data

    // 데이터 매핑
    const nextState = produce(detailForm, (draftState) => {
      draftState.map((item) => {
        item.value = data[item.key]
      })
    })

    // 리덕스 상태 수정
    dispatch(setDetailForm(nextState))

    // 상세 모달 열기
    setOpenDetailModal(true)

    // 액셕 메뉴 닫기
    handleRowOptionsClose()
  }

  // 삭제 열기
  const handleClickDelete = async () => {
    // 액션에 해당하는 PK 설정
    dispatch(setActionId({ actionId: id }))

    // 삭제 확인 모달 열기
    setOpenDeleteConfirmModal(true)

    // 액셕 메뉴 닫기
    handleRowOptionsClose()
  }

  // 수정 열기
  const handleClickEdit = async (action) => {
    // 수정 모달 제목
    setTitle(action.label)

    // 액션에 해당하는 PK 설정
    dispatch(setActionId({ actionId: id }))

    // 수정 API 설정
    dispatch(setUpdateAPI(action.updateAPI))

    // 수정 폼 설정
    dispatch(setActionForm(action.content))

    // 수정 모달 열기
    setOpenEditModal(true)

    // 액셕 메뉴 닫기
    handleRowOptionsClose()
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
        {detailAction ? (
          <MenuItem onClick={handleClickDetail} sx={{ '& svg': { mr: 2 } }}>
            <Icon icon="bx:show" fontSize={20} />
            상세
          </MenuItem>
        ) : (
          []
        )}

        {deleteAction ? (
          <MenuItem onClick={handleClickDelete} sx={{ '& svg': { mr: 2 } }}>
            <Icon icon="bx:trash-alt" fontSize={20} />
            삭제
          </MenuItem>
        ) : (
          []
        )}

        {actionList.map((item, idx) => {
          return (
            <MenuItem
              key={idx}
              onClick={() => handleClickEdit(item)}
              sx={{ '& svg': { mr: 2 } }}
            >
              <Icon icon={item.icon} fontSize={20} />
              {item.label}
            </MenuItem>
          )
        })}
      </Menu>

      {/* 상세 모달 */}
      <DetailModal
        openDetailModal={openDetailModal}
        setOpenDetailModal={setOpenDetailModal}
      />

      {/* 삭제 확인 모달 */}
      <DeleteConfirmModal
        openDeleteConfirmModal={openDeleteConfirmModal}
        setOpenDeleteConfirmModal={setOpenDeleteConfirmModal}
      />

      {/* 수정 모달 */}
      <EditModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        title={title}
      />
    </>
  )
}

export default ActionContainer
