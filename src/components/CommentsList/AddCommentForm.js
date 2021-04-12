import React, {useState} from 'react';
import {TextArea, Button} from "semantic-ui-react";
import PropTypes from 'prop-types';
import {createComment} from "../../actions/comment";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const AddCommentForm = ({
    postId,
    closeForm,
    createComment
}) => {
    const [text, setText] = useState('');

    const handleClick = () => {
        createComment({ postId, body: text });
        closeForm();
    };

    return (
        <form className="AddCommentForm">
            <TextArea
                placeholder="Write your thinks..."
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button type="button" inverted color='blue' onClick={handleClick}>Send</Button>
        </form>
    );
};

AddCommentForm.propTypes = {
    postId: PropTypes.string.isRequired,
    closeForm: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired
};

const actions = { createComment };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(AddCommentForm);
