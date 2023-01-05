import moment from 'moment'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Chip from '@mui/material/Chip'

import ActionContainer from 'src/components/core/action-container'
import DATE from 'src/common/constants/date'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const Content = () => {
  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination

  return (
    <>
      <TableBody>
        {pagination.data.map((row: any, idx: number) => (
          <TableRow key={idx}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.userId}</TableCell>
            <TableCell>{row.account}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>
              {row.type === 1 ? (
                <Chip label="로그인" color="primary" variant="outlined" />
              ) : (
                <Chip label="로그아웃" color="error" variant="outlined" />
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
                deleteAction={false}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}

export default Content
