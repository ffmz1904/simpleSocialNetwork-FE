import React, {useEffect, useState} from 'react';
import {Button, Icon, List} from "semantic-ui-react";
import ListItem from "./ListItem";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllPostComments} from "../../actions/comment";
import Preloader from "../Preloader";
import AddCommentForm from "./AddCommentForm";
import {removeComment} from "../../actions/comment";
import './styles.scss';

const CommentsList = ({
    isAuth,
    postId,
    comments,
    getAllPostComments,
    removeComment,
    authUserId
}) => {
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        getAllPostComments(postId)
    }, []);

    if (!comments) {
        return <Preloader />;
    }

    return (
        <List className="CommentsList" divided relaxed>
            <div className="actions">
                { isAuth &&
                <Button inverted color='blue' onClick={() => setOpenForm(!openForm)}>
                    Add <Icon name="commenting" />
                </Button>
                }
            </div>
            { openForm && <AddCommentForm postId={postId} closeForm={() => setOpenForm(false)} /> }
            { comments.length
                ? comments.map(comment =>
                    <ListItem
                        key={comment._id}
                        comment={comment}
                        authUserId={authUserId}
                        isAuth={isAuth}
                        removeComment={() => removeComment(comment._id, postId)}
                    />)
                : <div className="empty">No comments yet!</div>
            }
        </List>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array,
    authUserId: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    postId: PropTypes.string.isRequired,
    getAllPostComments: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired
};

const actions = {
    getAllPostComments,
    removeComment
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user, post }, { postId }) => ({
    isAuth: user.isAuth,
    authUserId: user.data._id,
    comments: post.filter(item => item._id === postId)[0].commentsData
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
