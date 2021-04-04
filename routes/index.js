const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
let lastVisit
router.get('/last.txt', function (req, res) {
  res.send(lastVisit)
  lastVisit = new Date()
})

module.exports = router
