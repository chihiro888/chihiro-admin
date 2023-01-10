import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_file', { schema: 'develop' })
export class File {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('varchar', {
    name: 'raw_name',
    comment: 'original file name',
    length: 255
  })
  rawName: string

  @Column('varchar', {
    name: 'enc_name',
    comment: 'encoded file name',
    length: 255
  })
  encName: string

  @Column('varchar', {
    name: 'extension',
    comment: 'file extension',
    length: 255
  })
  extension: string

  @Column({ type: 'int', name: 'size', comment: 'file bytes size' })
  size: number

  @Column('varchar', {
    name: 'h_size',
    comment: 'file human size',
    length: 255
  })
  hSize: string

  @Column('varchar', {
    name: 'abs_path',
    comment: 'file absolute path',
    length: 255
  })
  absPath: string


  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    comment: 'file upload time',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: String | Date | null

  @Column('datetime', {
    name: 'updated_at',
    nullable: true,
    comment: 'file updated time'
  })
  updatedAt: String | Date | null

  @Column('datetime', {
    name: 'deleted_at',
    nullable: true,
    comment: 'create time',
    default: () => 'CURRENT_TIMESTAMP'
  })
  deletedAt: String | Date | null
}
