import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('user_id', ['userId'], { unique: true })
@Entity('_login_history', { schema: 'develop' })
export class LoginHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('varchar', {
    name: 'user_id',
    unique: true,
    comment: 'account',
    length: 255
  })
  userId: string

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
  createdAt: String | Date | null

  @Column('datetime', {
    name: 'updated_at',
    nullable: true,
    comment: 'update time'
  })
  updatedAt: String | Date | null

  @Column('datetime', {
    name: 'deleted_at',
    nullable: true,
    comment: 'delete time'
  })
  deletedAt: String | Date | null
}
