var createError = require('http-errors');
var express = require('express'); //生成一个express实例 app
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addRouter = require('./routes/add');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置 views 文件夹为存放视图文件的目录,
// 即存放模板文件的地方,__dirname 为全局变量,存储当前正在执行的脚本所在的目录
app.set('view engine', 'jade'); //设置视图模板引擎为 jade

app.use(logger('dev')); //加载日志中间件
app.use(express.json()); //加载解析json的中间件
app.use(express.urlencoded({ extended: false })); //加载解析urlencoded请求体的中间件
app.use(cookieParser()); //加载解析cookie的中间件
app.use(express.static(path.join(__dirname, 'public'))); //设置静态文件路径

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add', addRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}); //捕获404错误，并转发到错误处理器

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
    var headers = {
        'Cache-Control' : 'no-cache'
    };
    res.set(headers);
});

module.exports = app; //导出app实例供其他模块调用