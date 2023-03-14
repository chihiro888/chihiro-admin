import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('_menu_order', { schema: 'develop' })
export class MenuOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'id' })
  id: number

  @Column('int', { name: 'menu_id', nullable: true, comment: 'menu id' })
  menuId: number | null

  @Column('int', { name: 'menu_order', nullable: true, comment: 'order' })
  menuOrder: number | null

  @Column('varchar', { name: 'permission', comment: 'permission', length: 255 })
  permission: string
}
