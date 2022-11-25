// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiAutocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'

// ** Type Import
import {
  HelpCenterCategoriesType,
  HelpCenterSubcategoriesType,
  HelpCenterSubcategoryArticlesType
} from 'src/@fake-db/types'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  data: HelpCenterCategoriesType[]
  allArticles: HelpCenterSubcategoryArticlesType[]
}

// Styled Autocomplete component
const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    paddingLeft: theme.spacing(3.5),
    backgroundColor: theme.palette.background.paper
  },
  [theme.breakpoints.up('sm')]: {
    width: '55%'
  }
}))

const HelpCenterLandingHeader = ({ data, allArticles }: Props) => {
  // ** States
  const [value, setValue] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  // ** Hooks & Vars
  const router = useRouter()

  const handleRedirection = (option: HelpCenterSubcategoryArticlesType) => {
    setOpen(false)
    setValue(option.title)
    let currentSubcategory: HelpCenterSubcategoriesType | null = null
    const currentCategory = data.find(category =>
      category.subCategories.find(subcategory =>
        subcategory.articles.find(article => {
          if (option.slug === article.slug) {
            currentSubcategory = subcategory
          }

          return option.slug === article.slug
        })
      )
    )

    if (currentSubcategory !== null) {
      router.push(
        `/pages/help-center/${currentCategory?.slug}/${(currentSubcategory as HelpCenterSubcategoriesType).slug}/${
          option.slug
        }`
      )
    }
  }

  return (
    <CardContent
      sx={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
        py: theme => `${theme.spacing(17.5)} !important`,
        backgroundImage: 'url(/images/pages/header.png)'
      }}
    >
      <Typography variant='h5' sx={{ mb: 8 }}>
        Hello, how can we help?
      </Typography>

      <Autocomplete
        open={open}
        disablePortal
        inputValue={value}
        options={allArticles}
        onClose={() => setOpen(false)}
        sx={{ '& + .MuiAutocomplete-popper .MuiAutocomplete-listbox': { maxHeight: 250 } }}
        getOptionLabel={(option: HelpCenterSubcategoryArticlesType | unknown) =>
          (option as HelpCenterSubcategoryArticlesType).title
        }
        isOptionEqualToValue={(option: HelpCenterSubcategoryArticlesType | unknown, value) =>
          value === (option as HelpCenterSubcategoryArticlesType).title
        }
        onChange={(event, option: HelpCenterSubcategoryArticlesType | unknown) =>
          handleRedirection(option as HelpCenterSubcategoryArticlesType)
        }
        onInputChange={(event, value: string) => {
          setValue(value)
          setOpen(!!(event.target as HTMLInputElement).value)
        }}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField
            {...params}
            value={value}
            placeholder='Search a question...'
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start' sx={{ color: 'text.secondary' }}>
                  <Icon icon='bx:search' />
                </InputAdornment>
              )
            }}
          />
        )}
        renderOption={(props, option: HelpCenterSubcategoryArticlesType | unknown) => {
          return value.length ? (
            <ListItem
              {...props}
              sx={{ p: '0 !important' }}
              key={(option as HelpCenterSubcategoryArticlesType).slug}
              onClick={() => handleRedirection(option as HelpCenterSubcategoryArticlesType)}
            >
              <ListItemButton sx={{ py: 1.5 }}>{(option as HelpCenterSubcategoryArticlesType).title}</ListItemButton>
            </ListItem>
          ) : null
        }}
      />

      <Typography sx={{ mt: 4, color: 'text.secondary' }}>
        Common troubleshooting topics: eCommerce, Blogging to payment
      </Typography>
    </CardContent>
  )
}

export default HelpCenterLandingHeader
