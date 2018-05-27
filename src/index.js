import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//input reducers
//feeling
const feelingReducer = (
    state = { value: null },
    action
) => {
    if (action.type === "STORE_FEELING") {
        state = { value: action.payload };
    }
    return state;
}
//end feeling

//understanding
const understandingReducer = (
    state = { value: null },
    action
) => {
    if (action.type === "STORE_UNDERSTANDING") {
        state = { value: action.payload };
    }
    return state;
}
//end understanding

//support
const supportReducer = (
    state = { value: null },
    action
) => {
    if (action.type === "STORE_SUPPORT") {
        state = { value: action.payload };
    }
    return state;
}
//end support

//comments
const commentsReducer = (
    state = { value: null },
    action
) => {
    if (action.type === "STORE_COMMENTS") {
        state = { value: action.payload };
    }
    return state;
}
//end comments
//end input reducers

//adminReducer

//end adminReducer


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        // adminReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
