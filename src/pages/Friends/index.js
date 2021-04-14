import React, {useEffect, useState} from 'react';
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {getFriends} from "../../actions/user";
import {useParams} from "react-router-dom";
import Preloader from "../../components/Preloader";
import PeopleList from "../../components/PeopleList";
import './styles.scss';

const Friends = ({
    getFriends
}) => {
    const {id} = useParams();
    const [friends, setFriends] = useState(null);

    useEffect(() => {
        getFriends(id)
            .then(data => setFriends(data));
    }, [id])

    if (!friends) {
        return <Preloader />;
    }

    return (
        <div className="page">
            <Container className="FriendsPage">
                { friends.length
                    ? <PeopleList people={friends} />
                    : <div className="empty">No friends yet!</div>
                }
            </Container>
        </div>
    );
};

Friends.propTypes = {
    getFriends: PropTypes.func.isRequired
};

const actions = { getFriends };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Friends);
