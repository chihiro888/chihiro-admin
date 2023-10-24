import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_history_action", { schema: "develop" })
export class HistoryAction {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "id" })
  id: number;

  @Column("int", { name: "admin_id", comment: "admin id" })
  adminId: number;

  @Column("varchar", {
    name: "api_name",
    nullable: true,
    comment: "to username",
    length: 255,
  })
  apiName: string | null;

  @Column("text", { name: "params", nullable: true, comment: "to username" })
  params: string | null;

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
