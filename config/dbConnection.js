var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({ //simulando uma conexão com um banco de dados mysql
        host: 'localhost',
        user: 'root',//coloque aqui o usuario do seu mysql
        password: '', //coloque aqui sua senha do mysql
        database: 'senai'
    });

}

module.exports = function(){
    return connMySQL;
}