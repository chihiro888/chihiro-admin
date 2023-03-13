import produce from 'immer'
import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import ActionItem from '../item/action-item'
import { ReactSortable } from 'react-sortablejs'
import {
  hOpenActionController,
  setClearActionInput,
  setClearInput,
  updateState
} from 'src/store/apps/page'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

interface Item {
  id: number
  order: number
  icon: string
  label: string
  loadAPI: string
  updateAPI: string
  content: any
}
interface Props {
  list: Item[]
}

const ActionManager = ({ list }: Props) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { editModeAction, deleteModeAction } = page

  // 순서 보장
  useEffect(() => {
    const nextState = produce(list, (draftState) => {
      for (let i = 0; i < draftState.length; i++) {
        const item = draftState[i]
        item.order = i
      }
    })
    dispatch(updateState({ key: 'actionList', value: nextState }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 10 }}>
        <FormControlLabel
          control={
            <Switch
              color="error"
              value={deleteModeAction}
              onClick={(e: any) => {
                dispatch(
                  updateState({
                    key: 'deleteModeAction',
                    value: e.target.checked
                  })
                )
              }}
            />
          }
          label="삭제모드"
        />
        <FormControlLabel
          control={<Switch />}
          label="수정모드"
          value={editModeAction}
          onClick={(e: any) => {
            dispatch(
              updateState({ key: 'editModeAction', value: e.target.checked })
            )
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(setClearActionInput())
            dispatch(hOpenActionController())
          }}
        >
          추가
        </Button>
      </Box>

      <Box>
        <ReactSortable
          list={list.map((x) => ({ ...x, chosen: true }))}
          setList={(newState) =>
            dispatch(updateState({ key: 'actionList', value: newState }))
          }
          animation={200}
        >
          {list.map((action, idx) => {
            return <ActionItem key={idx} order={action.order} action={action} />
          })}
        </ReactSortable>
      </Box>
    </>
  )
}

export default ActionManager
