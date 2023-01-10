import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { UploadDto } from './dto/upload.dto'
import { v4 as uuidv4 } from 'uuid'
import * as fs from 'fs'
import { formatBytes } from 'src/common/util/auth'
import { getUploadPath } from 'src/common/util'
import { File } from 'src/entities/file.entity'
import { Result } from 'src/common/interface'
// import { GetListDto } from './dto/get-list.dto'
import { GlobalService } from '../global/global.service'

@Injectable()
export class ImageService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,

    // private globalService: GlobalService
  ) {}

  // ANCHOR upload
  async upload(file: any): Promise<Result> {
    // 업로드 경로 가져오기
    const uploadPath = getUploadPath()

    // upload 디렉토리가 존재하지 않을시 생성
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath)
    }

    // validation
    if (!file) {
      return { result: false, message: 'File does not exist' }
    }

    // 파일 정보 파싱
    const rawName = file.originalname
    const extension = file.originalname.split('.').pop()
    const uuid = uuidv4()
    const encName = `${uuid}.${extension}`
    const size = file.size
    const hSize = formatBytes(size)
    const absPath = `${uploadPath}/${encName}`

    // 파일 데이터 저장
    const f = new File()
    f.rawName = rawName
    f.encName = encName
    f.extension = extension
    f.size = size
    f.hSize = hSize
    f.absPath = absPath
    await this.datasource.getRepository(File).save(f)

    // 파일 저장
    fs.writeFileSync(absPath, file.buffer)

    return { result: true, message: '' }
  }

}
