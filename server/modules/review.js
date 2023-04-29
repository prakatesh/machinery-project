const mongoose =require('mongoose')

const review=mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    sample:{
        type:Number,
        require:true,
    },
    review:{
        type:String,
        require:true
    },
    item:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
})

const reviews=mongoose.model('review',review,'review')

module.exports=reviews