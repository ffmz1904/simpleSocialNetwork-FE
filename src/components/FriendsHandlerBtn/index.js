import React from 'react';
import {Button} from "semantic-ui-react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {subscribe, confirmSubscribing, unsubscribe} from "../../actions/user";

const FriendsHandlerBtn = ({
    statusData,
    subscribe,
    confirmSubscribing,
    unsubscribe
}) => {
    const { _id, status } = statusData;

    switch (status) {
        case 1:
            return <Button color="twitter" disabled={true}>Subscribe</Button>;
        case 2:
            return <Button color="twitter" onClick={() => confirmSubscribing(_id)}>Make friends</Button>;
        case 3:
            return <Button color="red" onClick={() => unsubscribe(_id)}>Unsubscribe</Button>;
        default:
            return <Button color="twitter" onClick={() => subscribe(_id)}>Subscribe</Button>;
    }
};

FriendsHandlerBtn.propTypes = {
    statusData: PropTypes.object.isRequired,
    subscribe: PropTypes.func.isRequired,
    confirmSubscribing: PropTypes.func.isRequired,
    unsubscribe: PropTypes.func.isRequired
};

const actions = {
    subscribe,
    confirmSubscribing,
    unsubscribe
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(FriendsHandlerBtn);
