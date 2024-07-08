const mysql = require('mysql');


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "task_management"
})

connection.connect((err) => {
    if (err) {
        console.log(`Error connecting to database`)
    } else {
        console.log('Database connection established')
    }

})

module.exports = connection;