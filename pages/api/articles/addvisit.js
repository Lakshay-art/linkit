import Link from "../../../models/Link";

export default async function handler(req,res){
    let {visits,linkid} = req.body;
 
     visits=String(Number(visits)+1);  console.log(visits);
    Link.findOneAndUpdate({_id:linkid},{visits:visits}).exec()
    .then(result=>{
    res.status(200).json({message:'liked'});
    }).
    catch(err=>{
    res.status(500).json({error:err});
    });
    }