import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const middlewares = [
    thunk
];

const composedEnhancers = compose(
    applyMiddleware(...middlewares)
);

const reducers = {

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



