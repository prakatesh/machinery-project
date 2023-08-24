const reviewModel =require('../modules/review')
const manageModel=require('../modules/manage')
const signUp = require('../modules/signup')
exports.dashboardData=async(req,res)=>{
    try{
        let hours=0,oil=0
        const user=req.params.email
        const data=await manageModel.find({email:user})
        for(i of data)
        {
            hours+=i.hours
            oil+=i.oil
        }
        const review=await reviewModel.find({email:user,see:0}).count()
        res.json({status:200,data:[oil,250-hours,review]})

    }
    catch(e)
    {
        console.log(e)
    }
}


exports.adminDashBoard=async(req,res)=>{
    try
    {
        const data=await signUp.find({role:"User",active:1})
        const email=[]
        const list=[]
        var oil=0,hour=0;
        for(i of data)
        {
            email.push(i.email)
        }
        for(i of email)
        {   oil=0
            hour=0
            const email=await manageModel.find({email:i})
            for(j of email)
            {
                oil+=j.oil
                hour+=j.hours
            }
            list.push({email:i,oil:oil,hour:250-hour})
        }
        res.send({status:200,data:list})
    }
    catch(e)
    {
        console.log(e)
    }
}