const signUpModule=require('../modules/signup')

exports.profile=async(req,res)=>{
    try{
        const user=req.params
        // console.log("user",user.email)
        const data=await signUpModule.find({email:user.email})
        console.log("Fetch the data for profile")
        res.json({status:200,data:data})
    }
    catch(e){
        console.log(e)
    }
}