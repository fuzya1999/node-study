var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '990522',
    database : 'users'
});

connection.connect();

connection.query('SELECT * FROM `user`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

// connection.query('INSERT INTO user VALUES(null,"admin","123456")', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

connection.end();
