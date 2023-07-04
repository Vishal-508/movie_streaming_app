const express = require("express");
const {connection} =require("./Config/db")
const cors = require("cors");
const { allmoviesController } = require("./Routes/allmovies.routes");
const { userController } = require("./Routes/user.routes");
const { authentication } = require("./Middlewares/authentication");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("movie streaming app home page")
})

app.use("/user", userController);
app.use("/allproducts",authentication,allmoviesController);

app.listen(PORT, async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log("Error connectiong to DB") 
    }
console.log(`listening at port ${PORT}`)
})