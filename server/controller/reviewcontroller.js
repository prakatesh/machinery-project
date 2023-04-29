const  reviewModel=require('../modules/review')

exports.review=async(req,res)=>{
    try{
        const {email,date,sample,review,item}=req.body
        const data={
            email:email,
            date:date,
            sample:sample,
            review:review,
            item:item
        }
        await reviewModel.insertMany([data])
        console.log("The data from admin is received for review")
        res.json({status:200,data:"data"})
    }
    catch(e)
    {
        console.log(e)
    }
}