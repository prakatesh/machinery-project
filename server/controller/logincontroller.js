const signupModules=require('../modules/signup')

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const data=await signupModules.findOne({email:email})

            if(!data)
            {
                res.json("wrong_user")
            }
            else if(data.password!==password)
            {
                res.json("wrong_password")
            }
            else
            {
                res.json({status:200,data:data})
            }
    }
    catch(e)
    {
        console.log(e)
    }
}