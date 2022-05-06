import axios from 'axios';
//import { config } from 'dotenv';
import jsCookie from 'js-cookie';
//require('dotenv').config();
import Layout from '../components/Layout'
import '../styles/globals.css'
import React from 'react'
import $ from 'jquery'
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
React.useEffect(() => {
  let width=$(window).width();
  let height=$(window).height();
  let zoom=100-((1668600-(width*height))/40000)
   console.log(zoom);
  $(document.body).css('zoom',zoom/100)
}, [])


  return (
    <Layout>
      <Component {...pageProps} />
      <div id="touchabsolutecopy" ><div></div></div>
      {/* <div style={{position:"absolute"}} id="testt" ><div>cdcvdv</div></div> */}
    </Layout>
  )
}

export default MyApp
