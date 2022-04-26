import axios from 'axios';
import React from 'react';
//import { useRef } from 'react/cjs/react.production.min';
import { server } from '../config';

const register = () => {
    const name=React.createRef();
    const password=React.createRef();
    const email=React.createRef();
    const submit=()=>{
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
    //.error => to send json with 404
    //.response.data => to send a string =>.send("string")
    //.message =>??
    return (
        <>
            <div>
                <p>Username: <input type="text" ref={name}/></p>
                <p>Password: <input type="password" ref={password}/></p>
                <p>Email: <input type="email" ref={email}/></p>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    );
};

export default register;
