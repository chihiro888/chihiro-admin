// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationRounded = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} shape='rounded' color='primary' />
      <Pagination count={10} variant='outlined' shape='rounded' color='secondary' />
    </div>
  )
}

export default PaginationRounded
