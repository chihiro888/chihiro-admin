// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { rgbaToHex } from 'src/@core/utils/rgba-to-hex'

const yearOptions = [new Date().getFullYear() - 1, new Date().getFullYear() - 2, new Date().getFullYear() - 3]

const series = [
  {
    name: '1k',
    data: [
      { x: 'Jan', y: '250' },
      { x: 'Feb', y: '350' },
      { x: 'Mar', y: '220' },
      { x: 'Apr', y: '290' },
      { x: 'May', y: '650' },
      { x: 'Jun', y: '260' },
      { x: 'Jul', y: '274' },
      { x: 'Aug', y: '850' }
    ]
  },
  {
    name: '2k',
    data: [
      { x: 'Jan', y: '750' },
      { x: 'Feb', y: '3350' },
      { x: 'Mar', y: '1220' },
      { x: 'Apr', y: '1290' },
      { x: 'May', y: '1650' },
      { x: 'Jun', y: '1260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '850' }
    ]
  },
  {
    name: '3k',
    data: [
      { x: 'Jan', y: '375' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '3220' },
      { x: 'Apr', y: '2290' },
      { x: 'May', y: '2650' },
      { x: 'Jun', y: '2260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '815' }
    ]
  },
  {
    name: '4k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '2220' },
      { x: 'Apr', y: '3290' },
      { x: 'May', y: '3650' },
      { x: 'Jun', y: '2260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '315' }
    ]
  },
  {
    name: '5k',
    data: [
      { x: 'Jan', y: '875' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '2220' },
      { x: 'Apr', y: '3290' },
      { x: 'May', y: '3650' },
      { x: 'Jun', y: '2260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '965' }
    ]
  },
  {
    name: '6k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '2220' },
      { x: 'Apr', y: '2290' },
      { x: 'May', y: '2650' },
      { x: 'Jun', y: '3260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '815' }
    ]
  },
  {
    name: '7k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '1220' },
      { x: 'Apr', y: '1290' },
      { x: 'May', y: '1650' },
      { x: 'Jun', y: '1260' },
      { x: 'Jul', y: '3274' },
      { x: 'Aug', y: '815' }
    ]
  },
  {
    name: '8k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '350' },
      { x: 'Mar', y: '220' },
      { x: 'Apr', y: '290' },
      { x: 'May', y: '650' },
      { x: 'Jun', y: '260' },
      { x: 'Jul', y: '274' },
      { x: 'Aug', y: '815' }
    ]
  }
]

const CrmSalesAnalytics = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Hooks & Var
  const theme = useTheme()
  const { settings } = useSettings()
  const { direction } = settings

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const options: ApexOptions = {
    chart: {
      offsetX: 3,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    stroke: {
      width: 5,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: 5,
        right: 25,
        bottom: 3
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      crosshairs: {
        stroke: { color: 'transparent' }
      },
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    plotOptions: {
      heatmap: {
        radius: 6,
        enableShades: false,
        colorScale: {
          ranges: [
            { from: 0, to: 1000, name: '1K', color: rgbaToHex(hexToRGBA(theme.palette.primary.main, 0.2)) },
            { from: 1001, to: 2000, name: '2K', color: rgbaToHex(hexToRGBA(theme.palette.primary.main, 0.4)) },
            { from: 2001, to: 3000, name: '3K', color: rgbaToHex(hexToRGBA(theme.palette.primary.main, 0.6)) },
            { from: 3001, to: 4000, name: '4K', color: rgbaToHex(hexToRGBA(theme.palette.primary.main, 1)) }
          ]
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Sales Analytics'
        subheader={
          <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <CustomChip rounded size='small' skin='light' label='+42.6%' color='success' sx={{ mr: 1.5 }} />
              <Typography sx={{ color: 'text.secondary' }}>Than last year</Typography>
            </Box>
          </>
        }
        action={
          <>
            <Button
              size='small'
              variant='outlined'
              aria-haspopup='true'
              onClick={handleClick}
              sx={{ '& svg': { ml: 0.5 } }}
            >
              {new Date().getFullYear()}
              <Icon icon='bx:chevron-down' />
            </Button>
            <Menu
              keepMounted
              anchorEl={anchorEl}
              onClose={handleClose}
              open={Boolean(anchorEl)}
              anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
            >
              {yearOptions.map((year: number) => (
                <MenuItem key={year} onClick={handleClose}>
                  {year}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
      />
      <ReactApexcharts type='heatmap' height={370} options={options} series={series} />
    </Card>
  )
}

export default CrmSalesAnalytics
