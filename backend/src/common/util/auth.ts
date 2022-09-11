import bcrypt from 'bcrypt'
import { User } from 'src/entities/user.entity'

// ANCHOR login
export const login = async (session: any, user: User) => {
  session.userId = user.id
  session.isAdmin = user.isAdmin
  session.isDeveloper = user.isDeveloper
}

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
