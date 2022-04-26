var cloudinary = require('cloudinary');
require('../config');
export default async function(req,res){
    try{
        const {public_id}=req.body;
        cloudinary.v2.uploader.destroy(public_id, {resource_type: 'image'}, 
          function(error, result) {console.log(result, error)});
          res.status(200).send("deleted pfp")
    }
    catch(err){
        res.status(500).send(err)
    }
}