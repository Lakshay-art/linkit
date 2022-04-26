import Link from "../../../models/Link";
import User from "../../../models/User"
export default async function handler(req,res){
    let {visits,userid} = req.body;
     if (visits==""||visits==undefined)
     visits="0";
     visits=String(Number(visits)+1);  console.log(visits);
    User.findOneAndUpdate({_id:userid},{visits:visits}).exec()
    .then(result=>{
    return res.status(200).json({message:result});
    }).
    catch(err=>{
    return res.status(500).json({error:err});
    });
    }