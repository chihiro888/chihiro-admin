import bcrypt from 'bcrypt'

// ANCHOR create password
export const createPassword = async (password: string): Promise<string> => {
  const saltOrRounds = 10
  const hash = await bcrypt.hash(password, saltOrRounds)
  return hash
}

// ANCHOR match password
export const isMatch = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hash)
  return isMatch
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
