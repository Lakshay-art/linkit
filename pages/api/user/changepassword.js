import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import bcrypt from 'bcrypt'
import { verify } from '../../../lib/verifyuser';
export default async function handler(req,res){
    try{
         await dbConnect();
         const infofromheaders=verify(req)||{username:''} ;
     
      const userid=infofromheaders._id; 
         const {password}=req.body;
         const salt= await bcrypt.genSalt(10);
         const newpassword= await bcrypt.hash(password,salt);
         User.findOneAndUpdate({_id:userid},{password:newpassword},(err,response)=>{
             if(err)
             return console.log(err) ;
             console.log("pwd changed")
             return res.status(200).send(response);
         })

    }
    catch(err){
      console.log(err);
    }
}