import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_page', { schema: 'develop' })
export class Page {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('varchar', { name: 'url', comment: 'url', length: 255 })
  url: string

  @Column('varchar', { name: 'title', comment: 'title', length: 255 })
  title: string

  @Column('text', { name: 'sub_title', comment: 'sub title' })
  subTitle: string

  @Column('tinyint', {
    name: 'use_list_api',
    nullable: true,
    comment: 'use list api',
    width: 1,
    default: () => "'1'"
  })
  useListApi: boolean | null

  @Column('varchar', {
    name: 'list_api',
    nullable: true,
    comment: 'list api',
    length: 255
  })
  listApi: string | null

  @Column('tinyint', {
    name: 'use_create_api',
    nullable: true,
    comment: 'use create api',
    width: 1,
    default: () => "'0'"
  })
  useCreateApi: boolean | null

  @Column('varchar', {
    name: 'create_api',
    nullable: true,
    comment: 'create api',
    length: 255
  })
  createApi: string | null

  @Column('tinyint', {
    name: 'use_detail_api',
    nullable: true,
    comment: 'use detail api',
    width: 1,
    default: () => "'0'"
  })
  useDetailApi: boolean | null

  @Column('varchar', {
    name: 'detail_api',
    nullable: true,
    comment: 'detail api',
    length: 255
  })
  detailApi: string | null

  @Column('tinyint', {
    name: 'use_delete_api',
    nullable: true,
    comment: 'use delete api',
    width: 1,
    default: () => "'0'"
  })
  useDeleteApi: boolean | null

  @Column('varchar', {
    name: 'delete_api',
    nullable: true,
    comment: 'delete api',
    length: 255
  })
  deleteApi: string | null

  @Column('text', {
    name: 'table_header',
    nullable: true,
    comment: 'table header (JSON)'
  })
  tableHeader: string | null

  @Column('text', {
    name: 'add_form',
    nullable: true,
    comment: 'add form (JSON)'
  })
  addForm: string | null

  @Column('text', {
    name: 'detail_form',
    nullable: true,
    comment: 'detail form (JSON)'
  })
  detailForm: string | null

  @Column('text', {
    name: 'search_form',
    nullable: true,
    comment: 'search form (JSON)'
  })
  searchForm: string | null

  @Column('text', {
    name: 'action_list',
    nullable: true,
    comment: 'action list (JSON)'
  })
  actionList: string | null

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
