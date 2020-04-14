//require the libray
const mongoose= require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection(to check if it is successfully)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print up and running 
db.once('open',function(){
    console.log("successfully conneted to the database");
});

module.exports=db;