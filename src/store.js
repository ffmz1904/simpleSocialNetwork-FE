import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';
import post from './reducers/post';
import people from './reducers/people';
import error from './reducers/error';

const initialState = {};

const middlewares = [
    thunk
];

const composedEnhancers = compose(
    applyMiddleware(...middlewares)
);

const reducers = {
    user,
    post,
    people,
    error
};

const rootReducer = combineReducers({ ...reducers });

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

//for development
window.store = store;

export default store;



