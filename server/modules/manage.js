const mongoose =require('mongoose')

const manage=mongoose.Schema({
    oil:{
        type:Number,
        require:true
    },
    temp:{
        type:Number,
        require:true
    },
    gas:{
        type:Number,
        require:true,
    },
    hours:{
        type:Number,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    oilpress:{
        type:Number,
        require:true
    }
})

const signUp=mongoose.model('manage',manage,'manage')

module.exports=signUp