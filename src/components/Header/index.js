import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE} from "../../utils/routesConstants";
import {Image} from "semantic-ui-react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/user";
import defaultImage from '../../assets/defaultUserImg.png';
import './styles.scss';


const Header = ({ isAuth, logout }) => {
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
                { isAuth
                    ? <div className="auth_user">
                        <Link className="profile" to={USER_ROUTE}>
                            <Image src={defaultImage} size="small" />
                        </Link>
                        <Link className="logout" onClick={logoutUser} >Log out</Link>
                      </div>
                    : <Link to={LOGIN_ROUTE}>Sign In</Link>
                }
            </div>
        </header>
    );
};

Header.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

const actions = {
    logout
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user }) => ({
    isAuth: user.isAuth
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
