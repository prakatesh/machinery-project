const manageMdules=require('../modules/manage')

exports.manage=async(req,res)=>
{
    const{oil,temp,gas,hours,date,oilpress}=req.body;
    const data=
    {
        oil:oil,
        temp:temp,
        gas:gas,
        hours:hours,
        date:date,
        oilpress:oilpress
    }
    try{
        await manageMdules.create([data])
        res.json("done")
        console.log("Manage data is inserted")
    }
    catch(e)
    {
        console.log(e)
    }
}