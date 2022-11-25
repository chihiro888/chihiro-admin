// ** React Imports
import { SyntheticEvent, useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Import
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import {
  HelpCenterCategoriesType,
  HelpCenterSubcategoriesType,
  HelpCenterSubcategoryArticlesType
} from 'src/@fake-db/types'

interface Props {
  activeTab: string
  data: HelpCenterCategoriesType
}

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  border: 0,
  marginRight: 0,
  overflow: 'visible',
  '& .MuiTabs-flexContainer': {
    flexDirection: 'column'
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 40,
    textAlign: 'start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: theme.shape.borderRadius,
    '& svg': {
      marginBottom: 0,
      marginRight: theme.spacing(1)
    },
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
      maxWidth: '100%'
    }
  }
}))

const HelpCenterSubcategory = ({ data, activeTab }: Props) => {
  // ** State
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tabValue, setTabValue] = useState<string>(activeTab)

  // ** Hook
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setIsLoading(true)
    router.push(`/pages/help-center/${data.slug}/${newValue}`).then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (activeTab && activeTab !== tabValue) {
      setTabValue(activeTab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const renderTabs = () => {
    return (
      data &&
      data.subCategories.map((tab: HelpCenterSubcategoriesType) => (
        <Tab key={tab.slug} value={tab.slug} label={tab.title} />
      ))
    )
  }

  const renderContent = () => {
    const dataToRender = data.subCategories.filter((item: HelpCenterSubcategoriesType) => item.slug === tabValue)[0]

    return (
      <TabPanel value={tabValue} sx={{ p: 0, border: 0, boxShadow: 0, width: '100%', backgroundColor: 'transparent' }}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3 }}>
                <Icon icon={dataToRender.icon} />
              </CustomAvatar>
              <Typography variant='h5' sx={{ fontWeight: 600 }}>
                {dataToRender.title}
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              {dataToRender.articles.map((article: HelpCenterSubcategoryArticlesType) => {
                return (
                  <Box
                    key={article.title}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:not(:last-of-type)': { mb: 4 },
                      '& svg': { color: 'text.disabled' }
                    }}
                  >
                    <Icon icon='bx:chevron-right' />
                    <Link href={`/pages/help-center/${data.slug}/${activeTab}/${article.slug}`} passHref>
                      <Typography component='a' sx={{ ml: 1.5, color: 'primary.main', textDecoration: 'none' }}>
                        {article.title}
                      </Typography>
                    </Link>
                  </Box>
                )
              })}
            </Box>

            <Link href='/pages/help-center' passHref>
              <Button component='a' variant='outlined' startIcon={<Icon icon='bx:chevron-left' />}>
                Back to help center
              </Button>
            </Link>
          </CardContent>
        </Card>
      </TabPanel>
    )
  }

  return (
    <TabContext value={tabValue}>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'] }}>
        <Box sx={{ mr: [0, 0, 5], mb: [5, 5, 0], display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ mb: 4, fontWeight: 600 }}>
            {data.title}
          </Typography>
          <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>
            {renderTabs()}
          </TabList>
        </Box>
        {isLoading ? (
          <Box sx={{ mt: 11, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          renderContent()
        )}
      </Box>
    </TabContext>
  )
}

export default HelpCenterSubcategory
