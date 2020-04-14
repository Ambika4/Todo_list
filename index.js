const express= require('express');

//fired express server
const app= express();

//port for display
const port=8000;

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');


//for reading key value pair in the html form add it before routes.
app.use(express.urlencoded());

//for using static files like css ,javascript
//when we type app.use(express.static("assets")); then all the <link> and <script> 
//tag will have path automatically starting from assets folder so we dont need to 
//give it again
app.use(express.static('assests'));
//app.use("assest", express.static(__dirname + 'assest'));


//going to use express router
//It is pointing to index file in routes folder
//app.use signify middlewares
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