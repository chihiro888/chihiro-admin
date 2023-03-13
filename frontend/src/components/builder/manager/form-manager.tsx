import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import produce from 'immer'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ReactSortable } from 'react-sortablejs'
import { AppDispatch, RootState } from 'src/store'
import { hOpenPartSelector, updateState } from 'src/store/apps/page'
import DefaultItem from '../item/default-item'

interface Item {
  id: number
  order: number
  type: string
  key: string
  label: string
  value: string
  list?: any
  allowFileExt?: string[]
  maxFileCount?: number
  maxFileSizeBytes?: number
  chip?: boolean
  sx?: any
}
interface Props {
  _key: string // 예약어 회피
  list: Item[]
}

const FormManager = ({ _key, list }: Props) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { editMode, deleteMode } = page

  // 순서 보장
  useEffect(() => {
    const nextState = produce(list, (draftState) => {
      for (let i = 0; i < draftState.length; i++) {
        const item = draftState[i]
        item.order = i
      }
    })
    dispatch(updateState({ key: _key, value: nextState }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 10 }}>
        <FormControlLabel
          control={
            <Switch
              color="error"
              value={deleteMode}
              onClick={(e: any) => {
                dispatch(
                  updateState({ key: 'deleteMode', value: e.target.checked })
                )
              }}
            />
          }
          label="삭제모드"
        />
        <FormControlLabel
          control={<Switch />}
          label="수정모드"
          value={editMode}
          onClick={(e: any) => {
            dispatch(updateState({ key: 'editMode', value: e.target.checked }))
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(hOpenPartSelector())
          }}
        >
          추가
        </Button>
      </Box>

      <Box>
        <ReactSortable
          list={list.map((x) => ({ ...x, chosen: true }))}
          setList={(newState) =>
            dispatch(updateState({ key: _key, value: newState }))
          }
          animation={200}
        >
          {list.map((part, idx) => {
            return <DefaultItem key={idx} order={part.order} part={part} />
          })}
        </ReactSortable>
      </Box>
    </>
  )
}

export default FormManager
