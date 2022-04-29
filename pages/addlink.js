//import Addlink from "../components/Addlink"
import axios from 'axios';
import jsCookie from 'js-cookie';
import router from 'next/router';
import React from 'react';
import styles from '../styles/Addlink.module.css'
import { server } from '../config';
import newaxios from '../lib/customaxios'


import jwt_decode from 'jwt-decode'
import refresh from '../lib/callrefresh';
const addlink=(props)=>{
    const map=new Map([
        ["instagram","linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#c737aa 85%,#684acb 105%)"],
        ["ko-fi","linear-gradient(45deg, #6675CB -5% ,#04abee 10%,#36d8ff 90%,#f5f8fa 110%)"],
        ["facebook","linear-gradient(45deg, #17adfe 0%,#0061e0 100%)"],
        ["twitter","#04ABFE"],
        ["linkedin","#0177b5"],
        ["spotify","linear-gradient(45deg,#1ecb5b 40%,#c0f0c6 100%)"],
        ["patreon","linear-gradient(45deg,#ff5900,#ffd000)"],
        ["youtube","#ea1c1e"],
        ["youtu.be","#ea1c1e"],
        ["pinterest","#c21e25"],
        ["snapchat","#f1ee04"],
        ["telegram","linear-gradient(45deg,#40b2ed,#0783c5)"],
        ["discord","#0783c5"],
        ["geekforgeeks","#099552"],
        ["tiktok","linear-gradient(45deg,#01e8ee 10%,#000 50%,#000 70% ,#ee054d 100%)"],
        ["leetcode","linear-gradient(45deg,#000 10%,#f19915 60%,#aaaaaa 100%)"],
        ["wordpress","linear-gradient(45deg,#31363b 0%,#000 150%)"],
        ["other","linear-gradient(45deg, #88cef7 0%,#30b3ff 30%,#ff87f1 100%)"]
    ]);
    // const [access, setaccess] = React.useState("");
    const[user,setuser]=React.useState({
          id:"",
         username:"",
        isPremium:"",
        isAdmin:"",
     
      //  refreshToken:"",
      //  accessToken:"",
    }); 
    
    const title=React.createRef();
    const link=React.createRef();
    const description=React.createRef();
    //var access=React.createRef("");

React.useEffect(async()=>{
// setuser({
//     //id:localStorage.getItem('id'),
//    // username:localStorage.getItem('username'),
   
//    username:jsCookie.get('username'),
// })


// const accessTokenn=await refresh(jsCookie.get("id2"));
// console.log(accessTokenn);
// setaccess(accessTokenn);
  
console.log(process.env.SECRET_KEY)

},[])

React.useEffect(()=>{
title.current.value=router.query?.title||"";
description.current.value=router.query?.description||"";
link.current.value=router.query?.link||"";
setuser({...user,id:jsCookie.get('id'),'username':router.query?.username||user.username});
console.log(user.username);
},[])


    const previewlink=()=>{
        window.open(link.current.value,"_blank");
    }

//    const newaxios=axios.create({baseURL:`${server}`});
//    newaxios.interceptors.request.use(
//        async(config)=>{  console.log(access)
//              let currdate=new Date();
//              let expdate;
//              if(access!=""){
               
//               expdate=jwt_decode(access).exp*1000;
//              if(currdate>expdate){
//                  access=await refresh(jsCookie.get("id2"));
//                  console.log("new access built")
//              }
//             }
//              else{
//                 access=await refresh(jsCookie.get("id2"));
//              }
//              config.headers["authorization"]="Bearer "+access;
//              return config;
//        },(err)=>{
//            return Promise.reject(err);
//        }
//    ) 
    
    const upload=async()=>{
        let tag="other";
        for(let keys of map.keys()){
            console.log(keys)
            if(link.current.value.includes(keys))
            {
                tag=keys;
                break;
            }
        }
        
        console.log(map.get(tag));
       await(await newaxios()).post(`${server}/api/articles/addlink`,{
            'username':user.username,
            'id':user.id,
            'title':title.current.value,
            'description':description.current.value,
            'link':link.current.value,
            'color':map.get(tag),
            'tag':tag,
            'visits':router.query?.visits||0
        }).then((res)=>{console.log(res.data)},(err)=>{

        })
    }

    return (
       
        <>  
        
        {/* // jsCookie.get("username")==undefined ?
        // <>{  redirectit() } </>:
         <>
        // <input type="text" placeholder='Title' ref={title}/>
        //                             <input type="href" placeholder='Link' ref={link}/>
        //                             <button onClick={previewlink}>Preview</button> */}
                                   
                                    

                                    <div style={{width:"100%"}}><p className={styles.input2}>Title</p> <input className={styles.input} type="text" ref={title}/></div>
                <div style={{width:"100%"}}><p className={styles.input2}>Link</p> <input className={styles.input} type="url" ref={link}/></div>
                <button className={styles.button} onClick={previewlink}>Preview</button>
                <div id="email" style={{width:"100%"}}><p className={styles.input2}>Description</p>  <textarea className={styles.input}  placeholder="Tell more about it to your audience" rows="5" ref={description}></textarea></div>
                <button className={styles.button} onClick={upload}>Upload</button>
                {/* <input style={{}} type="text" ref={access}/> */}
                                </>

         
         
          
        
    );
};

export default addlink;
//     return(
//         <>
//         <Addlink/>
//         </>
//     )