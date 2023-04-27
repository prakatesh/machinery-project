const manageModules=require('../modules/manage')

exports.manage=async(req,res)=>
{
    const{oil,temp,gas,hours,date,oilpress,email}=req.body;
    const data=
    {
        oil:oil,
        temp:temp,
        gas:gas,
        hours:hours,
        date:date,
        oilpress:oilpress,
        email:email
    }
    try{
        await manageModules.create([data])
        res.json("done")
        console.log("Manage data is inserted")
    }
    catch(e)
    {
        console.log(e)
    }
}

exports.service=async(req,res)=>{
    try{
        const email=req.params.email
        console.log(email)
        const data=await manageModules.find({email:email})
        console.log("the data is send to user")
        console.log(data)
        res.json({status:200,data:data})
        }
    catch(e)
    {
        console.log(e)
    }
    
}