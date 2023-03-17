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
            {/* 테이블 내용 출력 */}
            {tableContent.map((cell, index) => {
              switch (cell.type) {
                case 'text':
                  return (
                    <TableCell key={index}>
                      {row[`${cell.key}`] || '-'}
                    </TableCell>
                  )
                case 'date':
                  return (
                    <TableCell key={index}>
                      {row[`${cell.key}`] !== null
                        ? moment(row[`${cell.key}`]).format(DATE.DATETIME)
                        : '-'}
                    </TableCell>
                  )
                case 'editor':
                  return (
                    <TableCell key={index}>
                      <ModalEditorViewerContainer
                        title={cell.title}
                        content={row[`${cell.key}`]}
                      />
                    </TableCell>
                  )
                case 'image':
                  return (
                    <TableCell key={index}>
                      <CustomAvatar
                        src={row[`${cell.key}`] || '/images/custom/image.png'}
                        variant="square"
                        sx={{
                          width: cell.width || 30,
                          height: cell.height || 30
                        }}
                      />
                    </TableCell>
                  )
                case 'chip': {
                  if (cell.condition === null || cell.condition === undefined) {
                    break
                  }
                  const color = cell.condition[`${row[`${cell.key}`]}`]

                  return (
                    <TableCell key={index}>
                      <Chip
                        label={row[`${cell.key}`] || cell.key}
                        color={color || 'error'}
                        variant="outlined"
                      />
                    </TableCell>
                  )
                }
                case 'snackbar':
                  return (
                    <TableCell>
                      <Button
                        variant="text"
                        onClick={() =>
                          handleClickSnack(row[`${cell.key}`] || '-')
                        }
                      >
                        {cell.title}
                      </Button>
                    </TableCell>
                  )

                default:
                  break
              }
            })}

            {/* 액션 버튼 */}
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
