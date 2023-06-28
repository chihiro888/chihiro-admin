import { Column, Entity } from 'typeorm'

@Entity('_global', { schema: 'develop' })
export class Global {
  @Column('varchar', {
    primary: true,
    name: 'key',
    comment: 'key',
    length: 255
  })
  key: string

  @Column('text', { name: 'value', comment: 'value' })
  value: string

  @Column('varchar', {
    name: 'memo',
    nullable: true,
    comment: 'memo',
    length: 255
  })
  memo: string | null

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    comment: 'create time',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: string | Date | null

  @Column('datetime', {
    name: 'updated_at',
    nullable: true,
    comment: 'update time'
  })
  updatedAt: string | Date | null

  @Column('datetime', {
    name: 'deleted_at',
    nullable: true,
    comment: 'delete time'
  })
  deletedAt: string | Date | null
}
