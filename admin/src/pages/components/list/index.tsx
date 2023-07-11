// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import ListUsers from 'src/views/components/list/ListUsers'
import ListDense from 'src/views/components/list/ListDense'
import ListSimple from 'src/views/components/list/ListSimple'
import ListNested from 'src/views/components/list/ListNested'
import ListProgress from 'src/views/components/list/ListProgress'
import ListSecondary from 'src/views/components/list/ListSecondary'
import ListWithSwitch from 'src/views/components/list/ListWithSwitch'
import ListItemSelected from 'src/views/components/list/ListItemSelected'
import ListWithCheckbox from 'src/views/components/list/ListWithCheckbox'
import ListStickySubheader from 'src/views/components/list/ListStickySubheader'

// ** Source code imports
import * as source from 'src/views/components/list/ListSourceCode'

const Lists = () => {
  return (
    <Grid className='match-height' container spacing={6}>
      <Grid item xs={12} md={6}>
        <CardSnippet
          id='simple-list'
          title='Simple List'
          code={{
            tsx: source.ListSimpleTSXCode,
            jsx: source.ListSimpleJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>Lists are a continuous group of text or images.</Typography>
          <ListSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Nested List'
          code={{
            tsx: source.ListNestedTSXCode,
            jsx: source.ListNestedJSXCode
          }}
        >
          <ListNested />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Dense List'
          code={{
            tsx: source.ListDenseTSXCode,
            jsx: source.ListDenseJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Use <code>dense</code> prop with <code>&lt;List&gt;</code> component for dense list.
          </Typography>
          <ListDense />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='List with Secondary Text'
          code={{
            tsx: source.ListSecondaryTSXCode,
            jsx: source.ListSecondaryJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Use <code>secondary</code> prop with <code>&lt;ListItemText&gt;</code> component for secondary text.
          </Typography>
          <ListSecondary />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Selected List Item'
          code={{
            tsx: source.ListItemSelectedTSXCode,
            jsx: source.ListItemSelectedJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Manage <code>selected</code> prop with the help of a state.
          </Typography>
          <ListItemSelected />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='List with Checkbox'
          code={{
            tsx: source.ListWithCheckboxTSXCode,
            jsx: source.ListWithCheckboxJSXCode
          }}
        >
          <ListWithCheckbox />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='List with Switch'
          code={{
            tsx: source.ListWithSwitchTSXCode,
            jsx: source.ListWithSwitchJSXCode
          }}
        >
          <ListWithSwitch />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Sticky Subheader'
          code={{
            tsx: source.ListWithSwitchTSXCode,
            jsx: source.ListWithSwitchJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            <code>&lt;ListSubheader&gt;</code> is by default sticky.
          </Typography>
          <ListStickySubheader />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Users List'
          code={{
            tsx: source.ListUsersTSXCode,
            jsx: source.ListUsersJSXCode
          }}
        >
          <ListUsers />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Progress List'
          code={{
            tsx: source.ListUsersTSXCode,
            jsx: source.ListUsersJSXCode
          }}
        >
          <ListProgress />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Lists
