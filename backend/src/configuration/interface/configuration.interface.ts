import { DataSourceOptions } from 'typeorm'

export interface Configuration {
  port: number
  database: DataSourceOptions
  redis?: Redis
  sessionSecretKey: string
  sessionStoreType: string
}

export interface Redis {
  host: string
  port: number
}
