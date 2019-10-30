import React from 'react';
import {render} from 'react-dom';
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

//React router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
//IMport css
import csss from './styles/style.styl'

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}> </Route>
        </Route>
    </Router>
);

render(router, document.getElementById('root'));