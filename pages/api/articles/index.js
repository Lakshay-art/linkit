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
        const links = await Link.find({})
        console.log(links)
        res.json([...links])
      } catch (error) {
        res.json({ success: false })
      }
      break
    case 'POST':
      try {
       // const username=req.body.username;
       await Link.find({},(err,userdata)=>{
         if(err){
           //res.json([])
           console.log(error+"--------")
         }
         //console.log([...userdata]);
         userdata.reverse();
         res.status(200).json([...userdata])
       })
      } catch (error) {
       // res.json([])
       console.log(error+"--------")
      }
      break
    default:
      res.json([])
      break
  }
}
