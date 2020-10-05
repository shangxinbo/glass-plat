import { URL } from 'url'
import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: process.env.NUXT_ENV_DB,
  password: process.env.NUXT_ENV_DB_PWD,
})

connection.connect()

export default (req, res) => {
  const pageVal = 20
  const query = new URL('http://localhost' + req.originalUrl).searchParams
  const page = query.get('page') || 1
  const condition = query.get('key')
    ? `where name like %${query.get('key')}% or tel like %${query.get('key')}%`
    : ''

  const syl = `select * from customers ${condition} limit ${
    (page - 1) * pageVal
  }, ${pageVal}`

  connection.query(syl, function (err, result) {
    if (err) {
      res.end('error')
    }
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
    res.end(JSON.stringify(result))
  })
}
