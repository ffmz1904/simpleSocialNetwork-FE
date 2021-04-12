import React from 'react';
import {Card, Image} from "semantic-ui-react";
import defaultImage from '../../assets/defaultUserImg.png';
import {useHistory} from "react-router-dom";
import {USER_ROUTE} from "../../utils/routesConstants";

const PeopleListItem = () => {
    const history = useHistory();

    const redirect = () => {
        history.push(USER_ROUTE + '/6071666ae23b270cf804d80b')
    };

    return (
        <Card className="PeopleListItem" onClick={redirect}>
            <Image src={defaultImage} />
            <Card.Content>
                <h2>Name</h2>
            </Card.Content>
        </Card>
    );
};

export default PeopleListItem;
