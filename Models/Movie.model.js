const mongoose=require("mongoose");


const movieSchema=mongoose.Schema({
title:{type:String, required:true},
description:{type:String, required:true},
rating:{type:Number, required:true},
releaseDate:{type:String, required:true},
category:{type:String, required:true},
imageURL:{type:String,required:true}
})

const MovieModel=mongoose.model("movie", movieSchema);
module.exports={
    MovieModel
}