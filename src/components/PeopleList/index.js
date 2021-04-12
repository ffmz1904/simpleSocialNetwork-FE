import React from 'react';
import PeopleListItem from "./PeopleListItem";
import './styles.scss';

const PeopleList = () => {
    return (
        <div className="PeopleList">
            <PeopleListItem />
            <PeopleListItem />
            <PeopleListItem />
            <PeopleListItem />
        </div>
    );
};

export default PeopleList;
