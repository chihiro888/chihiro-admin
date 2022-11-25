export const TabsCenteredJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsCentered = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='both'>
      <TabContext value={value}>
        <TabList centered onChange={handleChange} aria-label='centered tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab value='3' label='Tab 3' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsCentered
`}</code>
  </pre>
)

export const TabsCustomizedVerticalJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList from '@mui/lab/TabList'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

// Styled TabList component
const TabList = styled(MuiTabList)(({ theme }) => ({
  minHeight: 40,
  marginRight: theme.spacing(4),
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

const TabsCustomizedVertical = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelLeftRound='both' orientation='vertical'>
      <TabContext value={value}>
        <Box sx={{ display: 'flex' }}>
          <TabList orientation='vertical' onChange={handleChange} aria-label='customized vertical tabs example'>
            <Tab value='1' label='Tab 1' />
            <Tab value='2' label='Tab 2' />
            <Tab value='3' label='Tab 3' />
          </TabList>
          <TabPanel value='1'>
            <Typography>
              Muffin shortbread biscuit powder bonbon pie cheesecake macaroon. Muffin sesame snaps toffee marzipan
              candy. Sesame snaps tiramisu apple pie tart marshmallow marzipan toffee chocolate bar. Caramels donut ice
              cream cotton candy candy sesame snaps. Muffin halvah powder topping candy canes sugar plum.
            </Typography>
          </TabPanel>
          <TabPanel value='2'>
            <Typography>
              Brownie cake jujubes pudding caramels. Biscuit powder dragée chocolate bar caramels tiramisu soufflé.
              Danish apple pie sweet roll donut cookie. Sweet roll donut cake dessert donut liquorice dessert. Cake bear
              claw cake gummi bears gingerbread tart pie marzipan. Shortbread shortbread cake danish dragée powder.
            </Typography>
          </TabPanel>
          <TabPanel value='3'>
            <Typography>
              Cheesecake fruitcake chocolate donut bear claw tiramisu powder. Wafer caramels oat cake chocolate cake
              pastry soufflé. Ice cream chupa chups cotton candy carrot cake sugar plum cake carrot cake cookie bear
              claw. Carrot cake cotton candy sweet roll liquorice lemon drops lemon drops ice cream jelly beans
              fruitcake.
            </Typography>
          </TabPanel>
        </Box>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsCustomizedVertical
`}</code>
  </pre>
)

export const TabsCustomizedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList from '@mui/lab/TabList'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

// Styled TabList component
const TabList = styled(MuiTabList)(({ theme }) => ({
  minHeight: 40,
  marginBottom: theme.spacing(4),
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

const TabsCustomized = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='both'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='customized tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab value='3' label='Tab 3' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsCustomized
`}</code>
  </pre>
)

export const TabsForcedScrollJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsForcedScroll = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='both'>
      <TabContext value={value}>
        <TabList scrollButtons variant='scrollable' onChange={handleChange} aria-label='forced scroll tabs example'>
          <Tab value='1' label='Tab 1' icon={<Icon icon='bx:phone' />} />
          <Tab value='2' label='Tab 2' icon={<Icon icon='bx:heart' />} />
          <Tab value='3' label='Tab 3' icon={<Icon icon='bx:like' />} />
          <Tab value='4' label='Tab 4' icon={<Icon icon='bx:user-circle' />} />
          <Tab value='5' label='Tab 5' icon={<Icon icon='bx:dislike' />} />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
        <TabPanel value='4'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='5'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsForcedScroll
`}</code>
  </pre>
)

export const TabsFullWidthJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsFullWidth = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper>
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab value='3' label='Tab 3' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsFullWidth
`}</code>
  </pre>
)

export const TabsNavJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsNav = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='nav tabs example'>
          <Tab value='1' component='a' label='Tab 1' href='/drafts' onClick={e => e.preventDefault()} />
          <Tab value='2' component='a' label='Tab 2' href='/trash' onClick={e => e.preventDefault()} />
          <Tab value='3' component='a' label='Tab 3' href='/spam' onClick={e => e.preventDefault()} />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsNav
`}</code>
  </pre>
)

export const TabsColorJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsColor = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList
          textColor='secondary'
          onChange={handleChange}
          indicatorColor='secondary'
          aria-label='secondary tabs example'
        >
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab disabled value='3' label='Disabled' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsColor
`}</code>
  </pre>
)

export const TabsIconJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsIcon = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='icon tabs example'>
          <Tab value='1' label='Recent' icon={<Icon icon='bx:phone' />} />
          <Tab value='2' label='Favorites' icon={<Icon icon='bx:heart' />} />
          <Tab value='3' label='Contacts' icon={<Icon icon='bx:user' />} />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsIcon
`}</code>
  </pre>
)

export const TabsVerticalJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsVertical = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper orientation='vertical' panelLeftRound='bottom'>
      <TabContext value={value}>
        <Box sx={{ display: 'flex' }}>
          <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>
            <Tab value='1' label='Tab 1' />
            <Tab value='2' label='Tab 2' />
            <Tab value='3' label='Tab 3' />
          </TabList>
          <TabPanel value='1'>
            <Typography>
              Muffin shortbread biscuit powder bonbon pie cheesecake macaroon. Muffin sesame snaps toffee marzipan
              candy. Sesame snaps tiramisu apple pie tart marshmallow marzipan toffee chocolate bar. Caramels donut ice
              cream cotton candy candy sesame snaps. Muffin halvah powder topping candy canes sugar plum.
            </Typography>
          </TabPanel>
          <TabPanel value='2'>
            <Typography>
              Brownie cake jujubes pudding caramels. Biscuit powder dragée chocolate bar caramels tiramisu soufflé.
              Danish apple pie sweet roll donut cookie. Sweet roll donut cake dessert donut liquorice dessert. Cake bear
              claw cake gummi bears gingerbread tart pie marzipan. Shortbread shortbread cake danish dragée powder.
            </Typography>
          </TabPanel>
          <TabPanel value='3'>
            <Typography>
              Cheesecake fruitcake chocolate donut bear claw tiramisu powder. Wafer caramels oat cake chocolate cake
              pastry soufflé. Ice cream chupa chups cotton candy carrot cake sugar plum cake carrot cake cookie bear
              claw. Carrot cake cotton candy sweet roll liquorice lemon drops lemon drops ice cream jelly beans
              fruitcake.
            </Typography>
          </TabPanel>
        </Box>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsVertical
`}</code>
  </pre>
)

export const TabsSimpleJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsSimple = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='simple tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab disabled value='3' label='Disabled' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsSimple
`}</code>
  </pre>
)

export const TabsCenteredTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsCentered = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='both'>
      <TabContext value={value}>
        <TabList centered onChange={handleChange} aria-label='centered tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab value='3' label='Tab 3' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsCentered
`}</code>
  </pre>
)

export const TabsColorTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsColor = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList
          textColor='secondary'
          onChange={handleChange}
          indicatorColor='secondary'
          aria-label='secondary tabs example'
        >
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab disabled value='3' label='Disabled' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsColor
`}</code>
  </pre>
)

export const TabsCustomizedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  marginBottom: theme.spacing(4),
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

const TabsCustomized = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='both'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='customized tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab value='3' label='Tab 3' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsCustomized
`}</code>
  </pre>
)

export const TabsCustomizedVerticalTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  marginRight: theme.spacing(4),
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

const TabsCustomizedVertical = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelLeftRound='both' orientation='vertical'>
      <TabContext value={value}>
        <Box sx={{ display: 'flex' }}>
          <TabList orientation='vertical' onChange={handleChange} aria-label='customized vertical tabs example'>
            <Tab value='1' label='Tab 1' />
            <Tab value='2' label='Tab 2' />
            <Tab value='3' label='Tab 3' />
          </TabList>
          <TabPanel value='1'>
            <Typography>
              Muffin shortbread biscuit powder bonbon pie cheesecake macaroon. Muffin sesame snaps toffee marzipan
              candy. Sesame snaps tiramisu apple pie tart marshmallow marzipan toffee chocolate bar. Caramels donut ice
              cream cotton candy candy sesame snaps. Muffin halvah powder topping candy canes sugar plum.
            </Typography>
          </TabPanel>
          <TabPanel value='2'>
            <Typography>
              Brownie cake jujubes pudding caramels. Biscuit powder dragée chocolate bar caramels tiramisu soufflé.
              Danish apple pie sweet roll donut cookie. Sweet roll donut cake dessert donut liquorice dessert. Cake bear
              claw cake gummi bears gingerbread tart pie marzipan. Shortbread shortbread cake danish dragée powder.
            </Typography>
          </TabPanel>
          <TabPanel value='3'>
            <Typography>
              Cheesecake fruitcake chocolate donut bear claw tiramisu powder. Wafer caramels oat cake chocolate cake
              pastry soufflé. Ice cream chupa chups cotton candy carrot cake sugar plum cake carrot cake cookie bear
              claw. Carrot cake cotton candy sweet roll liquorice lemon drops lemon drops ice cream jelly beans
              fruitcake.
            </Typography>
          </TabPanel>
        </Box>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsCustomizedVertical
`}</code>
  </pre>
)

export const TabsForcedScrollTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsForcedScroll = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='both'>
      <TabContext value={value}>
        <TabList scrollButtons variant='scrollable' onChange={handleChange} aria-label='forced scroll tabs example'>
          <Tab value='1' label='Tab 1' icon={<Icon icon='bx:phone' />} />
          <Tab value='2' label='Tab 2' icon={<Icon icon='bx:heart' />} />
          <Tab value='3' label='Tab 3' icon={<Icon icon='bx:like' />} />
          <Tab value='4' label='Tab 4' icon={<Icon icon='bx:user-circle' />} />
          <Tab value='5' label='Tab 5' icon={<Icon icon='bx:dislike' />} />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
        <TabPanel value='4'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='5'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsForcedScroll
`}</code>
  </pre>
)

export const TabsIconTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsIcon = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='icon tabs example'>
          <Tab value='1' label='Recent' icon={<Icon icon='bx:phone' />} />
          <Tab value='2' label='Favorites' icon={<Icon icon='bx:heart' />} />
          <Tab value='3' label='Contacts' icon={<Icon icon='bx:user' />} />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsIcon
`}</code>
  </pre>
)

export const TabsNavTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { MouseEvent, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsNav = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='nav tabs example'>
          <Tab
            value='1'
            component='a'
            label='Tab 1'
            href='/drafts'
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          />
          <Tab
            value='2'
            component='a'
            label='Tab 2'
            href='/trash'
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          />
          <Tab
            value='3'
            component='a'
            label='Tab 3'
            href='/spam'
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsNav
`}</code>
  </pre>
)

export const TabsFullWidthTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsFullWidth = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper>
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab value='3' label='Tab 3' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsFullWidth
`}</code>
  </pre>
)

export const TabsSimpleTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsSimple = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper panelTopRound='right'>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='simple tabs example'>
          <Tab value='1' label='Tab 1' />
          <Tab value='2' label='Tab 2' />
          <Tab disabled value='3' label='Disabled' />
        </TabList>
        <TabPanel value='1'>
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
            jelly cake caramels brownie gummies.
          </Typography>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
            sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
            carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsSimple
`}</code>
  </pre>
)

export const TabsVerticalTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import TabsWrapper from 'src/@core/styles/mui/TabsWrapper'

const TabsVertical = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabsWrapper orientation='vertical' panelLeftRound='bottom'>
      <TabContext value={value}>
        <Box sx={{ display: 'flex' }}>
          <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>
            <Tab value='1' label='Tab 1' />
            <Tab value='2' label='Tab 2' />
            <Tab value='3' label='Tab 3' />
          </TabList>
          <TabPanel value='1'>
            <Typography>
              Muffin shortbread biscuit powder bonbon pie cheesecake macaroon. Muffin sesame snaps toffee marzipan
              candy. Sesame snaps tiramisu apple pie tart marshmallow marzipan toffee chocolate bar. Caramels donut ice
              cream cotton candy candy sesame snaps. Muffin halvah powder topping candy canes sugar plum.
            </Typography>
          </TabPanel>
          <TabPanel value='2'>
            <Typography>
              Brownie cake jujubes pudding caramels. Biscuit powder dragée chocolate bar caramels tiramisu soufflé.
              Danish apple pie sweet roll donut cookie. Sweet roll donut cake dessert donut liquorice dessert. Cake bear
              claw cake gummi bears gingerbread tart pie marzipan. Shortbread shortbread cake danish dragée powder.
            </Typography>
          </TabPanel>
          <TabPanel value='3'>
            <Typography>
              Cheesecake fruitcake chocolate donut bear claw tiramisu powder. Wafer caramels oat cake chocolate cake
              pastry soufflé. Ice cream chupa chups cotton candy carrot cake sugar plum cake carrot cake cookie bear
              claw. Carrot cake cotton candy sweet roll liquorice lemon drops lemon drops ice cream jelly beans
              fruitcake.
            </Typography>
          </TabPanel>
        </Box>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsVertical
`}</code>
  </pre>
)
