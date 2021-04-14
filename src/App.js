import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { checkAuth } from "./actions/user";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const App = ({ checkAuth }) =>  {
    useEffect(() => {
        checkAuth()
    }, []);

    return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
    );
};

App.propTypes = {
    checkAuth: PropTypes.func.isRequired
};

const actions = {
    checkAuth
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(App);
