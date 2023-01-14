import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('account', ['account'], { unique: true })
@Entity('_admin', { schema: 'develop' })
export class Admin {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "id" })
  id: number;

  @Column("varchar", {
    name: "account",
    unique: true,
    comment: "account",
    length: 255,
  })
  account: string;

  @Column("varchar", { name: "password", comment: "password", length: 255 })
  password: string;

  @Column("varchar", {
    name: "intro",
    nullable: true,
    comment: "intro",
    length: 255,
  })
  intro: string | null;

  @Column("varchar", { name: "username", comment: "username", length: 255 })
  username: string;

  @Column("int", {
    name: "is_system_admin",
    nullable: true,
    comment: "is system admin",
    default: () => "'0'",
  })
  isSystemAdmin: number | null;

  @Column("int", {
    name: "is_admin",
    nullable: true,
    comment: "is admin",
    default: () => "'0'",
  })
  isAdmin: number | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "create time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: String | Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    comment: "update time",
  })
  updatedAt: String | Date | null;

  @Column("datetime", {
    name: "deleted_at",
    nullable: true,
    comment: "delete time",
  })
  deletedAt: String | Date | null;
}