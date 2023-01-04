import PageHeader from 'src/@core/components/page-header'
import Typography from '@mui/material/Typography'

const HeaderContainer = ({ header }) => {
  return (
    <>
      <PageHeader
        title={<Typography variant="h5">{header.title}</Typography>}
        subtitle={<Typography variant="body2">{header.subTitle}</Typography>}
      />
    </>
  )
}

export default HeaderContainer
