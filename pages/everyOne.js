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
   //console.log(articles);
  return {
    props: {
      articles,
      
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
