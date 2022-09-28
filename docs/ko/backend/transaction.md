# Transaction

## Transaction 샘플

```javascript
// ANCHOR sample
async sample(dto: SampleDto): Promise<boolean> {
  const queryRunner = this.datasource.createQueryRunner()

  await queryRunner.startTransaction()

  try {
    const user = await queryRunner.manager.findOne(User, {
      where: {
        id: dto.userId
      }
    })

    if (!user) {
      // rollback
      await queryRunner.rollbackTransaction()
      return false
    }

    user.account = 'sample'
    await queryRunner.manager.getRepository(User).save(user)

    // commit
    await queryRunner.commitTransaction()
    return true
  } catch (err) {
    console.log('err -> ', err)
    // rollback
    await queryRunner.rollbackTransaction()
  } finally {
    // release
    await queryRunner.release()
  }
}
```

## Transaction Lock 샘플

```javascript
// ANCHOR sample
async sample(dto: SampleDto): Promise<boolean> {
  const queryRunner = this.datasource.createQueryRunner()

  await queryRunner.startTransaction()

  try {
    const user = await queryRunner.manager.findOne(User, {
      where: {
        id: dto.userId
      },
      lock: { mode: 'pessimistic_write' }
    })

    if (!user) {
      // rollback
      await queryRunner.rollbackTransaction()
      return false
    }

    user.account = 'sample'
    await queryRunner.manager.getRepository(User).save(user)

    // commit
    await queryRunner.commitTransaction()
    return true
  } catch (err) {
    console.log('err -> ', err)
    // rollback
    await queryRunner.rollbackTransaction()
  } finally {
    // release
    await queryRunner.release()
  }
}
```
