import React, {useState} from 'react';
import {Button, Input, Modal, TextArea} from "semantic-ui-react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updatePost} from "../../actions/post";
import './styles.scss';

const UpdatePostForm = ({
    post,
    open,
    close,
    updatePost
}) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const updatePostData = () => {
        updatePost(post._id, { title, body });
        close();
    };

    return (
        <Modal
            className="UpdatePostForm"
            onClose={close}
            open={open}
        >
            <Modal.Header>Update post:</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Input
                        placeholder="Post title..."
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea
                        placeholder="Describe your thoughts ..."
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="teal" onClick={updatePostData} >Update post</Button>
            </Modal.Actions>
        </Modal>
    );
};

UpdatePostForm.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired
};

const actions = { updatePost };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(UpdatePostForm);
