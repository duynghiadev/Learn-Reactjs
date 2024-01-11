'use strict'

let express = require('express')
let mysql = require('mysql')
var router = express.Router()
let routerFile = require('./myApp/routes.js')
let parser = require('body-parser')

let server = express()

server.use(parser.json())
server.use('/users', routerFile)

server.listen(5000, function () {})

module.exports = server
