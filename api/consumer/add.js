import mysql from 'mysql'
import dayjs from 'dayjs'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: process.env.NUXT_ENV_DB,
  password: process.env.NUXT_ENV_DB_PWD,
})

connection.connect()
export default (req, res) => {
  let str = ''
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
  data.forEach((item) => {
    str += `("${item.name || ''}", "${item.tel || ''}", "${
      item.vocation || ''
    }","${item.lens || ''}","${item.frame || ''}","${item.righteye || ''}","${
      item.lefteye || ''
    }","${item.distance || ''}","${item.price || ''}","${item.date || ''}","${
      item.mark || ''
    }","${now}"),`
  })

  str = str.substr(0, str.length - 1)
  const syl =
    'insert into customers ' +
    '(name,tel,vocation,lens,frame,righteye,lefteye,distance,price,date,mark,update_time) value ' +
    str

  connection.query(syl, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message)
      return
    }
    console.log('INSERT ID:', result)
  })

  res.end('sadf')
}
