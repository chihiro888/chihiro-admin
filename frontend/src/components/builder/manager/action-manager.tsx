import { Box, Button } from '@mui/material'
import ActionItem from '../item/action-item'
import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import produce from 'immer'
interface ItemType {
  id: number
  order: number
  icon: string
  label: string
  content: any
  loadAPI: any
  updateAPI: any
}

const ActionManager = () => {
  const [actionItemList, setActionItemList] = useState<ItemType[]>([
    {
      id: 0,
      order: 0,
      icon: 'bx:user-circle',
      label: '프로필 변경',
      content: [
        {
          type: 'upload',
          label: '변경할 이미지',
          key: 'profile',
          value: [],
          allowFileExt: ['.png', '.jpg', '.jpeg', '.gif'],
          maxFileCount: 1,
          maxFileSizeBytes: 1024 * 1024 * 4
        }
      ],
      loadAPI: null,
      updateAPI: null
    },
    {
      id: 1,
      order: 1,
      icon: 'bx:user-circle',
      label: '자기소개 변경',
      content: [
        {
          type: 'editor',
          label: '변경할 자기소개',
          key: 'intro',
          value: ''
        }
      ],
      loadAPI: null,
      updateAPI: null
    },
    {
      id: 2,
      order: 2,
      icon: 'bx:pencil',
      label: '비밀번호 변경',
      content: [
        {
          type: 'password',
          label: '기존 비밀번호',
          key: 'oldPassword',
          value: ''
        },
        {
          type: 'password',
          label: '새로운 비밀번호',
          key: 'newPassword',
          value: ''
        },
        {
          type: 'password',
          label: '새로운 비밀번호 확인',
          key: 'confirmNewPassword',
          value: ''
        }
      ],
      loadAPI: null,
      updateAPI: null
    },
    {
      id: 3,
      order: 3,
      icon: 'bx:pencil',
      label: '사용자명 변경',
      content: [
        {
          type: 'text',
          label: '사용자명',
          key: 'username',
          value: ''
        }
      ],
      loadAPI: null,
      updateAPI: null
    },
    {
      id: 4,
      order: 4,
      icon: 'bx:pencil',
      label: '권한 변경',
      content: [
        {
          type: 'select',
          label: '권한',
          key: 'role',
          value: '',
          list: [
            {
              label: '시스템 관리자',
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
        }
      ],
      loadAPI: null,
      updateAPI: null
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
          list={actionItemList}
          setList={setActionItemList}
          animation={200}
          onEnd={(item) => {
            if (item.oldIndex > item.newIndex) {
              // 아래에서 위로 드래그 앤 드롭
              for (let i = item.newIndex; i < item.oldIndex; i++) {
                // 드롭된 인덱스로부터 아래에 요소를 정렬값을 증가
                actionItemList[i].order = actionItemList[i].order + 1
              }
            } else {
              // 위에서 아래로 드래그 앤 드롭
              for (let i = item.newIndex; i > item.oldIndex; i--) {
                // 드롭된 인덱스로부터 위에 요소를 정렬값을 감소
                actionItemList[i].order = actionItemList[i].order - 1
              }
            }

            // 드롭된 요소의 정렬값을 드롭된 인덱스로 변경
            actionItemList[item.oldIndex].order = item.newIndex
          }}
        >
          {actionItemList.map((actionItem, idx) => {
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
