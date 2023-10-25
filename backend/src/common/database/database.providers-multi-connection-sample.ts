import configuration from 'src/configuration/configuration'
import { DataSource } from 'typeorm'

//NOTE - 다중커넥션 연결시 적용 스니펫

//ANCHOR 1. 데이터 프로바이더 수정(현재파일)
// file: backend/src/common/database/database.providers.ts

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource(configuration().database)
//       return dataSource.initialize()
//     }
//   },
//   {
//     provide: 'SECOND_DATA_SOURCE',
//     useFactory: async () => {
//       const secondDataSource = new DataSource(configuration().secondDatabase)
//       return secondDataSource.initialize()
//     }
//   }
// ]

//ANCHOR 2. typeorm 설정 정보 수정
// file: backend/src/configuration/configuration.ts

// const configuration: Configuration = {
//     port: parseInt(data.http.port, 10) || 3000,
//     serviceDatabase: {
//       type: 'mysql',
//       host: data.db.service.host,
//       port: Number(data.db.service.port),
//       username: data.db.service.username,
//       password: data.db.service.password,
//       database: data.db.service.database,
//       entities: [join(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
//       synchronize: false,
//       extra: {
//         connectionLimit: 10
//       },
//       timezone: 'Z',
//       logging: ['query', 'error', 'schema', 'warn', 'info', 'log']
//       // logging: ['error', 'schema', 'warn', 'info', 'log']
//     },
//     commonDatabase: {
//       type: 'mysql',
//       host: data.db.common.host,
//       port: Number(data.db.common.port),
//       username: data.db.common.username,
//       password: data.db.common.password,
//       database: data.db.common.database,
//       entities: [join(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
//       synchronize: false,
//       extra: {
//         connectionLimit: 10
//       },
//       timezone: 'Z',
//       logging: ['query', 'error', 'schema', 'warn', 'info', 'log']
//       // logging: ['error', 'schema', 'warn', 'info', 'log']
//     },
//     sessionSecretKey: data.db.common.session.secretKey
//   }

//ANCHOR 3. 서비스 파일 수정
// file: backend/src/api/develop/develop.service.ts

// @Injectable()
// export class GameService {
//   constructor(
//     @Inject('DATA_SOURCE')
//     private dataSource: DataSource,

//     @Inject('SECOND_DATA_SOURCE')
//     private secondDataSource: DataSource
//   ) {}

//   // fetch from datasource 1
//   async api1() {
//     await this.dataSource.transaction(async (transactionalEntityManager) => {
//         transactionalEntityManager.getRepository(Entity).createQueryBuilder('entity')
//     })
//   }

//   // fetch from datasource 2
//   async api2() {
//     await this.secondDataSource.transaction(async (transactionalEntityManager) => {
//         transactionalEntityManager.getRepository(Entity2).createQueryBuilder('entity2')
//     })
//   }
// }