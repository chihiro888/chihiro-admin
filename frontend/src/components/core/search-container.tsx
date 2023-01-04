import { useState } from 'react'
import { useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'
import CustomInput from 'src/components/pickers-compoent'

const SearchContainer = () => {
  const theme = useTheme()

  const { direction } = theme

  const [collapse, setCollapse] = useState<boolean>(false)

  const [date, setDate] = useState(new Date())

  const handleClickCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <>
      <Card sx={{ mt: 5 }} style={{ overflow: 'unset' }}>
        <CardContent style={{ padding: '0px' }}>
          <CardActions className="card-action-dense">
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button onClick={handleClickCollapse}>검색필터</Button>
              <IconButton size="small" onClick={handleClickCollapse}>
                <Icon
                  fontSize="1.875rem"
                  icon={collapse ? 'bx:chevron-up' : 'bx:chevron-down'}
                />
              </IconButton>
            </Box>
          </CardActions>
          <Collapse in={collapse}>
            <Divider sx={{ m: '0 !important' }} />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={3}>
                  <FormControl style={{ width: '100%' }}>
                    <TextField id="outlined-basic" label="계정" />
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <FormControl style={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      권한
                    </InputLabel>
                    <Select
                      label="level"
                      defaultValue=""
                      id="demo-simple-select-outlined"
                      labelId="demo-simple-select-outlined-label"
                      style={{ width: '100%' }}
                    >
                      <MenuItem value="">
                        <em>전체</em>
                      </MenuItem>
                      <MenuItem value={10}>시스템관리자</MenuItem>
                      <MenuItem value={20}>관리자</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <FormControl style={{ width: '100%' }}>
                    <DatePickerWrapper>
                      <DatePicker
                        selected={date}
                        id="basic-input"
                        popperPlacement={
                          direction === 'ltr' ? 'bottom-start' : 'bottom-end'
                        }
                        onChange={(date: Date) => setDate(date)}
                        customInput={<CustomInput label="생성일자" />}
                        dateFormat="yyyy-MM-dd"
                      />
                    </DatePickerWrapper>
                  </FormControl>
                </Grid>
              </Grid>
              <Stack sx={{ mt: 5 }}>
                <div style={{ textAlign: 'right' }}>
                  <Button variant="outlined" color="secondary" sx={{ mr: 3 }}>
                    초기화
                  </Button>
                  <Button variant="contained">검색</Button>
                </div>
              </Stack>
            </CardContent>
          </Collapse>
        </CardContent>
      </Card>
    </>
  )
}

export default SearchContainer
