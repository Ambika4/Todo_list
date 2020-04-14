//variable for checking everything is fine before adding database
var todoList = [
    {
        description:"I want to complete the project",
        category:"COLLEGE",
        due_date:"12/03/2020"
    },
    {
        description:"Maths work",
        category:"SCHOOL",
        due_date:"12/03/2020"
    },
    
    {
        description:"Drawing",
        category:"SCHOOL",
        due_date:"12/03/2020"
    }
    
]
//importing database object
const db = require('../config/mongoose');
const todoList_db=require('../models/todoList');

//To display the content stored so far
/*module.exports.home=function(req,res){

    //fetch the content 
    todoList_db.find({},function(err,todolists){
        if(err){
            console.log("Error in fetching the content");
            return;
        }
        console.log(todolists);
    });
    return res.render('home',{
        title:"Home",
        todo_list:todolists
        //todo_list is means of communication between your browser and your server
        //todolist naming convention followed by javascript
    });
   
}*/
module.exports.home=function(req,res){

    //fetch the content 
    todoList_db.find({},function(err,todolists){
        if(err){
            console.log("Error in fetching the content");
            return;
        }

	return res.render('home',{
        	title:"Home",
        	todo_list:todolists
    	});
    });
}

module.exports.addTask=function(req,res)
{
    console.log(req.body.dueDate);
    todoList_db.collection.insertOne({
        description:req.body.description,
        category:req.body.category,
        dueDate:req.body.dueDate

    },function(err,newList){
        if(err)
        {
            console.log("error in creating a list");
            return;
        }

        //console.log(newList);
    });
    return res.redirect('back');
}

module.exports.deleteTask=function(req,res)
{
    //get the id from query in the URL
    let id=req.query.id;
    //find the task in the database useing the id then delete the task
    todoList_db.findByIdAndDelete(id, function(err){
        if(err){
            console.log("CANT DELETE");
            return;
        }
        return res.redirect('back');
    });
    
}



//module.exports.actionName = function(req,res){}