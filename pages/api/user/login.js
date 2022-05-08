import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const generateAccesssToken=(user)=>{
    return jwt.sign({username:user.username,_id:user._id,isPremium:user.isPremium},process.env.SECRET_KEY,{
        expiresIn:"100s",
    })
 }
 const generateRefreshToken =(user)=>{
    return jwt.sign({username:user.username,_id:user._id,isPremium:user.isPremium},process.env.RSECRET_KEY,{
        expiresIn:"5000000s",
    })
 }

 
export default async function(req,res){
    try{
    await dbConnect();
    let {username,password}=req.body;
    const user=await User.findOne({username:username});
    if(!user){
        res.status(401).send("No user found ,register first");
        return;
    }
    
    let correctpassword=await bcrypt.compare(password,user.password);
    if(!correctpassword){
       // return res.status(404).json({err:"Incorrect Password"});
        return res.status(404).send("Incorrect Password");
    }
    
    const accessToken=generateAccesssToken(user);
    const refreshToken=generateRefreshToken(user);
    res.json({
        id:user._id,
        username:user.username,
        isAdmin:user.isAdmin,
        isPremium:user.isPremium,
        email:user.email,
        profilepic:user.profilepic,
        accessToken,
        refreshToken,
    });
    return;}
    catch(err){
        res.status(400).json(err);
        return;
    }
}