import React from 'react';
import styles from '../styles/Login.module.css'

import $ from 'jquery'
import axios from 'axios';
import { server } from '../config';
import { toast } from '../lib/toast';
const Getmail = () => {
    const email=React.createRef();
    const HideName = ()=>{
        //  $('#useName').animate({left:"20%"}, 100);
          $('#useName').animate({left:"120%"}, 800);
        //  $('#useName').focus()
      }
     
    //   React.useEffect(()=>{
    //       if(JSON.parse(localStorage.getItem("name"))==null){ 
    //       ShowName()}
    //   },[])
      const sendemail=()=>  
{
    axios.post(`${server}/api/user/resetpwd`,{
    usermail:email.current.value,
    }).then((res)=>{
       // console.log(res.data);
      // toast("Registered Successfully!!")
    },(err)=>{
       
        if (err.response) {
            /* The request was made and the server responded with a status code that falls out of the range of 2xx*/
            toast(err.response.data)
          } else {
            toast(err.message)
          }
          
    })
}
      return (
          <>
    <div id="useName" className={styles.email}>
    <div style={{width:"100%"}}><p className={styles.input2}>Registered Email Address</p> <input className={styles.input} type="text"  ref={email}/></div>
    <button className={styles.button} onClick={sendemail}>Get Reset Link</button>
    <button className={styles.button} onClick={HideName}>Close</button>
    </div>
      
      </>
      )
};

export default Getmail;
