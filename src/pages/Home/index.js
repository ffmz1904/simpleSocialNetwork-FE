import React, {useEffect} from 'react';
import {Container} from "semantic-ui-react";
import PostsList from "../../components/PostsList";
import { getAllPost } from "../../actions/post";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Preloader from "../../components/Preloader";
import './styles.scss';

const Home = ({
    getAllPost,
    posts
}) => {
    useEffect(() => {
        getAllPost();
    }, []);

    if (!posts) {
        return <Preloader />
    }

    return (
        <div className="page">
            <Container className="HomePage">
                <h2>Posts</h2>
                <PostsList posts={posts} />
            </Container>
        </div>
    );
};

Home.propTypes = {
    getAllPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const actions = {
    getAllPost
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ post }) => ({
   posts: post
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
