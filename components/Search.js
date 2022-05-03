import jsCookie from 'js-cookie';
import router from 'next/router';
import React from 'react';
import styles from '../styles/Search.module.css'
import Image from 'next/image';

const Search = () => {
    const searchprofile=React.createRef(); //console.log(props);
// if(jsCookie.get("username")!=undefined)
// jsCookie.set("search",jsCookie.get("username"));
const submit=()=>{
    jsCookie.set("search",searchprofile.current.value);
    // setsearch(searchprofile.current.value)
    router.push(`/profile/${jsCookie.get("search")}`);
   
    } 
    const addlink=()=>{
        router.push(`/addlink`);
       
}
const settingsopen=()=>{
    router.push("/settings");
}

    return (
        <>
        <div className={styles.flex}>
            <div>
            { jsCookie.get("search")==jsCookie.get("username") && jsCookie.get("search")!=undefined &&
                 <span onClick={settingsopen}><Image src="/setting.png" width="50px" height="50px"/></span>
            }</div>
       
            <input className={styles.input} type="text" ref={searchprofile}/>
            <span className={styles.search} onClick={submit}><Image src="/search2.png" width="40px" height="40x"/></span>
            {/* <Image src="/public/" width="30px" height="30px"/> */}
            <div>
            { jsCookie.get("search")==jsCookie.get("username") && jsCookie.get("search")!=undefined &&
                <span className={styles.add} onClick={addlink}><Image src="/add.png" width="50px" height="50px"/></span>
            }
           </div>
            </div> 
            <hr className={styles.hr}></hr>
            
        </>
    );
};

export default Search;
