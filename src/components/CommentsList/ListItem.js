import React from 'react';
import {Image, List} from "semantic-ui-react";
import { getDate } from "../../helpers/dateNormalize";
import defaultImg from "../../assets/defaultUserImg.png";

const ListItem = ({ comment }) => {
    const { userData: user, body, createdAt } = comment;

    return (
        <List.Item>
            <Image src={defaultImg} size="mini"/>
            <List.Content>
                <List.Header as='a'>{ user.name }</List.Header>
                <List.Description as='a'>
                    <div className="comment">{ body }</div>
                    <div className="date">{ getDate(createdAt) }</div>
                </List.Description>
            </List.Content>
        </List.Item>
    );
};

export default ListItem;
