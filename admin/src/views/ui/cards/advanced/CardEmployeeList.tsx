// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  src: string
  name: string
  totalHours: number
  chartValue: number
  designation: string
  completedHours: number
  chartColor?: ThemeColor
}

const data: DataType[] = [
  {
    chartValue: 85,
    name: 'Alberta',
    totalHours: 138,
    completedHours: 100,
    chartColor: 'secondary',
    designation: 'UI Designer',
    src: '/images/avatars/20.png'
  },
  {
    name: 'Paul',
    chartValue: 70,
    totalHours: 149,
    completedHours: 121,
    chartColor: 'warning',
    designation: 'Branding',
    src: '/images/avatars/3.png'
  },
  {
    name: 'Nannie',
    chartValue: 25,
    totalHours: 160,
    completedHours: 112,
    designation: 'iOS Developer',
    src: '/images/avatars/15.png'
  },
  {
    name: 'Rodney',
    chartValue: 75,
    totalHours: 166,
    chartColor: 'error',
    completedHours: 125,
    designation: 'iOS Developer',
    src: '/images/avatars/14.png'
  },
  {
    name: 'Martin',
    totalHours: 89,
    chartValue: 60,
    chartColor: 'info',
    completedHours: 76,
    src: '/images/avatars/7.png',
    designation: 'Product Designer'
  },
  {
    name: 'Wallet',
    totalHours: 45,
    chartValue: 45,
    completedHours: 22,
    chartColor: 'warning',
    designation: 'PHP Developer',
    src: '/images/avatars/18.png'
  }
]

const CardEmployeeList = () => {
  return (
    <Card>
      <CardHeader
        title='Employee List'
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Update']} />}
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 6 : undefined
              }}
            >
              <Avatar src={item.src} variant='rounded' sx={{ mr: 3.5, width: 38, height: 38 }} />
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    mr: 5,
                    flexGrow: 1,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ mb: 0.5, fontWeight: 500 }}>{item.name}</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      {item.designation}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {`${item.completedHours}h:`}
                    <Typography component='span' sx={{ ml: 1.5, color: 'text.disabled' }}>
                      {`${item.totalHours}h`}
                    </Typography>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
                  <CircularProgress
                    size={32}
                    value={100}
                    thickness={5}
                    variant='determinate'
                    sx={{ right: 0, position: 'absolute', color: 'customColors.trackBg' }}
                  />
                  <CircularProgress
                    size={32}
                    thickness={5}
                    variant='determinate'
                    value={item.chartValue}
                    color={item.chartColor || 'primary'}
                  />
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardEmployeeList
