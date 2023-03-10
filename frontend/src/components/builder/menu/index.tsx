// ** React Import
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { ReactSortable } from 'react-sortablejs'

interface ConnectedAccountsType {
  title: string
  logo: string
  checked: boolean
  subtitle: string
}

interface SocialAccountsType {
  id: number
  title: string
  logo: string
  username?: string
  isConnected: boolean
}

const socialAccountsArr: SocialAccountsType[] = [
  {
    id: 1,
    title: 'Facebook',
    isConnected: false,
    logo: '/images/logos/facebook.png'
  },
  {
    id: 2,
    title: 'Twitter',
    isConnected: true,
    username: '@ThemeSelection',
    logo: '/images/logos/twitter.png'
  },
  {
    id: 3,
    title: 'Instagram',
    isConnected: true,
    username: '@ThemeSelection',
    logo: '/images/logos/instagram.png'
  },
  {
    id: 4,
    title: 'Dribbble',
    isConnected: false,
    logo: '/images/logos/dribbble.png'
  },
  {
    id: 5,
    title: 'Behance',
    isConnected: false,
    logo: '/images/logos/behance.png'
  }
]

const socialAccountsArr2: SocialAccountsType[] = []

const TabMenuBuilder = () => {
  const [list, setList] = useState(socialAccountsArr)
  const [list2, setList2] = useState(socialAccountsArr2)

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="유저 페이지" />
          <CardContent>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              Drag & Drop으로 관리자 페이지를 구성하세요
            </Typography>

            <ReactSortable
              list={list.map((x) => ({ ...x, chosen: true }))}
              setList={setList}
              animation={200}
              group={{
                name: 'U'
              }}
            >
              {list.map((account, idx) => {
                return (
                  <Box
                    key={account.title}
                    sx={{
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      '&:not(:last-of-type)': { mb: 4 }
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 3,
                          mr: 4,
                          display: 'flex'
                        }}
                      >
                        <img src={'/images/icons/drag.png'} height="20" />
                      </Box>
                      <Box
                        sx={{
                          mr: 4,
                          minWidth: 45,
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        <img
                          src={account.logo}
                          alt={account.title}
                          height="30"
                        />
                      </Box>
                      <div>
                        <Typography sx={{ fontWeight: 500 }}>
                          {account.title}
                        </Typography>
                        {account.isConnected ? (
                          <Typography
                            href="/"
                            component={Link}
                            sx={{ color: 'primary.main' }}
                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                          >
                            {account.username}
                          </Typography>
                        ) : (
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.disabled' }}
                          >
                            Not Connected
                          </Typography>
                        )}
                      </div>
                    </Box>
                    <Button
                      variant="outlined"
                      sx={{ p: 1.5, minWidth: 38 }}
                      color={account.isConnected ? 'error' : 'secondary'}
                    >
                      <Icon icon={'bx:trash-alt'} />
                    </Button>
                  </Box>
                )
              })}
            </ReactSortable>
          </CardContent>
        </Card>
      </Grid>
      {/* Social Accounts Cards */}
      <Grid item xs={6}>
        <Card>
          <CardHeader title="유저 페이지" />
          <CardContent>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              Drag & Drop으로 관리자 페이지를 구성하세요
            </Typography>

            <ReactSortable
              group={{
                name: 'U'
              }}
              list={list2.map((x) => ({ ...x, chosen: true }))}
              setList={setList2}
              animation={200}
            >
              {list2.map((account, idx) => {
                return (
                  <Box
                    key={account.title}
                    sx={{
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      '&:not(:last-of-type)': { mb: 4 }
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 3,
                          mr: 4,
                          display: 'flex'
                        }}
                      >
                        <img src={'/images/icons/drag.png'} height="20" />
                      </Box>
                      <Box
                        sx={{
                          mr: 4,
                          minWidth: 45,
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        <img
                          src={account.logo}
                          alt={account.title}
                          height="30"
                        />
                      </Box>
                      <div>
                        <Typography sx={{ fontWeight: 500 }}>
                          {account.title}
                        </Typography>
                        {account.isConnected ? (
                          <Typography
                            href="/"
                            component={Link}
                            sx={{ color: 'primary.main' }}
                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                          >
                            {account.username}
                          </Typography>
                        ) : (
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.disabled' }}
                          >
                            Not Connected
                          </Typography>
                        )}
                      </div>
                    </Box>
                    <Button
                      variant="outlined"
                      sx={{ p: 1.5, minWidth: 38 }}
                      color={account.isConnected ? 'error' : 'secondary'}
                    >
                      <Icon icon={'bx:trash-alt'} />
                    </Button>
                  </Box>
                )
              })}
            </ReactSortable>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabMenuBuilder
