const express=require('express');
const router=express.Router();

const {signUp}=require('../controller/signupcontroller')
const {login}=require('../controller/logincontroller')
const {manage,service}=require('../controller/managecontroller')
const {profile}=require('../controller/profileController')
const {dashboardData}=require('../controller/dashboardController')
const {reviewUser,comment1}=require('../controller/reviewcontroller')


router.post('/signup',signUp)
router.post('/login',login)
router.post('/manage',manage)
router.post("/profile/:email",profile)
router.get('/service/:email',service)
router.get('/dashboard/:email',dashboardData)
router.get('/review/:email',reviewUser)
router.put('/comment',comment1)

module.exports=router;