import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('account', ['account'], { unique: true })
@Entity('_user', { schema: 'develop' })
export class User {
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

  @Column("varchar", {
    name: "role",
    nullable: true,
    comment: "role (U: 사용자, A: 관리자, SA: 시스템관리자)",
    length: 10,
    default: () => "'U'",
  })
  role: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "create time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: string | Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    comment: "update time",
  })
  updatedAt: string | Date | null;

  @Column("datetime", {
    name: "deleted_at",
    nullable: true,
    comment: "delete time",
  })
  deletedAt: string | Date | null;
}
