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
import Divider from '@mui/material/Divider'
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
import { HelpCenterSubcategoriesType, HelpCenterSubcategoryArticlesType } from 'src/@fake-db/types'

interface Props {
  articles: HelpCenterSubcategoryArticlesType[]
  activeSubcategory: HelpCenterSubcategoriesType
  activeArticle: HelpCenterSubcategoryArticlesType
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

const HelpCenterArticle = ({ articles, activeArticle, activeSubcategory }: Props) => {
  // ** State
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tabValue, setTabValue] = useState<string>(activeArticle.slug)

  // ** Hooks
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setIsLoading(true)
    router
      .push({ pathname: `/pages/help-center/${router.query.category}/${router.query.subcategory}/${newValue}` })
      .then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (activeArticle && activeArticle.slug !== tabValue) {
      setTabValue(activeArticle.slug)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeArticle])

  const renderTabs = () => {
    return (
      articles &&
      articles.map((article: HelpCenterSubcategoryArticlesType) => (
        <Tab key={article.slug} value={article.slug} label={article.title} />
      ))
    )
  }

  const renderContent = () => (
    <TabPanel value={tabValue} sx={{ p: 0, border: 0, boxShadow: 0, width: '100%', backgroundColor: 'transparent' }}>
      <Card>
        <CardContent>
          <Link href={`/pages/help-center/${router.query.category}/${router.query.subcategory}`} passHref>
            <Button component='a' variant='outlined' startIcon={<Icon icon='bx:chevron-left' />}>
              Back to Categories
            </Button>
          </Link>

          <Box sx={{ mt: 6, mb: 6.5, display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' variant='rounded' color='secondary' sx={{ mr: 3 }}>
              <Icon icon={activeSubcategory.icon} />
            </CustomAvatar>
            <Typography variant='h6'>{activeArticle.title}</Typography>
          </Box>

          <Box
            sx={{ '& p': { color: 'text.secondary' } }}
            dangerouslySetInnerHTML={{ __html: activeArticle.content }}
          />
        </CardContent>
        <Divider sx={{ m: '0 !important' }} />
        <CardContent
          sx={{
            gap: 4,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              {activeArticle.title}
            </Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>55 People found this helpful</Typography>
            <div>
              <Button variant='outlined' sx={{ mr: 2.5, p: 1.5, minWidth: 32 }}>
                <Icon fontSize={18} icon='bx:like' />
              </Button>
              <Button variant='outlined' sx={{ p: 1.5, minWidth: 32 }}>
                <Icon fontSize={18} icon='bx:dislike' />
              </Button>
            </div>
          </div>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ mr: 1, fontWeight: 600 }}>Still need help?</Typography>
            <Link href='/' passHref>
              <Typography
                component='a'
                onClick={(e: SyntheticEvent) => e.preventDefault()}
                sx={{ fontWeight: 600, color: 'primary.main', textDecoration: 'none' }}
              >
                Contact us?
              </Typography>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </TabPanel>
  )

  return (
    <TabContext value={tabValue}>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'] }}>
        <Box sx={{ mr: [0, 0, 5], mb: [5, 5, 0], display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ mb: 4, fontWeight: 600 }}>
            {activeSubcategory.title}
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

export default HelpCenterArticle
