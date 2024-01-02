const moment = require('moment-timezone');
const currentDateTime = moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');

module.exports = {
  apps: [
    {
      name: 'backend',
      script: './dist/main.js',
      log_date_format: currentDateTime,
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
