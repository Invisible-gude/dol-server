var mysql = require('mysql');

var connection = mysql.createConnection({
    connectionimit: 100,
    host: 'localhost',
    user: 'root',
    port: 3306, 
    password: 'root123456',
    database: 'dol_db',
    multipleStatements: true
}); 
/* 
var connection = mysql.createConnection({
    connectionimit: 100,
   host: 'database-rvscs.cdaloohdepaj.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    port: 3306,
    password: 'root123456',
    database: 'revel-market_db',
    multipleStatements: true
});
 */

connection.connect();

module.exports = connection;