import styles from "../styles/Toast.module.css"
export function toast(a){
   
        var x = document.getElementById(styles.snackbar);
   x.className = styles.show;
   x.innerText=a;
   // $('#snackbar').addClass("show");
   setTimeout(function(){ x.className = x.className.replace(styles.show, ""); }, 3000);
   return ;
}