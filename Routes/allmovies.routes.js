const {Router}=require("express");
const { authentication } = require("../Middlewares/authentication");

const { MovieModel } = require("../Models/Movie.model")

const allmoviesController=Router();


allmoviesController.get("/", async (req, res) => {
   
    const{query}=req.query;
    const {sort}=req.query;

  
     
    if(sort==="asc"){
      if(!query){
        const products = await MovieModel.find().sort({releaseDate:`${1}`});
      res.send(products);
      }else{

        const products = await MovieModel.find(query).sort({releaseDate:`${1}`});
        res.send(products);
      }
    }else if(sort==="desc"){
        const products = await MovieModel.find(query).sort({releaseDate:`${-1}`});
        res.send(products);
    }
    
  
    });

    allmoviesController.get("/singleProduct",async(req,res)=>{
        const query=req.query;
      
    
          const products = await MovieModel.findOne(query);
          res.send(products)
      
      })
   
      allmoviesController.post("/create", async (req, res) => {
        const {
            title,
            description,
            rating,
            releaseDate,
            category,
            imageURL
            
        } = req.body;
      
        const product = new MovieModel({
            title,
            description,
            rating,
            releaseDate,
            category,
            imageURL
        });
        try {
          await product.save();
          res.send({message:"movie card is created"});
        } catch (err) {
            console.log(err)
          res.send({message:"something went wrong"});
        }
      });

module.exports={allmoviesController}