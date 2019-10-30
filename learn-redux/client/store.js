import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// IMport root reducer
import rootReducer from './reducers/index'

// Data
import comments from './data/comments';
import posts from './data/posts';

// Object for default data
const defaultState = {
    posts: posts,
    comments: comments
};

//const store = createStore(rootReducer, defaultState);

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    defaultState,/* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export const history = syncHistoryWithStore(browserHistory,store);

export default store;