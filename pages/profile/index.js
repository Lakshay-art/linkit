import jsCookie from 'js-cookie';
import React from 'react';

import Friends from '../../components/Friends';
//import Profile from '../components/Profile'
import { server } from '../../config';
import {parseCookies} from '../../lib/parseCookie'
import {useRouter} from 'next/router'
import Search from '../../components/Search';
import Settings from '../../components/Settings';
import Head from 'next/head';
import axios from 'axios';

const profile = (props) => {
    const [visits, setvisits] = React.useState()
    const router=useRouter();

    
//      React.useEffect(()=>{
//    console.log(jsCookie.get("username"));
//    //jsCookie.set("username",);
//      },[jsCookie.get("search")])

if(jsCookie.get("username")!=undefined)
jsCookie.set("search",jsCookie.get("username"));

React.useEffect(async()=>{
    if(jsCookie.get("username")!=undefined)
    setvisits(props.friendslist.userinfo?.visits);
    if(jsCookie.get("id2") && jsCookie.get("loggedin")!="true")
    await axios.post(`${server}/api/user/refresh`,{
        token:jsCookie.get("id2")
    }).then((res)=>{
    //   
            jsCookie.set("username",res.data.user.username);
            jsCookie.set("search",res.data.user.username);
            jsCookie.set("id",res.data.user._id);
            jsCookie.set("loggedin","true");
            jsCookie.set("id2",res.data.newRefreshToken,{ expires: 30 });
 router.push("/profile");

    jsCookie.set("loggedin","true")
    },(err=>{
        router.push("/login");
    }))
    if(!jsCookie.get("id2") ){
        router.push("/login");
    }
})
    return (
        <>
        {/* <CloudinaryContext cloudName="lakshaythegupta">
  <div>
    <Image publicId="sample" width="50" />
  </div>
  <Image publicId="sample" width="0.5" />
</CloudinaryContext> */}
<Head>
        <script src="https://upload-widget.cloudinary.com/global/all.js" ></script>
        </Head>
        <Search/>
        
        <Settings public_id={props.friendslist.userinfo?.profilepic}/>
         {/* <h1>{props.friendslist[0].username}</h1> */}
         <h2 style={{margin:"5px"}}>{jsCookie.get("username")}</h2>
       <h4 style={{margin:"5px"}}>{visits} visits</h4>
      
            <Friends friendslist={props.friendslist.userdata}/>
        </>
    );
};
export const getServerSideProps= async(request)=>{
    console.log(request.params);
    // if(jsCookie.get("username")==undefined){
    // return{
    //     props:{
           
    //     }
    // }} trying to use jscookie here but error
    const cookies=parseCookies(request.req);
    const res=await fetch(`${server}/api/articles/profile`
    ,{
        method:"POST",
        body:JSON.stringify({username:cookies.username}),
        headers:{
            "Content-Type":"application/json"
        }
    }
    );
    const friendslist=await res.json();
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