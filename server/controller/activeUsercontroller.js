const singnUpModules=require('../modules/signup')

exports.activeUser=async(req,res)=>{
    try{
        const data=await singnUpModules.find({active:1,role:"User"})
        console.log("data for activeUser is send admin")
        res.json({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}
