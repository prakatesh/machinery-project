const express=require('express');
const router=express.Router();

const {signUp}=require('../controller/signupcontroller')
const {login}=require('../controller/logincontroller')
const {manage}=require('../controller/managecontroller')
const {profile}=require('../controller/profileController')

router.post('/signup',signUp)
router.post('/login',login)
router.post('/manage',manage)
router.post("/profile/:email",profile)

module.exports=router;