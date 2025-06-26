const express = require('express')
const Operator = require('./controller/operator')
const CodeCountry = require('./controller/codeCountry')

const Router = express.Router()

Router.get('/operator/:id', Operator)
Router.get('/code-country', CodeCountry)

module.exports = Router
