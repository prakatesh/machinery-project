const mongoose =require('mongoose')

const newSignup=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true
    },
    active:{
        type:Number,
        default:0
    }
})

const signUp=mongoose.model('signUp',newSignup,'signUp')

module.exports=signUp