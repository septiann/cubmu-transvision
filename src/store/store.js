import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/reducers';

const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)

export default store
