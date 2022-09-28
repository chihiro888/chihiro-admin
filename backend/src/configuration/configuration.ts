import { readFileSync } from 'fs'
import * as yaml from 'js-yaml'
import { join } from 'path'
import { Configuration } from './interface/configuration.interface'

export default () => {
  // check NODE_ENV and set file name
  const YAML_CONFIG_FILENAME = `${process.env.NODE_ENV}.yaml`

  // load data by yaml file
  const data = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8')
  ) as Record<string, any>

  // set configuration
  const configuration: Configuration = {
    port: parseInt(data.http.port, 10) || 3000,
    database: {
      type: 'mysql',
      host: data.db.host,
      port: Number(data.db.port),
      username: data.db.username,
      password: data.db.password,
      database: data.db.database,
      entities: [join(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
      synchronize: false,
      extra: {
        connectionLimit: 10
      },
      timezone: 'Z',
      logging: ['query', 'error', 'schema', 'warn', 'info', 'log']
      // logging: ['error', 'schema', 'warn', 'info', 'log']
    },
    sessionSecretKey: data.db.session.secretKey
  }
  console.log('configuration -> ', configuration)
  return configuration
}
