import { ISession } from 'connect-typeorm/out'
import { Column, Entity } from 'typeorm'

@Entity('_session', { schema: 'mysql_query_saver_db' })
export class Session implements ISession {
  @Column('varchar', {
    primary: true,
    name: 'id',
    comment: 'session id',
    length: 255
  })
  id: string

  @Column('text', { name: 'json', nullable: true, comment: 'session data' })
  json: string | null

  @Column('bigint', {
    name: 'expired_at',
    nullable: true,
    comment: 'expired time'
  })
  expiredAt: number | null
}
