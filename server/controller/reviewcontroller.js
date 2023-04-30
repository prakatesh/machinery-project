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


exports.reviewUser=async(req,res)=>{
    try{
        const user=req.params.email
        const data=await reviewModel.find({email:user,see:0})
        console.log("data for the user review")
        res.json({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}

exports.comment1=async(req,res)=>{
    try{
        const {comment,email,date}=req.body
        const data=await reviewModel.findOneAndUpdate({email:email,date:date},{comment:comment,see:1},{new:true})
        console.log(data)
        res.json({status:200,data:"done"})
    }
    catch(e)
    {
        console.log(e)
    }
}