import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User'
import Link from '../../../models/Link'

// export default async function  handler (req,res){
//  await dbConnect();
//   // res.status(200).json([{
//   //   id: '4',
//   //   title: 'Why open ecosystems are the future of app development',
//   //   excerpt:
//   //     'When app stores entered the mainstream tech culture, they exposed developers to an audience of millions...',
//   //   body:
//   //     'We can’t get enough of our mobile apps. There were 204 billion apps downloads last year, and that number is rising in 2020.  When app stores entered the mainstream tech culture, they exposed developers to an audience of millions who were keen to adopt the innovative capabilities',
//   // }])
//   try{
//        const username=req.body.username;
//        await User.find({username:username},(err,userdata)=>{
//          if(err){
//            res.status(100).send("user not found")
//          }
//          res.status(200).json(userdata)
//        })
//   }
//   catch(err){
//     res.send("error");
//   } 
       
// }
// // import { articles } from '../../../data'

// // export default function handler(req, res) {
// //   res.status(200).json(articles)
// // }
export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        res.json([{ success: true, data: users }])
      } catch (error) {
        res.json({ success: false })
      }
      break
    case 'POST':
      // try{
      //    const username=req.body.username;
      //    let userlinks;
      //    await Link.find({username:username},(err,userdata)=>{
      //        if(err){
      //          //res.json([])
      //          console.log(error+"--------")
      //        }
      //        console.log([...userdata]);
      //         userlinks=[...userdata];
      //        //res.status(200).json([...userdata])
      //      })
      //    //const userinfo=await User.find({username:username});
      //    console.log("########"+userlinks+"#########")
      //   // return res.status(200).json({userlinks:[...userlinks],userinfo});
      //    return res.status(200).json({});
      // }
      // catch(err){
      //   console.log("errrrrrrrrrrrrr")
      //    return res.status(500).json({})
      // }
      try {
        const username=req.body.username;
        const userinfo=await User.findOne({username:username});
       await Link.find({username:username},(err,userdata)=>{
         if(err){
           //res.json([])
           console.log(error+"--------")
         }
        // console.log([...userdata]+" "+userinfo+"#########################");
         return res.status(200).json({userdata:[...userdata],userinfo})
       })
      } catch(error) {
       //return res.json([])
       return;
       console.log(error+"0000909090909090909090")
      }
      break
    default:
      return res.status(500).json({});
     // break
  }
}
