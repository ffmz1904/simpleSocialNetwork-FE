import React, {useEffect, useState} from 'react';
import {Button, Icon, List} from "semantic-ui-react";
import ListItem from "./ListItem";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllPostComments} from "../../actions/comment";
import Preloader from "../Preloader";
import './styles.scss';
import AddCommentForm from "./AddCommentForm";

const CommentsList = ({
    isAuth,
    postId,
    comments,
    getAllPostComments
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
                ? comments.map(comment => <ListItem key={comment._id} comment={comment} />)
                : <div className="empty">No comments yet!</div>
            }
        </List>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array,
    isAuth: PropTypes.bool.isRequired,
    postId: PropTypes.string.isRequired,
    getAllPostComments: PropTypes.func.isRequired
};

const actions = {
    getAllPostComments
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user, post }, { postId }) => ({
    isAuth: user.isAuth,
    comments: post.filter(item => item._id === postId)[0].commentsData
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
