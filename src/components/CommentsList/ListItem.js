import React from 'react';
import {Icon, Image, List} from "semantic-ui-react";
import { getDate } from "../../helpers/dateNormalize";
import PropTypes from 'prop-types';
import defaultImg from "../../assets/defaultUserImg.png";

const ListItem = ({ comment, authUserId, isAuth, removeComment }) => {
    const { userData: user, body, createdAt } = comment;

    const isAuthor = isAuth && authUserId === comment.userId;

    return (
        <List.Item>
            <Image src={defaultImg} size="mini"/>
            <List.Content>
                <List.Header as='a'>
                    <span>{ user.name } </span>
                    { isAuthor && <span onClick={removeComment}><Icon name="trash alternate" /></span>}
                </List.Header>
                <List.Description as='a'>
                    <div className="comment">{ body }</div>
                    <div className="date">{ getDate(createdAt) }</div>
                </List.Description>
            </List.Content>
        </List.Item>
    );
};

ListItem.propTypes = {
    authUserId: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    comment: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired
};

export default ListItem;
