import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import PropTypes from "prop-types";
import './styles.scss';

const Post = ({ post, open, close }) => {
    return (
        <Modal
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
                {/*<Button*/}
                {/*    content="Yep, that's me"*/}
                {/*    // labelPosition='right'*/}
                {/*    // icon='checkmark'*/}
                {/*    // onClick={() => setOpen(false)}*/}
                {/*    // positive*/}
                {/*/>*/}
            </Modal.Actions>
        </Modal>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}

export default Post;
