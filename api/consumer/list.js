import { URL } from 'url'
import mysql from 'mysql'

const connection = mysql.createConnection({
  host: process.env.NUXT_ENV_DB_HOST,
  user: 'root',
  database: process.env.NUXT_ENV_DB,
  password: process.env.NUXT_ENV_DB_PWD,
})

connection.connect()

export default (req, res) => {
  const pageVal = 50
  const query = new URL('http://localhost' + req.originalUrl).searchParams
  const page = query.get('page') || 1
  const condition = query.get('keyword')
    ? `where name like '%${query.get('keyword')}%' or tel like '%${query.get(
        'keyword'
      )}%'`
    : ''

  const syl = `select * from customers ${condition} limit ${
    (page - 1) * pageVal
  }, ${pageVal}`
  connection.query(syl, function (err, result) {
    if (err) {
      res.end(JSON.stringify({ code: -1, message: 'error' }))
    }
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
    res.end(JSON.stringify({ code: 0, data: result }))
  })
}
