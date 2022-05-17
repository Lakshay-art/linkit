import dbConnect from "../../../lib/dbConnect";
import {verify} from "../../../lib/verifyuser";
import Link from "../../../models/Link";
import User from "../../../models/User";

export default async function handler(req,res){
    await dbConnect();
    try{
        
        const infofromheaders=verify(req)||{username:''} ;
       // if(infofromheaders)
        let {username,id,title,description,link,color,tag,visits,priority}=req.body;

        const correctusername=infofromheaders.username;
        if(username!=correctusername){
           visits="0";
           username=correctusername;
           priority="0"
        }
        //limiting links to 12
        const user=id;
        const curruser=await User.findOne({"_id":user});
        let nooflinks=curruser.nooflinks;
        if(nooflinks==12)
        return res.status(402).send("Reached the max limit of 12 links.");
        let currlink=link+"";

        // if(!currlink.includes("www")){
        //     currlink="www."+currlink;

        // }
        if(!currlink.includes("http")){
            currlink="https://"+currlink;

        }
        link=currlink
        const Linkk=await new Link({
            username,user,title,description,link,visits,color,tag,priority
        }) 
        await Linkk.save();
        
        if(isNaN(nooflinks))
        nooflinks="0"
        console.log(nooflinks)
        
        await User.updateOne({"_id":user},{"nooflinks":(Number)(nooflinks)+1+""})
        return res.status(200).send(Linkk);
    }
    catch(err){
        console.log(err);
        return res.status(400).send("Check your internet connection or Re-login");
    }
    

}