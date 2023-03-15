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

const Content = () => {
  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination
  const contentForm = crud.contentForm
  const actionList = crud.actionList

  // const [contentForm, setContentForm] = useState([
  //   {
  //     key: 'key',
  //     type: 'text' // text | date | editor | code | image | chip | snackbar
  //   },
  //   {
  //     key: 'key2',
  //     type: 'image', // text | date | editor | code | image | chip | snackbar
  //     width: 30,
  //     height: 30
  //   },
  //   {
  //     key: 'date1',
  //     type: 'date' // text | date | editor | code | image | chip | snackbar
  //   },
  //   {
  //     key: 'chip',
  //     type: 'chip', // text | date | editor | code | image | chip | snackbar
  //     color: 'primary',
  //     variant: 'outlined
  //   }
  // ])

  /*
    count: 2
    data: []

    format: [
      {
        key: 'key'
        type: 'text' // text | date | editor | code | image | chip
      }


      'key': {
          type: 'text' // text | date | editor | code | image | chip
        }
      },
      'url': {
          type: 'image',
          width: 30
          height: 30
        },
      }
      'createdAt': {
          type: 'date'
        }
      }
    ]
    
    action: {
      detail: true,
      delete: true
    }
  */

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
              ) : cell.type === 'code' ? (
                <TableCell key={index}>{row[`${cell.key}`]}</TableCell>
              ) : cell.type === 'image' ? (
                <TableCell key={index}>
                  <img
                    src={row[`${cell.key}`]}
                    width={cell.width}
                    height={cell.height}
                  />
                </TableCell>
              ) : cell.type === 'chip' ? (
                <TableCell key={index}>
                  <Chip
                    label={row[`${cell.key}`]}
                    color={cell.color}
                    variant={cell.variant}
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
