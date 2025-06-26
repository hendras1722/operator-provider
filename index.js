const express = require('express')
const path = require('path')
const Operator = require('./src/route')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/v1', Operator)

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

module.exports = app
