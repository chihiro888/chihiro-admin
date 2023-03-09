import { Card, CardContent, Chip, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useDrag, useDrop } from 'react-dnd'
import { useRef } from 'react'

const ActionItem = ({
  index,
  itemIndex,
  icon,
  label,
  loadAPI,
  updateAPI,
  moveCard
}) => {
  const ref = useRef(null)

  // ** Drop Hook
  const [{ handlerId }, drop] = useDrop({
    accept: 'Card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item['index']
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)

      item['index'] = hoverIndex
    }
  })

  // ** Drag Hook
  const [{ isDragging }, drag] = useDrag({
    type: 'Card',
    item: () => {
      return { itemIndex, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))

  return (
    <>
      <Card
        sx={{ mb: 3 }}
        ref={ref}
        style={{ opacity }}
        data-handler-id={handlerId}
      >
        <CardContent>
          <Typography>
            {'index => '} {index}
          </Typography>
          <Typography>
            {'itemIndex => '} {itemIndex}
          </Typography>

          <Grid container spacing={3}>
            <Grid item>
              <Icon icon={icon} />
            </Grid>
            <Grid item>
              <Typography>{label}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={5}>
              <Chip label="loadAPI" color="primary" variant="outlined" />
            </Grid>
            <Grid item xs={7}>
              {loadAPI}
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={5}>
              <Chip label="updateAPI" color="primary" variant="outlined" />
            </Grid>
            <Grid item xs={7}>
              {updateAPI}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default ActionItem
