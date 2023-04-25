const express=require('express');
const router=express.Router();

const {signUp}=require('../controller/signupcontroller')
const {login}=require('../controller/logincontroller')

router.post('/signup',signUp)
router.post('/login',login)

module.exports=router;