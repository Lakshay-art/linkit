import dbConnect from "../../../lib/dbConnect";
import Link from "../../../models/Link";
export default async function handler(req,res){
    try{
        await dbConnect();
    const {rearrange}=req.body;
    let len=rearrange.length;
    for(let i in rearrange){
       console.log(rearrange[i]._id +" "+(len-i)+"")
        Link.updateOne({"_id":rearrange[i]._id},{"priority":(len-i)+""},(err,response)=>{
            if(err)
            console.log(err);

        });
    }
    
    // return console.log(err)
    return res.status(200).send("done");
}
    catch(err){
       return console.log(err);
    }
}