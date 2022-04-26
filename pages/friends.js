//
//Not used
import Friends from "../components/Friends";
import { server } from "../config";
const friends = (props) => {
     const shuffledArray = props.friends.sort((a, b) =>b.id-a.id)
    return (
        <>{
            console.log(props)
        }
            <Friends friendslist={shuffledArray}/>
        </>
    );
};
export const getServerSideProps=async()=>{
    //const friends=await axios.get(`${server}/api/articles`);
    const res = await fetch(`${server}/api/articles`)
  const friends = await res.json()
    return{
    props:{
        friends,
    },
   }
}

export default friends;
