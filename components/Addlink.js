import axios from 'axios';
import jsCookie from 'js-cookie';
import router from 'next/router';
import React from 'react';

import { server } from '../config';

const Addlink = (props) => {
    const map=new Map([
        ["instagram","linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#c737aa 85%,#684acb 105%)"],
        ["Ko-fi","linear-gradient(45deg, #6675CB -5% ,#04abee 10%,#36d8ff 90%,#f5f8fa 110%)"],
        ["facebook","linear-gradient(45deg, #17adfe 0%,#0061e0 100%)"],
        ["twitter","04ABFE"],
        ["linkedin","#0177b5"],
        ["spotify","linear-gradient(45deg,#1ecb5b 40%,#c0f0c6 100%)"],
        ["patreon","linear-gradient(45deg,#ff5900,#ffd000)"],
        ["youtube",""],
        ["youtu.be",""],
        ["pinterest",""],
        ["other","linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)"]

    ]);
    const[user,setuser]=React.useState({
          id:"",
         username:"",
        isPremium:"",
        isAdmin:"",
     
      //  refreshToken:"",                                                   //NOT USED
      //  accessToken:"",
    });
React.useEffect(()=>{
setuser({
    //id:localStorage.getItem('id'),
   // username:localStorage.getItem('username'),
   id:jsCookie.get('id'),
   username:jsCookie.get('username'),
})
},[])

const redirectit=()=>{
  router.push("/login");
}
    const title=React.createRef();
    const link=React.createRef();
    const description=React.createRef();
    const previewlink=()=>{
        window.open(title.current.value,"_blank");
    }
    
    const upload=()=>{
        let tag="other";
        for(let keys of map.keys()){
            // console.log(keys+" "+map.get(keys))
            if(link.current.value.includes(keys))
            {
                tag=keys;
                break;
            }
        }
       // console.log(map);
        
      //  console.log(map.get(tag));
        axios.post(`${server}/api/articles/addlink`,{
            'username':user.username,
            'id':user.id,
            'title':title.current.value,
            'description':description.current.value,
            'link':link.current.value,
            'color':map.get(tag),
            'tag':tag
        }).then((res)=>{console.log(res.data)},(err)=>{

        })
    }

    return (
       
        <>  
        {jsCookie.get("username")==undefined ?
        <>{  redirectit() } </>: <> <input type="text" placeholder='Title' ref={title}/>
                                    <input type="href" placeholder='Link' ref={link}/>
                                    <button onClick={previewlink}>Preview</button>
                                    <textarea placeholder="Tell more about it to your audience" ref={description}></textarea>
                                    <button onClick={upload}>Upload</button>
                                    {/* <button onClick={upload}>Upload</button> */}
                                </>}
       </>
         
         
          
        
    );
};

export default Addlink;
