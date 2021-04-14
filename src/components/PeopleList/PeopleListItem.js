import React from 'react';
import {Card, Image} from "semantic-ui-react";
import {useHistory} from "react-router-dom";
import {USER_ROUTE} from "../../utils/routesConstants";

const PeopleListItem = ({ user }) => {
    const history = useHistory();

    const redirect = () => {
        history.push(USER_ROUTE + `/${user._id}`);
    };

    return (
        <Card className="PeopleListItem" onClick={redirect}>
            <Image src={process.env.REACT_APP_API_URL + user.img} />
            <Card.Content>
                <h2>{ user.name }</h2>
            </Card.Content>
        </Card>
    );
};

export default PeopleListItem;
