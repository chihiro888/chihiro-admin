// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'
import LinearProgress from '@mui/material/LinearProgress'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  src: string
  system?: string
  browser?: string
  country?: string
  color: ThemeColor
  percentage: number
  visits: string | number
}

const browserData: DataType[] = [
  {
    visits: '8.92k',
    color: 'success',
    browser: 'Chrome',
    percentage: 64.91,
    src: '/images/cards/chrome.png'
  },
  {
    visits: '1.29k',
    color: 'primary',
    browser: 'Safari',
    percentage: 19.03,
    src: '/images/cards/safari.png'
  },
  {
    visits: 328,
    color: 'info',
    percentage: 3.26,
    browser: 'Firefox',
    src: '/images/cards/firefox.png'
  },
  {
    visits: 142,
    browser: 'Edge',
    color: 'warning',
    percentage: 3.99,
    src: '/images/cards/edge.png'
  },
  {
    visits: 85,
    color: 'error',
    browser: 'Opera',
    percentage: 2.12,
    src: '/images/cards/opera.png'
  }
]
const osData: DataType[] = [
  {
    color: 'success',
    percentage: 61.5,
    visits: '475.26k',
    system: 'Windows',
    src: '/images/cards/windows.png'
  },
  {
    system: 'Mac',
    color: 'primary',
    visits: '89.12k',
    percentage: 15.67,
    src: '/images/cards/mac.png'
  },
  {
    color: 'info',
    visits: '38.68k',
    system: 'Ubuntu',
    percentage: 5.82,
    src: '/images/cards/ubuntu.png'
  },
  {
    visits: '8.34k',
    color: 'warning',
    system: 'Chrome',
    percentage: 3.25,
    src: '/images/cards/chrome.png'
  },
  {
    color: 'error',
    system: 'Cent',
    visits: '2.25k',
    percentage: 1.76,
    src: '/images/cards/cent.png'
  }
]
const countryData: DataType[] = [
  {
    country: 'USA',
    color: 'success',
    visits: '87.24k',
    percentage: 38.12,
    src: '/images/cards/usa.png'
  },
  {
    color: 'primary',
    visits: '42.69k',
    country: 'Brazil',
    percentage: 28.23,
    src: '/images/cards/brazil.png'
  },
  {
    color: 'info',
    country: 'India',
    visits: '12.58k',
    percentage: 13.82,
    src: '/images/cards/india.png'
  },
  {
    visits: '4.13k',
    color: 'warning',
    percentage: 12.72,
    country: 'Australia',
    src: '/images/cards/australia.png'
  },
  {
    color: 'error',
    visits: '2.21k',
    country: 'China',
    percentage: 7.11,
    src: '/images/cards/china.png'
  }
]

const activeTabData: { [key: string]: DataType[] } = {
  os: osData,
  browser: browserData,
  country: countryData
}

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    minHeight: 40,
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const CardTabs = () => {
  // ** State
  const [value, setValue] = useState<string>('browser')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <CardContent sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
          <TabList
            variant='scrollable'
            scrollButtons='auto'
            onChange={handleChange}
            aria-label='customized tabs example'
          >
            <Tab value='browser' label='Browser' />
            <Tab value='os' label='Operating System' />
            <Tab value='country' label='Country' />
          </TabList>
        </CardContent>
        <TabPanel
          value={value}
          sx={{
            border: 0,
            boxShadow: 0,
            backgroundColor: 'transparent',
            p: theme => `${theme.spacing(0, 0, 3)} !important`
          }}
        >
          <TableContainer>
            <Table sx={{ '& th, & td': { border: 0 } }}>
              <TableHead sx={{ '& .MuiTableCell-root': { pt: 6.5, pb: 5.5 } }}>
                <TableRow>
                  <TableCell>
                    <Typography variant='body2' sx={{ fontWeight: 500 }}>
                      No.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body2' sx={{ fontWeight: 500 }}>
                      {value === 'browser' ? 'Browser' : value === 'os' ? 'System' : 'Country'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body2' sx={{ fontWeight: 500 }}>
                      Visits
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography noWrap variant='body2' sx={{ fontWeight: 500 }}>
                      Data in Percentage
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activeTabData[value].map((row: DataType, index: number) => (
                  <TableRow
                    key={index}
                    sx={{
                      '& .MuiTableCell-root': {
                        py: theme => [
                          `${theme.spacing(3.5)} !important`,
                          `${theme.spacing(3.5)} !important`,
                          `${theme.spacing(3.5)} !important`,
                          `${theme.spacing(3.25)} !important`
                        ]
                      }
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          width={24}
                          height={24}
                          src={row.src}
                          alt={value === 'browser' ? row.browser : value === 'os' ? row.system : row.country}
                        />
                        <Typography sx={{ ml: 3, color: 'text.secondary' }}>
                          {value === 'browser' ? row.browser : value === 'os' ? row.system : row.country}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>{row.visits}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LinearProgress
                          color={row.color}
                          variant='determinate'
                          value={row.percentage + 20}
                          sx={{ mr: 4, height: 9, width: '100%' }}
                        />
                        <Typography variant='body2' sx={{ fontWeight: 500 }}>
                          {`${row.percentage}%`}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default CardTabs
