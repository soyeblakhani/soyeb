var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.flash('info', 'Flash is back!')
  res.render('index', { title: 'Express' });
});

router.post('/submit_data',function(req,res,next)
{
  console.log(req.body);
  res.render('submit_data',{});

})
module.exports = router;
