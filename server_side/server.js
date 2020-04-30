//this script contains simple server side calculations/processes
//to retrieve and push/update date in the local SQLite database db_example.db

//NodeJs + ExpressJs
//start your_dir/your_server_file.js ,  in that folder open the terminal and start the service using
// dir> node your_server_file.js      || if you have nodemon installed use nodemon your_server_file.js
// go to localhost:9000/api/courses
//stop server windows germany keyboard strg+C

//POST, PATCH etc requests via curl -d "keyword=_&keyword2=_&..." -X POST http://localhost:9000/api/new_todo

//every function that opens a db connection should closed it after it's calculations!
const  express = require('express');
let cors = require('cors') //for localhost access
let app = express();

app.use(cors())

const sqlite3 = require('sqlite3').verbose(); //open database connection

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let db = new sqlite3.Database('../db_example/db_example.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {return console.error(err.message);}
    console.log('Connected to the db_example database.');
});



app.get('/', (request, response) => {

    let db = new sqlite3.Database('../db_example/db_example.db', sqlite3.OPEN_READ, (err) => {
        if (err) {return console.error(err.message);}
        console.log('Connected to the db_example database.');
    });

    response.send("You are using the simple todo api. For more information <br>" +
                  "go to localhost:9000/api");

    db.close()
})

//usually we separate specific routes into files
app.get('/api', (request, response) =>{

    let db = new sqlite3.Database('../db_example/db_example.db', sqlite3.OPEN_READ, (err) => {
        if (err) {return console.error(err.message);}
        console.log('Connected to the db_example database.');
    });

    response.send("list of all api calls <br/> " +
        "/ <br/>" +
        "/api <br/>" +
        "/api/access_todos <br/>"+
        "/api/update_todo/:p_id <br/>"+
        "/api/new_todo <br/>");
    db.close();
})



app.get('/api/access_todos', (request, response) =>{
    let db = new sqlite3.Database('../db_example/db_example.db', sqlite3.OPEN_READ, (err) => {
        if (err) {return console.error(err.message);}
        console.log('Connected to the db_example database.');
    });

    const select_todos = "SELECT * FROM todos";

    let allRows = []
    db.each(select_todos, [], (err ,row) => {
        if (err) {
            response.json({
                "message":"failed",
                "data":[],
            })
            console.error(err.message);
        }

        allRows.push(row);
    }, () =>{
        //callback function
        console.log(allRows)
        response.json({
            "message":"success",
            "data":allRows
        })
    })

    db.close();
})

app.post('/api/new_todo', (request, response, next) =>{
    let db = new sqlite3.Database('../db_example/db_example.db', sqlite3.OPEN_WRITE, (err) => {
        if (err) {return console.error(err.message);}
        console.log('Connected to the db_example database.');
    });

    let errors=[]

    if (!request.body.d_todo_text){
        errors.push("No text specified");
    }
    if (errors.length){
        response.status(400).json({"error":errors.join(",")});
        return;
    }

    const insert_todo = 'INSERT INTO todos (todo_text) ' +
                        'VALUES(?)';
    let data = {
        d_todo_text: request.body.d_todo_text
    }

    db.run(insert_todo, [data.d_todo_text], function (err, result){

        if (err){
            response.status(400).json({"error": err.message})
            return;
        }else{
            response.json({
                "message": "success",
                "data": data,
                "id" : this.lastID
            })
        }
    })
    db.close();
})

app.patch("/api/update_todo/:p_id", (request, response, next) => {

    let db = new sqlite3.Database('../db_example/db_example.db', sqlite3.OPEN_WRITE, (err) => {
        if (err) {return console.error(err.message);}
        console.log('Connected to the db_example database.');
    });

    const update_todo = 'UPDATE todos set '+
                        'todo_text = COALESCE(?, todo_text)'+ //if ? is NULL, take todo_text
                        'WHERE ' +
                        'todo_id = ?';
    let data = {
        d_todo_text: request.body.d_todo_text
    }

    db.run(update_todo, [data.d_todo_text, request.params.p_id], function (err, result){
        if(err){
            console.log(err.message)
            response.status(400).json({"error": response.message})
            return;
        }

        console.log("updated")
        response.json({
            message: "success",
            data: data,
            changes: this.changes
        })

    })

    db.close()
})

app.delete("/api/delete_todo/:p_id", (request, response, next) => {

    let db = new sqlite3.Database('../db_example/db_example.db', sqlite3.OPEN_WRITE, (err) => {
        if (err) {return console.error(err.message);}
        console.log('Connected to the db_example database.');
    });

    const update_todo = 'DELETE FROM todos '+
        'WHERE ' +
        'todo_id = ?';

    db.run(update_todo, [request.params.p_id], function (err, result){
        if(err){
            console.log(err.message)
            response.status(400).json({"error": response.message})
            return;
        }

        console.log("item deleted")
        response.json({
            message: "success",
            changes: this.changes
        })

    })

    db.close()
})

const port = process.env.PORT || 9000
//react app uses 3000
app.listen(port,
    () => {console.log("You are listening to Port " + port.toString(10))})

//export for testing
export default app;
