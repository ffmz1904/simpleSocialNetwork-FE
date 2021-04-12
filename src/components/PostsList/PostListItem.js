import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";
import PropTypes from 'prop-types';
import defaultImage from '../../assets/defaultUserImg.png';

const PostsListItem = ({ post, openPost }) => {
    return (
        <Card className="PostsListItem">
            <Card.Content onClick={() => openPost(post)}>
                <Card.Header>{ post.title }</Card.Header>
                <Card.Description>
                    { post.body }
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='comments' />
                     Comments
                </a>
            </Card.Content>
        </Card>
    );
};

PostsListItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostsListItem;
