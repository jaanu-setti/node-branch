const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hello everyone")
})
app.listen(3000,()=>console.log("server is running at 3000"))