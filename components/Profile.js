import axios from 'axios';
import React from 'react';
import { useRef, useState } from 'react/cjs/react.production.min';
import { server } from '../config';
import Friends from './Friends';


/*********** NOT USED ************/
const Profile = () => {
    const[list,setlist]=React.useState([]);
    React.useEffect(async()=>{
            // const res=await fetch(`${server}/api/articles/profile`
            //         ,{
            //             method:"POST",
            //             body:JSON.stringify({username:localStorage.getItem('username')}),
            //             headers:{
            //                 "Content-Type":"application/json"
            //             }
            //         }
            //         );
            await axios.post(`${server}/api/articles/profile`,{
                username:localStorage.getItem('username')
            }).then((res)=>{
                console.log(res.data);
                    if(res.data!=undefined)
                    setlist(res.data);
            },(err)=>{
                console.log(err);
            })
                    
    },[])
    

    return (
        <>
        {console.log(list)}
            <Friends friendslist={list}/>
        </>
    );
};

export default Profile;
