import axios from 'axios';
import jsCookie from 'js-cookie';
import router from 'next/router';
import React from 'react';
import styles from '../styles/Login.module.css'
import { server } from '../config';
import $ from 'jquery'
import {toast} from '../lib/toast'
import Getmail from '../components/Getmail';





const login = () => {
   const[state,setstat]=React.useState('login');


    const name=React.createRef();
    const password=React.createRef();
    const email=React.createRef();

    const submit=()=>{
        if(state=='login'){
        axios.post(`${server}/api/user/login`,{
            username:name.current.value,
            password:password.current.value,
        }).then((res)=>{
            //console.log(res.data);
            //setuser(res.data);
            //localStorage.setItem("username",res.data.username);
            //localStorage.setItem("id",res.data.id);
            jsCookie.set("username",res.data.username);
            jsCookie.set("search",res.data.username);
            jsCookie.set("id",res.data.id);
            jsCookie.set("loggedin","true");
            jsCookie.set("id2",res.data.refreshToken,{ expires: 60 });
           // console.log(res.data)
           // console.log("----------------------j------")
            jsCookie.set("pfp",res.data.profilepic);
            if(res.data.refreshToken)
            router.push("/profile");

        },(err)=>{
            if (err.response) {
                /* The request was made and the server responded with a status code that falls out of the range of 2xx*/
                // alert();
                toast(err.response.data)
              } else {
                toast(err.message)
              }
        })
    }
///////////////////
else if(state=='register'){
    let currusername=name.current.value+"";
    let curremail=email.current.value+"";
    let currpwd=password.current.value+"";
    if(currusername.length>8||currusername.length<3){
        toast("Username must be 3 to 8 characters long")
       return ;  
    }
    else if(currpwd.length==0){
        toast("Password cannot be empty")
        
       return ;  
    }
    else if(currusername.includes(" ")){
        toast("Username must not contain space")
        return ;  
    }
    else if(!curremail.includes(".")||!curremail.includes("@")){
        toast("Please provide a valid email address")
        return ; 
    }
   
        axios.post(`${server}/api/user/register`,{
            username:name.current.value,
            password:password.current.value,
            email:email.current.value,
        }).then((res)=>{
           // console.log(res.data);
           toast("Registered Successfully!!")
        },(err)=>{
            if (err.response) {
                /* The request was made and the server responded with a status code that falls out of the range of 2xx*/
                toast(err.response.data)
              } else {
                toast(err.message)
              }
        })



    }
}
    React.useEffect(async() => {
      
    
     $("#email").slideUp('fast');
    }, [])
    

     const setstate=(a)=>{
    setstat(a);
    if(a=="register"){
        $("#email").slideDown('slow');
        $("#forgot").slideUp('fast');
    }
    else{
        $("#email").slideUp('fast');
        $("#forgot").slideDown('fast');

    }
     }

     const logout=()=>{
         jsCookie.remove('username');
         jsCookie.remove('search');
         jsCookie.remove('pfp');
         jsCookie.remove('id2');
         jsCookie.remove('id');
         jsCookie.set("loggedin","false");
         toast("Logged Out Successfully")

     }
  
    //.error => to send json with 404
    //.response.data => to send a string =>.send("string")
    //.message =>??

    const ShowName = ()=>{
        // $('#useName').animate({left:"33%"}, 800);
         $('#useName').animate({left:"50%"}, 800);
     }
    return (
        <>
        <Getmail/>
            <div className={styles.div}>
                  <div className={styles.flex} >
                    {
                        state=="register" &&  <p onClick={()=>setstate('login')}>Login</p>
                    }
                  {
                        state=="login" &&<span onClick={()=>setstate('login')} className={styles.span}>Login</span>
                    }{
                        state=="login" &&<p onClick={()=>setstate('register')}> Register</p>
                    }{
                        state=="register" &&<span onClick={()=>setstate('register')} className={styles.span}>Register</span>
                    }
                    <p onClick={logout}>LogOut</p>
                    
                    
                    
                </div>
                <hr className={styles.hr2}/> 
                {/* <form> */}
                <div style={{width:"100%"}}><p className={styles.input2}>Username</p> <input className={styles.input} type="text" ref={name}/></div>
                <div style={{width:"100%"}}><p className={styles.input2}>Password</p> <input className={styles.input} type="password"  ref={password}/></div>
                <div id="email" style={{width:"100%"}}><p className={styles.input2}>Email</p> <input className={styles.input} type="email" ref={email}/></div>
                <button id="forgot" className={styles.button} onClick={ShowName}>Forgot Password</button>
                <hr className={styles.hr}/> 
                <button className={styles.button} onClick={submit}>Submit</button>
                {/* <button className={styles.button} onClick={logout}>LogOut</button> */}
              {/* </form> */}
              
            </div>
            <button>
      <div class="button-main">
        <div class="button-text-wrapper">
          <span>SEND VERIFICATION LINK</span>
        </div>

        <div class="button-background-wrapper">
          <div class="button-border">
            <div
              class="button-background"
              style="margin: 2.5px; margin-right: 0px"
            ></div>
          </div>

          <div class="button-border angle-225" style="margin-left: -1px">
            <div
              class="button-background angle-225"
              style="margin: 2.5px; margin-left: -1px"
            ></div>
          </div>
        </div>
      </div>
    </button>
        </>
    );
};

export default login;
