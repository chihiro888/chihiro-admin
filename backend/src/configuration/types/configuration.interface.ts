import { DataSourceOptions } from 'typeorm'

export interface Configuration {
  port: number
  database: DataSourceOptions
  sessionSecretKey: string
}
