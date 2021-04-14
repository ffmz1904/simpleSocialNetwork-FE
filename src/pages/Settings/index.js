import React, {useState} from 'react';
import {Button, Container, Image} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import UpdateUserForm from "../../components/UpdateUserForm";
import {updateProfile} from "../../actions/user";
import './styles.scss';

const Settings = ({
    user,
    updateProfile
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
                            <Image src={process.env.REACT_APP_API_URL + user.img} size="medium"/>
                            <div className="data">
                                <div><span>Name: </span>{user.name}</div>
                                <div><span>Email: </span>{user.email}</div>
                            </div>
                        </div>
                        :
                        <UpdateUserForm user={user} updateProfile={updateProfile} closeForm={() => setOpenChangData(false)}/>
                    }
                </div>
            </Container>
        </div>
    );
};

Settings.propTypes = {
    user: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired
};

const actions = { updateProfile };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user }) => ({
    user: user.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
