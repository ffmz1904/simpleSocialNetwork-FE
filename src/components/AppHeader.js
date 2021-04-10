import React from 'react';
import {Link} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/routesConstants";

const AppHeader = () => {
    return (
        <header className="AppHeader">
            <div className="left_block">
                <h1><Link to={HOME_ROUTE} >SSN</Link></h1>
            </div>
            <div className="right_block">
                <Link to={LOGIN_ROUTE}>Sign In</Link>
            </div>
        </header>
    );
};

export default AppHeader;
