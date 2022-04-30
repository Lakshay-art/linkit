import React from 'react';

import Singlelink from './Singlelink';
import styles from '../styles/Article.module.css'
const Friends = ({friendslist}) => {
    //const shuffledArray = friendslist.sort((a, b) =>Math.random()-0.5)
 //friendslist.splice(1,1) ;
    return (
        <div className={styles.grid}>
            {
               friendslist.map((friend,index)=>(
                  <Singlelink key={index} id={index} details={friend}/>
               ))

            }
        </div>
    );
};


export default Friends;
