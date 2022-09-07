import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_query', { schema: 'develop' })
export class Query {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('varchar', { name: 'type', comment: 'type', length: 30 })
  type: string

  @Column('text', { name: 'exec_query', comment: 'execute query' })
  execQuery: string

  @Column('int', { name: 'success_cnt', comment: 'success count' })
  successCnt: number

  @Column('int', { name: 'fail_cnt', comment: 'fail count' })
  failCnt: number

  @Column('int', { name: 'user_id', comment: 'user id' })
  userId: number

  @Column('varchar', { name: 'ip_address', comment: 'ip address', length: 255 })
  ipAddress: string

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    comment: 'create time',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date | null

  @Column('datetime', {
    name: 'updated_at',
    nullable: true,
    comment: 'update time'
  })
  updatedAt: Date | null

  @Column('datetime', {
    name: 'deleted_at',
    nullable: true,
    comment: 'delete time'
  })
  deletedAt: Date | null
}
