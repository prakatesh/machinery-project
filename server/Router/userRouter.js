const express=require('express');
const router=express.Router();

const {signUp}=require('../controller/signupcontroller')
const {login}=require('../controller/logincontroller')
const {manage,service}=require('../controller/managecontroller')
const {profile}=require('../controller/profileController')

router.post('/signup',signUp)
router.post('/login',login)
router.post('/manage',manage)
router.post("/profile/:email",profile)
router.get('/service/:email',service)

module.exports=router;