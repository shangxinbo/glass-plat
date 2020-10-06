import mysql from 'mysql'
import dayjs from 'dayjs'

const connection = mysql.createConnection({
  host: process.env.NUXT_ENV_DB_HOST,
  user: 'root',
  database: process.env.NUXT_ENV_DB,
  password: process.env.NUXT_ENV_DB_PWD,
})

connection.connect()
export default (req, res) => {
  let post = ''
  req.on('data', (chunk) => {
    post += chunk
  })

  req.on('end', function () {
    const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
    const data = JSON.parse(post)
    if (data.name || data.tel) {
      // 有手机号或者姓名就行
      const syl =
        'insert into customers ' +
        '(name,tel,lens,frame,righteye,lefteye,distance,price,mark,update_time) value ' +
        `("${data.name || ''}", "${data.tel || ''}","${data.lens || ''}","${
          data.frame || ''
        }","${data.righteye || ''}","${data.lefteye || ''}","${
          data.distance || ''
        }","${data.price || ''}","${data.mark || ''}","${now}")`
      connection.query(syl, function (err, result) {
        if (err) {
          res.end(JSON.stringify({ code: -1, message: err.message }))
        }
        res.end(JSON.stringify({ code: 0, data: result }))
      })
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
      res.end(
        JSON.stringify({
          code: -2,
          error: '名字或电话必须填写',
        })
      )
    }
  })
}
