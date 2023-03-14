import { Box, Button } from '@mui/material'
import produce from 'immer'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactSortable } from 'react-sortablejs'
import { AppDispatch } from 'src/store'
import { hOpenPartSelector, updateState } from 'src/store/apps/page'
// import DefaultItem from '../item/default-item'

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
          {list.map((item, idx) => {
            return (
              <></>
              // <DefaultItem
              //   key={idx}
              //   id={item.id} // 사용 안함
              //   order={item.order}
              //   type={item.type}
              //   _key={item.key} // 예약어 회피
              //   label={item.label}
              // />
            )
          })}
        </ReactSortable>
      </Box>
    </>
  )
}

export default FormManager
