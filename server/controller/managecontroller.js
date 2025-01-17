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
    }
    catch(e)
    {
        console.log(e)
    }
}

exports.service=async(req,res)=>{
    try{
        const email=req.params.email
        const data=await manageModules.find({email:email})
        res.json({status:200,data:data})
        }
    catch(e)
    {
        console.log(e)
    }
    
}