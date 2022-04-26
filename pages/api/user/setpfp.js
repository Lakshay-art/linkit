import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User'
import {verify} from "../../../lib/verifyuser";
export default async function handler(req,res){
    try{
      await dbConnect(); 
      const infofromheaders=verify(req)||{username:''} ;
     
      const username=infofromheaders.username; 
      const public_id=req.body.public_id;
      console.log(username,public_id)
      await User.findOneAndUpdate({username:username},{profilepic:public_id},function(err,response){
           if(err){return console.log("error in setting pfp")}
           return res.status(200).send("pfp done for "+username);
      })
    }
    catch(err){
         console.log(err)
    }
     
} 