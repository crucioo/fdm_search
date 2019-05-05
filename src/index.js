import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Editor from './pages/Editor';
import { HashRouter,Route,Redirect,Switch  } from 'react-router-dom';
require('./assets/style.css');


ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route exact path='/' render={()=><Redirect to='/home'></Redirect>} />
            <Route path='/home' component={Home} />
            <Route path='/editor' component={Editor} />
            <Route path='/article/:id' component={Article}/>
        </Switch>
    </HashRouter>
    ),document.getElementById('root'));

