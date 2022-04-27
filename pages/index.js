import { server } from '../config'

import jsCookie from 'js-cookie';
import Friends from '../components/Friends';
import Search from '../components/Search'

export default function Home({ articles }) {
  //const searchprofile=React.createRef();
//jsCookie.set("search",jsCookie.get("username"));
// const submit=()=>{
//     jsCookie.set("search",searchprofile.current.value);
    //setsearch(searchprofile.current.value)
//}
  return (
    <div>
      <Search/>
      {/* <input type="text" ref={searchprofile}/> */}
        {/* <button onClick={submit}>Search</button> */}
      <Friends friendslist={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
        revalidate:10
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
