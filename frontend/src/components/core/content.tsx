// ** Module
import moment from 'moment'

// ** MUI
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

// ** Const
import DATE from 'src/common/constants/date'

// ** Redux
import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import ActionContainer from './action-container'
import { useState } from 'react'
import { Chip } from '@mui/material'
import ModalEditorViewerContainer from './modal-editor-viewer-container'

const Content = () => {
  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination
  //const contentForm = crud.contentForm
  const actionList = crud.actionList

  // getPageByUrl

  const [contentForm, setContentForm] = useState([
    {
      key: 'key',
      type: 'text' // text | date | editor | code | image | chip | snackbar
    },
    {
      key: 'profile',
      type: 'image', // text | date | editor | code | image | chip | snackbar
      width: 30,
      height: 30
    },
    {
      key: 'createdAt',
      type: 'date' // text | date | editor | code | image | chip | snackbar
    },
    {
      key: 'chip',
      type: 'chip' // text | date | editor | code | image | chip | snackbar
    },
    {
      key: 'intro',
      type: 'modal', // text | date | editor | code | image | chip | snackbar
      title: '자기소개'
    }
  ])

  return (
    <>
      <TableBody>
        {pagination.data.map((row: any, idx: number) => (
          <TableRow key={idx}>
            {contentForm.map((cell, index) =>
              cell.type === 'text' ? (
                <TableCell key={index}>{row[`${cell.key}`]}</TableCell>
              ) : cell.type === 'date' ? (
                <TableCell key={index}>
                  {cell.key ? moment(cell.key).format(DATE.DATETIME) : '-'}
                </TableCell>
              ) : cell.type === 'modal' ? (
                <TableCell key={index}>
                  <ModalEditorViewerContainer
                    title={cell.title}
                    content={row[`${cell.key}`]}
                  />
                </TableCell>
              ) : cell.type === 'image' ? (
                <TableCell key={index}>
                  <img
                    src={row[`${cell.key}`] || '/images/custom/image.png'}
                    width={cell.width || 30}
                    height={cell.height || 30}
                  />
                </TableCell>
              ) : cell.type === 'chip' ? (
                <TableCell key={index}>
                  <Chip
                    label={row[`${cell.key}`] || cell.key}
                    color="primary"
                    variant="outlined"
                  />
                </TableCell>
              ) : (
                <></>
              )
            )}
            {actionList.length > 0 && (
              <TableCell>
                <ActionContainer
                  id={row.id}
                  detailAction={true}
                  deleteAction={true}
                />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}

export default Content
