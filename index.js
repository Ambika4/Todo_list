const express= require('express');
const app= express();
const port=8000;

//going to use express router
//It is pointing to index file in routes folder
//app.use signify middlewares


//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//for reading key value pair in the html form add it before routes.
app.use(express.urlencoded());

app.use('/',require('./routes'));




app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
        /*interpolition
        console.log(`Error in running : ${err}`);
        */
    }
    console.log(`server is running on port${port}`);
});