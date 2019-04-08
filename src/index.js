import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Editor from './pages/Editor';
import { BrowserRouter,Route,Redirect,Switch  } from 'react-router-dom';
require('./assets/style.css');


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={()=><Redirect to='/home'></Redirect>} />
            <Route path='/home' component={Home} />
            <Route path='/editor' component={Editor} />
            <Route path='/article' component={Article}/>
        </Switch>
    </BrowserRouter>
    ),document.getElementById('root'));

