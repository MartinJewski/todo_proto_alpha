const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('C:/sqlite/dbs/todo_db.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});