import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_file", { schema: "develop" })
export class File {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "id" })
  id: number;

  @Column("varchar", {
    name: "table_name",
    nullable: true,
    comment: "table name",
    length: 255,
  })
  tableName: string | null;

  @Column("varchar", {
    name: "table_pk",
    nullable: true,
    comment: "table pk",
    length: 255,
  })
  tablePk: string | null;

  @Column("varchar", { name: "raw_name", comment: "raw name", length: 255 })
  rawName: string;

  @Column("varchar", { name: "enc_name", comment: "enc name", length: 255 })
  encName: string;

  @Column("varchar", { name: "extension", comment: "extension", length: 255 })
  extension: string;

  @Column("int", { name: "size", comment: "size" })
  size: number;

  @Column("varchar", { name: "h_size", comment: "human size", length: 255 })
  hSize: string;

  @Column("varchar", { name: "abs_path", comment: "abs path", length: 255 })
  absPath: string;

  @Column("varchar", {
    name: "note",
    nullable: true,
    comment: "note",
    length: 255,
  })
  note: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "create time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null | string;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    comment: "update time",
  })
  updatedAt: Date | null | string;

  @Column("datetime", {
    name: "deleted_at",
    nullable: true,
    comment: "delete time",
  })
  deletedAt: Date | null | string;
}
