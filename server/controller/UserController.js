const signUpModule=require('../modules/signup')

exports.data=async(req,res)=>{
    try{
        const data=await signUpModule.find({role:"User"})
        res.json({status:200,data:data})
    }
    catch(e){
        console.log(e)
    }
}

exports.active=async(req,res)=>{
    try{
        const {_id}=req.body
       await signUpModule.findByIdAndUpdate({_id:_id},{active:1})
    }
    catch(e){
        console.log(e)
    }
}

exports.deactive=async(req,res)=>{
    try{
        const {_id}=req.body
       await signUpModule.findByIdAndUpdate({_id:_id},{active:0})
    }
    catch(e){
        console.log(e)
    }
}