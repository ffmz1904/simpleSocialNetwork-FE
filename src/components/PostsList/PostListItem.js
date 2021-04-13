import React from 'react';
import {Button, Card} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {removePost} from "../../actions/post";

const PostsListItem = ({
    post,
    openPost,
    authUserId,
    isAuth,
    removePost
}) => {
    const isAuthor = isAuth && authUserId === post.userId;

    return (
        <Card className="PostsListItem">
            <Card.Content onClick={() => openPost(post)}>
                <Card.Header>{ post.title }</Card.Header>
                <Card.Description>
                    { post.body }
                </Card.Description>
            </Card.Content>
            { isAuthor &&
                <Card.Content className="actions">
                    <Button color="red" onClick={() => removePost(post._id)} >Delete</Button>
                </Card.Content>
            }
        </Card>
    );
};

PostsListItem.propTypes = {
    post: PropTypes.object.isRequired,
    openPost: PropTypes.func.isRequired,
    authUserId: PropTypes.string.isRequired,
    isAuth: PropTypes.bool.isRequired,
    removePost: PropTypes.func.isRequired
};

const actions = { removePost };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user }) => ({
    isAuth: user.isAuth,
    authUserId: user.data._id
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListItem);
