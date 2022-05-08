import React from 'react';
import Image from 'next/image';
import Singlelink from '../components/Singlelink';
import Friends from '../components/Friends';
import styles from '../styles/welcome.module.css'
import router from 'next/router';
const welcome = () => {
    const details1=[
        {"_id":"62779f9046b6de427cc40aa0","user":"62779ea846b6de427cc40a99","username":"Welcome!","title":"This is a place to create a personal/professional link resource as well as to share your link with the world","link":"https://linkerr.vercel.app/","visits":"0","description":"","color":"linear-gradient(45deg, #88cef7 0%,#30b3ff 30%,#ff87f1 100%)","tag":"other","priority":"0"} ,
]   
const details2=[
    {"_id":"6277900e46b6de427cc40a81","user":"62778f8a46b6de427cc40a6d","username":"Safe","title":"Every link will be undergoing safety checks from google ,so its safe to click a link","link":"https://linkerr.vercel.app/","visits":"0","description":"","color":"linear-gradient(45deg, #88cef7 0%,#30b3ff 30%,#ff87f1 100%)","tag":"other","priority":"0"},
    {"_id":"62779f9046b6de427cc40aa0","user":"62779ea846b6de427cc40a99","username":"EveryOne","title":"Every link shared here will be available in EveryOne tab for world to discover","link":"https://linkerr.vercel.app/","visits":"0","description":"","color":"linear-gradient(45deg, #88cef7 0%,#30b3ff 30%,#ff87f1 100%)","tag":"other","priority":"0"} 
]
const tologin=()=>{
    router.push("/login")
}
    return (
        <>
        <div className={styles.flex}> 
        <div className={styles.flex2} style={{minWidth:"400px"}}><Image src="/finallhello.gif" width="350px" height="350px"></Image>
        <button className={styles.button} onClick={tologin} >Get Started</button></div>
        <div className={styles.detailss}><Friends friendslist={details1}/></div>
        
            
            {/* <div>
                <h3>Hello!! Welcome here!!</h3>
                <p>Join in to share your links to the world</p>
                <p>This is a place to create a personal link resource as well as share the link to the world for better reach</p>
                <p>Every link will be undergoing safety checks from google ,so its safe to click a link</p>
            </div> */}
            <div className={styles.detailss}><Friends friendslist={details2}/></div>
            
                
           
        </div>
           
            
        </>
    );
};

export default welcome;
