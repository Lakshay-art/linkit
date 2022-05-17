import styles from '../../styles/Login.module.css'
import React from 'react'
import axios from 'axios';
import router from 'next/router';
import newaxios from '../../lib/customaxios'
import jsCookie from 'js-cookie'
import { server } from '../../config';
import { toast } from '../../lib/toast';
const password=React.createRef();
const againpassword=React.createRef();


const resetpwd = () => {
    const submit=async()=>{
        await (await newaxios(router.query.token)).post(`${server}/api/user/changepassword`,{
            
            password:password.current.value,
          }).then((res)=>{toast("Success!! Password Changed") },(err)=>{console.log(err+" -=====================");
          toast(err.response.data);})
    }
    return (
        <div className={styles.div}>
                <div style={{width:"100%"}}><p className={styles.input2}>New Password</p> <input className={styles.input} type="password"  ref={password}/></div>
                <div style={{width:"100%"}}><p className={styles.input2}>Password Again</p> <input className={styles.input} type="password"  ref={againpassword}/></div>
                 <button className={styles.button} onClick={submit}>Reset</button>
                
        </div>
    );
};

export default resetpwd;
