import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_user', { schema: 'save_the_query' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('varchar', { name: 'account', comment: 'account', length: 255 })
  account: string

  @Column('varchar', { name: 'password', comment: 'password', length: 255 })
  password: string

  @Column('varchar', { name: 'username', comment: 'username', length: 255 })
  username: string

  @Column('datetime', {
    name: 'sign_in_at',
    nullable: true,
    comment: 'sign in time'
  })
  signInAt: Date | null

  @Column('datetime', {
    name: 'sign_out_at',
    nullable: true,
    comment: 'sign out time'
  })
  signOutAt: Date | null

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
