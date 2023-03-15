// ** Module
import moment from 'moment'

// ** MUI
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Const
import DATE from 'src/common/constants/date'

// ** Redux
import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import ActionContainer from './action-container'
import { useState } from 'react'
import { Button, Chip, Snackbar } from '@mui/material'
import ModalEditorViewerContainer from './modal-editor-viewer-container'

const Content = () => {
  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination
  const tableContent = crud.tableContent
  const actionList = crud.actionList

  // ** Redux
  const { detailAPI, deleteAPI } = crud

  // ** States
  const [state, setState] = useState({
    openSnack: false,
    snackContent: ''
  })
  const { openSnack, snackContent } = state

  // typelist : text | date | editor | image | chip | snackbar | action

  // const [tableContent, setContentForm] = useState([
  //   {
  //     key: 'key',
  //     type: 'text'
  //   },
  //   {
  //     key: 'profile',
  //     type: 'image',
  //     width: 30,
  //     height: 30
  //   },
  //   {
  //     key: 'createdAt',
  //     type: 'date'
  //   },
  //   {
  //     key: 'chip',
  //     type: 'chip'
  //   },
  //   {
  //     key: 'intro',
  //     type: 'editor',
  //     title: '자기소개'
  //   },
  //   {
  //     key: 'password',
  //     type: 'snackbar',
  //     title: '비밀번호'
  //   },
  //   {
  //     key: 'action',
  //     type: 'action'
  //   }
  // ])

  const handleClickSnack = (password: string) => {
    setState({
      openSnack: true,
      snackContent: password
    })
  }

  const handleCloseSnack = () => {
    setState({ ...state, openSnack: false })
  }

  return (
    <>
      <TableBody>
        {pagination.data.map((row: any, idx: number) => (
          <TableRow key={idx}>
            {tableContent.map((cell, index) =>
              cell.type === 'text' ? (
                <TableCell key={index}>{row[`${cell.key}`] || '-'}</TableCell>
              ) : cell.type === 'date' ? (
                <TableCell key={index}>
                  {row[`${cell.key}`] !== null
                    ? moment(row[`${cell.key}`]).format(DATE.DATETIME)
                    : '-'}
                </TableCell>
              ) : cell.type === 'editor' ? (
                <TableCell key={index}>
                  <ModalEditorViewerContainer
                    title={cell.title}
                    content={row[`${cell.key}`]}
                  />
                </TableCell>
              ) : cell.type === 'image' ? (
                <TableCell key={index}>
                  <CustomAvatar
                    src={row[`${cell.key}`] || '/images/custom/image.png'}
                    variant="square"
                    sx={{ width: cell.width || 30, height: cell.height || 30 }}
                  />
                </TableCell>
              ) : cell.type === 'chip' ? ( //TODO - 추후 커스텀기능 필요
                <TableCell key={index}>
                  <Chip
                    label={row[`${cell.key}`] || cell.key}
                    color="primary"
                    variant="outlined"
                  />
                </TableCell>
              ) : cell.type === 'snackbar' ? (
                <TableCell>
                  <Button
                    variant="text"
                    onClick={() => handleClickSnack(row[`${cell.key}`] || '-')}
                  >
                    {cell.title}
                  </Button>
                </TableCell>
              ) : (
                <></>
              )
            )}
            {(actionList.length > 0 ||
              detailAPI !== null ||
              deleteAPI !== null) && (
              <TableCell>
                <ActionContainer
                  id={row.id}
                  detailAction={detailAPI !== null}
                  deleteAction={deleteAPI !== null}
                />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>

      <Snackbar
        open={openSnack}
        onClose={handleCloseSnack}
        message={snackContent}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </>
  )
}

export default Content
