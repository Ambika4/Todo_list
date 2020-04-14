//If we are using the library for second time then 
//it will call previous instance ...just like express
const mongoose = require('mongoose');

//Schema
const todoListSchema = new mongoose.Schema({
    description: {
            type:String,
            required:true
        },
    category:{
            type:String,
            required:true
    },
    dueDate:{
        type:String,
        required:true
    }
    });

    //collection creation
const todoList_db=mongoose.model('todoList',todoListSchema);

module.exports= todoList_db;

    