import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_excel', { schema: 'develop' })
export class Excel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('varchar', { name: 'title', comment: 'title', length: 255 })
  title: string

  @Column({
    type: 'int',
    name: 'stock',
    comment: 'stock'
  })
  stock: number

  @Column('text', {
    name: 'query',
    nullable: true,
    comment: 'query'
  })
  query: string | null

  @Column('varchar', {
    name: 'file_name',
    nullable: true,
    comment: 'file name',
    length: 255
  })
  fileName: string | null

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
