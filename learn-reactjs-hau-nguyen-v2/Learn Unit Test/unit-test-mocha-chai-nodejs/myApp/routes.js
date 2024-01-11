'use strict'

var express = require('express')
var router = express.Router()
let mysql = require('mysql')

//let connection =  server.dbConnection();
var con = mysql.createConnection({
  host: '192.168.1.24',
  user: 'choice',
  password: 'Choice2016',
  database: 'test'
})

con.connect(function (err) {
  if (err) throw err
})

/* User routes */

/*- GET */
router.get('/', function (req, res) {
  if (req.query.name) {
    con.query(
      "SELECT * FROM users WHERE users.name = '" + req.query.name + "'",
      function (err, result) {
        if (err) res.send(err)

        res.send(result)
      }
    )
  } else {
    con.query('SELECT * FROM users', function (err, result) {
      if (err) res.send(err)

      res.send(result)
    })
  }
})

router.get('/:id', function (req, res) {
  con.query('SELECT * FROM users WHERE users.id =' + req.params.id, function (err, result) {
    if (err) res.send(err)

    res.send(result)
  })
})

/*- POST */
router.post('/', function (req, res) {
  var values = "'" + req.body.name + "', '" + req.body.email + "', '" + req.body.password + "'"
  con.query(
    'INSERT INTO users (name, email, password) VALUES (' + values + ')',
    function (err, result) {
      if (err) res.send(err)

      res.send(result)
    }
  )
})

/*- PUT */
router.put('/:id', function (req, res) {
  con.query(
    "UPDATE users SET users.email = '" + req.body.email + "' WHERE users.id =" + req.params.id,
    function (err, result) {
      if (err) res.send(err)

      res.send(result)
    }
  )
})

/*- DELETE */
router.delete('/:id', function (req, res) {
  con.query('DELETE FROM users WHERE users.id =' + req.params.id, function (err, result) {
    if (err) res.send(err)

    res.send(result)
  })
})

module.exports = router
