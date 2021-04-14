import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, PEOPLE_ROUTE, USER_ROUTE} from "../../utils/routesConstants";
import {Image} from "semantic-ui-react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/user";
import './styles.scss';

const Header = ({ isAuth, userId, logout, userImg }) => {
    const history = useHistory();
    const logoutUser = () => {
        logout()
            .then(res => history.push(HOME_ROUTE));
    };

    return (
        <header className="Header">
            <div className="left_block">
                <h1><Link to={HOME_ROUTE} >SSN</Link></h1>
            </div>
            <div className="right_block">
                <Link to={PEOPLE_ROUTE}>People</Link>
                { isAuth
                    ? <div className="auth_user">
                        <Link className="profile" to={USER_ROUTE + `/${userId}`}>
                            <Image src={process.env.REACT_APP_API_URL + userImg} size="small" />
                        </Link>
                        <Link to={HOME_ROUTE} className="logout" onClick={logoutUser} >Log out</Link>
                      </div>
                    : <Link to={LOGIN_ROUTE}>Sign In</Link>
                }
            </div>
        </header>
    );
};

Header.propTypes = {
    userId: PropTypes.string,
    userImg: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

const actions = {
    logout
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user }) => ({
    isAuth: user.isAuth,
    userId: user.data._id,
    userImg: user.data.img
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
