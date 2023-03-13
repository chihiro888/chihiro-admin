import { updateState } from 'src/store/apps/page'

const pushAddForm = (dispatch, addForm, value) => {
  dispatch(updateState({ key: 'addForm', value: [...addForm, value] }))
}

const pushDetailForm = (dispatch, detailForm, value) => {
  dispatch(updateState({ key: 'detailForm', value: [...detailForm, value] }))
}

const pushSearchForm = (dispatch, searchForm, value) => {
  dispatch(updateState({ key: 'searchForm', value: [...searchForm, value] }))
}

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
      //
    } else if (lineCondition) {
      //
    } else if (selectCondition) {
      //
    } else if (uploadCondition) {
      //
    } else if (textareaCondition) {
      //
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
      //
    } else if (lineCondition) {
      //
    } else if (selectCondition) {
      //
    } else if (uploadCondition) {
      //
    } else if (textareaCondition) {
      //
    }
  }
}
