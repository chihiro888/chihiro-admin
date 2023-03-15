import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_menu', { schema: 'develop' })
export class Menu {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('varchar', {
    name: 'type',
    nullable: true,
    comment: 'type ex) menu, line',
    length: 255
  })
  type: string | null

  @Column('varchar', { name: 'title', comment: 'title', length: 255 })
  title: string

  @Column('varchar', {
    name: 'icon',
    nullable: true,
    comment: 'icon',
    length: 255
  })
  icon: string | null

  @Column('varchar', {
    name: 'route',
    nullable: true,
    comment: 'route',
    length: 255
  })
  route: string | null

  @Column('varchar', {
    name: 'path',
    nullable: true,
    comment: 'path',
    length: 255
  })
  path: string | null

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
