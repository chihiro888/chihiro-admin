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
import ModalEditorViewerContainer from 'src/components/core/modal-editor-viewer-container'
import { Chip } from '@mui/material'

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
            <TableCell>{row.url}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>
              <ModalEditorViewerContainer title="설명" content={row.subTitle} />
            </TableCell>
            <TableCell>
              {row.useListApi === 1 ? (
                <Chip label="활성화" color="primary" variant="outlined" />
              ) : (
                <Chip label="비활성화" color="secondary" variant="outlined" />
              )}
            </TableCell>
            <TableCell>{row.listApi}</TableCell>
            <TableCell>
              {row.useCreateApi === 1 ? (
                <Chip label="활성화" color="primary" variant="outlined" />
              ) : (
                <Chip label="비활성화" color="secondary" variant="outlined" />
              )}
            </TableCell>
            <TableCell>{row.createApi}</TableCell>
            <TableCell>
              {row.useDetailApi === 1 ? (
                <Chip label="활성화" color="primary" variant="outlined" />
              ) : (
                <Chip label="비활성화" color="secondary" variant="outlined" />
              )}
            </TableCell>
            <TableCell>{row.detailApi}</TableCell>
            <TableCell>
              {row.useDeleteApi === 1 ? (
                <Chip label="활성화" color="primary" variant="outlined" />
              ) : (
                <Chip label="비활성화" color="secondary" variant="outlined" />
              )}
            </TableCell>
            <TableCell>{row.deleteApi}</TableCell>
            <TableCell>{row.tableHeader}</TableCell>
            <TableCell>{row.addForm}</TableCell>
            <TableCell>{row.detailForm}</TableCell>
            <TableCell>{row.searchForm}</TableCell>
            <TableCell>{row.actionList}</TableCell>
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
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}

export default Content
