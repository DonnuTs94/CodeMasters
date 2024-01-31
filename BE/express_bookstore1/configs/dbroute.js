import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const db = mysql
  .createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB_BOOKSSTORE1,
  })
  .promise()

export default db
