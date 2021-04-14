import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { checkAuth } from "./actions/user";
import ErrorMessage from "./components/ErrorMessage";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const App = ({ checkAuth, error }) =>  {
    useEffect(() => {
        checkAuth()
    }, []);

    return (
        <BrowserRouter>
        { error.isError && <ErrorMessage error={error} /> }
        <Header />
        <AppRouter />
        </BrowserRouter>
    );
};

App.propTypes = {
    checkAuth: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
};

const actions = {
    checkAuth
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ error }) => ({
    error: error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
