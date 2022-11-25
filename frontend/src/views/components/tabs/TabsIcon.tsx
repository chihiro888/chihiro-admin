// ** React Imports
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
