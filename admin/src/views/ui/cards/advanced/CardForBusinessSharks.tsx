// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Type Import
import { CustomCheckboxBasicData } from 'src/@core/components/custom-checkbox/types'

// ** Custom Component Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic'

const data: CustomCheckboxBasicData[] = [
  {
    value: 'branding',
    meta: <CustomChip rounded size='small' skin='light' color='success' label='+$30' />,
    title: <Typography sx={{ mt: 0.25, color: 'text.secondary' }}>Branding</Typography>
  },
  {
    isSelected: true,
    value: 'marketing',
    meta: <CustomChip rounded size='small' skin='light' color='primary' label='+$75' />,
    title: <Typography sx={{ mt: 0.25, color: 'text.secondary' }}>Marketing</Typography>
  },
  {
    value: 'app-building',
    meta: <CustomChip rounded size='small' skin='light' color='success' label='+$125' />,
    title: <Typography sx={{ mt: 0.25, color: 'text.secondary' }}>App Building</Typography>
  },
  {
    value: 'seo',
    title: <Typography sx={{ mt: 0.25, color: 'text.secondary' }}>SEO</Typography>,
    meta: <CustomChip rounded size='small' skin='light' color='primary' label='+$48' />
  }
]

const CardForBusinessSharks = () => {
  const initialSelected: string[] = data.filter(item => item.isSelected).map(item => item.value)

  // ** State
  const [selected, setSelected] = useState<string[]>(initialSelected)

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter(item => item !== value)
      setSelected(updatedArr)
    } else {
      setSelected([...selected, value])
    }
  }

  return (
    <Card>
      <CardHeader
        sx={{ pt: 5, pb: 3 }}
        title='For Business Sharks'
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Select All', 'Edit', 'Delete']} />}
      />
      <CardContent>
        <Typography sx={{ mb: 3.5, color: 'text.secondary' }}>
          Here, I focus on a range of items and features that we use in life without them.
        </Typography>
        <Typography sx={{ mb: 2, fontWeight: 500 }}>Basic price is $30</Typography>
        <Grid container spacing={4}>
          {data.map((item, index) => (
            <CustomCheckboxBasic
              key={index}
              data={data[index]}
              selected={selected}
              handleChange={handleChange}
              name='custom-checkbox-business-sharks'
              gridProps={{
                sm: 12,
                sx: {
                  '& > .MuiBox-root': {
                    pl: 3,
                    py: 2.5,
                    '& .MuiCheckbox-root': { mb: -1.75 },
                    '& > .MuiBox-root': { mt: 0.25, alignItems: 'center' }
                  }
                }
              }}
            />
          ))}
        </Grid>
        <Box sx={{ mt: 3, mb: 0.5, gap: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Vat Taxes</Typography>
          <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$24</Typography>
        </Box>
        <Box sx={{ gap: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Total Amount</Typography>
          <Typography variant='h6' sx={{ fontWeight: 600, color: 'primary.main' }}>
            $99
          </Typography>
        </Box>
        <Divider
          sx={{ mt: theme => `${theme.spacing(1)} !important`, mb: theme => `${theme.spacing(3.5)} !important` }}
        />
        <Button fullWidth variant='contained'>
          Purchase
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardForBusinessSharks
