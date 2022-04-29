import axios from 'axios';
import jsCookie from 'js-cookie';
import router from 'next/router';
import React from 'react';
import { server } from '../config';
import styles from '../styles/Article.module.css'
import Image from 'next/image'
import $ from 'jquery'
import newaxios from '../lib/customaxios'
//import script from 'next/script'
import { useEffect } from 'react/cjs/react.production.min';
//import { route } from 'next/dist/next-server/server/router';
const Singlelink = (props) => {
    
    const [surelyDelete, setsurelyDelete] = React.useState("false")
    //const [opendis, setopendis] = React.useState("false")
    //console.log(props);
    const askToDelete=()=>{
        setsurelyDelete("true");
    }

    const gotoprofile=()=>{
        router.replace(`/profile/${props.details.username}`)
    }
    const deletelink=async()=>{
       // const newaxios=
          await (await newaxios()).post(`${server}/api/articles/removelink`,{
              username:jsCookie.get("username"),
              linkid:props.details._id,
          }).then((res)=>{
            router.replace(router.asPath);

            //   if(router.pathname=="/profile")
            //   router.push('/profile');
            //   if(router.pathname=="/")
            //   router.push('/');
          },(err)=>{
              console.log(err)
          })
          setsurelyDelete("false");
    }
    const openlink=async()=>{
        //console.log(props);
        await axios.post(`${server}/api/articles/addvisit`,{
            username:jsCookie.get("username"),
            linkid:props.details._id,
            visits:props.details.visits,
        }).then((res)=>{
           window.open(props.details.link,"_blank");
        },(err)=>{
            console.log(err)
        })
      // console.log(props);
    }
    React.useEffect(async()=>{
         $(`#${props.details._id}`).hide('slow');
         if(props.details.tag=="spotify"){
             $(`#${props.details._id}2`).css('color',"black")
         }
         //console.log(await newaxios());
         //console.log(axios);
    })
   var timeoutid1;
 const opendisfunc=()=>{
     //setopendis("true");
    // console.log( );
   //  console.log( document.getElementById(`${props.details._id}`).getBoundingClientRect())
     //if($(window).width()> (420)){
           //$(`#${props.details._id}2`).css( "maxWidth",300) ;
           $(`#${props.details._id}`).css( "maxWidth",$(`#${props.details._id}2`).width()-10) ;
   //  }
      
     // console.log($(`#${props.details._id}2`).width()-16);
      //( $( window ).width() * 0.2 | 0 ) + "px" )
    if (timeoutid1) {
    //    console.log("out")
          return;
       }
    //   console.log("evenout")
     $(`#${props.details._id}`).show('slow');
     
       
        //console.log("abc");
        timeoutid1 = setTimeout(function () {
         
          timeoutid1 = undefined;
        }, 2000);
      
     return;
 }
 const hidedisfunc=()=>{
    //setopendis("true");
    $(`#${props.details._id}`).hide('slow');
    // 
      $(`#${props.details._id}`).hide('slow');
      return;


}

const edit=()=>{

   // const visits=props.details.visits;
    
    router.push({
        pathname: '/addlink',
        query: { title:props.details.title ,
                 description:props.details.description,
                 link:props.details.link,
                 visits:props.details.visits,
                 username:props.details.username
    }
    }, '/addlink');
}
    return (
        <div>
        <div id={props.details._id+'2'} onTouchStart={opendisfunc} onMouseEnter={opendisfunc} onTouchEnd={hidedisfunc} onMouseLeave={hidedisfunc} onDoubleClick={edit} className={styles.card} style={{background:`${props.details.color}`}} >
            { 
              <a className={styles.border} onClick={gotoprofile} >{props.details.username}</a>
             
            }
             <h2>
                <p onClick={openlink}> {props.details.title}</p>
            </h2>
            
            <div className={styles.flex}>
                <p style={{paddingRight:"10px"}}>{props.details.visits} visits</p>
            {jsCookie.get("username")==props.details.username &&
             surelyDelete=="false" && <span onClick={askToDelete}><Image src="/delete.png" width="30px" height="30px"/></span>
          }
          {
              surelyDelete=="true" && <span onClick={deletelink}>Delete</span>
          }</div>
          
          {/* opendis=="true" &&  */}
          <div id={props.details._id}><hr></hr><p>{props.details.description}</p>
          {/* <span onClick={hidedisfunc}>^</span> */}
          </div>
        </div></div>
    );
};

export default Singlelink;
