export default () => {
  const configuration = {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: ['dist/app/main/**/*.entity{.ts,.js}'],
      synchronize: false,
      extra: {
        connectionLimit: 10
      },
      timezone: 'Z'
    }
  }
  console.log(configuration)
  return configuration
}
