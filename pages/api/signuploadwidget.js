// const cloudinary = require('cloudinary').v2;
// //require('../public/js/config');
// const myconfig = cloudinary.config({
//     cloud_name: 'lakshaythegupta',
//     api_key: '613344191461828',
//     api_secret: 'D0dVHD-xxygDJruBSv6l5-A2ARg',
//     secure: true
//   });
// const apiSecret = cloudinary.config().api_secret;

// export async function  handler(req,res){
//     const timestamp = Math.round((new Date).getTime()/1000);

//   const signature =  cloudinary.utils.api_sign_request({
//     timestamp: timestamp,
//     source: 'uw',
//     folder: 'signed_upload_demo_uw'}, apiSecret);

//     console.log(signature);
//     res.json( signature);
// }
// // Server-side function used to sign an Upload Widget upload.




// const cloudinary = require('cloudinary');
//  require('../api/config');
// // const myconfig = cloudinary.config({
// //       cloud_name: 'lakshaythegupta',
// //       api_key: '613344191461828',
// //       api_secret: 'D0dVHD-xxygDJruBSv6l5-A2ARg',
// //       secure: true
// //     });
// const apiSecret = cloudinary.v2.config().api_secret;
// console.log(apiSecret);
// // Server-side function used to sign an Upload Widget upload.
// const signuploadwidget = () => {
//   const timestamp = Math.round((new Date).getTime()/1000);

//   const signature = cloudinary.v2.utils.api_sign_request({
//     timestamp: timestamp,
//     source: 'uw',
//     folder: 'profiles'}, apiSecret);
  
//     //console.log(signature);
//   return { timestamp, signature }
// }

// module.exports = {
//   signuploadwidget
// }
  //export default signuploadwidget;
  
  

