import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import Grid from '@mui/material/Grid'
import { BigNumber } from 'bignumber.js'

const InfoContainer = () => {
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination

  return (
    <>
      <Grid container sx={{ mt: 5 }}>
        {pagination.info &&
          pagination?.info.map((item, idx) => {
            return (
              <Grid item key={idx}>
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: '#5c6bc0',
                    color: '#ffffff',
                    paddingLeft: '8px',
                    marginRight: '10px',
                    alignItems: 'center'
                  }}
                >
                  <div
                    style={{
                      borderRight: 'solid 1px #5c6bc0',
                      paddingRight: '8px',
                      fontSize: '12px'
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      paddingLeft: '8px',
                      paddingRight: '8px',
                      color: '#666666',
                      backgroundColor: '#ededed',
                      border: 'solid 1px #d5d5d5',
                      fontSize: '12px'
                    }}
                  >
                    {new BigNumber(item.value).toFormat()}
                  </div>
                </div>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default InfoContainer
