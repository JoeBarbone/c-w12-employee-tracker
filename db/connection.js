const mysql = require("mysql2");


const db = mysql.createConnection(
    
    {
        host: "localhost",
        user: "root",
        password: "Welcome1",
        database: "db_emp"
    }

);

module.exports = db;