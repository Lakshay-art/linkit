import dbConnect from "../../../lib/dbConnect";
import {verify} from "../../../lib/verifyuser";
import Link from "../../../models/Link";

export default async function handler(req,res){
    await dbConnect();
    try{
        
        const infofromheaders=verify(req)||{username:''} ;
        let {username,id,title,description,link,color,tag,visits,priority}=req.body;

        const correctusername=infofromheaders.username;
        if(username!=correctusername){
           visits="0";
           username=correctusername;
           priority="0"
        }
        const user=id;
        const Linkk=await new Link({
            username,user,title,description,link,visits,color,tag,priority
        }) 
        await Linkk.save();
        return res.status(200).send(Linkk);
    }
    catch(err){
        console.log(err);
        return res.status(400).send(err);
    }
    

}