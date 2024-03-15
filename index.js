const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        message :"Success",
        success:true
    })
})

app.listen(8000,()=>{
    console.log('server is runnning on port 8000')
})