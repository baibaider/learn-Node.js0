var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('add', { title: 'baibaia' });  //res.render为渲染视图模板。
});

module.exports = router;


