// ** React Imports
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
