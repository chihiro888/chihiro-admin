import produce from 'immer'
import { updateState } from 'src/store/apps/page'

// 갱신
const updateAddForm = (dispatch, value) => {
  dispatch(updateState({ key: 'addForm', value }))
}

const updateDetailForm = (dispatch, value) => {
  dispatch(updateState({ key: 'detailForm', value }))
}

const updateSearchForm = (dispatch, value) => {
  dispatch(updateState({ key: 'searchForm', value }))
}

// 추가
const pushAddForm = (dispatch, addForm, value) => {
  dispatch(updateState({ key: 'addForm', value: [...addForm, value] }))
}

const pushDetailForm = (dispatch, detailForm, value) => {
  dispatch(updateState({ key: 'detailForm', value: [...detailForm, value] }))
}

const pushSearchForm = (dispatch, searchForm, value) => {
  dispatch(updateState({ key: 'searchForm', value: [...searchForm, value] }))
}

// 요소 삭제 및 순서 재정렬
const deleteAndReorder = (form, order) => {
  const newState = form
    .filter((item) => {
      if (item.order === order) return false
      else return true
    })
    .map((item, idx) => {
      const copyItem = { ...item }
      copyItem.order = idx

      return copyItem
    })

  return newState
}

// ANCHOR 파츠 삭제
export const deletePart = (dispatch, page, order) => {
  // 구분
  const { partType } = page

  // 입력값
  const { addForm, detailForm, searchForm } = page

  // 삭제 처리
  if (partType === 'add') {
    updateAddForm(dispatch, deleteAndReorder(addForm, order))
  } else if (partType === 'detail') {
    updateDetailForm(dispatch, deleteAndReorder(detailForm, order))
  } else if (partType === 'search') {
    updateSearchForm(dispatch, deleteAndReorder(searchForm, order))
  }
}

// ANCHOR 파츠 추가
export const addPart = (dispatch, page) => {
  // 구분
  const { partType, partSubType } = page

  // 입력값
  const {
    inputLabel,
    inputKey,
    inputUseChip,
    inputSx,
    inputRows,
    inputAllowFileExt,
    inputMaxFileCount,
    inputMaxFileSizeBytes,
    inputSelectList
  } = page

  // 입력값
  const { addForm, detailForm, searchForm } = page

  const defaultCondition =
    partSubType === 'text' ||
    partSubType === 'number' ||
    partSubType === 'password' ||
    partSubType === 'editor' ||
    partSubType === 'text' ||
    partSubType === 'date'
  const lineCondition = partSubType === 'line'
  const selectCondition = partSubType === 'select'
  const uploadCondition = partSubType === 'upload'
  const textareaCondition = partSubType === 'textarea'

  if (partType === 'add') {
    if (defaultCondition) {
      pushAddForm(dispatch, addForm, {
        type: partSubType,
        label: inputLabel,
        key: inputKey,
        value: ''
      })
    } else if (lineCondition) {
      pushAddForm(dispatch, addForm, {
        type: partSubType,
        label: inputLabel,
        chip: inputUseChip,
        sx: inputSx
      })
    } else if (selectCondition) {
      pushAddForm(dispatch, addForm, {
        type: partSubType,
        label: inputLabel,
        key: inputKey,
        value: '',
        list: inputSelectList
      })
    } else if (uploadCondition) {
      pushAddForm(dispatch, addForm, {
        type: partSubType,
        label: inputLabel,
        key: inputKey,
        value: '',
        allowFileExt: inputAllowFileExt,
        maxFileCount: inputMaxFileCount,
        maxFileSizeBytes: inputMaxFileSizeBytes
      })
    } else if (textareaCondition) {
      pushAddForm(dispatch, addForm, {
        type: partSubType,
        label: inputLabel,
        key: inputKey,
        value: '',
        rows: inputRows
      })
    }
  } else if (partType === 'search') {
    if (defaultCondition) {
      pushSearchForm(dispatch, searchForm, {
        type: partSubType,
        label: inputLabel,
        key: inputKey,
        value: ''
      })
    } else if (lineCondition) {
      // 미사용
    } else if (selectCondition) {
      pushSearchForm(dispatch, searchForm, {
        type: partSubType,
        label: inputLabel,
        key: inputKey,
        value: '',
        list: inputSelectList
      })
    } else if (uploadCondition) {
      // 미사용
    } else if (textareaCondition) {
      // 미사용
    }
  } else if (partType === 'detail') {
    if (defaultCondition) {
      pushDetailForm(dispatch, detailForm, {
        type: partSubType,
        label: inputLabel,
        key: inputKey,
        value: ''
      })
    } else if (lineCondition) {
      // 미사용
    } else if (selectCondition) {
      // 미사용
    } else if (uploadCondition) {
      // 미사용
    } else if (textareaCondition) {
      // 미사용
    }
  }
}

// ANCHOR 파츠 수정
export const updatePart = (dispatch, page) => {
  // 구분
  const { partType, partSubType } = page

  // 입력값
  const {
    inputOrder,
    inputLabel,
    inputKey,
    inputUseChip,
    inputSx,
    inputRows,
    inputAllowFileExt,
    inputMaxFileCount,
    inputMaxFileSizeBytes,
    inputSelectList
  } = page

  // 입력값
  const { addForm, detailForm, searchForm } = page

  const defaultCondition =
    partSubType === 'text' ||
    partSubType === 'number' ||
    partSubType === 'password' ||
    partSubType === 'editor' ||
    partSubType === 'text' ||
    partSubType === 'date'
  const lineCondition = partSubType === 'line'
  const selectCondition = partSubType === 'select'
  const uploadCondition = partSubType === 'upload'
  const textareaCondition = partSubType === 'textarea'

  if (partType === 'add') {
    if (defaultCondition) {
      const nextState = produce(addForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
          }
        })
      })
      updateAddForm(dispatch, nextState)
    } else if (lineCondition) {
      const nextState = produce(addForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
            item.chip = inputUseChip
            item.sx = inputSx
          }
        })
      })
      updateAddForm(dispatch, nextState)
    } else if (selectCondition) {
      const nextState = produce(addForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
            item.list = inputSelectList
          }
        })
      })
      updateAddForm(dispatch, nextState)
    } else if (uploadCondition) {
      const nextState = produce(addForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
            item.allowFileExt = inputAllowFileExt
            item.maxFileCount = inputMaxFileCount
            item.maxFileSizeBytes = inputMaxFileSizeBytes
          }
        })
      })
      updateAddForm(dispatch, nextState)
    } else if (textareaCondition) {
      const nextState = produce(addForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
            item.rows = inputRows
          }
        })
      })
      updateAddForm(dispatch, nextState)
    }
  } else if (partType === 'search') {
    if (defaultCondition) {
      const nextState = produce(searchForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
          }
        })
      })
      updateSearchForm(dispatch, nextState)
    } else if (lineCondition) {
      // 미사용
    } else if (selectCondition) {
      const nextState = produce(searchForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
            item.list = inputSelectList
          }
        })
      })
      updateSearchForm(dispatch, nextState)
    } else if (uploadCondition) {
      // 미사용
    } else if (textareaCondition) {
      // 미사용
    }
  } else if (partType === 'detail') {
    if (defaultCondition) {
      const nextState = produce(detailForm, (draftState) => {
        draftState.map((item) => {
          if (item.order === inputOrder) {
            item.label = inputLabel
            item.key = inputKey
          }
        })
      })
      updateDetailForm(dispatch, nextState)
    } else if (lineCondition) {
      // 미사용
    } else if (selectCondition) {
      // 미사용
    } else if (uploadCondition) {
      // 미사용
    } else if (textareaCondition) {
      // 미사용
    }
  }
}
