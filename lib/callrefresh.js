import axios from "axios";


export default async  function refresh (refreshToken){
  var info;
    try{
  info=await axios.post('/api/user/refresh',{
       'token':refreshToken,
   })
 //  console.log(info)
    }
    catch(err){
return "err";
    }
    
  //  console.log("------------------call refresh")
  return info.data.newAccessToken;
}