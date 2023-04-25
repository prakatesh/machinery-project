const express=require('express');
const router=express.Router();

const {signUp}=require('../controller/signupcontroller')
const {login}=require('../controller/logincontroller')
const {manage}=require('../controller/managecontroller')

router.post('/signup',signUp)
router.post('/login',login)
router.post('/manage',manage)

module.exports=router;