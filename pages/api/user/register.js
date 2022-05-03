import User from '../../../models/User'
import bcrypt from 'bcrypt'
import dbConnect from '../../../lib/dbConnect';
export default async function(req,res){
    
    let {username,email,password}=req.body;
    try{await dbConnect();
    //let user;
    let user=await User.findOne({username:username});
    // await User.find({username:username},(err,userdata)=>{
    //     if(err){
    //         console.log("error");
    //     }
    //     user=userdata;
    // }).clone().catch(function(err){ console.log(err)})
    if(user){
        res.status(401).send("already registered");
        return;
    }
    
    let salt=await bcrypt.genSalt(10);
    password= await bcrypt.hash(password,salt)

    const newuser=await new User({username,email,password,isAdmin:"false",isPremium:"false",visits:"0",profilepic:"default",nooflinks:"0"});

    await newuser.save();
await res.status(200).send("registered")
return}
    catch(err){
        console.log(err);
        res.status(401).send(err);
        return
    }
}