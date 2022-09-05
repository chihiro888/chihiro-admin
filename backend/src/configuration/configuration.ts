import { join } from 'path'
import { DataSourceOptions } from 'typeorm'

interface Configuration {
  port: number
  database: DataSourceOptions
  sessionSecretKey: string
}

export default () => {
  const configuration: Configuration = {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [join(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
      synchronize: false,
      extra: {
        connectionLimit: 10
      },
      timezone: 'Z',
      logging: ['query', 'error', 'schema', 'warn', 'info', 'log']
      // logging: ['error', 'schema', 'warn', 'info', 'log']
    },
    sessionSecretKey: process.env.SESSION_SECRET_KEY
  }
  return configuration
}
