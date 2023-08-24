const signupModules=require('../modules/signup')

exports.signUp=async(req,res)=>{
    const{name,email,password,role}=req.body;
    const data=
    {
        name:name,
        email:email,
        password:password,
        role:role
    }
    try{
        await signupModules.create([data])
        res.json("done")
    }
    catch(e)
    {
        console.log(e)
    }
}