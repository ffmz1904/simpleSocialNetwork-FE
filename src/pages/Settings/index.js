import React, {useState} from 'react';
import {Button, Container} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import UpdateUserForm from "../../components/UpdateUserForm";
import './styles.scss';

const Settings = ({
    user
}) => {
    const [openChangeData, setOpenChangData] = useState(false);

    return (
        <div className="page">
            <Container className="SettingsPage">
                <div className="changeData">
                    <h2>User data:
                        <Button color={openChangeData ? "red" : "twitter"} onClick={() => setOpenChangData(!openChangeData)}>
                            {openChangeData ? 'Cancel' : 'Update'}
                        </Button>
                    </h2>
                    { !openChangeData ?
                        <div className="user_data">
                            <div><span>Name: </span>{user.name}</div>
                            <div><span>Email: </span>{user.email}</div>
                        </div>
                        :
                        <UpdateUserForm user={user} />
                    }
                </div>
            </Container>
        </div>
    );
};

Settings.propTypes = {
    user: PropTypes.object.isRequired
};

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user }) => ({
    user: user.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
