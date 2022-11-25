// ** MUI Imports
import Box from '@mui/material/Box'
import TreeView from '@mui/lab/TreeView'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TreeItem, { TreeItemProps } from '@mui/lab/TreeItem'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

interface Props {
  direction: 'ltr' | 'rtl'
}

type StyledTreeItemProps = TreeItemProps & {
  labelText: string
  labelIcon: string
  labelInfo?: string
}

// Styled TreeItem component
const StyledTreeItemRoot = styled(TreeItem)<TreeItemProps>(({ theme }) => ({
  '&:hover > .MuiTreeItem-content:not(.Mui-selected)': {
    backgroundColor: theme.palette.action.hover
  },
  '& .MuiTreeItem-content': {
    paddingRight: theme.spacing(3),
    borderTopRightRadius: theme.spacing(4),
    borderBottomRightRadius: theme.spacing(4),
    fontWeight: theme.typography.fontWeightMedium
  },
  '& .MuiTreeItem-label': {
    fontWeight: 'inherit',
    paddingRight: theme.spacing(3)
  },
  '& .MuiTreeItem-group': {
    marginLeft: 0,
    '& .MuiTreeItem-content': {
      paddingLeft: theme.spacing(4),
      fontWeight: theme.typography.fontWeightRegular
    }
  }
}))

const StyledTreeItem = (props: StyledTreeItemProps) => {
  // ** Props
  const { labelText, labelIcon, labelInfo, ...other } = props

  return (
    <StyledTreeItemRoot
      {...other}
      label={
        <Box sx={{ py: 1, display: 'flex', alignItems: 'center', '& svg': { mr: 1 } }}>
          <Icon icon={labelIcon} color='inherit' />
          <Typography variant='body2' sx={{ flexGrow: 1, fontWeight: 'inherit' }}>
            {labelText}
          </Typography>
          {labelInfo ? (
            <Typography variant='caption' color='inherit'>
              {labelInfo}
            </Typography>
          ) : null}
        </Box>
      }
    />
  )
}

const TreeViewGmailClone = ({ direction }: Props) => {
  const ExpandIcon = (
    <Box sx={{ display: 'flex' }}>
      <Icon icon={direction === 'rtl' ? 'bx:chevron-left' : 'bx:chevron-right'} />
    </Box>
  )

  return (
    <TreeView
      sx={{ minHeight: 240 }}
      defaultExpanded={['3']}
      defaultExpandIcon={ExpandIcon}
      defaultCollapseIcon={
        <Box sx={{ display: 'flex' }}>
          <Icon icon='bx:chevron-down' />
        </Box>
      }
    >
      <StyledTreeItem nodeId='1' labelText='All Mail' labelIcon='bx:envelope' />
      <StyledTreeItem nodeId='2' labelText='Trash' labelIcon='bx:trash-alt' />
      <StyledTreeItem nodeId='3' labelText='Categories' labelIcon='bx:label'>
        <StyledTreeItem nodeId='5' labelInfo='90' labelText='Social' labelIcon='bx:group' />
        <StyledTreeItem nodeId='6' labelInfo='2,294' labelText='Updates' labelIcon='bx:info-circle' />
        <StyledTreeItem nodeId='7' labelInfo='3,566' labelText='Forums' labelIcon='bx:chat' />
        <StyledTreeItem nodeId='8' labelInfo='733' labelText='Promotions' labelIcon='bx:purchase-tag' />
      </StyledTreeItem>
      <StyledTreeItem nodeId='4' labelText='History' labelIcon='bx:label' />
    </TreeView>
  )
}

export default TreeViewGmailClone
