import moment from 'moment'
import { useState } from 'react'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Snackbar from '@mui/material/Snackbar'
import ActionContainer from 'src/components/core/action-container'
import DATE from 'src/common/constants/date'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

import CustomAvatar from 'src/@core/components/mui/avatar'
// import ModalEditorViewerContainer from '../core/modal-editor-viewer-container'
import ModalEditorViewerContainer from 'src/components/core/modal-editor-viewer-container'

const Content = () => {
  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination

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
            <TableCell>
              <CustomAvatar
                src={row.url}
                variant="rounded"
                sx={{ width: 40, height: 40 }}
              />
            </TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.account}</TableCell>
            <TableCell>
              <ModalEditorViewerContainer
                title="자기소개"
                content={row.intro}
              />
            </TableCell>

            <TableCell>
              <Button
                variant="text"
                onClick={() => handleClickSnack(row.password)}
              >
                비밀번호
              </Button>
            </TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>
              {Number(row.level) === 1 ? (
                <>
                  <Chip
                    label="시스템관리자"
                    color="primary"
                    variant="outlined"
                  />
                </>
              ) : (
                <>
                  <Chip label="관리자" color="secondary" variant="outlined" />
                </>
              )}
            </TableCell>
            <TableCell>
              {row?.createdAt
                ? moment(row?.createdAt).format(DATE.DATETIME)
                : '-'}
            </TableCell>
            <TableCell>
              {row?.updatedAt
                ? moment(row?.updatedAt).format(DATE.DATETIME)
                : '-'}
            </TableCell>
            <TableCell>
              <ActionContainer
                id={row.id}
                detailAction={true}
                deleteAction={true}
              />
            </TableCell>
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
