import React, {useState} from 'react';
import {Button, Input, Modal, TextArea} from "semantic-ui-react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createPost} from "../../actions/post";
import './styles.scss';

const CreatePostForm = ({
    open,
    close,
    createPost
}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = () => {
        createPost({ title, body });
        close();
    };

    return (
        <Modal
            className="CreatePostForm"
            onClose={close}
            open={open}
        >
            <Modal.Header>Create new post:</Modal.Header>
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
                <Button color="teal" onClick={addNewPost} >Create post</Button>
            </Modal.Actions>
        </Modal>
    );
};

CreatePostForm.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired
};

const actions = { createPost };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(CreatePostForm);
