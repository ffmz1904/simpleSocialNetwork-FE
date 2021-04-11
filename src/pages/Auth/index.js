import React, {useState} from 'react';
import {Button, Container, Input} from "semantic-ui-react";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/routesConstants";
import './styles.scss';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                    <Button>{isLogin ? 'Sign in' : 'Registration'}</Button>
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

export default Auth;
