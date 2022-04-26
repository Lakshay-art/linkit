import jwt from 'jsonwebtoken'
const generateAccesssToken=(user)=>{
   return jwt.sign({username:user.username,_id:user._id,isPremium:user.isPremium},"mysecretkey",{
       expiresIn:"100s",
   })
}
const generateRefreshToken =(user)=>{
    return jwt.sign({username:user.username,_id:user._id,isPremium:user.isPremium},"myrefreshsecretkey",{
        expiresIn:"100000s",
    })
 }

export default async function(req,res){
  try{
        const refreshToken=req.body.token;
        if(!refreshToken)
        return res.status(401).send("You are not Authenicated");
        jwt.verify(refreshToken,'myrefreshsecretkey',(err,user)=>{
            err && console.log(err)
            if(err)
            return res.status(500).send(err);
            console.log(user);
            const newAccessToken=generateAccesssToken(user);
            const newRefreshToken=generateRefreshToken(user);
            res.status(200).json({
                newAccessToken,
                newRefreshToken,
                user
            })
        })
    
      }
  catch(err)
  {  
      return console.log(err)

  }
}