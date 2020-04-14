const express= require('express');
/*It will fetch old instance of express if we are adding it not for first time*/
/*express is required only once*/

//express router
const router=express.Router();

const homeController=require('../controllers/home_controller');
//router.use('/create-addlist',require('./post'));

//for connection check
console.log('router loaded');
router.get('/',homeController.home);
router.post('/create-addlist',homeController.addTask);
router.get('/delete-work/',homeController.deleteTask);
//for any further routes access from here
//router.use('/routername',require('./routerfile));
module.exports=router;