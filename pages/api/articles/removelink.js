
import dbConnect from "../../../lib/dbConnect";
import { verify } from "../../../lib/verifyuser";
import Link from "../../../models/Link";


export default async function handler(req,res){await dbConnect();
     try{
        const infofromheaders=verify(req)||{username:''} ;
     

    var {username,linkid}=req.body;
    if(username==    infofromheaders.username)
{
       console.log(username+" "+linkid)
        await Link.findOneAndDelete({_id:linkid},(err,ans)=>{
            if(err)
        return res.status(404).send(err);
            
            return res.status(200).send(ans)
            });
        }
    }
    catch(err){
    return console.log("first");
    }
   return ;
}




// import dbConnect from '../../../lib/dbConnect';
// import User from '../../../models/User'
// import Link from '../../../models/Link'

// export default async function handler (req, res) {
  

//   await dbConnect()

//       try {
//         const username=req.body.username;
//        await Link.find({username:username},(err,userdata)=>{
//          if(err){
//            //res.json([])
//            console.log(error+"--------")
//          }
//          console.log([...userdata]);
//          res.status(200).json([...userdata])
//        })
//       } catch (error) {
//        // res.json([])
//        console.log(error+"--------")
//       }
   
  
// }
