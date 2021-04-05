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
var colors = [
  "red","yellow","green","blue"
]
var  index = 0;
router.get('/color.html',function(req,res){
   var n = getcolor()
   res.send(`<h1 style="color:${colors[n]}">${colors[n]}<h1>`)
})



function getcolor(){ 
  var index1 = index
  index++ 
  if(index1==3){
    index = 0; 
  }
  return index1
}



module.exports = router
