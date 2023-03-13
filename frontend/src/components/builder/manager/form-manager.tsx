import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import produce from 'immer'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ReactSortable } from 'react-sortablejs'
import CustomLottie from 'src/components/custom-lottie'
import { AppDispatch, RootState } from 'src/store'
import { hOpenPartSelector, updateState } from 'src/store/apps/page'
import DefaultItem from '../item/default-item'
import * as block from 'src/lottie/block.json'

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
  _key: 'addForm' | 'detailForm' | 'searchForm' | 'actionForm' // 예약어 회피

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
  }, [list])

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
            dispatch(
              updateState({
                key: 'partMode',
                value: 'add'
              })
            )
          }}
        >
          추가
        </Button>
      </Box>

      <Box>
        {list.length === 0 && (
          <CustomLottie text={'데이터기 존재하지 않습니다'} data={block} />
        )}
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
