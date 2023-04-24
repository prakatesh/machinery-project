var express=require('express')
var app=express()

require('./connect')

app.listen(8000,()=>
{ console.log("port is listening to 8000")
})