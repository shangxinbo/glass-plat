import fs from 'fs'
import data from './bc2oj-4hqvz.json'

const shang = []

export default (req, res) => {
  data.forEach((item) => {
    let date = item.date
    if (date.length === 8) {
      date = `${date.substr(0, 4)}-${date.substr(4, 2)}-${date.substr(6, 2)}`
    } else if (date.indexOf('.') > 0) {
      const month = date.split('.')[0]
      date = `2020-${month > 9 ? month : '0' + month}-${date.split('.')[1]}`
    }

    shang.push({
      name: item.name,
      tel: item.tel,
      lens: item.lens,
      frame: item.frame,
      righteye: item.righteye,
      lefteye: item.lefteye,
      distance: item.distance,
      price: item.price.indexOf('元')
        ? item.price.replace('元', '')
        : item.price,
      date,
      mark: item.mark,
    })
  })

  fs.writeFile('./mark.json', JSON.stringify(shang), (err) => {
    console.log(err)
  })
  res.end('123')
}
