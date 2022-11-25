// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import PageHeader from 'src/@core/components/page-header'

const icons = [
  'bx:abacus',
  'bx:accessibility',
  'bx:add-to-queue',
  'bx:adjust',
  'bx:alarm',
  'bx:alarm-add',
  'bx:alarm-exclamation',
  'bx:alarm-off',
  'bx:alarm-snooze',
  'bx:album',
  'bx:align-justify',
  'bx:align-left',
  'bx:align-middle',
  'bx:align-right',
  'bx:analyse',
  'bx:anchor',
  'bx:angry',
  'bx:aperture',
  'bx:arch',
  'bx:archive',
  'bx:archive-in',
  'bx:archive-out',
  'bx:area',
  'bx:arrow-back',
  'bx:arrow-from-bottom',
  'bx:arrow-from-left',
  'bx:arrow-from-right',
  'bx:arrow-from-top',
  'bx:arrow-to-bottom',
  'bx:arrow-to-left',
  'bx:arrow-to-right',
  'bx:arrow-to-top',
  'bx:at',
  'bx:atom',
  'bx:award',
  'bx:badge',
  'bx:badge-check',
  'bx:baguette',
  'bx:ball',
  'bx:band-aid',
  'bx:bar-chart',
  'bx:bar-chart-alt',
  'bx:bar-chart-alt-2',
  'bx:bar-chart-square',
  'bx:barcode',
  'bx:barcode-reader',
  'bx:baseball',
  'bx:basket'
]

const Icons = () => {
  const renderIconGrids = () => {
    return icons.map((icon, index) => {
      return (
        <Grid item key={index}>
          <Tooltip arrow title={icon} placement='top'>
            <Card>
              <CardContent sx={{ display: 'flex' }}>
                <Icon icon={icon} />
              </CardContent>
            </Card>
          </Tooltip>
        </Grid>
      )
    })
  }

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://iconify.design/' target='_blank'>
              Iconify Design
            </Link>
          </Typography>
        }
        subtitle={<Typography variant='body2'>Modern unified SVG framework</Typography>}
      />
      <Grid item xs={12}>
        <Grid container spacing={6}>
          {renderIconGrids()}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button
          target='_blank'
          rel='noreferrer'
          component={Link}
          variant='contained'
          href='https://icon-sets.iconify.design/'
        >
          View All Icons
        </Button>
      </Grid>
    </Grid>
  )
}

export default Icons
