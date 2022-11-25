// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Import
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import { HelpCenterCategoriesType } from 'src/@fake-db/types'

const HelpCenterLandingKnowledgeBase = ({ categories }: { categories: HelpCenterCategoriesType[] }) => {
  const renderCategories = () => {
    if (categories && categories.length) {
      return categories.map(category => {
        const totalArticles = category.subCategories
          .map(subCategory => subCategory.articles.length)
          .reduce((partialSum, a) => partialSum + a, 0)

        return (
          <Grid item xs={12} sm={6} md={4} key={category.slug}>
            <Box
              sx={{
                p: 5,
                boxShadow: 6,
                height: '100%',
                display: 'flex',
                borderRadius: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
                backgroundColor: 'background.paper'
              }}
            >
              <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                <CustomAvatar
                  skin='light'
                  variant='rounded'
                  color={category.avatarColor}
                  sx={{ mr: 3, height: 34, width: 34 }}
                >
                  <Icon icon={category.icon} />
                </CustomAvatar>
                <Link href={`/pages/help-center/${category.slug}/${category.subCategories[0].slug}`} passHref>
                  <Typography
                    variant='h6'
                    component='a'
                    sx={{ fontWeight: 600, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    {category.title}
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {category.subCategories.map(subcategory => (
                  <Link
                    passHref
                    key={subcategory.title}
                    href={`/pages/help-center/${category.slug}/${subcategory.slug}`}
                  >
                    <Box
                      component='a'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        '&:not(:last-of-type)': { mb: 2 },
                        '& svg': { color: 'primary.main' }
                      }}
                    >
                      <Box sx={{ display: 'flex' }}>
                        <Icon icon='mdi:circle-small' />
                      </Box>
                      <Typography sx={{ color: 'primary.main' }}>{subcategory.title}</Typography>
                    </Box>
                  </Link>
                ))}
              </Box>
              <Link href={`/pages/help-center/${category.slug}/${category.subCategories[0].slug}`} passHref>
                <Typography
                  component='a'
                  sx={{ mt: 'auto', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  {`${totalArticles} Articles`}
                </Typography>
              </Link>
            </Box>
          </Grid>
        )
      })
    } else {
      return null
    }
  }

  return (
    <Grid container spacing={6}>
      {renderCategories()}
    </Grid>
  )
}

export default HelpCenterLandingKnowledgeBase
