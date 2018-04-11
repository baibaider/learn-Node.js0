var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });  //res.render为渲染视图模板。
    // res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    var headers = {
      'Cache-Control' : 'no-cache'
    };
    res.set(headers);
});
module.exports = router;
