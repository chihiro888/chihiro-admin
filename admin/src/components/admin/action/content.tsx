import moment from 'moment'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Chip from '@mui/material/Chip'

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
            <TableCell>{row.adminId}</TableCell>
            <TableCell>{row.adminAccount}</TableCell>
            <TableCell>{row.adminUsername}</TableCell>
            <TableCell>{row.apiName}</TableCell>
            <TableCell>{row.params}</TableCell>
            <TableCell>
              {row?.createdAt
                ? moment(row?.createdAt).format(DATE.DATETIME)
                : '-'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}

export default Content
