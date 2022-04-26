import axios from 'axios';
import jsCookie from 'js-cookie';
import Layout from '../components/Layout'
import '../styles/globals.css'

 function  MyApp({ Component, pageProps }) {
//   const access=await refresh(jsCookie.get("id2"));
//   axios.interceptors.request.use(
//     async(config)=>{  console.log(access)
//           let currdate=new Date();
//           let expdate;
//           if(access!=""){
            
//            expdate=jwt_decode(access).exp*1000;
//           if(currdate>expdate){
//               access=await refresh(jsCookie.get("id2"));
//               console.log("new access built")
//           }
//          }
//           else{
//              access=await refresh(jsCookie.get("id2"));
//           }
//           config.headers["authorization"]="Bearer "+access;
//           return config;
//     },(err)=>{
//         return Promise.reject(err);
//     }
// ) 

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
