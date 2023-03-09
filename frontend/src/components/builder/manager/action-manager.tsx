import { Box, Button } from '@mui/material'
import ActionItem from '../item/action-item'
import { ReactSortable } from 'react-sortablejs'
import { useState } from 'react'

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
  setList: any
}
const ActionManager = ({ list, setList }: Props) => {
  const [t, setT] = useState([])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 10 }}>
        <Button variant="contained" color="primary">
          추가
        </Button>
      </Box>

      <Box>
        <ReactSortable
          list={t}
          setList={setT}
          animation={200}
          // onEnd={(item) => {
          //   if (item.oldIndex > item.newIndex) {
          //     // 아래에서 위로 드래그 앤 드롭
          //     for (let i = item.newIndex; i < item.oldIndex; i++) {
          //       // 드롭된 인덱스로부터 아래에 요소를 정렬값을 증가
          //       list[i].order = list[i].order + 1
          //     }
          //   } else {
          //     // 위에서 아래로 드래그 앤 드롭
          //     for (let i = item.newIndex; i > item.oldIndex; i--) {
          //       // 드롭된 인덱스로부터 위에 요소를 정렬값을 감소
          //       list[i].order = list[i].order - 1
          //     }
          //   }

          //   // 드롭된 요소의 정렬값을 드롭된 인덱스로 변경
          //   list[item.oldIndex].order = item.newIndex
          // }}
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
