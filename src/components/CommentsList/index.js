import React, {useEffect} from 'react';
import {List} from "semantic-ui-react";
import ListItem from "./ListItem";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllPostComments} from "../../actions/comment";
import Preloader from "../Preloader";
import './styles.scss';

const CommentsList = ({
    postId,
    comments,
    getAllPostComments
}) => {
    useEffect(() => {
        getAllPostComments(postId)
    }, []);

    if (!comments) {
        return <Preloader />;
    }

    return (
        <List className="CommentsList" divided relaxed>
            { comments.length
                ? comments.map(comment => <ListItem key={comment._id} comment={comment} />)
                : <div className="empty">No comments yet!</div>
            }
        </List>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array,
    postId: PropTypes.string.isRequired,
    getAllPostComments: PropTypes.func.isRequired
};

const actions = {
    getAllPostComments
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ post }, { postId }) => ({
    comments: post.filter(item => item._id === postId)[0].commentsData
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
