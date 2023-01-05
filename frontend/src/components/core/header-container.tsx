import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import PageHeader from 'src/@core/components/page-header'
import Typography from '@mui/material/Typography'

const HeaderContainer = () => {
  const crud = useSelector((state: RootState) => state.crud)
  const pageHeader = crud.pageHeader

  return (
    <>
      <PageHeader
        title={<Typography variant="h5">{pageHeader.title}</Typography>}
        subtitle={
          <Typography variant="body2">{pageHeader.subTitle}</Typography>
        }
      />
    </>
  )
}

export default HeaderContainer
