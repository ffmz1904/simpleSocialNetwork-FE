import React from 'react';
import {Container, Image} from "semantic-ui-react";
import defaultImage from "../assets/defaultUserImg.png";
import PostsList from "../components/PostsList";

const User = () => {
    return (
       <div className="page">
           <Container className="UserPage">
               <div className="information">
                   <Image src={defaultImage} size="medium"/>
                   <div className="user_information">
                       <h2>Person name</h2>
                       <div className="friends">
                           somethink about friends (count or images...)
                       </div>
                   </div>
               </div>
               <PostsList />
               <PostsList />
           </Container>
       </div>
    );
};

export default User;
