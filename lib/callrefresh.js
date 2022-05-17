import axios from "axios";
import jsCookie from "js-cookie";


export default async  function refresh (refreshToken){
  var info;
    try{
  info=await axios.post('/api/user/refresh',{
       'token':refreshToken,
   })
 //  console.log(info)
    }
    catch(err){
      console.log(err)
return "err";
    }
    
  //  console.log("------------------call refresh")
  if(info?.data)
  jsCookie.set('id2',info.data.newRefreshToken,{ expires: 60 })
  return info.data.newAccessToken;
}