import React, {useState} from 'react';
import PostsListItem from "./PostListItem";
import PropTypes from 'prop-types';
import Post from "../Post";
import UpdatePostForm from "../UpdatePostForm";
import './styles.scss';

const PostsList = ({ posts }) => {
    const [openPost, setOpenPost] = useState(undefined);
    const [updatePost, setUpdatePost] = useState(undefined);

    return (
        <div className="PostsList">
            { openPost && <Post post={openPost} open={true} close={() => setOpenPost(undefined)} /> }
            { updatePost && <UpdatePostForm post={updatePost} open={true} close={() => setUpdatePost(undefined)} /> }
            { posts.length
                ? posts.map(post =>
                    <PostsListItem
                        key={post._id}
                        post={post}
                        openPost={setOpenPost}
                        updatePost={setUpdatePost}
                    />)
                : <div className="empty">No posts yet!</div>
            }
        </div>
    );
};

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostsList;
