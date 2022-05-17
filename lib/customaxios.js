import axios from "axios";
import jsCookie from "js-cookie";
import { server } from "../config";
import jwt_decode from "jwt-decode";
import refresh from "./callrefresh";


const customaxios=async(token)=>{
  //  let access="";

// if(oldaccess!="")
// access=oldaccess;
let access=await refresh(token);
const newaxios=axios.create({baseURL:`${server}`});
   newaxios.interceptors.request.use(
       async(config)=>{  //console.log(access)
             let currdate=new Date();
             let expdate;
             if(access!=""){
               
              expdate=jwt_decode(access).exp*1000;
             if(currdate>expdate){
                 access=await refresh(token);
                 console.log("new access built")
             }
            }
             else{
                access=await refresh(token);
             }
             config.headers["authorization"]="Bearer "+access;
             return config;
       },(err)=>{
           return Promise.reject(err);
       }
   ) 
   return newaxios;
    }
   export default customaxios;