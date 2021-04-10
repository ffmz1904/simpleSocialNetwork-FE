import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";
import defaultImage from '../../assets/defaultUserImg.png';

const PostsListItem = () => {
    return (
        <Card className="PostsListItem">
            <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Description>
                    Body Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quae.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
            </Card.Content>
        </Card>
    );
};

export default PostsListItem;
