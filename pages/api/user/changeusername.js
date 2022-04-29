import dbConnect from "../../../lib/dbConnect";
import { verify } from "../../../lib/verifyuser";
import Link from "../../../models/Link"
import User from "../../../models/User"
export default async function handler(req,res){
     try{
        await dbConnect();
        const infofromheaders=verify(req)||{username:''} ;
     
      const user=infofromheaders._id; 
        const {newusername}=req.body;
        await User.updateOne({_id:user},{username:newusername});
        await Link.updateMany({user:user},{username:newusername},(err,response)=>{
            if(err)
            return console.log(err+"in changeusername");
            else
            return res.status(200).send("Username Changed");
        })
     }
     catch(err){
         return console.log(err+"in changeusername");
     }
}