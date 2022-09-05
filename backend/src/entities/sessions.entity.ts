import { Column, Entity } from 'typeorm'

@Entity('sessions', { schema: 'develop' })
export class Sessions {
  @Column('varchar', { primary: true, name: 'session_id', length: 128 })
  sessionId: string

  @Column('int', { name: 'expires', unsigned: true })
  expires: number

  @Column('mediumtext', { name: 'data', nullable: true })
  data: string | null
}
