import React, {useState} from 'react';
import {Button, Container, Input} from "semantic-ui-react";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/routesConstants";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {registration, login} from "../../actions/user";
import {setError} from "../../actions/error";
import './styles.scss';

const Auth = ({
    registration,
    login,
    setError
}) => {
    const history = useHistory();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClick = () => {
        if (isLogin) {
            login({ email, password })
                .then(res => res && history.push(HOME_ROUTE));
        } else {
            if (password === confirmPassword) {
                registration({ email, password, name })
                    .then(res => res && history.push(LOGIN_ROUTE));
            } else {
                setError('Password mismatch!');
            }
        }
    }

    return (
        <div className="page">
            <Container className="AuthPage">
                <form>
                    <h2>{isLogin ? 'Authorization' : 'Registration'}</h2>
                    { isLogin ||
                    <Input
                        placeholder="Your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    }
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    { isLogin ||
                    <Input
                        placeholder="Confirm password"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    }
                    <Button type="button" onClick={handleClick} >{isLogin ? 'Sign in' : 'Registration'}</Button>
                </form>
                <div className="redirect">
                    {isLogin ?
                        <div>
                            No account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
                        </div>
                        :
                        <div>
                            Already has an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
};

Auth.propTypes = {
    registration: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
};

const actions = {
    registration,
    login,
    setError
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Auth);
