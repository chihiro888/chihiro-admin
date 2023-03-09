import produce from 'immer'
import { Box, Button } from '@mui/material'
import ActionItem from '../item/action-item'
import { ReactSortable } from 'react-sortablejs'
import { updateState } from 'src/store/apps/page'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'
import { useEffect } from 'react'

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

  // 순서 보장
  useEffect(() => {
    const nextState = produce(list, (draftState) => {
      for (let i = 0; i < draftState.length; i++) {
        const item = draftState[i]
        item.order = i
      }
    })
    dispatch(updateState({ key: 'actionList', value: nextState }))
  }, [dispatch, list])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 10 }}>
        <Button variant="contained" color="primary">
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
          {list.map((actionItem, idx) => {
            return (
              <ActionItem
                key={idx}
                id={actionItem.id}
                order={actionItem.order}
                icon={actionItem.icon}
                label={actionItem.label}
                loadAPI={actionItem.loadAPI}
                updateAPI={actionItem.updateAPI}
              />
            )
          })}
        </ReactSortable>
      </Box>
    </>
  )
}

export default ActionManager
