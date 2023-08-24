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
        res.json({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}

exports.comment1=async(req,res)=>{
    try{
        const {comment,email,_id}=req.body
        const data=await reviewModel.findOneAndUpdate({email:email,_id:_id},{comment:comment,see:1},{new:true})
        console.log(data)
        res.json({status:200,data:"done"})
    }
    catch(e)
    {
        console.log(e)
    }
}