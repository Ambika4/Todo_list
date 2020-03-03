//variable for checking everything is fine before adding database
var todolist = [
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
module.exports.home=function(req,res){

    return res.render('home',{
        title:"Home",
        todo_list:todolist
        //todo_list is means of communication between your browser and your server
        //todolist naming convention followed by javascript
    });
}

module.exports.addTask=function(req,res)
{
    console.log(req.body);
    todolist.push({
        description:req.body.description,
        category:req.body.Category,
        due_date:req.body.dueDate

    });
    return res.redirect("/");
}



//module.exports.actionName = function(req,res){}