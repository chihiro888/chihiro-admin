// ** MUI Imports
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface TableHeaderProps {
  plan: string
  value: string
  handleFilter: (val: string) => void
  handlePlanChange: (e: SelectChangeEvent) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { plan, handlePlanChange, handleFilter, value } = props

  return (
    <Box
      sx={{ px: 5, pb: 2, pt: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ mr: 2, color: 'text.secondary' }}>Search</Typography>
        <TextField
          size='small'
          value={value}
          placeholder='Search User'
          sx={{ mr: 4, mb: 2 }}
          onChange={e => handleFilter(e.target.value)}
        />
      </Box>
      <FormControl size='small' sx={{ mb: 2 }}>
        <InputLabel id='plan-select'>Select Plan</InputLabel>
        <Select
          size='small'
          value={plan}
          id='select-plan'
          label='Select Plan'
          labelId='plan-select'
          onChange={handlePlanChange}
          inputProps={{ placeholder: 'Select Plan' }}
        >
          <MenuItem value=''>Select Plan</MenuItem>
          <MenuItem value='basic'>Basic</MenuItem>
          <MenuItem value='company'>Company</MenuItem>
          <MenuItem value='enterprise'>Enterprise</MenuItem>
          <MenuItem value='team'>Team</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default TableHeader
