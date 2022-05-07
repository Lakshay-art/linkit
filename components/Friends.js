import React from 'react';

import Singlelink from './Singlelink';
import styles from '../styles/Article.module.css'
import axios from 'axios';
import { server } from '../config';
import router from 'next/router';
import jsCookie from 'js-cookie';
import newaxios from '../lib/customaxios'
import $ from 'jquery'
import {toast} from '../lib/toast'
const Friends = ({friendslist}) => {
 
var  dragging, draggedOver;
const [friendslis, setstate] = React.useState([]);
console.log(friendslist)
    React.useEffect(() => {
         setstate([...friendslist])
        },[friendslist])

 
const compare = async(e) =>{
    console.log(draggedOver)
    console.log(dragging)
    var index1 = friendslis.indexOf(dragging);
    var index2 = friendslis.indexOf(draggedOver);
    friendslis.splice(index1, 1)
    friendslis.splice(index2, 0, dragging)
   console.log(friendslis) ;

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
    console.log(e)
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

 
  var st;
   const touchmove=(details)=>{ 
     
   // document.getElementsByTagName("body")[0].style.filter = "opacity(50%)";
    document.getElementById("touchabsolutecopy").style.filter = "opacity(85%)";
    draggedOver=undefined;
    // document.getElementById("touchabsolutecopy").style.
   toast("Drag the selected link to desired position")
      st=window.scrollY; 
    const node = document.getElementById(details._id+"2");
    const clone = node.cloneNode(true);
    setDragging(details);
    const initialchild=document.getElementById("touchabsolutecopy");
    document.getElementById("touchabsolutecopy").replaceChild(clone,initialchild.childNodes[0]);
    var currX="0px";
      var currY="0px";
      let width=$(window).width();
  let height=$(window).height();
  let zoom=(100-((1668600-(width*height))/40000))/100
      var offset = document.getElementById(details._id+"3").getBoundingClientRect();
var posY = (offset.top + window.scrollY/zoom)
var posX = (offset.left )
//console.log(posX+" "+posY);
$("#touchabsolutecopy").css({
  left:posX+10+'px',
  top:posY-25+'px'
})
//console.log($(window).scrollTop()+" "+$("#"+details._id+"3").scrollTop())
  // $(function(){
    
     
      $("#touchabsolutecopy").css({
        position:"absolute"
      })
      
       $("#touchabsolutecopy").on("touchmove",function(e){
         e.preventDefault();
         var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
        // console.log(touch)
         currX=touch.pageX;
         currY=touch.pageY;
      
      //console.log(currX +" "+ currY)
       $("#touchabsolutecopy").css({
         left:(currX/zoom)-150+'px',
         top:(currY/zoom-150)+'px'
       }) 
      //console.log(currY+" "+window.innerHeight)
       let gg=document.getElementById("touchabsolutecopy");
       let yy=document.getElementById("gridd");
       //console.log((currY-window.scrollY)*zoom)
       
    if((currY-window.scrollY)*zoom>(3*window.innerHeight)/5 && gg.offsetTop<yy.offsetHeight+300 && !isNaN(st)){
    //  console.log(((currY*zoom)) +" "+((3*window.innerHeight)/5))
    console.log("poda")
     console.log(st)
     
      $([document.documentElement, document.body]).scrollTop(st<yy.offsetHeight+300?st=st+10:st)
      

    }
    else if((currY-window.scrollY)*zoom<(1*window.innerHeight)/5 && !isNaN(st)){
     // console.log(currY*zoom +" "+((3*window.innerHeight)/5))
    console.log("poda")
    console.log(st)
     
      $([document.documentElement, document.body]).scrollTop(st<0?st:st=st-10)
      

    }
       
      
      })
       //let end=details;console.log(end)
       $("#touchabsolutecopy").on("touchend",function(e){
  
        $("#testt").css({
          left:(currX/zoom)+'px',
          top:(currY/zoom)+'px'
        })
          var clickX = Math.round(currX/zoom)
              ,clickY = Math.round(currY/zoom)
              ,list
              ,$list
              ,offset
              ,range
             // ,$body = $(window).parents()
        console.log(window.scrollY);
          $list = $('body *').filter(function() {
              //offset = this.offset
              let u= this.offsetWidth
              let v=  this.offsetHeight
           
              range = {
                  x: [ this.offsetLeft,
                    this.offsetLeft + u ],
                  y: [ (this.offsetTop),
                      (this.offsetTop +v)]
              };
          //  if((clickX >= range.x[0] && clickX <= range.x[1]) && (clickY >= range.y[0] && clickY <= range.y[1]))
          //  console.log(this.id) 
             if(this.classList.contains("sortable")) 
             {console.log(( range.x[0])+"  "+this.id+" "+clickX+" "+(range.x[1]))
             console.log((range.y[0])+"  "+this.id+" "+clickY+" "+range.y[1])}
             return (clickX >= range.x[0] && clickX <= range.x[1]) && (clickY >= range.y[0] && clickY <= range.y[1])
      
          });
      
          // $list = $list.add($body);
          
          list =  $list.map(function() {
            if(this.className=="sortable")
              return this.nodeName + ' ' + this.className+' '+this.id
          }).get();
          console.log(list);
          //return false;
        if(list.length!=0){
          //console.log()
          //$(`#${list[0].split(' ')[2]}`).click();
          document.getElementById(list[0].split(' ')[2]).click();
                }
        console.log(dragging)
        console.log(draggedOver)
        if(dragging && draggedOver && dragging!=draggedOver){
          compare();draggedOver=undefined;
          st=undefined
        }
        else{
          toast("Please drop it right above another link and not on empty space")
        }
        

        
        let neww=document.createElement("div");
        let touchh=document.getElementById("touchabsolutecopy");
        touchh.replaceChild(neww,touchh.firstElementChild)
       })
   //})
    //  clone.style.color="red";
   }
    return (
        <div style={{marginTop:"15px"}}className={styles.grid} id="gridd">
            {console.log(friendslis)}
            {

friendslis.map((friend,index)=>(
                  <Singlelink key={index} id={index} details={friend} ondrag={setDragging} dragover={setDraggedOver} drop={compare} delete={deletelink} touchmove={touchmove}/>
               ))

            }
            
        </div>
    );
};


export default Friends;
