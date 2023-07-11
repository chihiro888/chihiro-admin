import { HttpStatus } from '@nestjs/common'
import * as path from 'path'
import { QueryRunner } from 'typeorm'

// ANCHOR 백엔드 프로젝트 경로 반환
export const getProjectPath = (): string => {
  const projectName = 'backend'
  const CurrentPath = path.resolve(__dirname)
  const projectRootPath = CurrentPath.slice(
    0,
    CurrentPath.indexOf(projectName) + projectName.length
  )
  return projectRootPath
}

// ANCHOR 업로드 경로 반환
export const getUploadPath = (): string => {
  const uploadPath = path.join(getProjectPath(), '/', 'upload')
  return uploadPath
}

// ANCHOR bytes formatting
export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes <= 0) return '0Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))}${sizes[i]}`
}

// ANCHOR handle error
export const handleError = async (queryRunner: QueryRunner, error: any) => {
  const message = 'An unknown error has occurred.'

  // debug
  console.log(`[ERROR] ${error}`)

  // rollback
  await queryRunner.rollbackTransaction()

  // fail
  return {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message
  }
}
