// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import Table from 'src/views/apps/roles/Table'
import RoleCards from 'src/views/apps/roles/RoleCards'

const RolesComponent = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography sx={{ mb: 4, fontSize: '1.375rem', fontWeight: 700 }}>Roles List</Typography>}
        subtitle={
          <Typography sx={{ color: 'text.secondary' }}>
            A role provides access to predefined menus and features so that depending on <br /> the assigned role, an
            administrator can have access to what he needs.
          </Typography>
        }
      />
      <Grid item xs={12} sx={{ mb: 2 }}>
        <RoleCards />
      </Grid>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default RolesComponent
