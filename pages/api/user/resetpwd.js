import jwt from 'jsonwebtoken';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

var nodemailer = require( 'nodemailer');
export default async function(req,res){
    try{
        await dbConnect();
    const usermail=req.body.usermail+"";
    const user=await User.findOne({"email":usermail})
    if(!user){
        return res.status(500).send("No user found on this email address");
    }
   
        const token= jwt.sign({username:user.username,_id:user._id,isPremium:user.isPremium},process.env.RSECRET_KEY,{
            expiresIn:"43200s",
         })
    var transporter = await nodemailer.createTransport({
    service:'gmail',
    auth: {
         user:'lakshaymuseum123@gmail.com',
         pass:'lqlt fulb axpf kncw',
        }
     });
    
    var mailoptions = {
    from:'lakshaymuseum123@gmail.com',
    to:usermail.trim(),
    subject: "Password Reset link for your Linkerr account",
    text:
   `
    
    `,
     html: `
           <p> Hi ${user.username}, seems like you forgot your password like me 🤣.<br/>
            Don't worry I am here to help you 😁</p>

           <strong> Enter a new password here: https://linkerr.vercel.app/resetpwd/${token} <strong>

            <strong style='color:red'><p>Don't share this mail with any one</p>
             <p>Link will expire after 12 hours.</p></strong>`
    };
    await transporter.sendMail(mailoptions, function(error, info){
    if (error)
    {
    return console.log(error);
    } else {
    console. log ('Email sent:' + info. response);
    }
})

    }
    catch(err){
       return console.log(err)
    }
return res.status(200).send("a");
}