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

    allmoviesController.get("/singleProduct/:id",async(req,res)=>{
     
      const {id}=req.params;
      if(!id){
          return res.status(400).send({message:"Id is required"})
      }
      try {
        const products = await MovieModel.findOne({_id:id});
        console.log(products)
        return res.status(200).send(products);
      } catch (e) {
        return res.status(400).send({ error: e });
      }
          
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