import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      port: 3306,
      multipleStatements: true
   }
})