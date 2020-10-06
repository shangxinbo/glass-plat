import mysql from 'mysql'
import dayjs from 'dayjs'
import data from './bc2oj-4hqvz.json'

const connection = mysql.createConnection({
  host: process.env.NUXT_ENV_DB_HOST,
  user: 'root',
  database: process.env.NUXT_ENV_DB,
  password: process.env.NUXT_ENV_DB_PWD,
})

connection.connect()
export default () => {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
  let str = ''
  data.forEach((item) => {
    if (item.name || item.tel) {
      let date =
        item.date.length === 10
          ? dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')
          : now
      date = date === 'Invalid Date' ? now : date
      if (item.name.length > 100) {
        console.log(item.name)
      }
      if (item.name.length < 50) {
        str += `("${item.name || ''}", "${item.tel || ''}","${
          item.lens || ''
        }","${item.frame || ''}","${item.righteye || ''}","${
          item.lefteye || ''
        }","${item.distance || ''}","${item.price || ''}","${
          item.mark || ''
        }","${date}"),`
      }
    }
  })
  str = str.substr(0, str.length - 1)

  const syl =
    'insert into customers ' +
    '(name,tel,lens,frame,righteye,lefteye,distance,price,mark,update_time) value ' +
    str
  connection.query(syl, function (err) {
    if (err) {
      console.log(err)
    }
  })
}
