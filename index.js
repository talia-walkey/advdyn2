const express = require("express");
const app = express();

//process.env.PORT makes it public and so that you do not need :3000
const port = process.env.PORT || 3000;

app.get("/", (req, resp)=>{
    resp.end("Hi, Welcome to my heroku app");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("port is running");
})