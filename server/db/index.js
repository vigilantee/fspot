var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'fspotrds.cklno4ixlzh3.ap-south-1.rds.amazonaws.com',
  port      :  3306,
  user     : 'fspotrds',
  password : 'admin123',
  database : 'fspot'
});
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'test@123',
//     database: 'fspot'
// });
const query = 'select * from user';

function querySuccess(data) {
    console.log("Database connected ....... ");
}

var app = express();


const exec = function (query, querySuccess, connectionObject = connection) {
    return connectionObject.query(query, function (err, rows, fields) {
        if (err)
            throw err
        querySuccess(rows);
    })
}

module.exports = {
    executeQuery: exec
}


connection.connect(function (err) {

    if (!err) {
        console.log("Database is connected ... ");
        exec(query, querySuccess, connection);
    } else {
        console.log("Error connecting database ... ");

    }
});