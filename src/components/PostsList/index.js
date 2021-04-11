import React, {useState} from 'react';
import PostsListItem from "./PostListItem";
import PropTypes from 'prop-types';
import Post from "../Post";
import './styles.scss';

const PostsList = ({ posts }) => {
    const [openPost, setOpenPost] = useState(undefined);

    return (
        <div className="PostsList">
            { openPost && <Post post={openPost} open={true} close={() => setOpenPost(undefined)} /> }
            { posts.length
                ? posts.map(post => <PostsListItem key={post._id} post={post} openPost={setOpenPost}/>)
                : <div className="empty">No posts yet!</div>
            }
        </div>
    );
};

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostsList;
