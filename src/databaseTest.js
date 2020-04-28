const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db_example/db_example.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});