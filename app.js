const express = require("express");
const app = express();
const PORT  = 5000;


app.get("/home",(req,res)=>{
    res.json({
        message:"My first ci-cd pipeline"
    })
})

app.listen(PORT,()=>{
    console.log(`App running on ${PORT} port`)
})


