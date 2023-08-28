import axios from 'axios';
import jsCookie from 'js-cookie';
import router, { Router } from 'next/router';
import React from 'react';
import { server } from '../config';
import styles from '../styles/Article.module.css'
import Image from 'next/image'
import $ from 'jquery'

//import script from 'next/script'
import { useEffect } from 'react/cjs/react.production.min';
import { toast } from '../lib/toast';
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
    React.useEffect(()=>{
 $(`#${props.details._id}`).hide('slow');
    })
    React.useEffect(async()=>{
        
         if(props.details.tag=="spotify"){
             $(`#${props.details._id}2`).css('color',"black")
         }
         else{
            $(`#${props.details._id}2`).css('color',"#eaeaea")

         }
         //console.log(await newaxios());
         //console.log(axios);
    },[props])
   var timeoutid1;
 const opendisfunc=()=>{
     if($(window).width()<450)
     return;
    // console.log($(window).width())
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
    if($(window).width()<450)
    return;
    //setopendis("true");
    $(`#${props.details._id}`).hide('slow');
    // 
      $(`#${props.details._id}`).hide('slow');
      return;


}

const edit=()=>{
 options2();
   // const visits=props.details.visits;
    
    router.push({
        pathname: '/addlink',
        query: { title:props.details.title ,
                 description:props.details.description,
                 link:props.details.link,
                 visits:props.details.visits,
                 username:props.details.username,
                 priority:props.details.priority
    }
    }, '/addlink');

}
const options=()=>{
 $(`#${props.details._id}options`).show('fast');
}
const options2=()=>{
    $(`#${props.details._id}options`).hide('fast');
   }
const move=()=>{  options2();
    if(router.pathname!="/profile"){
        toast("Visit your profile to change position")
        return;
    }
   
  props.touchmove(props.details)
 
}
const moveclicked=()=>{  options2();
  if(router.pathname!="/profile"){
      toast("Visit your profile to change position")
      return;
  }
  toast("Just Drag and Drop to reaarange when you have a mouse 😉")

}

const deletee=()=>{props.delete(props.details) ;
     setsurelyDelete("false")}
    return (
        <div id={props.details._id+'3'} className="sortable"  onClick={()=>props.dragover(props.details)}>
            {/* <div className={styles.options} >-------------------------------------</div> */}
           
        <div id={props.details._id+'2'}  onMouseEnter={opendisfunc} onMouseLeave={hidedisfunc}  className={styles.card} style={{background:`${props.details.color}`}} draggable="true" onDrag={()=>props.ondrag(props.details) }  onDragOver={()=>props.dragover(props.details) } onDragEnd={()=>props.drop()}   >
            
            <div className={styles.nameflex}>
              <a className={styles.border} onClick={gotoprofile} >{props.details.username}</a>
              {<div onPointerDown={options} style={{fontSize:"25px",marginRight:"0px"}}>︙
              <div style={{background:`${props.details.color}`}} className={styles.options} id={props.details._id+"options"}>
                <p style={{textAlign:"center"}} onTouchEnd={edit} onClick={edit}>
                  {jsCookie.get("username")==props.details.username &&<span > Edit</span>}
                  {jsCookie.get("username")!=props.details.username &&<span>Copy</span>}
                  </p>
                  <hr/>
                <p onTouchStart={move} onClick={moveclicked}>
                 Move
                  </p>
                </div>
                </div>}
             </div>
            
            
             <h2>
                <p onClick={openlink}> {props.details.title}</p>
            </h2>
            
            <div className={styles.flex}>
                <p style={{paddingRight:"10px",fontSize:"14px"}}>{props.details.visits} visits</p>
            {jsCookie.get("username")==props.details.username &&
             surelyDelete=="false" && <span onClick={askToDelete}><Image src="/delete.png" width="30px" height="30px"/></span>
          }
          {
              surelyDelete=="true" && <span onClick={deletee}>Delete</span>
          }</div>
          
          {/* opendis=="true" &&  */}
          <div id={props.details._id}><hr></hr><p>{props.details.description}</p>
          {/* <span onClick={hidedisfunc}>^</span> */}
          </div>
        </div></div>
    );
};

export default Singlelink;
