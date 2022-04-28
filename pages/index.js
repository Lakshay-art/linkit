import { server } from '../config'

import jsCookie from 'js-cookie';
import Friends from '../components/Friends';
import Search from '../components/Search'
import axios from 'axios';

export default function Home({ articles,article }) {
  //const searchprofile=React.createRef();
//jsCookie.set("search",jsCookie.get("username"));
// const submit=()=>{
//     jsCookie.set("search",searchprofile.current.value);
    //setsearch(searchprofile.current.value)
//}
  return (
    <div>
      {/* {console.log(articles)} */}
      <Search/>
      {/* <input type="text" ref={searchprofile}/> */}
        {/* <button onClick={submit}>Search</button> */}
      <Friends friendslist={articles} />
    </div>
  )
}

export const getServerSideProps = async () => {
  //  const res = await fetch(`http://localhost:3000/api/articles`)
  //  const articles = await res.json()
   var articles
   await axios.post(`${server}/api/articles`,{}).then((res)=>{
     articles=res.data;
   },(err)=>{
     console.log(err)
   });
   console.log(articles);
  return {
    props: {
      articles,
     article :[{"_id":"6260515f7706285fda04c7ff","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"helojbnkjb","link":"nn","visits":"0","description":"","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-20T18:30:55.781Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"6260ed04d4eeb214bb6d3e47","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"Hui Insta","link":"instagram","visits":"7","description":"","color":"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#c737aa 85%,#684acb 105%)","tag":"instagram","createdAt":"2022-04-21T05:35:00.601Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"6260ed2ad4eeb214bb6d3e4d","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"chgchbcnbmbnvm----------n---n------------ygugig---","link":"j","visits":"1","description":"chgchbcnbmbnvm----------n---n------------ygugig---","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-21T05:35:38.216Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"626108ec01278437b8bd1bb6","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"My Spotify Playlist","link":"spotify","visits":"0","description":"","color":"linear-gradient(45deg,#1ecb5b 40%,#c0f0c6 100%)","tag":"spotify","createdAt":"2022-04-21T07:34:04.516Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"6261092b01278437b8bd1bbe","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"Twitter","link":"twitter","visits":"0","description":"","color":"#04ABFE","tag":"twitter","createdAt":"2022-04-21T07:35:07.621Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"62610f3aed9d48cddfaebaf6","user":"62581bb5740a1ccf97417cfa","username":"podi2","title":"Spotify","link":"spotify","visits":"0","description":"","color":"linear-gradient(45deg,#1ecb5b 40%,#c0f0c6 100%)","tag":"spotify","createdAt":"2022-04-21T08:00:58.953Z","updatedAt":"2022-04-21T08:00:58.953Z","__v":0},{"_id":"6261132ded9d48cddfaebb00","user":"62581bb5740a1ccf97417cfa","username":"podi2","title":"Linkedin","link":"linkedin","visits":"0","description":"","color":"#0177b5","tag":"linkedin","createdAt":"2022-04-21T08:17:49.808Z","updatedAt":"2022-04-21T08:17:49.808Z","__v":0},{"_id":"626158dc91afb50ae6a9b2cd","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Follow me on Twitter","link":"https://twitter.com/Lakshaythegupta","visits":"0","description":"","color":"#04ABFE","tag":"twitter","createdAt":"2022-04-21T13:15:08.667Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"62615a1891afb50ae6a9b2dd","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Try my new pac-man filter","link":"https://www.instagram.com/ar/2204571953015036/?src=vc","visits":"0","description":"Play pacman with your friends while video calling on instagram and messenger","color":"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#c737aa 85%,#684acb 105%)","tag":"instagram","createdAt":"2022-04-21T13:20:24.416Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"62615cb691afb50ae6a9b2fc","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Support me on Ko-fi","link":"https://ko-fi.com/lakshay_the_gupta","visits":"1","description":"20% off on all commisions 😍","color":"linear-gradient(45deg, #6675CB -5% ,#04abee 10%,#36d8ff 90%,#f5f8fa 110%)","tag":"ko-fi","createdAt":"2022-04-21T13:31:34.247Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"626162f291afb50ae6a9b325","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Subscribe to my Youtube channel","link":"https://www.youtube.com/channel/UC44y1jGEn6kAr9Tv_W_GQfQ","visits":"1","description":"New Videos coming soon!!","color":"#ea1c1e","tag":"youtube","createdAt":"2022-04-21T13:58:10.707Z","updatedAt":"2022-04-27T06:43:29.829Z","__v":0},{"_id":"6261664e91afb50ae6a9b349","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"My LeetCode Profile","link":"https://www.leetcode.com/LakshayTheGupta","visits":"3","description":"Done 300+ Codes 🙂","color":"linear-gradient(45deg,#000 10%,#f19915 60%,#aaaaaa 100%)","tag":"leetcode","createdAt":"2022-04-21T14:12:30.683Z","updatedAt":"2022-04-25T17:22:23.524Z","__v":0},{"_id":"6261696c91afb50ae6a9b36f","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Spotify","link":"https://open.spotify.com/playlist/4RLhyo6d5UYMRlX3TSNOCu?si=9e48f31075624564","visits":"0","description":"Enjoy some of my favourite songs","color":"linear-gradient(45deg,#1ecb5b 40%,#c0f0c6 100%)","tag":"spotify","createdAt":"2022-04-21T14:25:48.519Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"626169c191afb50ae6a9b37a","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"NotsMakker","link":"https://lakshay-art.github.io/NotesMakerrr/","visits":"0","description":"My first React project","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-21T14:27:13.324Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"62657d5cc3e7793ae57da5e2","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Tiktok banned in India ,so a fake link 😜","link":"tiktok.com","visits":"0","description":"m","color":"linear-gradient(45deg,#01e8ee 10%,#000 50%,#000 70% ,#ee054d 100%)","tag":"tiktok","createdAt":"2022-04-24T16:39:56.855Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"6265a4b6c3e7793ae57da64b","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Linkedin","link":"linkedin","visits":"0","description":"","color":"#0177b5","tag":"linkedin","createdAt":"2022-04-24T19:27:50.430Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"62669fc9d209850080b7c9bc","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Hui Insta","link":"instagram","visits":"3","description":"","color":"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#c737aa 85%,#684acb 105%)","tag":"instagram","createdAt":"2022-04-25T13:19:05.431Z","updatedAt":"2022-04-25T17:12:01.027Z","__v":0},{"_id":"6267e41229fe2d84fee1bb92","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"jjj","link":"o","visits":"0","description":"","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-26T12:22:42.511Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"6267f8a599452a3b0e6d285e","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"ccc","link":"d","visits":"0","description":"","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-26T13:50:29.022Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"6267f8e999452a3b0e6d2866","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"Hui Insta","link":"instagram","visits":"7","description":"","color":"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#c737aa 85%,#684acb 105%)","tag":"instagram","createdAt":"2022-04-26T13:51:37.153Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"6268004099452a3b0e6d28ec","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Join my channel !!😆","link":"telegram","visits":"0","description":"","color":"linear-gradient(45deg,#40b2ed,#0783c5)","tag":"telegram","createdAt":"2022-04-26T14:22:56.901Z","updatedAt":"2022-04-26T14:22:56.901Z","__v":0},{"_id":"62683051485865369c719303","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"chgchbcnbmbnvm----------n---n------------ygugig---","link":"j","visits":"0","description":"chgchbcnbmbnvm----------n---n------------ygugig---","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-26T17:48:01.159Z","updatedAt":"2022-04-26T17:48:01.159Z","__v":0},{"_id":"6268307e485865369c71930b","user":"624ebb4ee1db23f1513f0645","username":"Lakshay","title":"Hui Insta","link":"instagram","visits":"0","description":"","color":"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#c737aa 85%,#684acb 105%)","tag":"instagram","createdAt":"2022-04-26T17:48:46.981Z","updatedAt":"2022-04-26T17:48:46.981Z","__v":0},{"_id":"62686045d6dc43194300b0e6","user":"625bcad3911a0820dfe0ba64","username":"Ujjwal","title":"II","link":"N","visits":"0","description":"","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-26T21:12:37.953Z","updatedAt":"2022-04-27T06:29:30.792Z","__v":0},{"_id":"6268e2f78ecad8f1e4d183cb","user":"625bcad3911a0820dfe0ba64","username":"UjjwalGarg","title":"k","link":"j","visits":"1","description":"","color":"linear-gradient(45deg, #33ccff 0%, #ff99cc 100%)","tag":"other","createdAt":"2022-04-27T06:30:15.718Z","updatedAt":"2022-04-27T06:30:21.935Z","__v":0}]
   
      
    },
      //  revalidate:10
  }

  
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
