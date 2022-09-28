import { Logger } from '@nestjs/common'
import { createPassword, isMatch } from '../../src/common/util/auth'

describe('createPassword', () => {
  test('If you entered the password as "12341234"', async () => {
    const password = '12341234'
    const hash = await createPassword(password)
    Logger.log(`hash : ${hash}`)
    expect(typeof hash).toBe('string')
  })
})

describe('isMatch', () => {
  test('If the password matches', async () => {
    const password = '12341234'
    const hash = await createPassword(password)
    const result = await isMatch(password, hash)
    expect(result).toBe(true)
  })
})

describe('isMatch', () => {
  test('Passwords do not match the password', async () => {
    const password = '11111111'
    const hash = '$2b$10$k54xBT9SFWfd8RaszS24eOngPxtnTsVWukmJ4RWDEtyWKh30ppPzC'
    const result = await isMatch(password, hash)
    expect(result).toBe(false)
  })
})
