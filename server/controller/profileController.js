const signUpModule=require('../modules/signup')

exports.profile=async(req,res)=>{
    try{
        const user=req.params
        const data=await signUpModule.find({email:user.email})
        res.json({status:200,data:data})
    }
    catch(e){
        console.log(e)
    }
}