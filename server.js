const express = require("express");

const app = express();

app.get("/",(req,res,next)=>{
    return res.json({
        name: "Trong Quynh",
        age: 20
    });
})

app.listen(8080);