import React, {useEffect, useState} from 'react';
import {Container, Image} from "semantic-ui-react";
import defaultImage from "../../assets/defaultUserImg.png";
import PostsList from "../../components/PostsList";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {getUserDataById} from "../../actions/user";
import './styles.scss';

const User = ({
  getUserDataById
}) => {
    const [userData, setUserData] = useState();
    const { id } = useParams();

    useEffect(() => {
        getUserDataById(id)
            .then(user => setUserData(user))
    }, []);

    return (
        <div className="page">
            <Container className="UserPage">
                <div className="information">
                    <Image src={defaultImage} size="medium"/>
                    <div className="user_information">
                        <h2>{userData.name}</h2>
                        <div className="friends">
                            somethink about friends (count or images...)
                        </div>
                    </div>
                </div>
                <PostsList />
            </Container>
        </div>
    );
};

User.propTypes = {
    getUserDataById: PropTypes.func.isRequired
};

const actions = {
    getUserDataById
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// const mapStateToProps = ({ user }) => ({
//     userData: user.data
// });

export default connect(null, mapDispatchToProps)(User);
