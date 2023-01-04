import produce from 'immer'
import moment from 'moment'
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
import DATE from 'src/common/constants/date'

const SearchContainer = ({ searchForm, setSearchForm }) => {
  // ** State
  const [collapse, setCollapse] = useState<boolean>(false)
  const theme = useTheme()
  const { direction } = theme
  const [date, setDate] = useState(new Date())

  // ** Handler
  const handleClickCollapse = () => {
    setCollapse(!collapse)
  }
  const handleChangeForm = (key: string, value: string) => {
    const nextState = produce(searchForm, (draftState) => {
      draftState.map((item) => {
        if (item.key === key) {
          item.value = value
        }
      })
    })
    setSearchForm(nextState)
  }
  const handleInitForm = () => {
    const nextState = produce(searchForm, (draftState) => {
      draftState.map((item) => {
        item.value = ''
      })
    })
    setSearchForm(nextState)
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
                {searchForm.map((item, idx) => {
                  return (
                    <>
                      {item.type === 'text' ? (
                        <>
                          <Grid key={idx} item xs={3}>
                            <FormControl style={{ width: '100%' }}>
                              <TextField
                                id="outlined-basic"
                                label={item.label}
                                value={item.value}
                                onChange={(e) =>
                                  handleChangeForm(item.key, e.target.value)
                                }
                              />
                            </FormControl>
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )}
                      {item.type === 'select' ? (
                        <>
                          <Grid key={idx} item xs={3}>
                            <FormControl style={{ width: '100%' }}>
                              <InputLabel id={item.label}>
                                {item.label}
                              </InputLabel>
                              <Select
                                label={item.label}
                                defaultValue=""
                                id={item.label}
                                labelId={item.label}
                                style={{ width: '100%' }}
                                value={item.value}
                                onChange={(e) =>
                                  handleChangeForm(item.key, e.target.value)
                                }
                              >
                                <MenuItem value="">
                                  <em>전체</em>
                                </MenuItem>
                                {item.list.map((item, idx) => {
                                  return (
                                    <MenuItem key={idx} value={item.value}>
                                      {item.label}
                                    </MenuItem>
                                  )
                                })}
                              </Select>
                            </FormControl>
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )}
                      {item.type === 'date' ? (
                        <>
                          <Grid key={idx} item xs={3}>
                            <FormControl style={{ width: '100%' }}>
                              <DatePickerWrapper>
                                <DatePicker
                                  selected={
                                    moment(item.value, DATE.DATE).isValid()
                                      ? moment(item.value, DATE.DATE).toDate()
                                      : null
                                  }
                                  id="basic-input"
                                  popperPlacement={
                                    direction === 'ltr'
                                      ? 'bottom-start'
                                      : 'bottom-end'
                                  }
                                  onChange={(date: Date) => {
                                    handleChangeForm(
                                      item.key,
                                      moment(date).format(DATE.DATE)
                                    )
                                  }}
                                  customInput={
                                    <CustomInput label={item.label} />
                                  }
                                  dateFormat="yyyy-MM-dd"
                                />
                              </DatePickerWrapper>
                            </FormControl>
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )
                })}
              </Grid>
              <Stack sx={{ mt: 5 }}>
                <div style={{ textAlign: 'right' }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ mr: 3 }}
                    onClick={handleInitForm}
                  >
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
