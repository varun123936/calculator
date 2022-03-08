const express=require('express')
const app=express()



app.get("/",(req,res)=>{
    res.send('Hello')
})

app.get("/add/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    const r=a+b
    console.log(r)
    //res.send("r")
})

app.get("/sub/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    const r=a-b
    console.log(r)
})

app.get("/mul/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    const r=a*b
    console.log(r)
})

app.get("/div/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    const r=a/b
    console.log(r)
})

app.listen(4040,()=>{
    console.log('Listening at port 4040')
})