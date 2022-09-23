import { Logger } from '@nestjs/common'
import { createPassword } from '../../src/common/util/auth'

describe('createPassword', () => {
  test('If you entered the password as "12341234"', async () => {
    const password = '12341234'
    const hash = await createPassword(password)
    Logger.log(`hash : ${hash}`)
    expect(typeof hash).toBe('string')
  })
})
