const reviewModel =require('../modules/review')
const manageModel=require('../modules/manage')

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
        console.log("Fetch for dashBoard")
        res.json({status:200,data:[oil,250-hours,review]})

    }
    catch(e)
    {
        console.log(e)
    }
}