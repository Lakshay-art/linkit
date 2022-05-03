import React from 'react';

import Singlelink from './Singlelink';
import styles from '../styles/Article.module.css'
import axios from 'axios';
import { server } from '../config';
import router from 'next/router';
import jsCookie from 'js-cookie';
import newaxios from '../lib/customaxios'
const Friends = ({friendslist}) => {
    //const shuffledArray = friendslist.sort((a, b) =>Math.random()-0.5)
 //friendslist.splice(1,1) ;
//  React.useEffect(() => {
   
//     friendslist=friendslist.reverse();
      
//     },[friendslist]) 
//let randomized=[];
var  dragging, draggedOver;
const [friendslis, setstate] = React.useState(friendslist);
console.log(friendslist)
    React.useEffect(() => {
   
          // randomized=friendslist.map((element)=>element)
          // console.log(randomized)
        },[])

 
const compare = async(e) =>{
    console.log(draggedOver)
    console.log(dragging)
    var index1 = friendslis.indexOf(dragging);
    var index2 = friendslis.indexOf(draggedOver);
    friendslis.splice(index1, 1)
    friendslis.splice(index2, 0, dragging)
   console.log(friendslis) ;
  //   isRight = randomized.join("") === base.join("") 
  //     ? 'In Order!': 'Not In Order!'
   
    //renderItems(randomized)
    if(router.pathname=="/profile"){
    setstate([...friendslis])
    await axios.post(`${server}/api/user/rearrange`,{
      rearrange:friendslis,
    }).then((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  };
}

  const setDraggedOver = (e) => {
    //e.preventDefault();
    //console.log(e)
    draggedOver =e;
    }
    
    const setDragging = (e) =>{
      dragging = e;
   // console.log(e)

    }

    const deletelink=async(link)=>{
      // const newaxios=
         await (await newaxios()).post(`${server}/api/articles/removelink`,{
             username:jsCookie.get("username"),
             linkid:link._id,
         }).then((res)=>{
           //router.replace(router.asPath);
           var tobedeleted = friendslis.indexOf(link);
           friendslis.splice(tobedeleted, 1)
           //   if(router.pathname=="/profile")
           //   router.push('/profile');
           //   if(router.pathname=="/")
           //   router.push('/');
           setstate([...friendslis])
         },(err)=>{
             console.log(err)
         })
        
   }
    return (
        <div className={styles.grid}>
            {console.log(friendslis)}
            {

friendslis.map((friend,index)=>(
                  <Singlelink key={index} id={index} details={friend} ondrag={setDragging} dragover={setDraggedOver} drop={compare} delete={deletelink}/>
               ))

            }
        </div>
    );
};


export default Friends;
