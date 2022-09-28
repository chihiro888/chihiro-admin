# Create API

## 기능추가

- src/api/<기능>
- src/api/<기능>/dto
- src/api/<기능>/dto/<함수명>.dto.ts
- src/api/<기능>/<기능>.controller.ts
- src/api/<기능>/<기능>.module.ts
- src/api/<기능>/<기능>.service.ts
- src/api/<기능>/<기능>.swagger.ts

## module

```
import { Module } from '@nestjs/common'
import { SampleService } from '../sample/sample.service'
import { SampleController } from './sample.controller'

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [SampleService]
})
export class SampleModule {}
```

## controller

```
import {
  Body,
  Query,
  Controller,
  HttpException,
  HttpStatus,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { SampleService } from '../sample/sample.service'
import SWAGGER from './sample.swagger'
import { AuthGuard } from 'src/common/guard/auth.guard'

// ANCHOR sample controller
@ApiTags(SWAGGER.TAG)
@Controller(SWAGGER.URL)
export class SampleController {
  constructor(private sampleService: SampleService) {}

  // ANCHOR Sample
  @ApiOperation({
    summary: SWAGGER.SAMPLE.SUMMARY,
    description: SWAGGER.SAMPLE.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.SAMPLE.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.SAMPLE.RES.UNAUTHORIZED
  })
  @Post(SWAGGER.SAMPLE.URL)
  @UseGuards(AuthGuard)
  async sample(
    @Res() res: Response,
    @Session() session
  ) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.SAMPLE.MSG.OK,
      data: null
    })
  }
}

```

## service

```
import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
export class SampleService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}
}
```

## swagger

```
import COMMON_MSG from '../../common/constants/swagger'

const SWAGGER = {
  TAG: 'sample',
  URL: 'api/sample',
  SAMPLE: {
    URL: 'sample',
    SUMMARY: 'Sample API',
    DESC: 'This is Sample API',
    RES: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    },
    MSG: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    }
  }
}

export default SWAGGER
```

## DTO

```
import { ApiProperty } from '@nestjs/swagger'
import PARAMETER from 'src/common/constants/parameter'

export class SampleDto {
  @ApiProperty({
    description: PARAMETER.SAMPLE,
    example: PARAMETER.SAMPLE_EXAMPLE
  })
  sample: string
}
```
