const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'database002',
  password: '',
  post: 5432
})

module.exports = pool
