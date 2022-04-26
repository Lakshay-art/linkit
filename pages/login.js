import axios from 'axios';
import jsCookie from 'js-cookie';
import router from 'next/router';
import React from 'react';
import styles from '../styles/Login.module.css'
import { server } from '../config';
import $ from 'jquery'

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
            jsCookie.set("id2",res.data.refreshToken,{ expires: 30 });
            console.log(res.data)
            console.log("----------------------j------")
            jsCookie.set("pfp",res.data.profilepic);
            if(res.data.refreshToken)
            router.push("/profile");

        },(err)=>{
            if (err.response) {
                /* The request was made and the server responded with a status code that falls out of the range of 2xx*/
                alert(err.response.data);
              } else {
                console.log("Error", err.message);
              }
        })
    }
///////////////////
else if(state=='register'){
        axios.post(`${server}/api/user/register`,{
            username:name.current.value,
            password:password.current.value,
            email:email.current.value,
        }).then((res)=>{
            console.log(res.data);
        },(err)=>{
            if (err.response) {
                /* The request was made and the server responded with a status code that falls out of the range of 2xx*/
                alert(err.response.data);
              } else {
                console.log("Error", err.message);
              }
        })



    }
}
    React.useEffect(async() => {
      
    
     $("#email").slideUp('slow');
    }, [])
    

     const setstate=(a)=>{
    setstat(a);
    if(a=="register"){
        $("#email").slideDown('slow');
    }
    else{
        $("#email").slideUp('slow');

    }
     }

     const logout=()=>{
         jsCookie.remove('username');
         jsCookie.remove('search');
         jsCookie.remove('pfp');
         jsCookie.remove('id2');
         jsCookie.remove('id');
         jsCookie.set("loggedin","false");

     }
  
    //.error => to send json with 404
    //.response.data => to send a string =>.send("string")
    //.message =>??
    return (
        <>
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
                <hr className={styles.hr}/> 
                <button className={styles.button} onClick={submit}>Submit</button>
                {/* <button className={styles.button} onClick={logout}>LogOut</button> */}
              {/* </form> */}
            </div>
        </>
    );
};

export default login;