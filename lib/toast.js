import styles from "../styles/Toast.module.css"
let time=undefined;
export function toast(a){
        //x.className = x.className.replace(styles.show, "")
        var x = document.getElementById(styles.snackbar);
        if(time){
             clearInterval(time);    
        }
       
           x.className = styles.show;

    
       // x.className ="";
   
   x.innerText=a;
 
   // $('#snackbar').addClass("show");
   time=setTimeout(function(){ x.className = x.className.replace(styles.show, "");time=undefined; }, 3000);
   return ;
}