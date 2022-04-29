import jsCookie from 'js-cookie';
import React from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import Friends from '../../components/Friends';
//import Profile from '../components/Profile'
import { server } from '../../config';
import {parseCookies} from '../../lib/parseCookie'
import {useRouter} from 'next/router'
import axios from 'axios';
import styles from '../../styles/Profile.module.css'
import Search from '../../components/Search';
import Settings from '../../components/Settings';
const profile = (props) => {
    const [visits, setvisits] = React.useState(0)
    const router=useRouter();
   // console.log(props)
//      React.useEffect(()=>{
//    console.log(jsCookie.get("username"));
//    //jsCookie.set("username",);
//      },[jsCookie.get("search")])

React.useEffect(async()=>{
       //  console.log(props.friendslist.userinfo);
         //console.log("8888888")
       if(props.friendslist.userinfo==null){
           setvisits("-1");
         return;  
       }
       
     
        await axios.post(`${server}/api/user/uservisit`,{
            username:props.friendslist.userinfo.username,
            userid:props.friendslist.userinfo._id,
            visits:props.friendslist.userinfo.visits,
        }).then((res)=>{
           setvisits(props.friendslist.userinfo.visits)
        },(err)=>{
            console.log(err)
        })
       
    
},[router.asPath])

    return (
        <> 
        <Search/>
        <Settings public_id={props.friendslist.userinfo?.profilepic}/>
       <h2 style={{margin:"5px"}}>{props.friendslist.userinfo?.username}</h2>
       <h4 style={{margin:"5px"}}>{visits} visits</h4>
      
       
        { visits=="-1" &&
            <h1>No User Found!!</h1>
        }
            <Friends friendslist={props.friendslist.userdata}/>
        </>
    );
};
export const getServerSideProps= async(request)=>{
    //console.log(request.params);
    const cookies=parseCookies(request.req);
    let search;
    if(request.params){
        search=request.params.username;
    }else{
        search=cookies.search
    }
    // const res=await fetch(`${server}/api/articles/profile`
    // ,{
    //     method:"POST",
    //     body:JSON.stringify({username:search}),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }
    // );
    var friendslist;
    await axios.post(`${server}/api/articles/profile`,{
        username:search,
    }).then((res)=>{
      friendslist=res.data},(err)=>{
          
      })
    //const friendslist=await res.json();
    // console.log("--------------"+friendslist+"---------------------------");
    return{
        props:{
            friendslist,
        }
    }
}

export default profile;


/*import React from 'react';
import Friends from '../components/Friends';
import Profile from '../components/Profile'
import { server } from '../config';

const profile = () => {
    return (
        <>
            <Profile/>
        </>
    );
};
// export const getStaticProps= async()=>{
//     if(typeof window !== 'undefined'){
//     const res=await fetch(`${server}/api/articles/profile`
//     ,{
//         method:"POST",
//         body:JSON.stringify({username:localStorage.getItem('username')}),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }
//     );
//     const friendslist=await res.json();
//     return{
//         props:{
//             friendslist,
//         }
//     }}
//     else return{
//         props:{
            
//         }
//     }
// }

export default profile;*/