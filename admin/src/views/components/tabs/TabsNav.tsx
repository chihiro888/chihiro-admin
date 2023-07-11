// ** React Imports
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
    <TabsWrapper panelTopRound="right">
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="nav tabs example">
          <Tab
            value="1"
            component="a"
            label="Tab 1"
            href="/drafts"
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          />
          <Tab
            value="2"
            component="a"
            label="Tab 2"
            href="/trash"
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          />
          <Tab
            value="3"
            component="a"
            label="Tab 3"
            href="/spam"
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          />
        </TabList>
      </TabContext>
    </TabsWrapper>
  )
}

export default TabsNav
