import * as bcrypt from 'bcrypt'

export const createPassword = async (password: string): Promise<string> => {
  const saltOrRounds = 10
  const hash = await bcrypt.hash(password, saltOrRounds)
  return hash
}

export const isMatch = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hash)
  return isMatch
}
