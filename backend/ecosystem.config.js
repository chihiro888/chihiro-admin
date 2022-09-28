module.exports = {
  apps: [
    {
      name: 'chihiro develop kit',
      script: './dist/main.js',
      env_local: {
        NODE_ENV: 'local'
      },
      env_development: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
