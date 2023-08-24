var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://prakatesh2020:Kongu2022@cluster0.p3hpn4w.mongodb.net/mechRange')
.then(()=>
{
    console.log('DB Connected successfully')
})
.catch((e)=>{
    console.log(e.message)
})
