import React from 'react';
import styles from '../styles/Toast.module.css' 
import $ from 'jquery'
const Toast = () => {
    const show=()=>{
         var x = document.getElementById(styles.snackbar);
    x.className = styles.show;
    
    // $('#snackbar').addClass("show");
    setTimeout(function(){ x.className = x.className.replace(styles.show, ""); }, 3000);
    
}
    return (
        <>
            <button onClick={show}>Show Snackbar</button>

{/* <div id={styles.snackbar}>Some text some message..</div> */}
        </>
    );
};

export default Toast;
