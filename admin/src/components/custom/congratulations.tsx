// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    order: -1,
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  right: 60,
  bottom: -1,
  height: 170,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    position: 'static'
  }
}))

const Congratulations = () => {
  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ py: (theme) => `${theme.spacing(5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} sx={{ textAlign: ['center', 'start'] }}>
            <Typography variant="h5" sx={{ mb: 4, color: 'primary.main' }}>
              관리자 솔루션 🚀
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              전체적인 서비스를 관리할 수 있습니다.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              심플하고 세런된 UI/UX로 좀 더 편리하게
            </Typography>
            <Typography sx={{ mb: 3, color: 'text.secondary' }}>
              서비스를 쉽게 관리하세요!
            </Typography>
            {/* <Button
              size="small"
              variant="outlined"
              onClick={() => router.push('/settings/')}
            >
              키-값 설정 하러가기
            </Button> */}
          </Grid>
          <StyledGrid item xs={12} sm={6}>
            <Img
              alt="Congratulations John"
              src={`/images/cards/illustration-john-${theme.palette.mode}.png`}
            />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Congratulations
