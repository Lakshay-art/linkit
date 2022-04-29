import jwt from 'jsonwebtoken';

export  function verify(req){
    const authheader=req.headers?.authorization;
    //console.log(authheader)
    var ans={username:""};
    if(authheader){
        const token=authheader?.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            // if(err)
            // return {username:''};
         //   console.log(user)
            //return "a";
            ans=user;
        })
    }
    return ans;
 //return {username:''};
}