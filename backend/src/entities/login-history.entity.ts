import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_login_history', { schema: 'develop' })
export class LoginHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('int', { name: 'user_id', comment: 'user id' })
  userId: number

  @Column('int', {
    name: 'type',
    nullable: true,
    comment: 'login = 1, logout = 0'
  })
  type: number | null

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
