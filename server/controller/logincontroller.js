const signupModules=require('../modules/signup')

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const data=await signupModules.findOne({email:email})

            if(!data)
            {
                res.json("wrong_user")
                console.log("wrong user")
            }
            else if(data.password!==password)
            {
                res.json("wrong_password")
                console.log("wrong password")
            }
            else
            {
                // res.json("correct_user")
                console.log("correct user")
                res.json({status:200,data:data})
            }
    }
    catch(e)
    {
        console.log(e)
    }
}