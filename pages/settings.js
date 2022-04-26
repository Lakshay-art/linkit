// import React from 'react';
import {server} from '../config/index'
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Settings.module.css'
import Image from 'next/image'
import $ from 'jquery'
import jwt_decode from 'jwt-decode'
import refresh from '../lib/callrefresh';
// import { server } from '../config';

// const settings = () => {
  
  
    
//     React.useEffect(()=>{   
         
 
// document.getElementById("upload_widget").addEventListener("click",async function (){
//   const response = await fetch(`${server}/api/signuploadwidget`);
//   const props = await response.json();
//        const options = {
//         cloudName: 'lakshaythegupta' ,
//         apiKey: '613344191461828',
//         uploadSignatureTimestamp:props.signature.timestamp,
//        uploadSignature: props.signature,
//         cropping: false,
//         // public_id:'laksha',
//         // folder: 'profiles',
//         // uploadPreset: 'hello1'
//       }
//       const processResults = (error, result) => {
//         if (!error && result && result.event === 'success') {
//           console.log(result)
          
//         //   var str = JSON.stringify(result, null, 4);
//         //   document.getElementById("uwdata").innerHTML += str;
//         }
//       }
//         var myWidget = window.cloudinary.createUploadWidget({
            
//                options},
//                 // processResults  
//                 (error, result) => { 
//     if (!error && result && result.event === "success") { 
//       console.log('Done! Here is the image info: ', result.info); 
//     }
//   }
//   , 

// )
//     myWidget.open();
//   }, false);



//    },[]); 
//     return (
//         <>
//         <Head>
//         <script src="https://upload-widget.cloudinary.com/global/all.js"></script>
//         </Head>
//             <button id="upload_widget">Upload files</button>
//         </>
//     );
// };

// export default settings;

// // export const getServerSideProps=async()=>{
// //   const response = await fetch(`${server}/api/signuploadwidget`);
// //   const data = await response.json();
// //   return{
// //     props:{
// //       data,
// //     }
// //   }
// // }







// import React from 'react';
// //import { useEffect } from 'react/cjs/react.production.min';

// const App = () => {
//   React.useEffect(()=>{
//     document.addEventListener('DOMContentLoaded', async () => {
//     const response = await fetch('/api/signuploadwidget');
//     const data = await response.json();
  
//     const options = {
//       cloudName: data.cloudname,
//       apiKey: data.apikey,
//       uploadSignatureTimestamp: data.timestamp,
//       uploadSignature: data.signature,
//       cropping: false,
//       folder: 'signed_upload_demo_uw'
//     }
  
//     const processResults = (error, result) => {
//       if (!error && result && result.event === 'success') {
//         console.log(result)
        
//         var str = JSON.stringify(result, null, 4);
//         document.getElementById("uwdata").innerHTML += str;
//       }
//     }
  
//     const myWidget = window.cloudinary.createUploadWidget(
//       options,
//       processResults
//     )
//     document
//       .getElementById('upload_widget')
//       .addEventListener('click', () => myWidget.open(), false)
//   })
//   },[])
  
//   return (
//     <>
//         <button id="upload_widget">Upload files</button>
//     </>
//   );
// };

// export default App;


import React from 'react';
import jsCookie from 'js-cookie';
import newaxios from '../lib/customaxios'

const settings = () => {

  const newusername=new React.createRef();
  const newpassword=new React.createRef();
  const cloudName =process.env.CLOUD_NAME; // replace with your own cloud name
const uploadPreset = "hello1"; // replace with your own upload preset

// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference
//const [accesss, setaccesss] = React.useState();
const theaxios=axios.create();
React.useEffect(async()=>{
  $('#passwordinput').slideUp('slow');
  $('#usernameinput').slideUp('slow');

//   const accessTokenn= await refresh(jsCookie.get("id2"));
//   console.log(accessTokenn);
//   //setaccesss(accessTokenn);
//   var accesss=accessTokenn;
  
// theaxios.interceptors.request.use(
//     async(config)=>{ 
//           let currdate=new Date();
//           let expdate; console.log(accesss)
//           if(accesss!=""){
            
//            expdate=jwt_decode(accesss).exp*1000;
//           if(currdate>expdate){
//               accesss=await refresh(jsCookie.get("id2"));
//               console.log("new access built")
//           }
//          }
//           else{
//              accesss=await refresh(jsCookie.get("id2"));
//           }
//           config.headers["authorization"]="Bearer "+accesss;
//           console.log(accesss)
//           return config;
//     },(err)=>{
//         return Promise.reject(err);
//     }
// ) 
    
 })


React.useEffect(async()=>{
  


document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    const myWidget =  cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
         //clientAllowedFormats: [".jpg",".jpeg",".png",".gif"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
         theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
         setpfp(result);
          
        }
        console.log(result+"-----------------"+error)
      }
    );
    myWidget.open();
  },
  false
);
},[])
// React.useEffect(async()=>{
// // setuser({
// //     //id:localStorage.getItem('id'),
// //    // username:localStorage.getItem('username'),
   
// //    username:jsCookie.get('username'),
// // })



// },[])





const setpfp=async(result)=>{
 // console.log(result)
 if(jsCookie.get("pfp")!="default"){
await (await newaxios()).post(`${server}/api/user/deleteoldpfp`,{
  public_id:jsCookie.get("pfp")
}).then((res)=>{console.log(res)},(err)=>{console.log(err+" -=====================")})

 }
jsCookie.set("pfp",result.info.public_id);

  await (await newaxios()).post(`/api/user/setpfp`,{
    username:jsCookie.get('username'),
    public_id:result.info.public_id,
  }).then((res)=>{},(err)=>{console.log(err+" -=====================")})
}

const changeusername=async()=>{
  await (await newaxios()).post(`${server}/api/user/changeusername`,{
    newusername:newusername.current.value,
    user:jsCookie.get("id"),
  }).then((res)=>{jsCookie.set("username",newusername.current.value)},(err)=>{console.log(err+" -=====================")})
}

const openusernamechangeinput=()=>{
  $('#usernameinput').slideToggle('slow');
}
const openpwdchangeinput=()=>{
  $('#passwordinput').slideToggle('slow');
}
const changepwd=async()=>{
  await (await newaxios()).post("/api/user/changepassword",{
    userid:jsCookie.get("id"),
    password:newpassword.current.value,
  })
}
  return (
    <>
     <Head>
        <script src="https://upload-widget.cloudinary.com/global/all.js"></script>
        </Head>
        {/* <hr className={styles.hr}/> */}
        <div className={styles.div}> <button className={styles.button} id="upload_widget">Change Profile Pic</button></div>
        <div className={styles.div}> <button className={styles.button} onClick={openusernamechangeinput}>Change Username</button></div>
        <div className={styles.div} id="usernameinput" style={{display:'flex',alignItems:'center'}}><div className={styles.div2}><p className={styles.input2}>New Username</p> <input style={{float:"left",paddingRight:"40px"}} className={styles.input} type="text" ref={newusername}/></div><span style={{marginLeft:"-35px"}}><Image  onClick={changeusername}  src="/add.png" width="30px" height="30px"/></span></div>
        <div className={styles.div}> <button  className={styles.button} onClick={openpwdchangeinput}>Change Password</button></div>
        <div className={styles.div} id="passwordinput" style={{display:'flex',alignItems:'center'}}><div className={styles.div2} ><p className={styles.input2}>New Password</p> <input style={{float:"left",paddingRight:"40px"}} className={styles.input} type="text" ref={newpassword}/></div><span style={{marginLeft:"-35px"}}><Image  onClick={changepwd} src="/add.png" width="30px" height="30px"/></span></div>

         <div className={styles.div}> <button className={styles.button} >Buy Premium</button></div>
        {/* <button onClick={()=>setpfp("poda")} id="update">Update</button> */}
        
    </>
  );
};

export default settings;
