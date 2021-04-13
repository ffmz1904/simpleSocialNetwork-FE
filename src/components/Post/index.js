import React, {useState} from 'react';
import {Icon, Modal} from "semantic-ui-react";
import PropTypes from "prop-types";
import CommentsList from "../CommentsList";
import './styles.scss';

const Post = ({ post, open, close }) => {
    const [openComments, setOpenComments] = useState(false);

    return (
        <Modal
            className="Post"
            onClose={close}
            open={open}
        >
            <Modal.Header>{ post.title }</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    { post.body }
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <div className="stats">
                    <span onClick={() => setOpenComments(!openComments)}>
                        <Icon name="comments"/>{ openComments ? "Hide" : "View" } comments
                    </span>
                </div>
            </Modal.Actions>
            { openComments && <CommentsList postId={post._id} />}
        </Modal>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}

export default Post;
