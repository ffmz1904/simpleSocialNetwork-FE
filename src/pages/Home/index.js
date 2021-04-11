import React from 'react';
import {Container} from "semantic-ui-react";
import PostsList from "../../components/PostsList";
import './styles.scss';

const Home = () => {
    return (
        <div className="page">
            <Container className="HomePage">
                <h2>Posts</h2>
                <PostsList />
            </Container>
        </div>
    );
};

export default Home;
