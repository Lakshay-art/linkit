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
      let currusername=username+"";
    if(user){
        res.status(401).send("Already registered");
        return;
    }
    else if(email+""==""){
        res.status(403).send("Please Provide an Email");
        return
    }
    else if(password+""==""){
        res.status(403).send("Please Provide an valid password");
        return
    }
  

    else if(currusername.length>8||currusername.length<3){
        res.status(402).send("Username must be 3 to 8 characters long and must not contains space");
       // toast("Username must be 3 to 8 characters long")
       return ;  
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