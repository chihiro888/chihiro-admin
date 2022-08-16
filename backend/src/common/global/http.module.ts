import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'

@Global()
@Module({
  imports: [HttpModule],
  exports: [HttpModule]
})
export class GlobalHttpModule {}
