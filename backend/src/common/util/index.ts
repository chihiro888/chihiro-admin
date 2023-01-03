import * as path from 'path'

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
