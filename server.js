const express = require("express");
const {connection} =require("./Config/db")
const cors = require("cors");
const { allmoviesController } = require("./Routes/allmovies.routes");
const { userController } = require("./Routes/user.routes");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("movie streaming app home page")
})

// app.post("/login", (req,res)=>{

//     const {email,password}= req.body

//     console.log(`login successfull ${email, password}`)
  
//    try{



//           if(email==="dx@gmail.com", password==="1234"){
//               var token = jwt.sign({ email:email }, process.env.SECRET_KEY);
//               res.send({message:"Login Successfull", token })
//           }else{
//               res.send({message:"Invalid credentials, pelase signup if you haven't"})
//           }
//         }
//     catch(err){
//         res.send({message:"Invalid credentials, pelase signup if you haven't"})
//     }  
// })
app.use("/user", userController);
app.use("/allproducts",allmoviesController);

app.listen(PORT, async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log("Error connectiong to DB") 
    }
console.log(`listening at port ${PORT}`)
})