import dbConnect from "../../../lib/dbConnect";
import { verify } from "../../../lib/verifyuser";
import Link from "../../../models/Link"
import User from "../../../models/User"
export default async function handler(req,res){
     try{
        await dbConnect();
        const infofromheaders=verify(req)||{_id:''} ;
     
      const user=infofromheaders._id; 

        const {newusername}=req.body;
        let currusername=newusername+"";
         if(currusername.length>8||currusername.length<3 || currusername.includes(" ")){
         res.status(402).send("Username must be 3 to 8 characters long and must not contains space");
        // toast("Username must be 3 to 8 characters long")
        return ;  
     }
        const alreadyexisted =await User.findOne({username:newusername});
       // console.log("alreadyexisted"+alreadyexisted)
        if(!alreadyexisted){
        await User.updateOne({_id:user},{username:newusername});
        await Link.updateMany({user:user},{username:newusername},(err,response)=>{
            if(err)
            return console.log(err+"in changeusername");
            else
            return res.status(200).send("Username Changed");
        })
     }
     return res.status(500).send("User already Exists!! Try different name")
     //sconst a=10/0;
    }
     catch(err){
return console.log(err+"in changeusername");
        //  return res.send("User already Exists!! Try different name")
         
     }
     //return ;
}