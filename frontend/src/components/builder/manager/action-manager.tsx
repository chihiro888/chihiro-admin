import { Box, Button } from '@mui/material'
import ActionItem from '../item/action-item'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { useCallback, useState } from 'react'
import update from 'immutability-helper'

const ActionManager = () => {
  const [actionItemList, setActionItemList] = useState([
    {
      index: 1,
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
      index: 2,
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
      index: 3,
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
      index: 4,
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
      index: 5,
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

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setActionItemList((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]]
        ]
      })
    )
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 10 }}>
        <Button variant="contained" color="primary">
          추가
        </Button>
      </Box>

      <DndProvider backend={HTML5Backend}>
        <Box>
          {actionItemList.map((actionItem, idx) => {
            return (
              <ActionItem
                key={actionItem.index}
                index={idx}
                itemIndex={actionItem.index}
                icon={actionItem.icon}
                label={actionItem.label}
                loadAPI={actionItem.loadAPI}
                updateAPI={actionItem.updateAPI}
                moveCard={moveCard}
              />
            )
          })}
        </Box>
      </DndProvider>
    </>
  )
}

export default ActionManager
