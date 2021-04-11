import React from 'react';
import {Container} from "semantic-ui-react";
import PostsList from "../../components/PostsList";
import './styles.scss';

const Home = () => {
    return (
        <div className="page HomePage">
            <Container>
                Home page
                <PostsList />
                <PostsList />
                <PostsList />
            </Container>
        </div>
    );
};

export default Home;
