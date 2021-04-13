import React from 'react';
import PeopleListItem from "./PeopleListItem";
import './styles.scss';

const PeopleList = ({ people }) => {
    return (
        <div className="PeopleList">
            { people.length
                ? people.map(user => <PeopleListItem key={user._id} user={user} />)
                : <div className="empty">No people found on request!</div>
            }
        </div>
    );
};

export default PeopleList;
