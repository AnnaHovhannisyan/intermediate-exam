const express=require('express');
const router=express.Router();
const UserController=require('../controllers/user-controller');


router.route('/').get((req,res)=>{
    res.send("It is the main page");

});

module.exports=router;