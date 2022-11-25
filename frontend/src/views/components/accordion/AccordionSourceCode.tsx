export const AccordionIconsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

const AccordionIcons = () => {
  // ** State
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
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
`}</code>
  </pre>
)

export const AccordionActionsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

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
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
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
`}</code>
  </pre>
)

export const AccordionCustomizedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled component for Accordion component
const Accordion = styled(MuiAccordion)(({ theme }) => ({
  margin: 0,
  borderRadius: 0,
  boxShadow: 'none !important',
  border:
    theme.palette.mode === 'light' ? 1px solid {theme.palette.grey[300]} : 1px solid {theme.palette.divider},
  '&:not(:last-of-type)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    '& .MuiButtonBase-root': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    }
  },
  '&:last-of-type': {
    '& .MuiAccordionSummary-root:not(.Mui-expanded)': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }
}))

// Styled component for AccordionSummary component
const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  marginBottom: -1,
  padding: theme.spacing(0, 4),
  minHeight: theme.spacing(12),
  transition: 'min-height 0.15s ease-in-out',
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
  borderBottom:
    theme.palette.mode === 'light' ? 1px solid {theme.palette.grey[300]} : 1px solid {theme.palette.divider},
  '&.Mui-expanded': {
    minHeight: theme.spacing(12)
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '12px 0'
  },
  '& .MuiTypography-root': {
    fontWeight: 400
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.secondary
  }
}))

// Styled component for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: {theme.spacing(4)} !important
}))

const AccordionCustomized = () => {
  // ** State
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const expandIcon = value => <Icon icon={expanded === value ? 'bx:minus' : 'bx:plus'} />

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='customized-panel-header-1'
          expandIcon={expandIcon('panel1')}
          aria-controls='customized-panel-content-1'
        >
          <Typography>Accordion 1</Typography>
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
          id='customized-panel-header-2'
          expandIcon={expandIcon('panel2')}
          aria-controls='customized-panel-content-2'
        >
          <Typography>Accordion 2</Typography>
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
          id='customized-panel-header-3'
          expandIcon={expandIcon('panel3')}
          aria-controls='customized-panel-content-3'
        >
          <Typography>Accordion 3</Typography>
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

export default AccordionCustomized
`}</code>
  </pre>
)

export const AccordionControlledJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AccordionControlled = () => {
  // ** State
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='controlled-panel-header-1'
          aria-controls='controlled-panel-content-1'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 1</Typography>
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
          id='controlled-panel-header-2'
          aria-controls='controlled-panel-content-2'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 2</Typography>
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
          id='controlled-panel-header-3'
          aria-controls='controlled-panel-content-3'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 3</Typography>
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

export default AccordionControlled
`}</code>
  </pre>
)

export const AccordionSimpleJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AccordionSimple = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id='panel-header-1'
          aria-controls='panel-content-1'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id='panel-header-2'
          aria-controls='panel-content-2'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id='panel-header-3'
          aria-controls='panel-content-3'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 3</Typography>
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

export default AccordionSimple
`}</code>
  </pre>
)

export const AccordionControlledTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AccordionControlled = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='controlled-panel-header-1'
          aria-controls='controlled-panel-content-1'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 1</Typography>
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
          id='controlled-panel-header-2'
          aria-controls='controlled-panel-content-2'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 2</Typography>
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
          id='controlled-panel-header-3'
          aria-controls='controlled-panel-content-3'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 3</Typography>
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

export default AccordionControlled
`}</code>
  </pre>
)

export const AccordionActionsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
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
`}</code>
  </pre>
)

export const AccordionCustomizedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled component for Accordion component
const Accordion = styled(MuiAccordion)<AccordionProps>(({ theme }) => ({
  margin: 0,
  borderRadius: 0,
  boxShadow: 'none !important',
  border:
    theme.palette.mode === 'light' ? 1px solid {theme.palette.grey[300]} : 1px solid {theme.palette.divider},
  '&:not(:last-of-type)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    '& .MuiButtonBase-root': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    }
  },
  '&:last-of-type': {
    '& .MuiAccordionSummary-root:not(.Mui-expanded)': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }
}))

// Styled component for AccordionSummary component
const AccordionSummary = styled(MuiAccordionSummary)<AccordionSummaryProps>(({ theme }) => ({
  marginBottom: -1,
  padding: theme.spacing(0, 4),
  minHeight: theme.spacing(12),
  transition: 'min-height 0.15s ease-in-out',
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
  borderBottom:
    theme.palette.mode === 'light' ? 1px solid {theme.palette.grey[300]} : 1px solid {theme.palette.divider},
  '&.Mui-expanded': {
    minHeight: theme.spacing(12)
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '12px 0'
  },
  '& .MuiTypography-root': {
    fontWeight: 400
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.secondary
  }
}))

// Styled component for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)<AccordionDetailsProps>(({ theme }) => ({
  padding: {theme.spacing(4)} !important
}))

const AccordionCustomized = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const expandIcon = (value: string) => <Icon icon={expanded === value ? 'bx:minus' : 'bx:plus'} />

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='customized-panel-header-1'
          expandIcon={expandIcon('panel1')}
          aria-controls='customized-panel-content-1'
        >
          <Typography>Accordion 1</Typography>
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
          id='customized-panel-header-2'
          expandIcon={expandIcon('panel2')}
          aria-controls='customized-panel-content-2'
        >
          <Typography>Accordion 2</Typography>
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
          id='customized-panel-header-3'
          expandIcon={expandIcon('panel3')}
          aria-controls='customized-panel-content-3'
        >
          <Typography>Accordion 3</Typography>
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

export default AccordionCustomized
`}</code>
  </pre>
)

export const AccordionIconsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
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
`}</code>
  </pre>
)

export const AccordionSimpleTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AccordionSimple = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id='panel-header-1'
          aria-controls='panel-content-1'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id='panel-header-2'
          aria-controls='panel-content-2'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id='panel-header-3'
          aria-controls='panel-content-3'
          expandIcon={<Icon icon='bx:chevron-down' />}
        >
          <Typography>Accordion 3</Typography>
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

export default AccordionSimple
`}</code>
  </pre>
)
