// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

const AccordionIcons = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='panel-header-1'
          aria-controls='panel-content-1'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Icon icon='bx:bar-chart' fontSize={20} />
          <Typography sx={{ ml: 2 }}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='panel-header-2'
          aria-controls='panel-content-2'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Icon icon='bx:briefcase' fontSize={20} />
          <Typography sx={{ ml: 2 }}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='panel-header-3'
          aria-controls='panel-content-3'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Icon icon='bx:gift' fontSize={20} />
          <Typography sx={{ ml: 2 }}>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionIcons
