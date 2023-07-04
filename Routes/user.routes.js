const {Router}=require("express");
const jwt=require("jsonwebtoken");
const { UserModel } = require("../Models/User.model");
require("dotenv").config();

const userController=Router();

userController.post("/login", async(req,res)=>{

    const {email,password}= req.body;
  
  
   try{

      var user= await UserModel.findOne({email});
      const stored_password=user.password;
      const stored_email=user.email;
      console.log(stored_password,stored_email)
          
          if(email==stored_email && password==stored_password){
              var token = jwt.sign({ email:email }, process.env.SECRET_KEY);
              res.send({message:"Login Successfull", token })
          }else{
              res.send({message:"Invalid credentials, pelase signup if you haven't"})
          }
        }
    catch(err){
        res.send({message:"Invalid credentials, pelase signup if you haven't"})
    }  
})
module.exports={
    userController
}