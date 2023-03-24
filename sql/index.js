// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'liuhanchuan',
//     database: 'atguigudb'
// });
// // 连接 MySQL 数据库
// connection.connect(function(err) {
// if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
// }

// console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection

const mysql = require('mysql');

// 创建 MySQL 数据库连接池
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'liuhanchuan',
  database: 'atguigudb'
});

module.exports = pool;