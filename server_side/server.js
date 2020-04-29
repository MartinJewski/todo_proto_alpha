//this script contains simple server side calculations/processes
//to retrieve and push/update date in the local SQLite database db_example.db

//NodeJs + ExpressJs
//start your_dir/your_server_file.js ,  in that folder open the terminal and start the service using
// dir> node your_server_file.js      || if you have nodemon installed use nodemon your_server_file.js
// go to localhost:9000/api/courses
//stop server windows germany keyboard strg+C


var express = require('express');

var app = express();

app.get('/', (request, response) => {

    response.send("Hello there!")

})

//usually we separate specific routes into files
app.get('/api/courses', (request, response) =>{
    response.send(["Theoretische Informatik", "Computer Grafik", "Mathe1"])
})


app.get('/api/information', (request, response) =>{
    response.send("special information page <br/>" +
        "/api and /courses /info etc.. that are in use")
})

app.get('/api', (request, response) =>{
    response.send("list of all api calls <br/> " +
        "/ <br/>" +
        "/api <br/>" +
        "/api/information <br/>" +
        "/api/courses")
})

//react app uses 3000
app.listen(9000, () => { console.log("You are listening to Port 9000")})
