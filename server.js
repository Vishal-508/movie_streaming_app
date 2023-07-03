const express = require("express");
const {connection} =require("./Config/db")
const cors = require("cors")
const app = express();
const PORT = 8080;


app.get("/",(req,res)=>{
    res.send("movie streaming app home page")
})


app.listen(PORT, async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log("Error connectiong to DB") 
    }
console.log(`listening at port ${PORT}`)
})