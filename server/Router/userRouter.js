const express=require('express');
const router=express.Router();

const {signUp}=require('../controller/signupcontroller')
const {login}=require('../controller/logincontroller')
const {manage,service}=require('../controller/managecontroller')
const {profile}=require('../controller/profileController')
const {dashboardData}=require('../controller/dashboardController')


router.post('/signup',signUp)
router.post('/login',login)
router.post('/manage',manage)
router.post("/profile/:email",profile)
router.get('/service/:email',service)
router.get('/dashboard/:email',dashboardData)

module.exports=router;