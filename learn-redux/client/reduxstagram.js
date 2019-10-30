import React from 'react';
import {render} from 'react-dom';
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import App from './components/App';

//React router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store,{history} from './store';
//IMport css
import csss from './styles/style.styl'


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}> </Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));