import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Home from './Home';
import Review from './Review';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
//import FontAwesome from 'react-fontawesome';

ReactDOM.render((
	<Router history={browserHistory}>
	<Route path="/" component={App}>
	<IndexRoute component={Home} />
	<Route path="/Review" component={Review}/>
	<Route path="/Product" component={Product}/>
	<Route path="/About" component={About}/>
	<Route path="/Contact" component={Contact}/>
	
	</Route>
	</Router>
	), document.getElementById('root')) ;
registerServiceWorker();
