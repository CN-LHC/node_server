var express = require('express');
var router = express.Router();
var pool = require('../../sql/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    if (err) throw err; // 连接失败，抛出错误
    // 使用连接进行查询
    connection.query('SELECT * FROM employees', function (error, results, fields) {
      connection.release(); // 释放连接到连接池中
      if (error) throw error; // 查询失败，抛出错误
      res.json({
        code: 200,
        data: results,
        msg: 'success',
      })
    });
  });
  // res.send('article list');
});

module.exports = router;
