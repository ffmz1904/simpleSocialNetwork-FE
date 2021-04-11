import React from 'react';
import PostsListItem from "./PostListItem";
import PropTypes from 'prop-types';
import './styles.scss';

const PostsList = ({ posts }) => {
    console.log(posts)
    return (
        <div className="PostsList">
            { posts.length
                ? posts.map(post => <PostsListItem key={post._id} />)
                : <div className="empty">No posts yet!</div>
            }
        </div>
    );
};

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostsList;
