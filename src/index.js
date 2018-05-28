import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//----REDUCERS----//
//formReducer
const formReducer = ( state = {}, action) => {
    if (action.type === "STORE_INPUT") {
        state = {
            ...state,
            [action.property]: action.payload,
        }
    } else if (action.type === "SUBMIT_FEEDBACK") {
        postRequest(state);
    }
    return state;
}
//end formReducers

//adminReducer

//end adminReducer
//----END REDUCERS----//

//---FUNCTIONS---//
const postRequest = (newFeedback) => {
    axios({
        method: 'POST',
        url: '/api/submission',
        data: newFeedback,
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('error with POST', error);
    });
}
//----END FUNCTIONS----//

const storeInstance = createStore(
    combineReducers({
        formReducer,
        // adminReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
