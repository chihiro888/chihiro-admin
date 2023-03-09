import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import DefaultItem from '../item/default-item'

interface ItemType {
  id: number
  order: number
  type: string
  label: string
  key: string
  value: string
  list?: any
}

const FormManager = () => {
  // ** State
  const [list, setList] = useState<ItemType[]>([
    {
      id: 0,
      order: 0,
      type: 'text',
      label: '계정',
      key: 'account',
      value: ''
    },
    {
      id: 1,
      order: 1,
      type: 'select',
      label: '권한',
      key: 'role',
      value: '',
      list: [
        {
          label: '시스템관리자',
          value: 'SA'
        },
        {
          label: '관리자',
          value: 'A'
        },
        {
          label: '사용자',
          value: 'U'
        }
      ]
    },
    {
      id: 2,
      order: 2,
      type: 'date',
      label: '생성일자',
      key: 'createdAt',
      value: ''
    }
  ])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 10 }}>
        <Button variant="contained" color="primary">
          추가
        </Button>
      </Box>

      <Box>
        <ReactSortable
          list={list}
          setList={setList}
          animation={200}
          onEnd={(item) => {
            if (item.oldIndex > item.newIndex) {
              // 아래에서 위로 드래그 앤 드롭
              for (let i = item.newIndex; i < item.oldIndex; i++) {
                // 드롭된 인덱스로부터 아래에 요소를 정렬값을 증가
                list[i].order = list[i].order + 1
              }
            } else {
              // 위에서 아래로 드래그 앤 드롭
              for (let i = item.newIndex; i > item.oldIndex; i--) {
                // 드롭된 인덱스로부터 위에 요소를 정렬값을 감소
                list[i].order = list[i].order - 1
              }
            }

            // 드롭된 요소의 정렬값을 드롭된 인덱스로 변경
            list[item.oldIndex].order = item.newIndex
          }}
        >
          {list.map((actionItem, idx) => {
            return (
              <DefaultItem
                key={idx}
                id={actionItem.id}
                order={actionItem.order}
                type={actionItem.type}
                _key={actionItem.key} // 예약어 회피
                label={actionItem.label}
              />
            )
          })}
        </ReactSortable>
      </Box>
    </>
  )
}

export default FormManager
