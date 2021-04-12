import React, {useState} from 'react';
import {Container, Input} from "semantic-ui-react";
import PeopleList from "../../components/PeopleList";
import './styles.scss';

const People = () => {
    const [searchStr, setSearchStr] = useState('');

    return (
        <div className="page">
            <Container className="People">
                <div className="search_block">
                    <Input
                        type="search"
                        placeholder="Search people ..."
                        value={searchStr}
                        onChange={e => setSearchStr(e.target.value)}
                    />
                </div>
                <PeopleList />
            </Container>
        </div>
    );
};

export default People;
