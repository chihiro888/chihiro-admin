import { DataSource } from 'typeorm'
import configuration from 'src/configuration/configuration'

const mysqlDataSource = new DataSource(configuration().database)

mysqlDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })

export default mysqlDataSource
