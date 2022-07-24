import configuration from 'src/configuration/configuration'
import { DataSource } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(configuration().database)
      return dataSource.initialize()
    }
  }
]
