const express=require('express')
const router=express.Router()

const {data,active,deactive}=require('../controller/UserController')
const {activeUser}=require('../controller/activeUsercontroller')

router.get('/usersignup',data)
router.put('/active',active)
router.put('/deactive',deactive)
router.get('/activeUser',activeUser)

module.exports=router
