import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: process.env.NUXT_ENV_DB,
  password: process.env.NUXT_ENV_DB_PWD,
})

connection.connect()
export default (req, res) => {
  const key = req.key
  const pageVal = 20
  const page = req.page || 1

  const syl = `select * from customers where name like %${key}% or tel like %${key}% limit ${
    (page - 1) * pageVal
  }, ${pageVal}`

  connection.query(syl, function (err, result) {
    if (err) {
      res.end('error')
    }
    res.end(JSON.stringify(result))
  })
}
