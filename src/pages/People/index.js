import React, {useEffect, useState} from 'react';
import {Container, Input} from "semantic-ui-react";
import PeopleList from "../../components/PeopleList";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllUsers} from "../../actions/user";
import './styles.scss';

const People = ({
    getAllUsers,
    people
}) => {
    const [searchStr, setSearchStr] = useState(null);

    useEffect(() => {
        getAllUsers(searchStr);
    }, [searchStr]);

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
                <PeopleList people={people} />
            </Container>
        </div>
    );
};

People.propTypes = {
    people: PropTypes.array.isRequired,
    getAllUsers: PropTypes.func.isRequired
};

const actions = { getAllUsers };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ people }) => ({
   people: people
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
