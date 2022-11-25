// ** MUI Imports
import Box from '@mui/material/Box'
import TreeItem from '@mui/lab/TreeItem'
import { alpha, styled } from '@mui/material/styles'
import MuiTreeView, { TreeViewProps } from '@mui/lab/TreeView'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled TreeView component
const TreeView = styled(MuiTreeView)<TreeViewProps>(({ theme }) => ({
  minHeight: 264,
  '& .MuiTreeItem-iconContainer .close': {
    opacity: 0.3
  },
  '& .MuiTreeItem-group': {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
  }
}))

const TreeViewCustomized = () => {
  return (
    <TreeView
      defaultExpanded={['1']}
      defaultExpandIcon={
        <Box sx={{ display: 'flex' }}>
          <Icon icon='mdi:plus-box-outline' />
        </Box>
      }
      defaultCollapseIcon={
        <Box sx={{ display: 'flex' }}>
          <Icon icon='mdi:minus-box-outline' />
        </Box>
      }
      defaultEndIcon={
        <Box sx={{ display: 'flex' }}>
          <Icon icon='mdi:close-box-outline' className='close' />
        </Box>
      }
    >
      <TreeItem nodeId='1' label='Main'>
        <TreeItem nodeId='2' label='Hello' />
        <TreeItem nodeId='3' label='Subtree with children'>
          <TreeItem nodeId='6' label='Hello' />
          <TreeItem nodeId='7' label='Sub-subtree with children'>
            <TreeItem nodeId='9' label='Child 1' />
            <TreeItem nodeId='10' label='Child 2' />
            <TreeItem nodeId='11' label='Child 3' />
          </TreeItem>
          <TreeItem nodeId='8' label='Hello' />
        </TreeItem>
        <TreeItem nodeId='4' label='World' />
        <TreeItem nodeId='5' label='Something something' />
      </TreeItem>
    </TreeView>
  )
}

export default TreeViewCustomized
