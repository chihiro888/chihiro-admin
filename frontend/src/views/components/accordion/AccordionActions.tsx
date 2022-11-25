// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import FormControlLabel from '@mui/material/FormControlLabel'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AccordionActions = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='actions-panel-header-1'
          aria-controls='actions-panel-content-1'
          expandIcon={<Icon icon='bx:chevron-down' />}
          sx={{ '& .MuiAccordionSummary-content': { my: 2, '&.Mui-expanded': { my: 2 } } }}
        >
          <FormControlLabel
            label='Accordion 1'
            aria-label='Acknowledge'
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={<Checkbox disableRipple size='small' />}
          />
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
          id='actions-panel-header-2'
          aria-controls='actions-panel-content-2'
          expandIcon={<Icon icon='bx:chevron-down' />}
          sx={{ '& .MuiAccordionSummary-content': { my: 2, '&.Mui-expanded': { my: 2 } } }}
        >
          <FormControlLabel
            label='Accordion 2'
            aria-label='Acknowledge'
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={<Checkbox disableRipple size='small' />}
          />
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
          id='actions-panel-header-3'
          aria-controls='actions-panel-content-3'
          expandIcon={<Icon icon='bx:chevron-down' />}
          sx={{ '& .MuiAccordionSummary-content': { my: 2, '&.Mui-expanded': { my: 2 } } }}
        >
          <FormControlLabel
            label='Accordion 3'
            aria-label='Acknowledge'
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={<Checkbox disableRipple size='small' />}
          />
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

export default AccordionActions
